'use client';

import Link from 'next/link';

export default function AffiliateProgramPage() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      fontFamily: 'system-ui, -apple-system, sans-serif',
      background: 'white'
    }}>
      {/* Hero Section */}
      <section style={{
        padding: '120px 0 80px',
        textAlign: 'center',
        background: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: '800',
            color: '#1a202c',
            marginBottom: '24px',
            lineHeight: '1.1',
            letterSpacing: '-0.025em'
          }}>
            Affiliate Program
          </h1>
          <p style={{
            fontSize: '20px',
            color: '#4a5568',
            maxWidth: '600px',
            margin: '0 auto 40px',
            lineHeight: '1.6'
          }}>
            Earn up to 50% commission by referring customers to Torza's payment infrastructure.
          </p>
          
          <div style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Link href="/auth/sign-in" style={{ textDecoration: 'none' }}>
              <button style={{
                padding: '16px 32px',
                borderRadius: '8px',
                border: 'none',
                background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
                color: 'white',
                fontSize: '16px',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                fontFamily: 'system-ui, -apple-system, sans-serif'
              }}>
                Join Program
              </button>
            </Link>
            <Link href="/docs" style={{ textDecoration: 'none' }}>
              <button style={{
                padding: '16px 32px',
                borderRadius: '8px',
                border: '2px solid #374151',
                background: 'white',
                color: '#1a202c',
                fontSize: '16px',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                fontFamily: 'system-ui, -apple-system, sans-serif'
              }}>
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Commission Structure */}
      <section style={{
        padding: '80px 0',
        background: '#f8fafc'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '700',
              color: '#1a202c',
              marginBottom: '16px'
            }}>
              Commission Structure
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#4a5568',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Earn more as you refer more customers
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '32px'
          }}>
            <div style={{
              background: 'white',
              padding: '40px',
              borderRadius: '16px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: '48px',
                fontWeight: '800',
                color: '#2563eb',
                marginBottom: '16px'
              }}>
                30%
              </div>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#1a202c',
                marginBottom: '8px'
              }}>
                Starter
              </h3>
              <p style={{
                color: '#4a5568',
                fontSize: '14px'
              }}>
                1-10 referrals
              </p>
            </div>

            <div style={{
              background: 'white',
              padding: '40px',
              borderRadius: '16px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: '48px',
                fontWeight: '800',
                color: '#7c3aed',
                marginBottom: '16px'
              }}>
                40%
              </div>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#1a202c',
                marginBottom: '8px'
              }}>
                Growth
              </h3>
              <p style={{
                color: '#4a5568',
                fontSize: '14px'
              }}>
                11-50 referrals
              </p>
            </div>

            <div style={{
              background: 'white',
              padding: '40px',
              borderRadius: '16px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: '48px',
                fontWeight: '800',
                color: '#059669',
                marginBottom: '16px'
              }}>
                50%
              </div>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#1a202c',
                marginBottom: '8px'
              }}>
                Enterprise
              </h3>
              <p style={{
                color: '#4a5568',
                fontSize: '14px'
              }}>
                50+ referrals
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section style={{
        padding: '80px 0',
        background: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '700',
              color: '#1a202c',
              marginBottom: '16px'
            }}>
              Why Join Our Program?
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px'
          }}>
            <div style={{
              padding: '32px',
              borderRadius: '12px',
              border: '1px solid #e5e7eb'
            }}>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#1a202c',
                marginBottom: '16px'
              }}>
                Recurring Commissions
              </h3>
              <p style={{
                color: '#4a5568',
                lineHeight: '1.6'
              }}>
                Earn commissions on every transaction your referrals make, not just the first one.
              </p>
            </div>

            <div style={{
              padding: '32px',
              borderRadius: '12px',
              border: '1px solid #e5e7eb'
            }}>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#1a202c',
                marginBottom: '16px'
              }}>
                Marketing Support
              </h3>
              <p style={{
                color: '#4a5568',
                lineHeight: '1.6'
              }}>
                Get access to marketing materials, banners, and co-marketing opportunities.
              </p>
            </div>

            <div style={{
              padding: '32px',
              borderRadius: '12px',
              border: '1px solid #e5e7eb'
            }}>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#1a202c',
                marginBottom: '16px'
              }}>
                Real-time Tracking
              </h3>
              <p style={{
                color: '#4a5568',
                lineHeight: '1.6'
              }}>
                Track your referrals and earnings in real-time with our comprehensive dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '80px 0',
        background: '#f8fafc',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '700',
            color: '#1a202c',
            marginBottom: '24px'
          }}>
            Ready to start earning?
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#4a5568',
            marginBottom: '40px',
            lineHeight: '1.6'
          }}>
            Join our affiliate program today and start earning commissions from your referrals.
          </p>
          <Link href="/auth/sign-in" style={{ textDecoration: 'none' }}>
            <button style={{
              padding: '16px 32px',
              borderRadius: '8px',
              border: 'none',
              background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
              color: 'white',
              fontSize: '16px',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              fontFamily: 'system-ui, -apple-system, sans-serif'
            }}>
              Apply Now
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
