import { NextRequest, NextResponse } from 'next/server';
import { createServer } from '@/lib/supabase/server';
import { createSession } from '@/lib/payments/mockProvider';

export async function POST(req: NextRequest) {
  const supabase = await createServer();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: 'unauthorized' }, { status: 401 });

  const { nftId, quantity = 1 } = await req.json();
  if (!nftId) return NextResponse.json({ error: 'nftId required' }, { status: 400 });

  const { data: nft } = await supabase
    .from('nfts')
    .select('*')
    .eq('id', nftId)
    .single();

  if (!nft) return NextResponse.json({ error: 'NFT not found' }, { status: 404 });

  const { data: order } = await supabase
    .from('orders')
    .insert({
      user_id: user.id,
      nft_id: nftId,
      quantity,
      unit_price_eur: nft.price_eur,
    })
    .select()
    .single();

  const session = createSession({
    orderId: order.id,
    amountEur: Number(nft.price_eur) * quantity,
    successUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout/return?order=${order.id}&status=success`,
    cancelUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout/return?order=${order.id}&status=cancel`,
  });

  await supabase
    .from('orders')
    .update({ provider_session_id: session.id })
    .eq('id', order.id);

  return NextResponse.json({ checkoutUrl: session.url });
}
