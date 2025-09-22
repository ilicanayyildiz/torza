'use client';

import Link from 'next/link';

export default function PricingPage() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      fontFamily: 'system-ui, -apple-system, sans-serif',
      background: 'white'
    }}>
      {/* Hero */}
      <section style={{ 
        padding: '96px 0 48px',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #fff7ed 0%, #ffedd5 45%, #fde68a 90%)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <h1 style={{ 
            fontSize: 'clamp(2.25rem, 5vw, 3.25rem)',
            fontWeight: '800',
            color: '#0b1020',
            marginBottom: '12px',
            lineHeight: '1.1',
            letterSpacing: '-0.02em'
          }}>
            Transparent pricing for global coverage
          </h1>
          <p style={{
            fontSize: '18px',
            color: '#374151',
            maxWidth: '720px',
            margin: '0 auto 24px'
          }}>
            Pay‑as‑you‑go with volume discounts. No setup fees. Enterprise terms available.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" aria-label="Talk to sales" style={{ textDecoration: 'none' }}>
              <button style={{
                padding: '12px 20px',
                borderRadius: 10,
                border: 'none',
                background: '#3b82f6',
                color: 'white',
                fontSize: 16,
                fontWeight: 700,
                cursor: 'pointer'
              }}>Talk to sales</button>
            </Link>
            <Link href="/docs" aria-label="See docs" style={{ textDecoration: 'none' }}>
              <button style={{
                padding: '12px 20px',
                borderRadius: 10,
                border: '2px solid #1f2937',
                background: 'transparent',
                color: '#111827',
                fontSize: 16,
                fontWeight: 700,
                cursor: 'pointer'
              }}>See docs</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section style={{ 
        padding: '64px 0',
        background: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
            marginBottom: '40px'
          }}>
            <div style={{
              background: 'white',
              borderRadius: 14,
              padding: 28,
              border: '1px solid #e5e7eb',
              textAlign: 'center',
              color: '#1a202c'
            }}>
              <h2 style={{
                fontSize: 20,
                fontWeight: 700,
                marginBottom: 8
              }}>
                0% setup fees
              </h2>
              <p style={{
                fontSize: 14,
                color: '#4a5568',
                lineHeight: 1.6
              }}>
                No onboarding or minimums. Scale on usage with volume discounts.
              </p>
            </div>

            <div style={{
              background: 'white',
              borderRadius: 14,
              padding: 28,
              border: '1px solid #e5e7eb',
              textAlign: 'center',
              color: '#1a202c'
            }}>
              <h2 style={{
                fontSize: 20,
                fontWeight: 700,
                marginBottom: 8
              }}>
                Processing fees from 4%
              </h2>
              <p style={{
                fontSize: 14,
                color: '#4a5568',
                lineHeight: 1.6
              }}>
                Cover fees yourself or pass them to buyers. Custom enterprise pricing available.
              </p>
            </div>
          </div>

          <h2 style={{ fontSize: 28, fontWeight: 800, color: '#0b1020', textAlign: 'center', marginBottom: 8 }}>Global coverage</h2>
          <p style={{ fontSize: 16, color: '#4a5568', textAlign: 'center', marginBottom: 28 }}>Access buyers in 200+ countries with local payment options.</p>

          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '40px'
          }}>
            <div style={{ background: 'white', borderRadius: 14, padding: 28, border: '1px solid #e5e7eb' }}>
              <h3 style={{
                fontSize: '24px',
                fontWeight: '600',
                color: '#1a202c',
                marginBottom: '16px'
              }}>
                NFT Checkout
              </h3>
              <p style={{
                fontSize: '16px',
                color: '#4a5568',
                lineHeight: '1.6',
                marginBottom: '24px'
              }}>
                Primary, Secondary and p2p sales. Marketplaces are welcome, no seller KYC is needed.
              </p>
              <p style={{
                fontSize: '14px',
                color: '#3b82f6',
                fontWeight: '500',
                marginBottom: '16px'
              }}>
                Want to enable your native token? Message us
              </p>
              
              <div style={{ marginBottom: '16px' }}>
                <h4 style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#1a202c',
                  marginBottom: '8px'
                }}>
                  Chains
                </h4>
                <p style={{
                  fontSize: '14px',
                  color: '#4a5568'
                }}>
                  ETH, Polygon, Tezos, Arbitrum, BSC, Concordium, Base
                </p>
              </div>
              
              <div>
                <h4 style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#1a202c',
                  marginBottom: '8px'
                }}>
                  Assets
                </h4>
                <p style={{
                  fontSize: '14px',
                  color: '#4a5568'
                }}>
                  MATIC, ETH, USDC, USDT, XTZ
                </p>
              </div>
            </div>

            <div style={{ background: 'white', borderRadius: 14, padding: 28, border: '1px solid #e5e7eb' }}>
              <h3 style={{
                fontSize: '24px',
                fontWeight: '600',
                color: '#1a202c',
                marginBottom: '16px'
              }}>
                Fiat onramp
              </h3>
              <p style={{
                fontSize: '16px',
                color: '#4a5568',
                lineHeight: '1.6',
                marginBottom: '24px'
              }}>
                Free and fast onboarding, works on web and mobile. Go live in less than a day.
              </p>
              <p style={{
                fontSize: '14px',
                color: '#3b82f6',
                fontWeight: '500',
                marginBottom: '16px'
              }}>
                A foundation behind a blockchain? Message us
              </p>
              
              <div>
                <h4 style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#1a202c',
                  marginBottom: '8px'
                }}>
                  Chains
                </h4>
                <p style={{
                  fontSize: '14px',
                  color: '#4a5568'
                }}>
                  ETH, Polygon, Tezos, Bitcoin, Stacks, Arbitrum, BSC, Concordium, Base
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bespoke Terms */}
      <section style={{ 
        padding: '80px 0',
        background: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: '700',
            color: '#1a202c',
            textAlign: 'center',
            marginBottom: '60px'
          }}>
            Bespoke terms
          </h2>

          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px'
          }}>
            <div style={{
              background: '#f8fafc',
              borderRadius: '12px',
              padding: '32px',
              border: '1px solid #e5e7eb',
              textAlign: 'center'
            }}>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#1a202c',
                marginBottom: '16px'
              }}>
                Token listing
              </h3>
              <p style={{
                fontSize: '16px',
                color: '#4a5568',
                lineHeight: '1.6',
                marginBottom: '16px'
              }}>
                Enable your ERC20 token as a currency of your smart contract and sell NFTs priced in your token. Connect to learn more about available exchange integrations.
              </p>
              <div style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#3b82f6'
              }}>
                background
              </div>
            </div>

            <div style={{
              background: '#f8fafc',
              borderRadius: '12px',
              padding: '32px',
              border: '1px solid #e5e7eb',
              textAlign: 'center'
            }}>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#1a202c',
                marginBottom: '16px'
              }}>
                Custom blockchain connectivity
              </h3>
              <p style={{
                fontSize: '16px',
                color: '#4a5568',
                lineHeight: '1.6',
                marginBottom: '16px'
              }}>
                We can support any custom blockchain for your project, regardless whether it's EVM or not. It will also include trade listing of its native token in our onramp.
              </p>
              <div style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#3b82f6'
              }}>
                background
              </div>
            </div>

            <div style={{
              background: '#f8fafc',
              borderRadius: '12px',
              padding: '32px',
              border: '1px solid #e5e7eb',
              textAlign: 'center'
            }}>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#1a202c',
                marginBottom: '16px'
              }}>
                Priority support
              </h3>
              <p style={{
                fontSize: '16px',
                color: '#4a5568',
                lineHeight: '1.6',
                marginBottom: '16px'
              }}>
                Get priority support for your developers and customers during the drop.
              </p>
              <div style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#3b82f6'
              }}>
                background
              </div>
            </div>

            <div style={{
              background: '#f8fafc',
              borderRadius: '12px',
              padding: '32px',
              border: '1px solid #e5e7eb',
              textAlign: 'center'
            }}>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#1a202c',
                marginBottom: '16px'
              }}>
                White-glove touch
              </h3>
              <p style={{
                fontSize: '16px',
                color: '#4a5568',
                lineHeight: '1.6',
                marginBottom: '16px'
              }}>
                Custom dashboards, conversion optimisation, battle testing prior to going live and many more.
              </p>
              <div style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#3b82f6'
              }}>
                White-glove touch
              </div>
            </div>

            <div style={{
              background: '#f8fafc',
              borderRadius: '12px',
              padding: '32px',
              border: '1px solid #e5e7eb',
              textAlign: 'center'
            }}>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#1a202c',
                marginBottom: '16px'
              }}>
                Feature request re-prioritisation
              </h3>
              <p style={{
                fontSize: '16px',
                color: '#4a5568',
                lineHeight: '1.6'
              }}>
                Assign a higher priority to much needed features from our backlog.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Consult Section */}
      <section style={{ 
        padding: '64px 0',
        background: 'white',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <h3 style={{ fontSize: 28, fontWeight: 800, color: '#0b1020', marginBottom: 8 }}>Questions about pricing?</h3>
          <p style={{ fontSize: 16, color: '#4a5568', marginBottom: 24 }}>Speak with our team to tailor a plan for your volume and geography.</p>
          
          <Link href="/auth/sign-in" aria-label="Contact sales" style={{ textDecoration: 'none' }}>
            <button style={{
              padding: '12px 20px',
              borderRadius: 10,
              border: 'none',
              background: '#3b82f6',
              color: 'white',
              fontSize: 16,
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              fontFamily: 'system-ui, -apple-system, sans-serif'
            }}>
              Contact sales
            </button>
          </Link>
        </div>
      </section>

      {/* Products Section */}
      <section style={{ 
        padding: '80px 0',
        background: 'white',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: '700',
            color: '#1a202c',
            marginBottom: '40px'
          }}>
            Our products
          </h2>
          <div style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Link href="/checkout" aria-label="NFT Checkout" style={{ textDecoration: 'none' }}>
              <button style={{
                padding: '12px 24px',
                borderRadius: '8px',
                border: '2px solid #1f2937',
                background: 'white',
                color: '#111827',
                fontSize: '14px',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                fontFamily: 'system-ui, -apple-system, sans-serif'
              }}>
                NFT Checkout
              </button>
            </Link>
            <Link href="/fiat-onramp" aria-label="Fiat Onramp" style={{ textDecoration: 'none' }}>
              <button style={{
                padding: '12px 24px',
                borderRadius: '8px',
                border: '2px solid #1f2937',
                background: 'white',
                color: '#111827',
                fontSize: '14px',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                fontFamily: 'system-ui, -apple-system, sans-serif'
              }}>
                Fiat Onramp
              </button>
            </Link>
            <Link href="/for-partners" aria-label="For Partners" style={{ textDecoration: 'none' }}>
              <button style={{
                padding: '12px 24px',
                borderRadius: '8px',
                border: '2px solid #1f2937',
                background: 'white',
                color: '#111827',
                fontSize: '14px',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                fontFamily: 'system-ui, -apple-system, sans-serif'
              }}>
                For Partners
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section style={{ 
        padding: '80px 0',
        background: '#f8fafc',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: '700',
            color: '#1a202c',
            marginBottom: '40px'
          }}>
            Check our materials
          </h2>
          <div style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Link href="/blog" style={{ textDecoration: 'none' }}>
              <button style={{
                padding: '12px 24px',
                borderRadius: '8px',
                border: '1px solid #d1d5db',
                background: 'white',
                color: '#4a5568',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                fontFamily: 'system-ui, -apple-system, sans-serif'
              }}>
                Our Blog
              </button>
            </Link>
            <Link href="/docs" style={{ textDecoration: 'none' }}>
              <button style={{
                padding: '12px 24px',
                borderRadius: '8px',
                border: '1px solid #d1d5db',
                background: 'white',
                color: '#4a5568',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                fontFamily: 'system-ui, -apple-system, sans-serif'
              }}>
                Integration Docs
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
