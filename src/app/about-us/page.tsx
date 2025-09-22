'use client';

import Link from 'next/link';

export default function AboutUsPage() {
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
            About Torza
          </h1>
          <p style={{
            fontSize: '20px',
            color: '#4a5568',
            maxWidth: '600px',
            margin: '0 auto 40px',
            lineHeight: '1.6'
          }}>
            We're building the payment infrastructure for the decentralized web, making crypto accessible to everyone.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section style={{
        padding: '80px 0',
        background: '#f8fafc'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '60px',
            alignItems: 'center'
          }}>
            <div>
              <h2 style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: '700',
                color: '#1a202c',
                marginBottom: '24px'
              }}>
                Our Mission
              </h2>
              <p style={{
                fontSize: '18px',
                color: '#4a5568',
                lineHeight: '1.6',
                marginBottom: '24px'
              }}>
                We believe that the future of payments is decentralized, but getting there shouldn't require users to understand complex blockchain technology.
              </p>
              <p style={{
                fontSize: '18px',
                color: '#4a5568',
                lineHeight: '1.6'
              }}>
                Torza bridges the gap between traditional finance and the decentralized web, enabling seamless payments for NFTs, crypto assets, and Web3 applications.
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
                marginBottom: '24px'
              }}>
                By the Numbers
              </h3>
              <div style={{
                display: 'grid',
                gap: '24px'
              }}>
                <div>
                  <div style={{
                    fontSize: '32px',
                    fontWeight: '800',
                    color: '#2563eb',
                    marginBottom: '8px'
                  }}>
                    $50M+
                  </div>
                  <p style={{
                    color: '#4a5568',
                    fontSize: '14px'
                  }}>
                    Processed in payments
                  </p>
                </div>
                <div>
                  <div style={{
                    fontSize: '32px',
                    fontWeight: '800',
                    color: '#7c3aed',
                    marginBottom: '8px'
                  }}>
                    100K+
                  </div>
                  <p style={{
                    color: '#4a5568',
                    fontSize: '14px'
                  }}>
                    Successful transactions
                  </p>
                </div>
                <div>
                  <div style={{
                    fontSize: '32px',
                    fontWeight: '800',
                    color: '#059669',
                    marginBottom: '8px'
                  }}>
                    99.9%
                  </div>
                  <p style={{
                    color: '#4a5568',
                    fontSize: '14px'
                  }}>
                    Uptime guarantee
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Values
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#4a5568',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              The principles that guide everything we do
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px'
          }}>
            <div style={{
              padding: '32px',
              borderRadius: '16px',
              border: '1px solid #e5e7eb'
            }}>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#1a202c',
                marginBottom: '16px'
              }}>
                Security First
              </h3>
              <p style={{
                color: '#4a5568',
                lineHeight: '1.6'
              }}>
                We prioritize security in everything we build, using industry-leading encryption and fraud detection to protect our users.
              </p>
            </div>

            <div style={{
              padding: '32px',
              borderRadius: '16px',
              border: '1px solid #e5e7eb'
            }}>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#1a202c',
                marginBottom: '16px'
              }}>
                User Experience
              </h3>
              <p style={{
                color: '#4a5568',
                lineHeight: '1.6'
              }}>
                We believe that complex technology should be simple to use, making crypto payments as easy as using a credit card.
              </p>
            </div>

            <div style={{
              padding: '32px',
              borderRadius: '16px',
              border: '1px solid #e5e7eb'
            }}>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#1a202c',
                marginBottom: '16px'
              }}>
                Innovation
              </h3>
              <p style={{
                color: '#4a5568',
                lineHeight: '1.6'
              }}>
                We're constantly pushing the boundaries of what's possible in payments, exploring new technologies and approaches.
              </p>
            </div>

            <div style={{
              padding: '32px',
              borderRadius: '16px',
              border: '1px solid #e5e7eb'
            }}>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#1a202c',
                marginBottom: '16px'
              }}>
                Transparency
              </h3>
              <p style={{
                color: '#4a5568',
                lineHeight: '1.6'
              }}>
                We believe in open communication and transparency, keeping our users informed about our progress and challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet Our Team
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#4a5568',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              The people behind Torza's mission to democratize crypto payments
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '40px'
          }}>
            <div style={{
              background: 'white',
              padding: '32px',
              borderRadius: '16px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              textAlign: 'center'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
                borderRadius: '50%',
                margin: '0 auto 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span style={{ color: 'white', fontSize: '24px', fontWeight: 'bold' }}>AS</span>
              </div>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#1a202c',
                marginBottom: '8px'
              }}>
                Alex Smith
              </h3>
              <p style={{
                color: '#6b7280',
                fontSize: '14px',
                marginBottom: '16px'
              }}>
                CEO & Co-founder
              </p>
              <p style={{
                color: '#4a5568',
                fontSize: '14px',
                lineHeight: '1.5'
              }}>
                Former PayPal executive with 10+ years in fintech
              </p>
            </div>

            <div style={{
              background: 'white',
              padding: '32px',
              borderRadius: '16px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              textAlign: 'center'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #7c3aed, #059669)',
                borderRadius: '50%',
                margin: '0 auto 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span style={{ color: 'white', fontSize: '24px', fontWeight: 'bold' }}>MJ</span>
              </div>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#1a202c',
                marginBottom: '8px'
              }}>
                Maria Johnson
              </h3>
              <p style={{
                color: '#6b7280',
                fontSize: '14px',
                marginBottom: '16px'
              }}>
                CTO & Co-founder
              </p>
              <p style={{
                color: '#4a5568',
                fontSize: '14px',
                lineHeight: '1.5'
              }}>
                Blockchain expert and former Coinbase engineer
              </p>
            </div>

            <div style={{
              background: 'white',
              padding: '32px',
              borderRadius: '16px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              textAlign: 'center'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #059669, #dc2626)',
                borderRadius: '50%',
                margin: '0 auto 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span style={{ color: 'white', fontSize: '24px', fontWeight: 'bold' }}>DW</span>
              </div>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#1a202c',
                marginBottom: '8px'
              }}>
                David Wilson
              </h3>
              <p style={{
                color: '#6b7280',
                fontSize: '14px',
                marginBottom: '16px'
              }}>
                Head of Security
              </p>
              <p style={{
                color: '#4a5568',
                fontSize: '14px',
                lineHeight: '1.5'
              }}>
                Cybersecurity specialist with expertise in payment systems
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
            Join Our Mission
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#4a5568',
            marginBottom: '40px',
            lineHeight: '1.6'
          }}>
            We're always looking for talented individuals who share our vision of making crypto payments accessible to everyone.
          </p>
          <div style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Link href="/careers" style={{ textDecoration: 'none' }}>
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
                View Open Positions
              </button>
            </Link>
            <Link href="/auth/sign-in" style={{ textDecoration: 'none' }}>
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
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
