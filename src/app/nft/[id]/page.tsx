import Image from 'next/image';
import { notFound, redirect } from 'next/navigation';
import { createServer } from '@/lib/supabase/server';
import { Button } from '@/components/ui/button';
import { formatCurrency } from '@/lib/utils/currency';

export default async function NFTDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const supabase = await createServer();
  const { data: { user } } = await supabase.auth.getUser();

  const { data: nft } = await supabase
    .from('nfts')
    .select('*')
    .eq('id', id)
    .maybeSingle();

  if (!nft) return notFound();

  async function buyNft() {
    'use server';
    if (!user) return;

    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/checkout`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nftId: nft.id, quantity: 1 }),
      cache: 'no-store',
    });

    const { checkoutUrl } = await response.json();
    if (checkoutUrl) {
      redirect(checkoutUrl);
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="relative w-full aspect-square bg-gray-100 rounded">
        {nft.image_url ? (
          <Image src={nft.image_url} alt={nft.name} fill className="object-cover rounded" />
        ) : null}
      </div>
      <div>
        <h1 className="text-3xl font-bold">{nft.name}</h1>
        <p className="mt-2 text-3xl font-bold">{formatCurrency(Number(nft.price_eur))}</p>
        <div className="mt-6">
          <form action={buyNft}>
            <Button type="submit" className="w-full">
              Buy (Credit Card)
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
