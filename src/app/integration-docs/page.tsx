'use client';

import Link from 'next/link';

export default function IntegrationDocsPage() {
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
            Integration Documentation
          </h1>
          <p style={{
            fontSize: '20px',
            color: '#4a5568',
            maxWidth: '600px',
            margin: '0 auto 40px',
            lineHeight: '1.6'
          }}>
            Complete guides and references to integrate Torza's payment infrastructure into your application.
          </p>
        </div>
      </section>

      {/* Quick Start */}
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
              Quick Start Guide
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#374151',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Get up and running with Torza in minutes
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px'
          }}>
            <div style={{
              background: 'white',
              padding: '32px',
              borderRadius: '16px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px'
              }}>
                <span style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>1</span>
              </div>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#1a202c',
                marginBottom: '16px'
              }}>
                Create Account
              </h3>
              <p style={{
                color: '#4a5568',
                lineHeight: '1.6'
              }}>
                Sign up for a Torza account and get your API keys from the dashboard.
              </p>
            </div>

            <div style={{
              background: 'white',
              padding: '32px',
              borderRadius: '16px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px'
              }}>
                <span style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>2</span>
              </div>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#1a202c',
                marginBottom: '16px'
              }}>
                Install SDK
              </h3>
              <p style={{
                color: '#4a5568',
                lineHeight: '1.6'
              }}>
                Install our SDK or use our REST API to start processing payments.
              </p>
            </div>

            <div style={{
              background: 'white',
              padding: '32px',
              borderRadius: '16px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px'
              }}>
                <span style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>3</span>
              </div>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#1a202c',
                marginBottom: '16px'
              }}>
                Go Live
              </h3>
              <p style={{
                color: '#4a5568',
                lineHeight: '1.6'
              }}>
                Test your integration and switch to production mode when ready.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
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
              Documentation Sections
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '32px'
          }}>
            <div style={{
              padding: '32px',
              borderRadius: '12px',
              border: '1px solid #e5e7eb',
              transition: 'all 0.2s ease'
            }}>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#1a202c',
                marginBottom: '16px'
              }}>
                API Reference
              </h3>
              <p style={{
                color: '#4a5568',
                lineHeight: '1.6',
                marginBottom: '24px'
              }}>
                Complete reference for all API endpoints, parameters, and response formats.
              </p>
              <Link href="/docs" style={{ textDecoration: 'none' }}>
                <span style={{
                  color: '#2563eb',
                  fontSize: '14px',
                  fontWeight: '500'
                }}>
                  View API Docs →
                </span>
              </Link>
            </div>

            <div style={{
              padding: '32px',
              borderRadius: '12px',
              border: '1px solid #e5e7eb',
              transition: 'all 0.2s ease'
            }}>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#1a202c',
                marginBottom: '16px'
              }}>
                SDKs & Libraries
              </h3>
              <p style={{
                color: '#4a5568',
                lineHeight: '1.6',
                marginBottom: '24px'
              }}>
                Official SDKs for popular programming languages and frameworks.
              </p>
              <Link href="/docs" style={{ textDecoration: 'none' }}>
                <span style={{
                  color: '#2563eb',
                  fontSize: '14px',
                  fontWeight: '500'
                }}>
                  Browse SDKs →
                </span>
              </Link>
            </div>

            <div style={{
              padding: '32px',
              borderRadius: '12px',
              border: '1px solid #e5e7eb',
              transition: 'all 0.2s ease'
            }}>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#1a202c',
                marginBottom: '16px'
              }}>
                Webhooks
              </h3>
              <p style={{
                color: '#4a5568',
                lineHeight: '1.6',
                marginBottom: '24px'
              }}>
                Learn how to handle real-time notifications and events from Torza.
              </p>
              <Link href="/docs" style={{ textDecoration: 'none' }}>
                <span style={{
                  color: '#2563eb',
                  fontSize: '14px',
                  fontWeight: '500'
                }}>
                  Webhook Guide →
                </span>
              </Link>
            </div>

            <div style={{
              padding: '32px',
              borderRadius: '12px',
              border: '1px solid #e5e7eb',
              transition: 'all 0.2s ease'
            }}>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#1a202c',
                marginBottom: '16px'
              }}>
                Testing
              </h3>
              <p style={{
                color: '#4a5568',
                lineHeight: '1.6',
                marginBottom: '24px'
              }}>
                Test your integration with our sandbox environment and test data.
              </p>
              <Link href="/docs" style={{ textDecoration: 'none' }}>
                <span style={{
                  color: '#2563eb',
                  fontSize: '14px',
                  fontWeight: '500'
                }}>
                  Testing Guide →
                </span>
              </Link>
            </div>

            <div style={{
              padding: '32px',
              borderRadius: '12px',
              border: '1px solid #e5e7eb',
              transition: 'all 0.2s ease'
            }}>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#1a202c',
                marginBottom: '16px'
              }}>
                Security
              </h3>
              <p style={{
                color: '#4a5568',
                lineHeight: '1.6',
                marginBottom: '24px'
              }}>
                Best practices for securing your integration and handling sensitive data.
              </p>
              <Link href="/docs" style={{ textDecoration: 'none' }}>
                <span style={{
                  color: '#2563eb',
                  fontSize: '14px',
                  fontWeight: '500'
                }}>
                  Security Guide →
                </span>
              </Link>
            </div>

            <div style={{
              padding: '32px',
              borderRadius: '12px',
              border: '1px solid #e5e7eb',
              transition: 'all 0.2s ease'
            }}>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#1a202c',
                marginBottom: '16px'
              }}>
                Troubleshooting
              </h3>
              <p style={{
                color: '#4a5568',
                lineHeight: '1.6',
                marginBottom: '24px'
              }}>
                Common issues and solutions to help you resolve integration problems.
              </p>
              <Link href="/docs" style={{ textDecoration: 'none' }}>
                <span style={{
                  color: '#2563eb',
                  fontSize: '14px',
                  fontWeight: '500'
                }}>
                  Troubleshooting →
                </span>
              </Link>
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
            Need Help?
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#4a5568',
            marginBottom: '40px',
            lineHeight: '1.6'
          }}>
            Our developer support team is here to help you integrate Torza successfully.
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
                Contact Support
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
                View Full Docs
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
