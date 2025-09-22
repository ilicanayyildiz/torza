'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    interest: 'enterprise'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you for your interest! Our sales team will contact you within 24 hours.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)',
      backgroundSize: '400% 400%',
      animation: 'gradientShift 15s ease infinite',
      padding: '120px 0',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
      
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: '800',
            color: 'white',
            marginBottom: '24px',
            letterSpacing: '-0.025em'
          }}>
            Contact Our Sales Team
          </h1>
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            color: 'rgba(255, 255, 255, 0.9)',
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Ready to transform your payment infrastructure? Our enterprise team is here to help you get started.
          </p>
        </div>

        <div style={{
          background: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '20px',
          padding: '60px',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(10px)'
        }}>
          <form onSubmit={handleSubmit}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px',
              marginBottom: '24px'
            }}>
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#374151',
                  marginBottom: '8px'
                }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '16px',
                    borderRadius: '8px',
                    border: '2px solid #e5e7eb',
                    fontSize: '16px',
                    fontFamily: 'inherit',
                    transition: 'border-color 0.2s ease',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#667eea';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e5e7eb';
                  }}
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#374151',
                  marginBottom: '8px'
                }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '16px',
                    borderRadius: '8px',
                    border: '2px solid #e5e7eb',
                    fontSize: '16px',
                    fontFamily: 'inherit',
                    transition: 'border-color 0.2s ease',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#667eea';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e5e7eb';
                  }}
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#374151',
                  marginBottom: '8px'
                }}>
                  Company *
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '16px',
                    borderRadius: '8px',
                    border: '2px solid #e5e7eb',
                    fontSize: '16px',
                    fontFamily: 'inherit',
                    transition: 'border-color 0.2s ease',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#667eea';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e5e7eb';
                  }}
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#374151',
                  marginBottom: '8px'
                }}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '16px',
                    borderRadius: '8px',
                    border: '2px solid #e5e7eb',
                    fontSize: '16px',
                    fontFamily: 'inherit',
                    transition: 'border-color 0.2s ease',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#667eea';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e5e7eb';
                  }}
                />
              </div>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{
                display: 'block',
                fontSize: '16px',
                fontWeight: '600',
                color: '#374151',
                marginBottom: '8px'
              }}>
                I'm interested in *
              </label>
              <select
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '16px',
                  borderRadius: '8px',
                  border: '2px solid #e5e7eb',
                  fontSize: '16px',
                  fontFamily: 'inherit',
                  transition: 'border-color 0.2s ease',
                  boxSizing: 'border-box',
                  background: 'white'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#667eea';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e5e7eb';
                }}
              >
                <option value="enterprise">Enterprise Solutions</option>
                <option value="nft">NFT Marketplace Payments</option>
                <option value="crypto">Crypto Onramp Solutions</option>
                <option value="web3">Web3 Payment Gateway</option>
                <option value="custom">Custom Integration</option>
              </select>
            </div>

            <div style={{ marginBottom: '32px' }}>
              <label style={{
                display: 'block',
                fontSize: '16px',
                fontWeight: '600',
                color: '#374151',
                marginBottom: '8px'
              }}>
                Tell us about your project *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                style={{
                  width: '100%',
                  padding: '16px',
                  borderRadius: '8px',
                  border: '2px solid #e5e7eb',
                  fontSize: '16px',
                  fontFamily: 'inherit',
                  transition: 'border-color 0.2s ease',
                  boxSizing: 'border-box',
                  resize: 'vertical'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#667eea';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e5e7eb';
                }}
                placeholder="Describe your payment needs, expected volume, and any specific requirements..."
              />
            </div>

            <button
              type="submit"
              style={{
                width: '100%',
                padding: '20px',
                borderRadius: '8px',
                border: 'none',
                background: 'linear-gradient(135deg, #667eea, #764ba2)',
                color: 'white',
                fontSize: '18px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontFamily: 'inherit',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.3)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
              }}
            >
              Send Message
            </button>
          </form>

          <div style={{
            marginTop: '40px',
            padding: '24px',
            background: '#f8fafc',
            borderRadius: '12px',
            border: '1px solid #e2e8f0'
          }}>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#1a202c',
              marginBottom: '16px'
            }}>
              What happens next?
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px'
            }}>
              <div>
                <div style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#667eea',
                  marginBottom: '4px'
                }}>1. Response</div>
                <div style={{
                  fontSize: '14px',
                  color: '#6b7280'
                }}>We'll contact you within 24 hours</div>
              </div>
              <div>
                <div style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#667eea',
                  marginBottom: '4px'
                }}>2. Consultation</div>
                <div style={{
                  fontSize: '14px',
                  color: '#6b7280'
                }}>Free technical consultation</div>
              </div>
              <div>
                <div style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#667eea',
                  marginBottom: '4px'
                }}>3. Proposal</div>
                <div style={{
                  fontSize: '14px',
                  color: '#6b7280'
                }}>Custom solution proposal</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
