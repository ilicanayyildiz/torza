'use client';

import Link from 'next/link';

export default function CareersPage() {
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
            Join Our Team
          </h1>
          <p style={{
            fontSize: '20px',
            color: '#4a5568',
            maxWidth: '600px',
            margin: '0 auto 40px',
            lineHeight: '1.6'
          }}>
            Help us build the future of payments. We're looking for passionate individuals who want to make crypto accessible to everyone.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
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
              Why Work at Torza?
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#4a5568',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              We offer more than just a job - we offer a mission
            </p>
          </div>

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
                Remote-First Culture
              </h3>
              <p style={{
                color: '#4a5568',
                lineHeight: '1.6'
              }}>
                Work from anywhere in the world with flexible hours and a focus on results over hours logged.
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
                Competitive Benefits
              </h3>
              <p style={{
                color: '#4a5568',
                lineHeight: '1.6'
              }}>
                Health insurance, equity options, learning budget, and top-tier equipment to help you do your best work.
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
                Growth Opportunities
              </h3>
              <p style={{
                color: '#4a5568',
                lineHeight: '1.6'
              }}>
                Join a fast-growing company where you can make a real impact and grow your career alongside the business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
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
              Open Positions
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#4a5568',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Find your next role at Torza
            </p>
          </div>

          <div style={{
            display: 'grid',
            gap: '24px'
          }}>
            {/* Position 1 */}
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
                    Senior Full-Stack Engineer
                  </h3>
                  <p style={{
                    color: '#4a5568',
                    lineHeight: '1.6',
                    marginBottom: '16px'
                  }}>
                    Build and scale our payment infrastructure using modern technologies like Node.js, React, and PostgreSQL.
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
                      Engineering
                    </span>
                    <span style={{
                      color: '#6b7280',
                      fontSize: '14px'
                    }}>
                      Remote • Full-time
                    </span>
                  </div>
                </div>
                <Link href="/auth/sign-in" style={{ textDecoration: 'none' }}>
                  <button style={{
                    padding: '12px 24px',
                    borderRadius: '8px',
                    border: 'none',
                    background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
                    color: 'white',
                    fontSize: '14px',
                    fontWeight: '500',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}>
                    Apply Now
                  </button>
                </Link>
              </div>
            </div>

            {/* Position 2 */}
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
                    Product Manager
                  </h3>
                  <p style={{
                    color: '#4a5568',
                    lineHeight: '1.6',
                    marginBottom: '16px'
                  }}>
                    Lead product strategy and work with engineering to deliver features that delight our users.
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
                      Product
                    </span>
                    <span style={{
                      color: '#6b7280',
                      fontSize: '14px'
                    }}>
                      Remote • Full-time
                    </span>
                  </div>
                </div>
                <Link href="/auth/sign-in" style={{ textDecoration: 'none' }}>
                  <button style={{
                    padding: '12px 24px',
                    borderRadius: '8px',
                    border: 'none',
                    background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
                    color: 'white',
                    fontSize: '14px',
                    fontWeight: '500',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}>
                    Apply Now
                  </button>
                </Link>
              </div>
            </div>

            {/* Position 3 */}
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
                    DevOps Engineer
                  </h3>
                  <p style={{
                    color: '#4a5568',
                    lineHeight: '1.6',
                    marginBottom: '16px'
                  }}>
                    Build and maintain our cloud infrastructure to ensure high availability and security.
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
                      DevOps
                    </span>
                    <span style={{
                      color: '#6b7280',
                      fontSize: '14px'
                    }}>
                      Remote • Full-time
                    </span>
                  </div>
                </div>
                <Link href="/auth/sign-in" style={{ textDecoration: 'none' }}>
                  <button style={{
                    padding: '12px 24px',
                    borderRadius: '8px',
                    border: 'none',
                    background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
                    color: 'white',
                    fontSize: '14px',
                    fontWeight: '500',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}>
                    Apply Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section style={{
        padding: '80px 0',
        background: '#f8fafc'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px',
            alignItems: 'center'
          }}>
            <div>
              <h2 style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: '700',
                color: '#1a202c',
                marginBottom: '24px'
              }}>
                Our Culture
              </h2>
              <p style={{
                fontSize: '18px',
                color: '#4a5568',
                lineHeight: '1.6',
                marginBottom: '24px'
              }}>
                At Torza, we believe that great products come from great teams. We foster a culture of collaboration, innovation, and continuous learning.
              </p>
              <ul style={{
                color: '#4a5568',
                lineHeight: '1.8',
                paddingLeft: '20px'
              }}>
                <li>Weekly team syncs and monthly all-hands meetings</li>
                <li>Annual team retreats and company events</li>
                <li>Learning and development budget for each employee</li>
                <li>Open communication and feedback culture</li>
              </ul>
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
                Perks & Benefits
              </h3>
              <div style={{
                display: 'grid',
                gap: '16px'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <span style={{ color: '#059669', fontSize: '20px' }}>✓</span>
                  <span style={{ color: '#4a5568', fontSize: '14px' }}>Health, dental, and vision insurance</span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <span style={{ color: '#059669', fontSize: '20px' }}>✓</span>
                  <span style={{ color: '#4a5568', fontSize: '14px' }}>Equity participation</span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <span style={{ color: '#059669', fontSize: '20px' }}>✓</span>
                  <span style={{ color: '#4a5568', fontSize: '14px' }}>$2,000 learning budget</span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <span style={{ color: '#059669', fontSize: '20px' }}>✓</span>
                  <span style={{ color: '#4a5568', fontSize: '14px' }}>Flexible PTO policy</span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <span style={{ color: '#059669', fontSize: '20px' }}>✓</span>
                  <span style={{ color: '#4a5568', fontSize: '14px' }}>Top-tier equipment</span>
                </div>
              </div>
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
            Don't See Your Role?
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#4a5568',
            marginBottom: '40px',
            lineHeight: '1.6'
          }}>
            We're always looking for exceptional talent. Send us your resume and let us know how you'd like to contribute to our mission.
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
              Send Your Resume
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
