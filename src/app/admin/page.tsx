'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminPage() {
  const [email, setEmail] = useState('');
  const [link, setLink] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const createUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); setLink(null); setLoading(true);
    try {
      const res = await fetch('/api/admin/create-user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Failed');
      setLink(json.signInLink || null);
    } catch (e: any) {
      setError(e.message);
      if (e.message?.includes('Unauthorized')) router.push('/auth/sign-in');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 640, margin: '40px auto', padding: 24, fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <h1 style={{ fontSize: 28, fontWeight: 800, marginBottom: 16 }}>Admin • Create User</h1>
      <p style={{ color: '#4b5563', marginBottom: 24 }}>Only emails in ADMIN_EMAILS can access this page.</p>

      <form onSubmit={createUser} style={{ display: 'flex', gap: 12 }}>
        <input type="email" required placeholder="user@example.com" value={email} onChange={(e)=>setEmail(e.target.value)}
               style={{ flex: 1, padding: '12px 14px', border: '1px solid #e5e7eb', borderRadius: 8 }} />
        <button type="submit" disabled={loading} style={{ padding: '12px 16px', borderRadius: 8, border: 'none', background: '#111827', color: 'white', fontWeight: 700 }}>
          {loading ? 'Creating…' : 'Create'}
        </button>
      </form>

      {error && <div style={{ marginTop: 16, color: '#b91c1c' }}>{error}</div>}
      {link && (
        <div style={{ marginTop: 16 }}>
          <div style={{ fontWeight: 600, marginBottom: 8 }}>Sign-in link</div>
          <textarea readOnly value={link} style={{ width: '100%', height: 80, padding: 12, border: '1px solid #e5e7eb', borderRadius: 8 }} />
        </div>
      )}

      <div style={{ marginTop: 32, fontSize: 12, color: '#6b7280' }}>
        Env required: NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE, ADMIN_EMAILS, NEXT_PUBLIC_SITE_URL
      </div>
    </div>
  );
}


