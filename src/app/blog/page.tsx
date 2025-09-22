'use client';

import Link from 'next/link';

export default function BlogPage() {
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
            Torza Blog
          </h1>
          <p style={{
            fontSize: '20px',
            color: '#4a5568',
            maxWidth: '600px',
            margin: '0 auto 40px',
            lineHeight: '1.6'
          }}>
            Insights, updates, and stories from the world of crypto payments and Web3 infrastructure.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section style={{
        padding: '80px 0',
        background: '#f8fafc'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{
            background: 'white',
            borderRadius: '16px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '0'
            }}>
              <div style={{
                background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
                padding: '60px 40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <h2 style={{
                    fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                    fontWeight: '700',
                    color: 'white',
                    marginBottom: '16px'
                  }}>
                    Featured Post
                  </h2>
                  <p style={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontSize: '18px'
                  }}>
                    Latest insights from our team
                  </p>
                </div>
              </div>
              <div style={{ padding: '60px 40px' }}>
                <span style={{
                  background: '#dcfce7',
                  color: '#166534',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: '500',
                  marginBottom: '16px',
                  display: 'inline-block'
                }}>
                  Product Update
                </span>
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: '700',
                  color: '#1a202c',
                  marginBottom: '16px',
                  lineHeight: '1.3'
                }}>
                  The Future of Crypto Payments: Trends and Predictions for 2025
                </h3>
                <p style={{
                  color: '#4a5568',
                  lineHeight: '1.6',
                  marginBottom: '24px'
                }}>
                  As we enter 2025, the crypto payment landscape is evolving rapidly. Here's what we expect to see in the coming year and how it will impact businesses and consumers.
                </p>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <span style={{
                    color: '#6b7280',
                    fontSize: '14px'
                  }}>
                    January 15, 2025
                  </span>
                  <Link href="/auth/sign-in" style={{ textDecoration: 'none' }}>
                    <span style={{
                      color: '#2563eb',
                      fontSize: '14px',
                      fontWeight: '500'
                    }}>
                      Read More →
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
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
              Latest Posts
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#4a5568',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Stay updated with the latest news and insights
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '32px'
          }}>
            {/* Post 1 */}
            <div style={{
              background: '#f8fafc',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid #e5e7eb'
            }}>
              <div style={{
                background: 'linear-gradient(135deg, #7c3aed, #059669)',
                height: '200px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span style={{
                  color: 'white',
                  fontSize: '24px',
                  fontWeight: 'bold'
                }}>
                  Security
                </span>
              </div>
              <div style={{ padding: '32px' }}>
                <span style={{
                  background: '#dbeafe',
                  color: '#1e40af',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: '500',
                  marginBottom: '16px',
                  display: 'inline-block'
                }}>
                  Security
                </span>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#1a202c',
                  marginBottom: '12px',
                  lineHeight: '1.3'
                }}>
                  How We're Protecting Your Crypto Payments
                </h3>
                <p style={{
                  color: '#4a5568',
                  lineHeight: '1.6',
                  marginBottom: '20px',
                  fontSize: '14px'
                }}>
                  Learn about the security measures we've implemented to keep your transactions safe and secure.
                </p>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <span style={{
                    color: '#6b7280',
                    fontSize: '12px'
                  }}>
                    January 10, 2025
                  </span>
                  <Link href="/auth/sign-in" style={{ textDecoration: 'none' }}>
                    <span style={{
                      color: '#2563eb',
                      fontSize: '12px',
                      fontWeight: '500'
                    }}>
                      Read More →
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Post 2 */}
            <div style={{
              background: '#f8fafc',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid #e5e7eb'
            }}>
              <div style={{
                background: 'linear-gradient(135deg, #059669, #dc2626)',
                height: '200px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span style={{
                  color: 'white',
                  fontSize: '24px',
                  fontWeight: 'bold'
                }}>
                  API
                </span>
              </div>
              <div style={{ padding: '32px' }}>
                <span style={{
                  background: '#fef3c7',
                  color: '#92400e',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: '500',
                  marginBottom: '16px',
                  display: 'inline-block'
                }}>
                  Technical
                </span>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#1a202c',
                  marginBottom: '12px',
                  lineHeight: '1.3'
                }}>
                  Building Scalable Payment APIs: Lessons Learned
                </h3>
                <p style={{
                  color: '#4a5568',
                  lineHeight: '1.6',
                  marginBottom: '20px',
                  fontSize: '14px'
                }}>
                  Our engineering team shares insights on building robust, scalable payment APIs that can handle millions of transactions.
                </p>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <span style={{
                    color: '#6b7280',
                    fontSize: '12px'
                  }}>
                    January 5, 2025
                  </span>
                  <Link href="/auth/sign-in" style={{ textDecoration: 'none' }}>
                    <span style={{
                      color: '#2563eb',
                      fontSize: '12px',
                      fontWeight: '500'
                    }}>
                      Read More →
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Post 3 */}
            <div style={{
              background: '#f8fafc',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid #e5e7eb'
            }}>
              <div style={{
                background: 'linear-gradient(135deg, #dc2626, #2563eb)',
                height: '200px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span style={{
                  color: 'white',
                  fontSize: '24px',
                  fontWeight: 'bold'
                }}>
                  Industry
                </span>
              </div>
              <div style={{ padding: '32px' }}>
                <span style={{
                  background: '#fce7f3',
                  color: '#be185d',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: '500',
                  marginBottom: '16px',
                  display: 'inline-block'
                }}>
                  Industry
                </span>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#1a202c',
                  marginBottom: '12px',
                  lineHeight: '1.3'
                }}>
                  The Rise of NFT Marketplaces: A Market Analysis
                </h3>
                <p style={{
                  color: '#4a5568',
                  lineHeight: '1.6',
                  marginBottom: '20px',
                  fontSize: '14px'
                }}>
                  An in-depth analysis of the NFT marketplace landscape and how payment infrastructure is driving growth.
                </p>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <span style={{
                    color: '#6b7280',
                    fontSize: '12px'
                  }}>
                    December 28, 2024
                  </span>
                  <Link href="/auth/sign-in" style={{ textDecoration: 'none' }}>
                    <span style={{
                      color: '#2563eb',
                      fontSize: '12px',
                      fontWeight: '500'
                    }}>
                      Read More →
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section style={{
        padding: '80px 0',
        background: '#f8fafc'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{
            background: 'white',
            padding: '48px',
            borderRadius: '16px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            textAlign: 'center'
          }}>
            <h2 style={{
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: '700',
              color: '#1a202c',
              marginBottom: '16px'
            }}>
              Stay Updated
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#4a5568',
              marginBottom: '32px',
              lineHeight: '1.6'
            }}>
              Subscribe to our newsletter for the latest blog posts, product updates, and industry insights.
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
        </div>
      </section>
    </div>
  );
}
