'use client';

import Link from 'next/link';

export default function RoadmapPage() {
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
            Product Roadmap
          </h1>
          <p style={{
            fontSize: '20px',
            color: '#4a5568',
            maxWidth: '600px',
            margin: '0 auto 40px',
            lineHeight: '1.6'
          }}>
            See what we're building next and help shape the future of Torza's payment infrastructure.
          </p>
        </div>
      </section>

      {/* Roadmap Timeline */}
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
              What's Coming Next
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gap: '40px'
          }}>
            {/* Q1 2025 */}
            <div style={{
              background: 'white',
              padding: '40px',
              borderRadius: '16px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '32px'
              }}>
                <h3 style={{
                  fontSize: '28px',
                  fontWeight: '700',
                  color: '#1a202c'
                }}>
                  Q1 2025
                </h3>
                <span style={{
                  background: '#dcfce7',
                  color: '#166534',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  fontSize: '14px',
                  fontWeight: '500'
                }}>
                  In Progress
                </span>
              </div>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '24px'
              }}>
                <div>
                  <h4 style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    color: '#1a202c',
                    marginBottom: '12px'
                  }}>
                    Advanced Analytics Dashboard
                  </h4>
                  <p style={{
                    color: '#4a5568',
                    lineHeight: '1.6',
                    fontSize: '14px'
                  }}>
                    Real-time insights into transaction patterns, user behavior, and revenue analytics.
                  </p>
                </div>
                
                <div>
                  <h4 style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    color: '#1a202c',
                    marginBottom: '12px'
                  }}>
                    Multi-Currency Support
                  </h4>
                  <p style={{
                    color: '#4a5568',
                    lineHeight: '1.6',
                    fontSize: '14px'
                  }}>
                    Support for 50+ fiat currencies and major cryptocurrencies.
                  </p>
                </div>
                
                <div>
                  <h4 style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    color: '#1a202c',
                    marginBottom: '12px'
                  }}>
                    Mobile SDK Updates
                  </h4>
                  <p style={{
                    color: '#4a5568',
                    lineHeight: '1.6',
                    fontSize: '14px'
                  }}>
                    Enhanced mobile SDKs with improved performance and new features.
                  </p>
                </div>
              </div>
            </div>

            {/* Q2 2025 */}
            <div style={{
              background: 'white',
              padding: '40px',
              borderRadius: '16px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '32px'
              }}>
                <h3 style={{
                  fontSize: '28px',
                  fontWeight: '700',
                  color: '#1a202c'
                }}>
                  Q2 2025
                </h3>
                <span style={{
                  background: '#dbeafe',
                  color: '#1e40af',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  fontSize: '14px',
                  fontWeight: '500'
                }}>
                  Planned
                </span>
              </div>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '24px'
              }}>
                <div>
                  <h4 style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    color: '#1a202c',
                    marginBottom: '12px'
                  }}>
                    AI-Powered Fraud Detection
                  </h4>
                  <p style={{
                    color: '#4a5568',
                    lineHeight: '1.6',
                    fontSize: '14px'
                  }}>
                    Machine learning algorithms to detect and prevent fraudulent transactions.
                  </p>
                </div>
                
                <div>
                  <h4 style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    color: '#1a202c',
                    marginBottom: '12px'
                  }}>
                    White-Label Solutions
                  </h4>
                  <p style={{
                    color: '#4a5568',
                    lineHeight: '1.6',
                    fontSize: '14px'
                  }}>
                    Fully customizable payment solutions with your branding.
                  </p>
                </div>
                
                <div>
                  <h4 style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    color: '#1a202c',
                    marginBottom: '12px'
                  }}>
                    Advanced Reporting
                  </h4>
                  <p style={{
                    color: '#4a5568',
                    lineHeight: '1.6',
                    fontSize: '14px'
                  }}>
                    Comprehensive reporting tools with custom dashboards and exports.
                  </p>
                </div>
              </div>
            </div>

            {/* Q3 2025 */}
            <div style={{
              background: 'white',
              padding: '40px',
              borderRadius: '16px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '32px'
              }}>
                <h3 style={{
                  fontSize: '28px',
                  fontWeight: '700',
                  color: '#1a202c'
                }}>
                  Q3 2025
                </h3>
                <span style={{
                  background: '#fef3c7',
                  color: '#92400e',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  fontSize: '14px',
                  fontWeight: '500'
                }}>
                  Research
                </span>
              </div>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '24px'
              }}>
                <div>
                  <h4 style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    color: '#1a202c',
                    marginBottom: '12px'
                  }}>
                    DeFi Integration
                  </h4>
                  <p style={{
                    color: '#4a5568',
                    lineHeight: '1.6',
                    fontSize: '14px'
                  }}>
                    Direct integration with major DeFi protocols and yield farming.
                  </p>
                </div>
                
                <div>
                  <h4 style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    color: '#1a202c',
                    marginBottom: '12px'
                  }}>
                    Cross-Chain Support
                  </h4>
                  <p style={{
                    color: '#4a5568',
                    lineHeight: '1.6',
                    fontSize: '14px'
                  }}>
                    Support for multiple blockchain networks and cross-chain transactions.
                  </p>
                </div>
                
                <div>
                  <h4 style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    color: '#1a202c',
                    marginBottom: '12px'
                  }}>
                    Enterprise Features
                  </h4>
                  <p style={{
                    color: '#4a5568',
                    lineHeight: '1.6',
                    fontSize: '14px'
                  }}>
                    Advanced enterprise features including dedicated support and SLA guarantees.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Requests */}
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
              Have a Feature Request?
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#4a5568',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Help us prioritize features by submitting your ideas and voting on existing requests.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px'
          }}>
            <div style={{
              background: '#f8fafc',
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
                Submit Request
              </h3>
              <p style={{
                color: '#4a5568',
                lineHeight: '1.6',
                marginBottom: '24px'
              }}>
                Tell us about the features you'd like to see in Torza.
              </p>
              <Link href="/feature-requests" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '12px 24px',
                  borderRadius: '8px',
                  border: 'none',
                  background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
                  color: 'white',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  fontFamily: 'system-ui, -apple-system, sans-serif'
                }}>
                  Submit Idea
                </button>
              </Link>
            </div>

            <div style={{
              background: '#f8fafc',
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
                Vote on Features
              </h3>
              <p style={{
                color: '#4a5568',
                lineHeight: '1.6',
                marginBottom: '24px'
              }}>
                Vote on existing feature requests to help us prioritize development.
              </p>
              <Link href="/feature-requests" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '12px 24px',
                  borderRadius: '8px',
                  border: '2px solid #374151',
                  background: 'white',
                  color: '#1a202c',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  fontFamily: 'system-ui, -apple-system, sans-serif'
                }}>
                  View Requests
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
