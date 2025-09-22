'use client';

import Link from 'next/link';

export default function DocsPage() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      fontFamily: 'system-ui, -apple-system, sans-serif',
      background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)',
      padding: '40px 0'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Header */}
        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '80px 48px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          border: '1px solid #e5e7eb',
          marginBottom: '32px',
          textAlign: 'center'
        }}>
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: '800',
            color: '#1a202c',
            marginBottom: '24px',
            lineHeight: '1.1'
          }}>
            Get Started with Torza
          </h1>
          <p style={{
            fontSize: '20px',
            color: '#4a5568',
            marginBottom: '40px',
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto 40px'
          }}>
            Ready to integrate Torza's payment infrastructure? Our sales team will help you get started with a custom integration plan.
          </p>
          
          {/* CTA Buttons */}
          <div style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '40px'
          }}>
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <button style={{
                padding: '16px 32px',
                borderRadius: '8px',
                border: 'none',
                background: 'linear-gradient(135deg, #1a202c, #374151)',
                color: 'white',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontFamily: 'system-ui, -apple-system, sans-serif'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #374151, #4b5563)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #1a202c, #374151)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                Contact Sales Team
              </button>
            </Link>
            <Link href="/try-torza" style={{ textDecoration: 'none' }}>
              <button style={{
                padding: '16px 32px',
                borderRadius: '8px',
                border: '1px solid #d1d5db',
                background: 'white',
                color: '#1a202c',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontFamily: 'system-ui, -apple-system, sans-serif'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = '#f9fafb';
                e.currentTarget.style.borderColor = '#8b5cf6';
                e.currentTarget.style.color = '#8b5cf6';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'white';
                e.currentTarget.style.borderColor = '#d1d5db';
                e.currentTarget.style.color = '#1a202c';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                Try Demo
              </button>
            </Link>
          </div>
        </div>

        {/* Integration Process */}
        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '48px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          border: '1px solid #e5e7eb',
          marginBottom: '32px'
        }}>
          <h2 style={{
            fontSize: '28px',
            fontWeight: '700',
            color: '#1a202c',
            marginBottom: '24px',
            textAlign: 'center'
          }}>
            How It Works
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
            marginBottom: '40px'
          }}>
            <div style={{
              textAlign: 'center',
              padding: '24px'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '32px',
                margin: '0 auto 20px',
                color: 'white'
              }}>
                1
              </div>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '700',
                color: '#1a202c',
                marginBottom: '12px'
              }}>
                Contact Sales
              </h3>
              <p style={{
                fontSize: '16px',
                color: '#6b7280',
                lineHeight: '1.6'
              }}>
                Reach out to our sales team to discuss your specific requirements and integration needs.
              </p>
            </div>

            <div style={{
              textAlign: 'center',
              padding: '24px'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #f093fb, #f5576c)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '32px',
                margin: '0 auto 20px',
                color: 'white'
              }}>
                2
              </div>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '700',
                color: '#1a202c',
                marginBottom: '12px'
              }}>
                Custom Setup
              </h3>
              <p style={{
                fontSize: '16px',
                color: '#6b7280',
                lineHeight: '1.6'
              }}>
                Our team will create a tailored integration plan and provide you with custom API keys and documentation.
              </p>
            </div>

            <div style={{
              textAlign: 'center',
              padding: '24px'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #4facfe, #00f2fe)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '32px',
                margin: '0 auto 20px',
                color: 'white'
              }}>
                3
              </div>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '700',
                color: '#1a202c',
                marginBottom: '12px'
              }}>
                Go Live
              </h3>
              <p style={{
                fontSize: '16px',
                color: '#6b7280',
                lineHeight: '1.6'
              }}>
                Once integrated, you'll have access to our full payment infrastructure with dedicated support.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '48px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          border: '1px solid #e5e7eb',
          marginBottom: '32px'
        }}>
          <h2 style={{
            fontSize: '28px',
            fontWeight: '700',
            color: '#1a202c',
            marginBottom: '32px',
            textAlign: 'center'
          }}>
            Why Choose Our Custom Integration?
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px'
          }}>
            <div style={{
              padding: '24px',
              background: '#f9fafb',
              borderRadius: '12px',
              border: '1px solid #e5e7eb'
            }}>
              <div style={{
                fontSize: '24px',
                marginBottom: '12px'
              }} className="animate-bounce">🎯</div>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#1a202c',
                marginBottom: '8px'
              }}>
                Tailored Solution
              </h3>
              <p style={{
                fontSize: '14px',
                color: '#6b7280',
                lineHeight: '1.5'
              }}>
                Custom integration designed specifically for your business needs and technical requirements.
              </p>
            </div>

            <div style={{
              padding: '24px',
              background: '#f9fafb',
              borderRadius: '12px',
              border: '1px solid #e5e7eb'
            }}>
              <div style={{
                fontSize: '24px',
                marginBottom: '12px'
              }} className="animate-shake">🛡️</div>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#1a202c',
                marginBottom: '8px'
              }}>
                Enterprise Security
              </h3>
              <p style={{
                fontSize: '14px',
                color: '#6b7280',
                lineHeight: '1.5'
              }}>
                Bank-grade security with PCI DSS compliance and advanced fraud detection systems.
              </p>
            </div>

            <div style={{
              padding: '24px',
              background: '#f9fafb',
              borderRadius: '12px',
              border: '1px solid #e5e7eb'
            }}>
              <div style={{
                fontSize: '24px',
                marginBottom: '12px'
              }} className="animate-rotate">🚀</div>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#1a202c',
                marginBottom: '8px'
              }}>
                Dedicated Support
              </h3>
              <p style={{
                fontSize: '14px',
                color: '#6b7280',
                lineHeight: '1.5'
              }}>
                24/7 technical support and dedicated account management for enterprise clients.
              </p>
            </div>

            <div style={{
              padding: '24px',
              background: '#f9fafb',
              borderRadius: '12px',
              border: '1px solid #e5e7eb'
            }}>
              <div style={{
                fontSize: '24px',
                marginBottom: '12px'
              }} className="animate-wiggle">⚡</div>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#1a202c',
                marginBottom: '8px'
              }}>
                Fast Integration
              </h3>
              <p style={{
                fontSize: '14px',
                color: '#6b7280',
                lineHeight: '1.5'
              }}>
                Get up and running quickly with our expert team handling the technical implementation.
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div style={{
          background: 'linear-gradient(135deg, #1a202c, #374151)',
          borderRadius: '16px',
          padding: '48px',
          textAlign: 'center',
          color: 'white'
        }}>
          <h2 style={{
            fontSize: '28px',
            fontWeight: '700',
            marginBottom: '16px'
          }}>
            Ready to Get Started?
          </h2>
          <p style={{
            fontSize: '18px',
            marginBottom: '32px',
            opacity: 0.9
          }}>
            Contact our sales team today to discuss your integration requirements and get a custom quote.
          </p>
          <Link href="/contact" style={{ textDecoration: 'none' }}>
            <button style={{
              padding: '16px 32px',
              borderRadius: '8px',
              border: 'none',
              background: 'white',
              color: '#1a202c',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontFamily: 'system-ui, -apple-system, sans-serif'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = '#f9fafb';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'white';
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
              Contact Sales Team
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}