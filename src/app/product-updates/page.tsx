'use client';

import Link from 'next/link';

export default function ProductUpdatesPage() {
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
            Product Updates
          </h1>
          <p style={{
            fontSize: '20px',
            color: '#4a5568',
            maxWidth: '600px',
            margin: '0 auto 40px',
            lineHeight: '1.6'
          }}>
            Stay up to date with the latest features, improvements, and announcements from Torza.
          </p>
        </div>
      </section>

      {/* Updates Section */}
      <section style={{
        padding: '80px 0',
        background: '#f8fafc'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{
            display: 'grid',
            gap: '32px'
          }}>
            {/* Update 1 */}
            <div style={{
              background: 'white',
              padding: '40px',
              borderRadius: '16px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '24px'
              }}>
                <div>
                  <h3 style={{
                    fontSize: '24px',
                    fontWeight: '700',
                    color: '#1a202c',
                    marginBottom: '8px'
                  }}>
                    Enhanced Security Features
                  </h3>
                  <p style={{
                    color: '#059669',
                    fontSize: '14px',
                    fontWeight: '500'
                  }}>
                    January 15, 2025
                  </p>
                </div>
                <span style={{
                  background: '#dcfce7',
                  color: '#166534',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: '500'
                }}>
                  Security
                </span>
              </div>
              <p style={{
                color: '#4a5568',
                lineHeight: '1.6',
                marginBottom: '24px'
              }}>
                We've implemented advanced fraud detection algorithms and enhanced encryption protocols to provide even better security for your transactions.
              </p>
              <ul style={{
                color: '#4a5568',
                lineHeight: '1.6',
                paddingLeft: '20px'
              }}>
                <li>Real-time fraud detection with 99.9% accuracy</li>
                <li>Enhanced SSL/TLS encryption</li>
                <li>Multi-factor authentication for sensitive operations</li>
                <li>Advanced monitoring and alerting system</li>
              </ul>
            </div>

            {/* Update 2 */}
            <div style={{
              background: 'white',
              padding: '40px',
              borderRadius: '16px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '24px'
              }}>
                <div>
                  <h3 style={{
                    fontSize: '24px',
                    fontWeight: '700',
                    color: '#1a202c',
                    marginBottom: '8px'
                  }}>
                    New Payment Methods
                  </h3>
                  <p style={{
                    color: '#059669',
                    fontSize: '14px',
                    fontWeight: '500'
                  }}>
                    January 8, 2025
                  </p>
                </div>
                <span style={{
                  background: '#dbeafe',
                  color: '#1e40af',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: '500'
                }}>
                  Feature
                </span>
              </div>
              <p style={{
                color: '#4a5568',
                lineHeight: '1.6',
                marginBottom: '24px'
              }}>
                We've added support for additional payment methods to make it easier for your customers to complete purchases.
              </p>
              <ul style={{
                color: '#4a5568',
                lineHeight: '1.6',
                paddingLeft: '20px'
              }}>
                <li>Apple Pay integration for mobile users</li>
                <li>Google Pay support for Android devices</li>
                <li>SEPA direct debit for European customers</li>
                <li>Cryptocurrency payments (Bitcoin, Ethereum)</li>
              </ul>
            </div>

            {/* Update 3 */}
            <div style={{
              background: 'white',
              padding: '40px',
              borderRadius: '16px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '24px'
              }}>
                <div>
                  <h3 style={{
                    fontSize: '24px',
                    fontWeight: '700',
                    color: '#1a202c',
                    marginBottom: '8px'
                  }}>
                    API v2.0 Release
                  </h3>
                  <p style={{
                    color: '#059669',
                    fontSize: '14px',
                    fontWeight: '500'
                  }}>
                    December 20, 2024
                  </p>
                </div>
                <span style={{
                  background: '#fef3c7',
                  color: '#92400e',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: '500'
                }}>
                  API
                </span>
              </div>
              <p style={{
                color: '#4a5568',
                lineHeight: '1.6',
                marginBottom: '24px'
              }}>
                Our new API version brings improved performance, better error handling, and new endpoints for enhanced functionality.
              </p>
              <ul style={{
                color: '#4a5568',
                lineHeight: '1.6',
                paddingLeft: '20px'
              }}>
                <li>50% faster response times</li>
                <li>Improved error messages and status codes</li>
                <li>New webhook endpoints for real-time updates</li>
                <li>Enhanced rate limiting and throttling</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
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
            Stay Updated
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#4a5568',
            marginBottom: '40px',
            lineHeight: '1.6'
          }}>
            Subscribe to our newsletter to get the latest product updates and announcements delivered to your inbox.
          </p>
          <div style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            maxWidth: '400px',
            margin: '0 auto'
          }}>
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                flex: '1',
                padding: '16px',
                borderRadius: '8px',
                border: '1px solid #d1d5db',
                fontSize: '16px',
                minWidth: '200px'
              }}
            />
            <button style={{
              padding: '16px 24px',
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
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
