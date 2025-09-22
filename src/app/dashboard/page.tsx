import Link from 'next/link';
import { createServer } from '@/lib/supabase/server';

export default async function DashboardPage() {
  const supabase = await createServer();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return (
      <div className="space-y-3">
        <h1 className="text-2xl font-bold">Seller Dashboard</h1>
        <p className="text-gray-600">Please sign in to manage your collections and NFTs.</p>
        <Link href="/auth/sign-in" className="underline">Go to Sign-in</Link>
      </div>
    );
  }

  const { data: collections } = await supabase
    .from('collections')
    .select('*')
    .eq('owner', user.id)
    .order('created_at', { ascending: false });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Seller Dashboard</h1>
        <Link href="/dashboard/collections/new" className="text-sm underline">New Collection</Link>
      </div>

      <ul className="space-y-2">
        {(collections ?? []).map((c) => (
          <li key={c.id} className="flex items-center justify-between border p-3 rounded">
            <div>
              <p className="font-medium">{c.title}</p>
              <p className="text-sm text-gray-500">{c.description}</p>
            </div>
            <div className="text-sm flex gap-3">
              <Link href={`/dashboard/collections/${c.id}/edit`} className="underline">Edit</Link>
              <Link href={`/dashboard/nfts/new?collection=${c.id}`} className="underline">Add NFT</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
