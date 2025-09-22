import { NextRequest, NextResponse } from 'next/server';
import { createServer } from '@/lib/supabase/server';
import { verifyWebhook } from '@/lib/payments/mockProvider';
import { mockMint } from '@/lib/blockchain/mockMint';

export async function POST(req: NextRequest) {
  const signature = req.headers.get('x-torza-signature');
  const body = await req.text();
  
  if (!verifyWebhook(signature || '', body)) {
    return NextResponse.json({ error: 'invalid signature' }, { status: 401 });
  }

  const payload = JSON.parse(body);
  if (payload.type !== 'payment.succeeded') {
    return NextResponse.json({ error: 'unexpected event type' }, { status: 400 });
  }

  const supabase = await createServer();
  const { data: order } = await supabase
    .from('orders')
    .select('*, nfts(*), profiles(*)')
    .eq('provider_session_id', payload.data.provider_session_id)
    .single();

  if (!order) {
    return NextResponse.json({ error: 'order not found' }, { status: 404 });
  }

  const mintedTx = mockMint(order.nft_id, order.user_id);

  await supabase
    .from('orders')
    .update({
      status: 'paid',
      provider_payment_id: payload.data.provider_payment_id,
      minted_tx: mintedTx,
    })
    .eq('id', order.id);

  await supabase
    .from('owned_nfts')
    .upsert({
      user_id: order.user_id,
      nft_id: order.nft_id,
      quantity: order.quantity,
    });

  return NextResponse.json({ ok: true });
}
