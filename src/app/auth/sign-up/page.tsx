'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SignUpPage() {
  const supabase = createClient();
  const router = useRouter();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      setChecking(true);
      const res = await fetch('/api/auth/check-email', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email: formData.email }) });
      const check = await res.json();
      setChecking(false);
      if (check?.exists) {
        setError('This email is already registered. Please sign in instead.');
        return;
      }

      const { error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: { emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback` },
      });
      if (error) {
        // Friendlier message for existing users
        if (error.message?.toLowerCase().includes('already registered')) {
          setError('This email is already registered. Please sign in instead.');
          return;
        }
        throw error;
      }
      setSuccess('Check your email to confirm your account, then sign in.');
    } catch (err: any) {
      setError(err?.message ?? 'Failed to sign up');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div style={{ minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <div style={{ maxWidth: '560px', width: '100%', padding: '0 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <h1 style={{ fontSize: 28, fontWeight: 600, color: '#000000', marginBottom: 0 }}>Create your account</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 24 }}>
            <label style={{ display: 'block', fontSize: 14, fontWeight: 600, color: '#111827', marginBottom: 8 }}>Email</label>
            <input type="email" name="email" required autoComplete="email" value={formData.email} onChange={handleChange}
              style={{ width: '100%', padding: '14px 16px', paddingRight: 44, borderRadius: 10, border: '1px solid #e5e7eb', fontSize: 16, background: '#f9fafb', outline: 'none' }}
              onFocus={(e) => { e.target.style.borderColor = '#3b82f6'; e.target.style.background = 'white'; e.target.style.boxShadow = '0 0 0 3px rgba(59,130,246,0.15)'; }}
              onBlur={(e) => { e.target.style.borderColor = '#e5e7eb'; e.target.style.background = '#f9fafb'; e.target.style.boxShadow = 'none'; }}
            />
          </div>
          <div style={{ marginBottom: 32, position: 'relative' }}>
            <label style={{ display: 'block', fontSize: 14, fontWeight: 600, color: '#111827', marginBottom: 8 }}>Password</label>
            <input type={showPassword ? 'text' : 'password'} name="password" required autoComplete="new-password" value={formData.password} onChange={handleChange}
              style={{ width: '100%', padding: '14px 16px', paddingRight: 44, borderRadius: 10, border: '1px solid #e5e7eb', fontSize: 16, background: '#f9fafb', outline: 'none' }}
              onFocus={(e) => { e.target.style.borderColor = '#3b82f6'; e.target.style.background = 'white'; e.target.style.boxShadow = '0 0 0 3px rgba(59,130,246,0.15)'; }}
              onBlur={(e) => { e.target.style.borderColor = '#e5e7eb'; e.target.style.background = '#f9fafb'; e.target.style.boxShadow = 'none'; }}
            />
            <button type="button" onClick={() => setShowPassword(!showPassword)} aria-label="Toggle password visibility"
              style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', fontSize: 16 }}>
              {showPassword ? '🙈' : '👁️'}
            </button>
          </div>

          {error && (<div style={{ background: '#fef2f2', border: '1px solid #fecaca', color: '#b91c1c', borderRadius: 10, padding: '10px 12px', fontSize: 14, marginBottom: 16 }}>{error}</div>)}
          {success && (<div style={{ background: '#ecfdf5', border: '1px solid #a7f3d0', color: '#065f46', borderRadius: 10, padding: '10px 12px', fontSize: 14, marginBottom: 16 }}>{success}</div>)}

          <button type="submit" disabled={loading || checking} style={{ width: '100%', padding: '14px 24px', borderRadius: 8, border: 'none', background: '#020203', color: 'white', fontSize: 16, fontWeight: 500, cursor: 'pointer' }}>
            {loading || checking ? 'Creating...' : 'Sign Up'}
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: 20 }}>
          <Link href="/auth/sign-in" style={{ fontSize: 14, color: '#003fbd', textDecoration: 'none' }}>Already have an account? Sign in</Link>
        </div>
      </div>
    </div>
  );
}


