import NFTCard from '@/components/NFTCard';
import { createServer } from '@/lib/supabase/server';
import { notFound } from 'next/navigation';

export default async function CollectionDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const supabase = await createServer();

  const { data: collection } = await supabase
    .from('collections')
    .select('*')
    .eq('id', id)
    .maybeSingle();

  if (!collection) return notFound();

  const { data: nfts } = await supabase
    .from('nfts')
    .select('*')
    .eq('collection_id', id)
    .eq('is_active', true)
    .order('created_at', { ascending: false });

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h1 className="text-3xl font-bold">{collection.title}</h1>
        {collection.description ? (
          <p className="text-gray-600">{collection.description}</p>
        ) : null}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {(nfts ?? []).map((n) => (
          <NFTCard key={n.id} id={n.id} name={n.name} image_url={n.image_url} price_eur={Number(n.price_eur)} />
        ))}
      </div>
    </div>
  );
}
