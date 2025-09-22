import { notFound } from 'next/navigation';
import { createServer } from '@/lib/supabase/server';
import MockHostedCheckout from '@/components/MockHostedCheckout';

export default async function MockHostedCheckoutPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const sp = await searchParams;
  const sessionId = typeof sp.session === 'string' ? sp.session : Array.isArray(sp.session) ? sp.session[0] : undefined;
  if (!sessionId) return notFound();

  const supabase = await createServer();
  const { data: order } = await supabase
    .from('orders')
    .select('*, nfts(*)')
    .eq('provider_session_id', sessionId)
    .single();

  if (!order) return notFound();

  return <MockHostedCheckout sessionId={sessionId} order={order} />;
}
