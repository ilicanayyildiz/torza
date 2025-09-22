import { createServer } from '@/lib/supabase/server';

export default async function NewNftPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const sp = await searchParams;
  const collectionParam = typeof sp.collection === 'string' ? sp.collection : Array.isArray(sp.collection) ? sp.collection[0] : undefined;
  async function createAction(formData: FormData) {
    'use server';
    const supabase = await createServer();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;
    
    const collection_id = String(formData.get('collection_id') ?? '');
    const name = String(formData.get('name') ?? '');
    const image_url = String(formData.get('image_url') ?? '');
    const price_eur = Number(formData.get('price_eur') ?? 0);
    const supply = Number(formData.get('supply') ?? 1);
    
    await supabase.from('nfts').insert({
      collection_id,
      name,
      image_url,
      price_eur,
      supply,
      is_active: true,
    });
  }

  return (
    <form action={createAction} className="max-w-lg space-y-3">
      <h1 className="text-2xl font-bold">New NFT</h1>
      <input name="collection_id" defaultValue={collectionParam ?? ''} placeholder="Collection ID" className="border p-2 rounded w-full" required />
      <input name="name" placeholder="Name" className="border p-2 rounded w-full" required />
      <input name="image_url" placeholder="Image URL" className="border p-2 rounded w-full" />
      <input name="price_eur" placeholder="Price (EUR)" type="number" step="0.01" className="border p-2 rounded w-full" required />
      <input name="supply" placeholder="Supply" type="number" className="border p-2 rounded w-full" required />
      <button className="px-4 py-2 bg-black text-white rounded" type="submit">Create</button>
    </form>
  );
}
