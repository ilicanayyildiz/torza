'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ForPartnersPage() {
  const [selectedType, setSelectedType] = useState<null | 'web2' | 'web3'>(null);
  const [launched, setLaunched] = useState<null | 'yes' | 'no'>(null);
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
            A checkout that feels native to your product
          </h1>
          <p style={{
            fontSize: '18px',
            color: '#374151',
            maxWidth: '780px',
            margin: '0 auto 24px'
          }}>
            Full UI customization, webhooks/listeners, and brand controls so payments look and behave like your app.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" aria-label="Talk to sales" style={{ textDecoration: 'none' }}>
              <button style={{ padding: '12px 20px', borderRadius: 10, border: 'none', background: '#3b82f6', color: 'white', fontSize: 16, fontWeight: 600, cursor: 'pointer' }}>Talk to sales</button>
            </Link>
            <Link href="/docs" aria-label="See docs" style={{ textDecoration: 'none' }}>
              <button style={{ padding: '12px 20px', borderRadius: 10, border: '2px solid #1f2937', background: 'transparent', color: '#111827', fontSize: 16, fontWeight: 600, cursor: 'pointer' }}>See docs</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Customization & controls */}
      <section style={{ padding: '64px 0', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, color: '#0b1020', textAlign: 'center', marginBottom: 28 }}>Make it yours</h2>

          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 20
          }}>
            {[{
              t:'Colors & CSS', d:'Match the widget to your brand for a seamless experience.'
            },{
              t:'Emails & OTP', d:'Custom sender and OTP descriptors to keep UX consistent.'
            },{
              t:'Billing descriptor', d:'Show your brand on card statements.'
            }].map(card => (
              <div key={card.t} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 12, padding: 24, color: '#1a202c', textAlign: 'center', boxShadow: '0 6px 16px rgba(0,0,0,0.04)' }}>
                <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>{card.t}</div>
                <div style={{ fontSize: 14, color: '#4a5568' }}>{card.d}</div>
              </div>
            ))}

            <div style={{
              background: 'white',
              borderRadius: '12px',
              padding: '32px',
              border: '1px solid #e5e7eb',
              textAlign: 'center'
            }}>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#1a202c',
                marginBottom: '16px'
              }}>
                Emails and OTP
              </h3>
              <p style={{
                fontSize: '16px',
                color: '#4a5568',
                lineHeight: '1.6',
                marginBottom: '16px'
              }}>
                With custom emails and OTP descriptor your customers will never miss a message from you.
              </p>
              <div style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#3b82f6'
              }}>
                Emails and OTP
              </div>
            </div>

            <div style={{
              background: 'white',
              borderRadius: '12px',
              padding: '32px',
              border: '1px solid #e5e7eb',
              textAlign: 'center'
            }}>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#1a202c',
                marginBottom: '16px'
              }}>
                Billing descriptor
              </h3>
              <p style={{
                fontSize: '16px',
                color: '#4a5568',
                lineHeight: '1.6',
                marginBottom: '16px'
              }}>
                Let your customers see your brand on the credit card statement.
              </p>
              <div style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#3b82f6'
              }}>
                Billing descriptor
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Developer controls */}
      <section style={{ padding: '64px 0', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, color: '#0b1020', textAlign: 'center', marginBottom: 28 }}>Control the experience</h2>

          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 20
          }}>
            <div style={{ background: '#f8fafc', borderRadius: 12, padding: 24, border: '1px solid #e5e7eb' }}>
              <div style={{ fontSize: 18, fontWeight: 700, color: '#111827', marginBottom: 8 }}>Passwordless login</div>
              <div style={{ fontSize: 14, color: '#4a5568', lineHeight: 1.6 }}>Reduce account takeovers with OTP‑based access for every session.</div>
            </div>

            <div style={{
              background: '#f8fafc',
              borderRadius: '12px',
              padding: '32px',
              border: '1px solid #e5e7eb'
            }}>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#1a202c',
                marginBottom: '16px'
              }}>
                Easy to make adjustments
              </h3>
              <p style={{
                fontSize: '16px',
                color: '#4a5568',
                lineHeight: '1.6'
              }}>
                Amount can be adjusted at any time. No need to Brute-force the value in fiat if a user needs a specific sum in crypto.
              </p>
            </div>

            <div style={{
              background: '#f8fafc',
              borderRadius: '12px',
              padding: '32px',
              border: '1px solid #e5e7eb'
            }}>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#1a202c',
                marginBottom: '16px'
              }}>
                Clear fee schedule
              </h3>
              <p style={{
                fontSize: '16px',
                color: '#4a5568',
                lineHeight: '1.6'
              }}>
                The exact amount that user gets is displayed in the checkout and includes all the fees.
              </p>
            </div>

            <div style={{
              background: '#f8fafc',
              borderRadius: '12px',
              padding: '32px',
              border: '1px solid #e5e7eb'
            }}>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#1a202c',
                marginBottom: '16px'
              }}>
                All countries in one
              </h3>
              <p style={{
                fontSize: '16px',
                color: '#4a5568',
                lineHeight: '1.6'
              }}>
                Reach global audience from day one, no need to manage several payment providers.
              </p>
            </div>

            <div style={{
              background: '#f8fafc',
              borderRadius: '12px',
              padding: '32px',
              border: '1px solid #e5e7eb'
            }}>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#1a202c',
                marginBottom: '16px'
              }}>
                Flexible UI
              </h3>
              <p style={{
                fontSize: '16px',
                color: '#4a5568',
                lineHeight: '1.6'
              }}>
                You have many options to modify the UX—show and hide several elements of UI based on your needs.
              </p>
            </div>

            <div style={{ background: '#f8fafc', borderRadius: 12, padding: 24, border: '1px solid #e5e7eb' }}>
              <div style={{ fontSize: 18, fontWeight: 700, color: '#111827', marginBottom: 8 }}>Stay in the loop</div>
              <div style={{ fontSize: 14, color: '#4a5568', lineHeight: 1.6 }}>Own the UX with client listeners and server webhooks at every step.</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '64px 0', background: 'white', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, color: '#0b1020', marginBottom: 12 }}>Built for teams that care about UX</h2>
          <p style={{ fontSize: 16, color: '#4a5568', marginBottom: 28 }}>Make the entire journey feel native—from OTP emails to billing descriptor.</p>

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
              <button
                aria-pressed={selectedType === 'web2'}
                onClick={() => setSelectedType('web2')}
                style={{
                  padding: '12px 24px',
                  borderRadius: '8px',
                  border: selectedType === 'web2' ? '1px solid #3b82f6' : '1px solid #d1d5db',
                  background: selectedType === 'web2' ? '#3b82f6' : 'white',
                  color: selectedType === 'web2' ? 'white' : '#4a5568',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  fontFamily: 'system-ui, -apple-system, sans-serif'
                }}>
                a web2 business looking for a solution to sell NFTs
              </button>
              <button
                aria-pressed={selectedType === 'web3'}
                onClick={() => setSelectedType('web3')}
                style={{
                  padding: '12px 24px',
                  borderRadius: '8px',
                  border: selectedType === 'web3' ? '1px solid #3b82f6' : '1px solid #d1d5db',
                  background: selectedType === 'web3' ? '#3b82f6' : 'white',
                  color: selectedType === 'web3' ? 'white' : '#4a5568',
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
              <button
                aria-pressed={launched === 'yes'}
                onClick={() => setLaunched('yes')}
                style={{
                  padding: '12px 24px',
                  borderRadius: '8px',
                  border: launched === 'yes' ? '1px solid #3b82f6' : '1px solid #d1d5db',
                  background: launched === 'yes' ? '#3b82f6' : 'white',
                  color: launched === 'yes' ? 'white' : '#4a5568',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  fontFamily: 'system-ui, -apple-system, sans-serif'
                }}>
                Yes
              </button>
              <button
                aria-pressed={launched === 'no'}
                onClick={() => setLaunched('no')}
                style={{
                  padding: '12px 24px',
                  borderRadius: '8px',
                  border: launched === 'no' ? '1px solid #3b82f6' : '1px solid #d1d5db',
                  background: launched === 'no' ? '#3b82f6' : 'white',
                  color: launched === 'no' ? 'white' : '#4a5568',
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
            <Link href="/fiat-onramp" style={{ textDecoration: 'none' }}>
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
                Fiat Onramp
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
