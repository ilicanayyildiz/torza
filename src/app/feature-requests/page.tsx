'use client';

import Link from 'next/link';

export default function FeatureRequestsPage() {
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
            Feature Requests
          </h1>
          <p style={{
            fontSize: '20px',
            color: '#4a5568',
            maxWidth: '600px',
            margin: '0 auto 40px',
            lineHeight: '1.6'
          }}>
            Help shape the future of Torza by submitting feature requests and voting on existing ideas.
          </p>
        </div>
      </section>

      {/* Submit Request */}
      <section style={{
        padding: '80px 0',
        background: '#f8fafc'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{
            background: 'white',
            padding: '48px',
            borderRadius: '16px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}>
            <h2 style={{
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: '700',
              color: '#1a202c',
              marginBottom: '24px',
              textAlign: 'center'
            }}>
              Submit a Feature Request
            </h2>
            
            <form style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#374151',
                  marginBottom: '8px'
                }}>
                  Feature Title
                </label>
                <input
                  type="text"
                  placeholder="Brief description of your feature request"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    border: '1px solid #d1d5db',
                    fontSize: '16px',
                    fontFamily: 'system-ui, -apple-system, sans-serif'
                  }}
                />
              </div>
              
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#374151',
                  marginBottom: '8px'
                }}>
                  Category
                </label>
                <select style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  border: '1px solid #d1d5db',
                  fontSize: '16px',
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  background: 'white'
                }}>
                  <option value="">Select a category</option>
                  <option value="api">API & SDK</option>
                  <option value="ui">User Interface</option>
                  <option value="security">Security</option>
                  <option value="analytics">Analytics</option>
                  <option value="integration">Integration</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#374151',
                  marginBottom: '8px'
                }}>
                  Description
                </label>
                <textarea
                  placeholder="Describe your feature request in detail. What problem does it solve? How would it work?"
                  rows={6}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    border: '1px solid #d1d5db',
                    fontSize: '16px',
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                    resize: 'vertical'
                  }}
                />
              </div>
              
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#374151',
                  marginBottom: '8px'
                }}>
                  Your Email (optional)
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    border: '1px solid #d1d5db',
                    fontSize: '16px',
                    fontFamily: 'system-ui, -apple-system, sans-serif'
                  }}
                />
                <p style={{
                  fontSize: '12px',
                  color: '#6b7280',
                  marginTop: '4px'
                }}>
                  We'll notify you when this feature is implemented
                </p>
              </div>
              
              <button
                type="submit"
                style={{
                  padding: '16px 32px',
                  borderRadius: '8px',
                  border: 'none',
                  background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
                  color: 'white',
                  fontSize: '16px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  alignSelf: 'center'
                }}
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Popular Requests */}
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
              Popular Feature Requests
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#4a5568',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Vote on existing requests to help us prioritize development
            </p>
          </div>

          <div style={{
            display: 'grid',
            gap: '24px'
          }}>
            {/* Request 1 */}
            <div style={{
              background: '#f8fafc',
              padding: '32px',
              borderRadius: '16px',
              border: '1px solid #e5e7eb'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '16px'
              }}>
                <div style={{ flex: '1' }}>
                  <h3 style={{
                    fontSize: '20px',
                    fontWeight: '600',
                    color: '#1a202c',
                    marginBottom: '8px'
                  }}>
                    Dark Mode Support
                  </h3>
                  <p style={{
                    color: '#4a5568',
                    lineHeight: '1.6',
                    marginBottom: '16px'
                  }}>
                    Add dark mode support to the Torza dashboard and checkout interface for better user experience.
                  </p>
                  <div style={{
                    display: 'flex',
                    gap: '16px',
                    alignItems: 'center'
                  }}>
                    <span style={{
                      background: '#dbeafe',
                      color: '#1e40af',
                      padding: '4px 12px',
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontWeight: '500'
                    }}>
                      UI
                    </span>
                    <span style={{
                      color: '#6b7280',
                      fontSize: '14px'
                    }}>
                      127 votes
                    </span>
                  </div>
                </div>
                <button style={{
                  padding: '8px 16px',
                  borderRadius: '6px',
                  border: '1px solid #d1d5db',
                  background: 'white',
                  color: '#374151',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}>
                  Vote
                </button>
              </div>
            </div>

            {/* Request 2 */}
            <div style={{
              background: '#f8fafc',
              padding: '32px',
              borderRadius: '16px',
              border: '1px solid #e5e7eb'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '16px'
              }}>
                <div style={{ flex: '1' }}>
                  <h3 style={{
                    fontSize: '20px',
                    fontWeight: '600',
                    color: '#1a202c',
                    marginBottom: '8px'
                  }}>
                    Webhook Retry Logic
                  </h3>
                  <p style={{
                    color: '#4a5568',
                    lineHeight: '1.6',
                    marginBottom: '16px'
                  }}>
                    Implement automatic retry logic for failed webhook deliveries with exponential backoff.
                  </p>
                  <div style={{
                    display: 'flex',
                    gap: '16px',
                    alignItems: 'center'
                  }}>
                    <span style={{
                      background: '#dcfce7',
                      color: '#166534',
                      padding: '4px 12px',
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontWeight: '500'
                    }}>
                      API
                    </span>
                    <span style={{
                      color: '#6b7280',
                      fontSize: '14px'
                    }}>
                      89 votes
                    </span>
                  </div>
                </div>
                <button style={{
                  padding: '8px 16px',
                  borderRadius: '6px',
                  border: '1px solid #d1d5db',
                  background: 'white',
                  color: '#374151',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}>
                  Vote
                </button>
              </div>
            </div>

            {/* Request 3 */}
            <div style={{
              background: '#f8fafc',
              padding: '32px',
              borderRadius: '16px',
              border: '1px solid #e5e7eb'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '16px'
              }}>
                <div style={{ flex: '1' }}>
                  <h3 style={{
                    fontSize: '20px',
                    fontWeight: '600',
                    color: '#1a202c',
                    marginBottom: '8px'
                  }}>
                    Bulk Operations API
                  </h3>
                  <p style={{
                    color: '#4a5568',
                    lineHeight: '1.6',
                    marginBottom: '16px'
                  }}>
                    Add API endpoints for bulk operations like creating multiple payment sessions or updating multiple orders.
                  </p>
                  <div style={{
                    display: 'flex',
                    gap: '16px',
                    alignItems: 'center'
                  }}>
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
                    <span style={{
                      color: '#6b7280',
                      fontSize: '14px'
                    }}>
                      64 votes
                    </span>
                  </div>
                </div>
                <button style={{
                  padding: '8px 16px',
                  borderRadius: '6px',
                  border: '1px solid #d1d5db',
                  background: 'white',
                  color: '#374151',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}>
                  Vote
                </button>
              </div>
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
            Can't Find What You're Looking For?
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#4a5568',
            marginBottom: '40px',
            lineHeight: '1.6'
          }}>
            Submit a new feature request above or contact our product team directly.
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
              Contact Product Team
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
