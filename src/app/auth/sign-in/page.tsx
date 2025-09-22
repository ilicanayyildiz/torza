'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';

export default function SignInPage() {
  const supabase = createClient();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: { emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/sign-in` },
      });
      if (error) throw error;
      setSent(true);

      setTimeout(async () => {
        const { data } = await supabase.auth.getUser();
        const user = data.user;
        if (user) {
          await supabase.from('profiles').upsert({ id: user.id, display_name: user.email ?? null }).select();
          router.push('/');
        }
      }, 1000);
    } catch (err: any) {
      setError(err?.message ?? 'Failed to send magic link');
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      fontFamily: 'system-ui, -apple-system, sans-serif',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 24px'
    }}>
      <div style={{
        maxWidth: '420px',
        width: '100%'
      }}>
        <div style={{
          background: 'white',
          borderRadius: '20px',
          boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05)',
          padding: '56px 48px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Subtle background pattern */}
          <div style={{
            position: 'absolute',
            top: '-50%',
            right: '-50%',
            width: '200%',
            height: '200%',
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.03) 0%, transparent 70%)',
            pointerEvents: 'none'
          }} />
          
          <div style={{ textAlign: 'center', marginBottom: '40px', position: 'relative' }}>
            <div style={{
              width: '64px',
              height: '64px',
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              borderRadius: '16px',
              margin: '0 auto 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 20px rgba(59, 130, 246, 0.3)'
            }}>
              <span style={{ color: 'white', fontSize: '24px', fontWeight: 'bold' }}>T</span>
            </div>
            <h1 style={{
              fontSize: '32px',
              fontWeight: '800',
              color: '#0f172a',
              marginBottom: '12px',
              letterSpacing: '-0.025em'
            }}>
              Welcome back
            </h1>
            <p style={{
              color: '#64748b',
              fontSize: '16px',
              fontWeight: '400'
            }}>
              Sign in to continue to Torza
            </p>
          </div>

          {sent ? (
            <div style={{
              textAlign: 'center',
              padding: '32px 24px',
              background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
              borderRadius: '16px',
              border: '1px solid rgba(14, 165, 233, 0.2)',
              position: 'relative'
            }}>
              <div style={{
                width: '56px',
                height: '56px',
                background: 'linear-gradient(135deg, #0ea5e9, #06b6d4)',
                borderRadius: '50%',
                margin: '0 auto 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 20px rgba(14, 165, 233, 0.3)'
              }}>
                <span style={{ color: 'white', fontSize: '24px' }}>✓</span>
              </div>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '700',
                color: '#0c4a6e',
                marginBottom: '12px'
              }}>
                Check your email
              </h3>
              <p style={{
                color: '#0369a1',
                fontSize: '15px',
                lineHeight: '1.6',
                margin: '0'
              }}>
                We've sent a magic link to <strong style={{ color: '#0c4a6e' }}>{email}</strong>. Click the link to sign in.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#374151',
                  marginBottom: '10px'
                }}>
                  Email address
                </label>
                {mounted ? (
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="email"
                    style={{
                      width: '100%',
                      padding: '16px 20px',
                      borderRadius: '12px',
                      border: '2px solid #e2e8f0',
                      fontSize: '16px',
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                      transition: 'all 0.2s ease',
                      boxSizing: 'border-box',
                      background: '#fafafa',
                      outline: 'none',
                      backgroundImage: 'none',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'auto',
                      backgroundPosition: 'initial',
                      cursor: 'text'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#3b82f6';
                      e.target.style.background = 'white';
                      e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#e2e8f0';
                      e.target.style.background = '#fafafa';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                ) : (
                  <div style={{
                    width: '100%',
                    padding: '16px 20px',
                    borderRadius: '12px',
                    border: '2px solid #e2e8f0',
                    fontSize: '16px',
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                    boxSizing: 'border-box',
                    background: '#fafafa',
                    color: '#9ca3af',
                    minHeight: '56px',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    Loading...
                  </div>
                )}
              </div>
              
              {error && (
                <div style={{
                  padding: '16px 20px',
                  background: 'linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)',
                  border: '1px solid rgba(239, 68, 68, 0.2)',
                  borderRadius: '12px'
                }}>
                  <p style={{
                    color: '#dc2626',
                    fontSize: '14px',
                    margin: '0',
                    fontWeight: '500'
                  }}>
                    {error}
                  </p>
                </div>
              )}
              
              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '18px 24px',
                  borderRadius: '12px',
                  border: 'none',
                  background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                  color: 'white',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  boxShadow: '0 4px 12px rgba(59, 130, 246, 0.4)',
                  letterSpacing: '0.025em'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-1px)';
                  e.currentTarget.style.boxShadow = '0 6px 16px rgba(59, 130, 246, 0.5)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.4)';
                }}
              >
                Send Magic Link
              </button>
            </form>
          )}

          <div style={{
            marginTop: '40px',
            paddingTop: '28px',
            borderTop: '1px solid #f1f5f9',
            textAlign: 'center'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              marginBottom: '8px'
            }}>
              <div style={{
                width: '16px',
                height: '16px',
                background: 'linear-gradient(135deg, #10b981, #059669)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span style={{ color: 'white', fontSize: '10px' }}>🔒</span>
              </div>
              <p style={{
                fontSize: '13px',
                color: '#64748b',
                fontWeight: '500',
                margin: '0'
              }}>
                Secure Authentication
              </p>
            </div>
            <p style={{
              fontSize: '12px',
              color: '#94a3b8',
              margin: '0',
              lineHeight: '1.4'
            }}>
              Protected by enterprise-grade security and encryption
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
