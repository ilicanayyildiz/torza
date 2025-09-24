'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const supabase = createClient();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    let isMounted = true;
    const loadSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (isMounted) {
        setUser(session?.user ?? null);
      }
    };
    loadSession();
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (isMounted) setUser(session?.user ?? null);
    });
    return () => {
      isMounted = false;
      listener.subscription.unsubscribe();
    };
  }, [supabase]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return (
    <nav style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      position: 'sticky',
      top: '0',
      zIndex: '50',
      backdropFilter: 'blur(10px)',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      width: '100%',
      margin: 0,
      padding: 0
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 24px'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '80px'
        }}>
          {/* Logo */}
          <div style={{ flexShrink: '0' }}>
            <Link href="/" style={{ 
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none'
            }}>
              <span style={{
                fontSize: '32px',
                fontWeight: '800',
                background: 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontFamily: 'system-ui, -apple-system, sans-serif',
                letterSpacing: '-0.025em',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
              }}>Torza</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div style={{ display: 'flex' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '40px'
            }}>
              <Link 
                href="/checkout" 
                style={{
                  fontSize: '16px',
                  fontWeight: '500',
                  textDecoration: 'none',
                  color: 'rgba(255, 255, 255, 0.9)',
                  transition: 'all 0.3s ease',
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  position: 'relative'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)';
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                NFT Checkout
              </Link>
              <Link 
                href="/fiat-onramp" 
                style={{
                  fontSize: '16px',
                  fontWeight: '500',
                  textDecoration: 'none',
                  color: 'rgba(255, 255, 255, 0.9)',
                  transition: 'all 0.3s ease',
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  position: 'relative'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)';
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Fiat Onramp
              </Link>
              <Link 
                href="/pricing" 
                style={{
                  fontSize: '16px',
                  fontWeight: '500',
                  textDecoration: 'none',
                  color: 'rgba(255, 255, 255, 0.9)',
                  transition: 'all 0.3s ease',
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  position: 'relative'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)';
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Pricing
              </Link>
              {user && (
                <Link 
                  href="/buy-sell" 
                  style={{
                    fontSize: '16px',
                    fontWeight: '500',
                    textDecoration: 'none',
                    color: 'rgba(255, 255, 255, 0.9)',
                    transition: 'all 0.3s ease',
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    position: 'relative'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)';
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  Buy / Sell
                </Link>
              )}
            </div>
          </div>

          {/* Desktop Auth */}
          <div style={{ display: 'flex' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px'
            }}>
              {user ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  {/* user email hidden as requested */}
                  <Link href="/dashboard" style={{ textDecoration: 'none' }}>
                    <button 
                      style={{
                        padding: '12px 24px',
                        borderRadius: '8px',
                        border: 'none',
                        background: 'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)',
                        color: 'white',
                        fontSize: '16px',
                        fontWeight: '500',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        fontFamily: 'system-ui, -apple-system, sans-serif'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.background = 'linear-gradient(135deg, #2d3748 0%, #4a5568 100%)';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.background = 'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      Dashboard
                    </button>
                  </Link>
                  <button 
                    onClick={handleSignOut}
                    style={{
                      padding: '12px 24px',
                      borderRadius: '8px',
                      border: '1px solid #d1d5db',
                      background: 'white',
                      color: '#4a5568',
                      fontSize: '16px',
                      fontWeight: '500',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      fontFamily: 'system-ui, -apple-system, sans-serif'
                    }}
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <Link href="/try-torza" style={{ textDecoration: 'none' }}>
                    <button style={{
                      padding: '12px 24px',
                      borderRadius: '8px',
                      border: 'none',
                      background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                      color: '#667eea',
                      fontSize: '16px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.2)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
                    }}>
                      Try Torza
                    </button>
                  </Link>
                  <Link href="/auth/sign-in" style={{ textDecoration: 'none' }}>
                    <button style={{
                      padding: '12px 24px',
                      borderRadius: '8px',
                      border: '2px solid rgba(255, 255, 255, 0.3)',
                      background: 'rgba(255, 255, 255, 0.1)',
                      color: 'white',
                      fontSize: '16px',
                      fontWeight: '500',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                      backdropFilter: 'blur(10px)'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}>
                      Partner Login
                    </button>
                  </Link>
                  <Link href="/contact" style={{ textDecoration: 'none' }}>
                    <button style={{
                      padding: '12px 24px',
                      borderRadius: '8px',
                      border: 'none',
                      background: 'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)',
                      color: 'white',
                      fontSize: '16px',
                      fontWeight: '500',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(135deg, #2d3748 0%, #4a5568 100%)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.3)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
                    }}>
                      Contact
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}