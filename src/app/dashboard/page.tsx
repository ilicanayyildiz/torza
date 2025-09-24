import Link from 'next/link';
import { createServer } from '@/lib/supabase/server';

export default async function DashboardPage() {
  const supabase = await createServer();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return (
      <div style={{ padding: '40px 24px', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        <h1 style={{ fontSize: 28, fontWeight: 800, color: '#1a202c', marginBottom: 8 }}>Dashboard</h1>
        <p style={{ color: '#4b5563', marginBottom: 12 }}>Please sign in to continue.</p>
        <Link href="/auth/sign-in" style={{ color: '#3b82f6', textDecoration: 'none', fontWeight: 600 }}>Go to Sign-in</Link>
      </div>
    );
  }

  // Collections removed from dashboard view

  return (
    <div style={{ minHeight: '100vh', background: 'white', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Header block */}
      <section style={{
        padding: '48px 0 24px',
        background: 'linear-gradient(135deg, #fff7ed 0%, #ffedd5 45%, #fde68a 90%)'
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <h1 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.25rem)', fontWeight: 800, color: '#0b1020', margin: 0 }}>Welcome back</h1>
          <p style={{ color: '#374151', marginTop: 8 }}>Manage your account and actions from one place.</p>
          <div style={{ display: 'flex', gap: 12, marginTop: 16, flexWrap: 'wrap' }}>
            <Link href="/buy-sell" style={{ textDecoration: 'none' }}>
              <button style={{
                padding: '12px 18px', borderRadius: 10, border: '1px solid #e5e7eb',
                background: 'white', color: '#111827', fontWeight: 700,
                cursor: 'pointer'
              }}>
                Buy / Sell
              </button>
            </Link>
            {/* Consolidated into Buy / Sell */}
            {/* Transactions button removed; transactions embedded below */}
            {/* New Collection button removed as requested */}
          </div>
        </div>
      </section>

      {/* Content block */}
      <section style={{ padding: '32px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: '1fr', gap: 24 }}>
          {/* Account card */}
          <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 16, padding: 20, boxShadow: '0 6px 16px rgba(0,0,0,0.04)' }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: '#111827', marginBottom: 8 }}>Your account</h2>
            <div style={{ fontSize: 14, color: '#374151' }}>Email: {user?.email}</div>
            <div style={{ fontSize: 12, color: '#6b7280', marginTop: 4 }}>User ID: {user?.id}</div>
          </div>

          {/* Transactions list */}
          <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 16, padding: 20, boxShadow: '0 6px 16px rgba(0,0,0,0.04)' }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: '#111827', marginBottom: 12 }}>Recent transactions</h2>
            {[] .length === 0 ? (
              <p style={{ fontSize: 14, color: '#6b7280', margin: 0 }}>No transactions yet.</p>
            ) : (
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 12 }}>
                {/* map your items here */}
              </ul>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
