import Link from 'next/link';
import { createServer } from '@/lib/supabase/server';

export default async function TransactionsPage() {
  const supabase = await createServer();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return (
      <div className="space-y-3">
        <h1 className="text-2xl font-bold">Transactions</h1>
        <p className="text-gray-600">Please sign in to access this page.</p>
        <Link href="/auth/sign-in" className="underline">Go to Sign-in</Link>
      </div>
    );
  }

  // Placeholder list. Wire to your own table later.
  const items: Array<{ id: string; title: string; amount: string; status: string; created_at: string }>= [];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Transactions</h1>
        <Link href="/dashboard" className="underline text-sm">Back to Dashboard</Link>
      </div>
      {items.length === 0 ? (
        <p className="text-gray-600">No transactions yet.</p>
      ) : (
        <ul className="space-y-2">
          {items.map((t) => (
            <li key={t.id} className="flex items-center justify-between border p-3 rounded">
              <div>
                <div className="font-medium">{t.title}</div>
                <div className="text-sm text-gray-500">{t.created_at}</div>
              </div>
              <div className="text-sm">{t.amount} · {t.status}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}


