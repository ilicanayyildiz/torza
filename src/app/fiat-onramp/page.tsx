'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function FiatOnrampPage() {
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
            lineHeight: '1.1'
          }}>
            Fiat onramp for global users
          </h1>
          <p style={{
            fontSize: '18px',
            color: '#374151',
            maxWidth: '720px',
            margin: '0 auto 24px'
          }}>
            Instant purchase and wallet top‑up with risk controls and chargeback protection. Built for wallets and apps.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <button style={{ padding: '12px 20px', borderRadius: 10, border: 'none', background: '#3b82f6', color: 'white', fontSize: 16, fontWeight: 600, cursor: 'pointer' }}>Talk to sales</button>
            </Link>
            <Link href="/docs" style={{ textDecoration: 'none' }}>
              <button style={{ padding: '12px 20px', borderRadius: 10, border: '2px solid #1f2937', background: 'transparent', color: '#111827', fontSize: 16, fontWeight: 600, cursor: 'pointer' }}>See docs</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section style={{ 
        padding: '64px 0',
        background: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, color: '#0b1020', textAlign: 'center', marginBottom: 28 }}>Why teams choose Torza</h2>

          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '20px',
            marginBottom: '28px'
          }}>
            {[
              'Instant availability of funds',
              'Zero chargeback liability',
              '198 countries supported',
              'Fully managed AML compliance',
            ].map((t) => (
              <div key={t} style={{ textAlign: 'center', background: 'white', border: '1px solid #e5e7eb', borderRadius: 12, padding: 20, color: '#1a202c', boxShadow: '0 6px 16px rgba(0,0,0,0.04)' }}>
                <div style={{ fontSize: 16, fontWeight: 700 }}>{t}</div>
              </div>
            ))}
          </div>

          {/* Payment methods (SVG) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 16, alignItems: 'center', marginBottom: 12 }}>
            {['/visa.svg','/mastercard.svg','/amex.svg','/jcb.svg','/discover.svg','/applepay.svg','/googlepay.svg'].map(src => (
              <div key={src} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px 12px', borderRadius: 10, background: 'white', border: '1px solid #e5e7eb', boxShadow: '0 4px 10px rgba(0,0,0,0.03)' }}>
                <Image src={src} alt={src.replace('/','').replace('.svg','')} width={120} height={22} aria-label={src} />
              </div>
            ))}
          </div>

          {/* Crypto Currencies */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '40px',
            flexWrap: 'wrap'
          }}>
            <div style={{
              fontSize: '24px',
              fontWeight: '600',
              color: '#1a202c'
            }}>
              XTZ
            </div>
            <div style={{
              fontSize: '24px',
              fontWeight: '600',
              color: '#1a202c'
            }}>
              ETH
            </div>
            <div style={{
              fontSize: '24px',
              fontWeight: '600',
              color: '#1a202c'
            }}>
              MATIC
            </div>
            <div style={{
              fontSize: '24px',
              fontWeight: '600',
              color: '#1a202c'
            }}>
              BTC
            </div>
            <div style={{
              fontSize: '24px',
              fontWeight: '600',
              color: '#1a202c'
            }}>
              STX
            </div>
            <div style={{
              fontSize: '24px',
              fontWeight: '600',
              color: '#1a202c'
            }}>
              CCD
            </div>
            <div style={{
              fontSize: '24px',
              fontWeight: '600',
              color: '#1a202c'
            }}>
              ARB
            </div>
            <div style={{
              fontSize: '24px',
              fontWeight: '600',
              color: '#1a202c'
            }}>
              BNB
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: '64px 0', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, color: '#0b1020', textAlign: 'center', marginBottom: 28 }}>What our clients say</h2>

          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '40px'
          }}>
            <div style={{ background: '#f8fafc', borderRadius: 12, padding: 24, border: '1px solid #e5e7eb' }}>
              <div style={{
                fontSize: '48px',
                color: '#6b7280',
                marginBottom: '16px'
              }}>
                "
              </div>
              <p style={{
                fontSize: '16px',
                color: '#4a5568',
                lineHeight: '1.6',
                marginBottom: '16px'
              }}>
                We believe this partnership with Torza is a mutually rewarding collaboration that opens up new horizons for our clients interested in cryptocurrencies.
              </p>
              <div style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#1a202c',
                marginBottom: '4px'
              }}>
                Changelly
              </div>
              <div style={{
                fontSize: '12px',
                color: '#6b7280'
              }}>
                Jake Cormack
              </div>
              <div style={{
                fontSize: '12px',
                color: '#6b7280'
              }}>
                CEO at Changelly
              </div>
            </div>

            <div style={{ background: '#f8fafc', borderRadius: 12, padding: 24, border: '1px solid #e5e7eb' }}>
              <div style={{
                fontSize: '48px',
                color: '#6b7280',
                marginBottom: '16px'
              }}>
                "
              </div>
              <p style={{
                fontSize: '16px',
                color: '#4a5568',
                lineHeight: '1.6',
                marginBottom: '16px'
              }}>
                Torza has been our preferred onramp platform for the past few years and has been crucial in helping us grow our userbase.
              </p>
              <div style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#1a202c',
                marginBottom: '4px'
              }}>
                Latoken
              </div>
              <div style={{
                fontSize: '12px',
                color: '#6b7280'
              }}>
                Dmitry Khrustalev
              </div>
              <div style={{
                fontSize: '12px',
                color: '#6b7280'
              }}>
                CTO of LATOKEN
              </div>
            </div>

            <div style={{ background: '#f8fafc', borderRadius: 12, padding: 24, border: '1px solid #e5e7eb' }}>
              <div style={{
                fontSize: '48px',
                color: '#6b7280',
                marginBottom: '16px'
              }}>
                "
              </div>
              <p style={{
                fontSize: '16px',
                color: '#4a5568',
                lineHeight: '1.6',
                marginBottom: '16px'
              }}>
                We're thrilled to work alongside Torza, a company that shares our commitment to user experience and accessible technology.
              </p>
              <div style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#1a202c',
                marginBottom: '4px'
              }}>
                ARC
              </div>
              <div style={{
                fontSize: '12px',
                color: '#6b7280'
              }}>
                George Fox
              </div>
              <div style={{
                fontSize: '12px',
                color: '#6b7280'
              }}>
                COO at ARC Solutions Ltd
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Non-custodian Section */}
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
            marginBottom: '24px'
          }}>
            Torza never stores the customer's crypto or fiat funds. Non-custodian, and supercharged with features that users love ❤️ Just like you!
          </h2>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ 
        padding: '80px 0',
        background: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '60px'
          }}>
            <div style={{
              background: '#f8fafc',
              borderRadius: '12px',
              padding: '40px',
              border: '1px solid #e5e7eb'
            }}>
              <h3 style={{
                fontSize: '24px',
                fontWeight: '600',
                color: '#1a202c',
                marginBottom: '16px'
              }}>
                APIs for good UX
              </h3>
              <p style={{
                fontSize: '16px',
                color: '#4a5568',
                lineHeight: '1.6',
                marginBottom: '24px'
              }}>
                With Torza's frontend APIs you can pre-fill user data so they don't have to enter it twice.
              </p>
              <p style={{
                fontSize: '16px',
                color: '#4a5568',
                lineHeight: '1.6'
              }}>
                With Torza's frontend APIs you can pre-fill user data so they don't have to enter it twice.
              </p>
            </div>

            <div style={{
              background: '#f8fafc',
              borderRadius: '12px',
              padding: '40px',
              border: '1px solid #e5e7eb'
            }}>
              <h3 style={{
                fontSize: '24px',
                fontWeight: '600',
                color: '#1a202c',
                marginBottom: '16px'
              }}>
                Buy crypto in 60 seconds
              </h3>
              <p style={{
                fontSize: '16px',
                color: '#4a5568',
                lineHeight: '1.6',
                marginBottom: '24px'
              }}>
                With Torza's risk based approach users can purchase up to $1000 without uploading any documents. Let your users buy crypto in less than a minute.
              </p>
              <div style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#3b82f6'
              }}>
                Buy crypto in 60 seconds
              </div>
            </div>

            <div style={{
              background: '#f8fafc',
              borderRadius: '12px',
              padding: '40px',
              border: '1px solid #e5e7eb'
            }}>
              <h3 style={{
                fontSize: '24px',
                fontWeight: '600',
                color: '#1a202c',
                marginBottom: '16px'
              }}>
                Perfect for a wallet
              </h3>
              <p style={{
                fontSize: '16px',
                color: '#4a5568',
                lineHeight: '1.6',
                marginBottom: '24px'
              }}>
                Pass all the addresses that user owns, so they do not need to switch back an forth if they want to buy BTC instead of ETH.
              </p>
              <div style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#3b82f6'
              }}>
                Perfect for a wallet
              </div>
            </div>

            <div style={{
              background: '#f8fafc',
              borderRadius: '12px',
              padding: '40px',
              border: '1px solid #e5e7eb'
            }}>
              <h3 style={{
                fontSize: '24px',
                fontWeight: '600',
                color: '#1a202c',
                marginBottom: '16px'
              }}>
                A trusted partner
              </h3>
              <p style={{
                fontSize: '16px',
                color: '#4a5568',
                lineHeight: '1.6',
                marginBottom: '24px'
              }}>
                Torza is a regulated entity with licenses in EU and US.
              </p>
              <div style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#3b82f6',
                marginBottom: '16px'
              }}>
                Legal Documents
              </div>
              <div style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#3b82f6',
                marginBottom: '8px'
              }}>
                Operating licence
              </div>
              <div style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#3b82f6',
                marginBottom: '8px'
              }}>
                Operating licence
              </div>
              <div style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#3b82f6',
                marginBottom: '8px'
              }}>
                MSB registration (FinCEN)
              </div>
              <div style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#3b82f6'
              }}>
                MSB registration (FinCEN)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Go Live */}
      <section style={{ padding: '64px 0', background: 'white', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, color: '#0b1020', marginBottom: 12 }}>Go live the same day</h2>
          <p style={{ fontSize: 16, color: '#4a5568', marginBottom: 28 }}>Set up your account and test the integration in under a day.</p>

          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px',
            marginBottom: '60px'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: '#1a202c',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px',
                fontSize: '24px',
                fontWeight: '600',
                color: 'white'
              }}>
                01.
              </div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: '#1a202c',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px',
                fontSize: '24px',
                fontWeight: '600',
                color: 'white'
              }}>
                02.
              </div>
            </div>
          </div>

          <div style={{ background: 'white', borderRadius: 12, padding: 28, border: '1px solid #e5e7eb', maxWidth: 600, margin: '0 auto' }}>
            <h3 style={{
              fontSize: '20px',
              fontWeight: '600',
              color: '#1a202c',
              marginBottom: '16px'
            }}>
              Are you
            </h3>
            <div style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              marginBottom: '24px'
            }}>
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
                a web2 business looking for a solution to sell NFTs
              </button>
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
                a web3 project looking for a checkout solution
              </button>
            </div>
            <h3 style={{
              fontSize: '20px',
              fontWeight: '600',
              color: '#1a202c',
              marginBottom: '16px'
            }}>
              Are you launched yet?
            </h3>
            <div style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              marginBottom: '32px'
            }}>
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
                Yes
              </button>
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
                No
              </button>
            </div>
            <Link href="/contact" style={{ textDecoration: 'none' }}>
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
              Continue
              </button>
            </Link>
          </div>
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
            <Link href="/pricing" style={{ textDecoration: 'none' }}>
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
                Pricing
              </button>
            </Link>
            <Link href="/checkout" style={{ textDecoration: 'none' }}>
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
                NFT Checkout
              </button>
            </Link>
            <Link href="/dashboard" style={{ textDecoration: 'none' }}>
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
