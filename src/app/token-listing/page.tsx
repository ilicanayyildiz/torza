'use client';

import Link from 'next/link';

export default function TokenListingPage() {
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
            Token Listing Service
          </h1>
          <p style={{
            fontSize: '20px',
            color: '#4a5568',
            maxWidth: '600px',
            margin: '0 auto 40px',
            lineHeight: '1.6'
          }}>
            List your tokens on major exchanges and provide seamless trading experiences for your users.
          </p>
          
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/auth/sign-in" style={{ textDecoration: 'none' }}>
              <button style={{
                padding: '12px 20px',
                borderRadius: 10,
                border: 'none',
                background: '#3b82f6',
                color: 'white',
                fontSize: 16,
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                fontFamily: 'system-ui, -apple-system, sans-serif'
              }}>
                Get Started
              </button>
            </Link>
            <Link href="/docs" style={{ textDecoration: 'none' }}>
              <button style={{
                padding: '12px 20px',
                borderRadius: 10,
                border: '1px solid #d1d5db',
                background: 'white',
                color: '#1a202c',
                fontSize: 16,
                fontWeight: 600,
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

      {/* Features Section */}
      <section style={{
        padding: '80px 0',
        background: '#f8fafc'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px'
          }}>
            <div style={{
              background: 'white',
              padding: '40px',
              borderRadius: '16px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}>
              <h3 style={{
                fontSize: '24px',
                fontWeight: '700',
                color: '#1a202c',
                marginBottom: '16px'
              }}>
                Multi-Exchange Support
              </h3>
              <p style={{
                color: '#4a5568',
                lineHeight: '1.6'
              }}>
                List your tokens on major exchanges including Binance, Coinbase, and Kraken with a single integration.
              </p>
            </div>

            <div style={{
              background: 'white',
              padding: '40px',
              borderRadius: '16px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}>
              <h3 style={{
                fontSize: '24px',
                fontWeight: '700',
                color: '#1a202c',
                marginBottom: '16px'
              }}>
                Compliance Ready
              </h3>
              <p style={{
                color: '#4a5568',
                lineHeight: '1.6'
              }}>
                Built-in compliance tools and KYC integration to meet regulatory requirements across jurisdictions.
              </p>
            </div>

            <div style={{
              background: 'white',
              padding: '40px',
              borderRadius: '16px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}>
              <h3 style={{
                fontSize: '24px',
                fontWeight: '700',
                color: '#1a202c',
                marginBottom: '16px'
              }}>
                Real-time Analytics
              </h3>
              <p style={{
                color: '#4a5568',
                lineHeight: '1.6'
              }}>
                Track your token performance across all exchanges with comprehensive analytics and reporting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '80px 0',
        background: 'white',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '700',
            color: '#1a202c',
            marginBottom: '24px'
          }}>
            Ready to list your token?
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#4a5568',
            marginBottom: '40px',
            lineHeight: '1.6'
          }}>
            Join hundreds of projects that trust Torza for their token listing needs.
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
              Start Listing Process
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
