import { notFound } from 'next/navigation';
import { createServer } from '@/lib/supabase/server';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import DemoBanner from '@/components/DemoBanner';

export default async function CheckoutReturnPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const sp = await searchParams;
  const orderId = typeof sp.order === 'string' ? sp.order : Array.isArray(sp.order) ? sp.order[0] : undefined;
  const status = typeof sp.status === 'string' ? sp.status : Array.isArray(sp.status) ? sp.status[0] : undefined;
  if (!orderId || !status) return notFound();

  const supabase = await createServer();
  const { data: order } = await supabase
    .from('orders')
    .select('*, nfts(*)')
    .eq('id', orderId)
    .single();

  if (!order) return notFound();

  const isSuccess = status === 'success';

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <DemoBanner />
      <div className="max-w-md mx-auto px-4">
        <Card>
          <CardHeader>
            <CardTitle className={isSuccess ? 'text-green-600' : 'text-red-600'}>
              {isSuccess ? 'Payment Successful!' : 'Payment Cancelled'}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {isSuccess && order.minted_tx && (
              <div className="bg-green-50 p-3 rounded">
                <p className="text-sm">Transaction: {order.minted_tx}</p>
                <p className="text-sm text-green-600">NFT minted successfully!</p>
              </div>
            )}
            <div className="border rounded p-3">
              <h3 className="font-medium">{order.nfts.name}</h3>
              <p className="text-sm text-gray-600">Order #{order.id}</p>
            </div>
            <Button className="w-full" onClick={() => window.location.href = '/'}>
              Continue Shopping
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
