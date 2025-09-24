'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function CheckoutPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(139, 92, 246, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(139, 92, 246, 0.6);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>
      <div style={{ 
        minHeight: '100vh', 
        fontFamily: 'system-ui, -apple-system, sans-serif',
        background: 'white'
      }}>
      {/* Hero Section */}
      <section style={{ 
        padding: '96px 0 64px',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #fff7ed 0%, #ffedd5 45%, #fde68a 90%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <h1 
            className={isVisible ? 'animate-fadeInUp' : ''}
            style={{ 
              fontSize: 'clamp(2.25rem, 5.2vw, 3.5rem)',
              fontWeight: '800',
              color: 'white',
              marginBottom: '16px',
              lineHeight: '1.1',
              letterSpacing: '-0.025em',
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.25)',
              opacity: isVisible ? 1 : 0
            }}>
            Accept card payments for NFTs with enterprise‑grade compliance
          </h1>
          <p 
            className={isVisible ? 'animate-fadeInUp' : ''}
            style={{
              fontSize: '18px',
              color: 'rgba(255, 255, 255, 0.85)',
              maxWidth: '720px',
              margin: '0 auto 28px',
              lineHeight: '1.6',
              textShadow: '0 1px 6px rgba(0, 0, 0, 0.2)',
              opacity: isVisible ? 1 : 0,
              animationDelay: '0.2s'
            }}>
            Global card acceptance with risk controls, chargeback mitigation, and fast settlement. Built for marketplaces and enterprise drops.
          </p>
          
          <div 
            className={isVisible ? 'animate-fadeInUp' : ''}
            style={{
              opacity: isVisible ? 1 : 0,
              animationDelay: '0.4s'
            }}>
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <button style={{
                padding: '14px 28px',
                borderRadius: '10px',
                border: 'none',
                background: '#3b82f6',
                color: 'white',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                fontFamily: 'system-ui, -apple-system, sans-serif',
                boxShadow: '0 8px 24px rgba(59, 130, 246, 0.35)',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 12px 36px rgba(59, 130, 246, 0.45)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(59, 130, 246, 0.35)';
              }}>
                Talk to sales
              </button>
            </Link>
            <Link href="/docs" style={{ textDecoration: 'none', marginLeft: 12 }}>
              <button style={{
                padding: '14px 28px',
                borderRadius: '10px',
                border: '1px solid rgba(255,255,255,0.25)',
                background: 'transparent',
                color: 'rgba(255,255,255,0.9)',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                fontFamily: 'system-ui, -apple-system, sans-serif'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'transparent';
              }}>
                See docs
              </button>
            </Link>
          </div>
          
          {/* Provider brand mention removed as requested */}
        </div>
      </section>

      {/* NFT Features Section */}
      <section style={{ 
        padding: '64px 0',
        background: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          

          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '40px',
            marginBottom: '60px'
          }}>
            <div 
              className={isVisible ? 'animate-fadeInUp' : ''}
              style={{ 
                textAlign: 'center',
                background: 'white',
                borderRadius: '16px',
                padding: '24px',
                border: '1px solid #e5e7eb',
                transition: 'all 0.3s ease',
                opacity: isVisible ? 1 : 0,
                boxShadow: '0 6px 16px rgba(0,0,0,0.04)'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.08)';
                e.currentTarget.style.background = '#f9fafb';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.04)';
                e.currentTarget.style.background = 'white';
              }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#1a202c',
                marginBottom: '8px',
                textShadow: 'none'
              }}>
                $5000 without docs upload
              </h3>
            </div>
            <div 
              className={isVisible ? 'animate-fadeInUp' : ''}
              style={{ 
                textAlign: 'center',
                background: 'white',
                borderRadius: '16px',
                padding: '24px',
                border: '1px solid #e5e7eb',
                transition: 'all 0.3s ease',
                opacity: isVisible ? 1 : 0,
                animationDelay: '0.1s',
                boxShadow: '0 6px 16px rgba(0,0,0,0.04)'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.08)';
                e.currentTarget.style.background = '#f9fafb';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.04)';
                e.currentTarget.style.background = 'white';
              }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#1a202c',
                marginBottom: '8px',
                textShadow: 'none'
              }}>
                Full chargeback protection
              </h3>
            </div>
            <div 
              className={isVisible ? 'animate-fadeInUp' : ''}
              style={{ 
                textAlign: 'center',
                background: 'white',
                borderRadius: '16px',
                padding: '24px',
                border: '1px solid #e5e7eb',
                transition: 'all 0.3s ease',
                opacity: isVisible ? 1 : 0,
                animationDelay: '0.2s',
                boxShadow: '0 6px 16px rgba(0,0,0,0.04)'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.08)';
                e.currentTarget.style.background = '#f9fafb';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.04)';
                e.currentTarget.style.background = 'white';
              }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#1a202c',
                marginBottom: '8px',
                textShadow: 'none'
              }}>
                198 countries and all US states
              </h3>
            </div>
            <div 
              className={isVisible ? 'animate-fadeInUp' : ''}
              style={{ 
                textAlign: 'center',
                background: 'white',
                borderRadius: '16px',
                padding: '24px',
                border: '1px solid #e5e7eb',
                transition: 'all 0.3s ease',
                opacity: isVisible ? 1 : 0,
                animationDelay: '0.3s',
                boxShadow: '0 6px 16px rgba(0,0,0,0.04)'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.08)';
                e.currentTarget.style.background = '#f9fafb';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.04)';
                e.currentTarget.style.background = 'white';
              }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#1a202c',
                marginBottom: '8px',
                textShadow: 'none'
              }}>
                30 sec checkout
              </h3>
            </div>
            <div 
              className={isVisible ? 'animate-fadeInUp' : ''}
              style={{ 
                textAlign: 'center',
                background: 'white',
                borderRadius: '16px',
                padding: '24px',
                border: '1px solid #e5e7eb',
                transition: 'all 0.3s ease',
                opacity: isVisible ? 1 : 0,
                animationDelay: '0.4s',
                boxShadow: '0 6px 16px rgba(0,0,0,0.04)'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.08)';
                e.currentTarget.style.background = '#f9fafb';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.04)';
                e.currentTarget.style.background = 'white';
              }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#1a202c',
                marginBottom: '8px',
                textShadow: 'none'
              }}>
                5815 MCC code
              </h3>
            </div>
          </div>

          {/* Payment methods grid removed as requested */}
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={{ 
        padding: '64px 0',
        background: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <h2 
            className={isVisible ? 'animate-fadeInUp' : ''}
            style={{
              fontSize: '32px',
              fontWeight: '700',
              color: '#1a202c',
              textAlign: 'center',
              marginBottom: '60px',
              textShadow: 'none',
              opacity: isVisible ? 1 : 0
            }}>
            What our clients say
          </h2>

          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '40px'
          }}>
            <div 
              className={isVisible ? 'animate-fadeInUp' : ''}
              style={{
                background: 'white',
                backdropFilter: 'none',
                borderRadius: '20px',
                padding: '32px',
                border: '1px solid #e5e7eb',
                transition: 'all 0.3s ease',
                opacity: isVisible ? 1 : 0,
                boxShadow: '0 8px 20px rgba(0,0,0,0.04)'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 16px 32px rgba(0,0,0,0.08)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.04)';
              }}>
              <div 
                className="animate-wiggle"
                style={{
                  fontSize: '32px',
                  color: '#1f2937',
                  marginBottom: '16px',
                  textShadow: 'none'
                }}>
                💬
              </div>
              <p style={{
                fontSize: '16px',
                color: '#1f2937',
                lineHeight: '1.6',
                marginBottom: '16px',
                textShadow: 'none'
              }}>
                We switched from another provider to Torza. Better UI, responsive support, and multi‑currency payments improved conversion across markets.
              </p>
              <div style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#4b5563',
                textShadow: 'none'
              }}>
                Intercellar
              </div>
            </div>

            <div 
              className={isVisible ? 'animate-fadeInUp' : ''}
              style={{
                background: 'white',
                backdropFilter: 'none',
                borderRadius: '20px',
                padding: '32px',
                border: '1px solid #e5e7eb',
                transition: 'all 0.3s ease',
                opacity: isVisible ? 1 : 0,
                animationDelay: '0.2s',
                boxShadow: '0 8px 20px rgba(0,0,0,0.04)'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 16px 32px rgba(0,0,0,0.08)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.04)';
              }}>
              <div 
                className="animate-float-gentle"
                style={{
                  fontSize: '32px',
                  color: '#1f2937',
                  marginBottom: '16px',
                  textShadow: 'none',
                  animationDelay: '0.2s'
                }}>
                💬
              </div>
              <p style={{
                fontSize: '16px',
                color: '#1f2937',
                lineHeight: '1.6',
                marginBottom: '16px',
                textShadow: 'none'
              }}>
                Rapid Integration, great design, great support. We had a specific integration demand and we were able to accomplish it with Torza! We're excited about their roadmap and integration their new features in the future.
              </p>
              <div style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#4b5563',
                textShadow: 'none'
              }}>
                Jockiz
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Added Services */}
      <section style={{ 
        padding: '80px 0',
        background: '#f8fafc'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: '700',
            color: '#1a202c',
            textAlign: 'center',
            marginBottom: '16px'
          }}>
            Get the suite of value added services that<br />
            helps your NFT marketplace flourish
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#4a5568',
            textAlign: 'center',
            marginBottom: '60px',
            lineHeight: '1.6'
          }}>
            Differentiate your NFT product, stand out from the crowd and never<br />
            miss a customer again.
          </p>

          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px'
          }}>
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
                Custom tokens
              </h3>
              <p style={{
                fontSize: '16px',
                color: '#4a5568',
                lineHeight: '1.6',
                marginBottom: '16px'
              }}>
                Leverage Torza's regulatory licenses and sell your utility token on the Ethereum, Polygon or Tezos blockchain
              </p>
              <div style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#3b82f6'
              }}>
                Custom tokens
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
                Wallet top-up
              </h3>
              <p style={{
                fontSize: '16px',
                color: '#4a5568',
                lineHeight: '1.6',
                marginBottom: '16px'
              }}>
                Allow your customers to buy ETH or top-up their wallet directly from your platform.
              </p>
              <div style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#3b82f6'
              }}>
                Wallet top-up
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
                Instant wallet creation
              </h3>
              <p style={{
                fontSize: '16px',
                color: '#4a5568',
                lineHeight: '1.6',
                marginBottom: '16px'
              }}>
                Accommodate users that do not have wallets but still want to buy an NFT. Torza will create a non-custodian wallet and onboard that user.
              </p>
              <div style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#6b7280'
              }}>
                Coming soon
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Features */}
      <section style={{ 
        padding: '80px 0',
        background: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: '700',
            color: '#1a202c',
            textAlign: 'center',
            marginBottom: '60px'
          }}>
            Feature rich integration that other web3 platforms rely on. Get the most advanced APIs and integrate with full UI customisation
          </h2>

          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '40px'
          }}>
            <div style={{
              background: '#f8fafc',
              borderRadius: '12px',
              padding: '32px',
              border: '1px solid #e5e7eb',
              textAlign: 'center'
            }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#1a202c',
                marginBottom: '16px'
              }}>
                Works with any smart contract
              </h3>
              <p style={{
                fontSize: '14px',
                color: '#4a5568',
                lineHeight: '1.6'
              }}>
                Execute any transaction with any smart contract by passing us the raw input data.
              </p>
            </div>

            <div style={{
              background: '#f8fafc',
              borderRadius: '12px',
              padding: '32px',
              border: '1px solid #e5e7eb',
              textAlign: 'center'
            }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#1a202c',
                marginBottom: '16px'
              }}>
                Compliant data exchange
              </h3>
              <p style={{
                fontSize: '14px',
                color: '#4a5568',
                lineHeight: '1.6'
              }}>
                Pre-fill the customer's data or exchange it with Torza after the transaction so that your customers don't have to repeat themselves.
              </p>
            </div>

            <div style={{
              background: '#f8fafc',
              borderRadius: '12px',
              padding: '32px',
              border: '1px solid #e5e7eb',
              textAlign: 'center'
            }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#1a202c',
                marginBottom: '16px'
              }}>
                No seller KYC
              </h3>
              <p style={{
                fontSize: '14px',
                color: '#4a5568',
                lineHeight: '1.6'
              }}>
                Credit card purchasing works for any sale regardless whether it's a primary sale, secondary sale or a p2p transaction.
              </p>
            </div>

            <div style={{
              background: '#f8fafc',
              borderRadius: '12px',
              padding: '32px',
              border: '1px solid #e5e7eb',
              textAlign: 'center'
            }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#1a202c',
                marginBottom: '16px'
              }}>
                Control the user experience
              </h3>
              <p style={{
                fontSize: '14px',
                color: '#4a5568',
                lineHeight: '1.6'
              }}>
                Leverage both client side (listeners) and server side (webhooks) events to fully own the user experience.
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link href="/dashboard" style={{ textDecoration: 'none' }}>
              <button style={{
                padding: '16px 32px',
                borderRadius: '8px',
                border: 'none',
                background: '#1a202c',
                color: 'white',
                fontSize: '16px',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                fontFamily: 'system-ui, -apple-system, sans-serif'
              }}>
                And many more benefits for our partners
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Smart Contracts Section */}
      <section style={{ 
        padding: '80px 0',
        background: '#f8fafc'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: '700',
            color: '#1a202c',
            textAlign: 'center',
            marginBottom: '16px'
          }}>
            Smart contracts
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#4a5568',
            textAlign: 'center',
            marginBottom: '60px',
            lineHeight: '1.6'
          }}>
            Enable checkout for existing smart contracts of any complexity whether<br />
            it's an NFT marketplace contract or a simple drop.
          </p>

          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '40px'
          }}>
            <div style={{
              background: 'white',
              borderRadius: '12px',
              padding: '40px',
              border: '1px solid #e5e7eb'
            }}>
              <h3 style={{
                fontSize: '24px',
                fontWeight: '600',
                color: '#1a202c',
                marginBottom: '16px'
              }}>
                Smart transactions
              </h3>
              <p style={{
                fontSize: '16px',
                color: '#4a5568',
                lineHeight: '1.6',
                marginBottom: '24px'
              }}>
                Torza can set up a proxy in case your smart contract has no transfer method. It will transfer NFTs to users' wallets without taking custody, hence adhering to web3 principles.
              </p>
              <div style={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#3b82f6'
              }}>
                →
              </div>
            </div>

            <div style={{
              background: 'white',
              borderRadius: '12px',
              padding: '40px',
              border: '1px solid #e5e7eb'
            }}>
              <h3 style={{
                fontSize: '24px',
                fontWeight: '600',
                color: '#1a202c',
                marginBottom: '16px'
              }}>
                Proxy wallet
              </h3>
              <p style={{
                fontSize: '16px',
                color: '#4a5568',
                lineHeight: '1.6'
              }}>
                You can specify any ERC20 or FA1.2 Token as smart contract currency without asking the consumer to make a separate approve transaction, sign a message with a wallet or to have gas tokens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Steps Section */}
      <section style={{ 
        padding: '80px 0',
        background: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: '700',
            color: '#1a202c',
            textAlign: 'center',
            marginBottom: '60px'
          }}>
            Get your 95% approval rate in just<br />
            3 steps
          </h2>

          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px'
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
                1
              </div>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#1a202c',
                marginBottom: '16px'
              }}>
                Setup your account
              </h3>
              <p style={{
                fontSize: '16px',
                color: '#4a5568',
                lineHeight: '1.6'
              }}>
                Integrate the widget<br />
                Get your smart contract and input data ready.
              </p>
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
                2
              </div>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#1a202c',
                marginBottom: '16px'
              }}>
                Sign the contract and go live
              </h3>
              <p style={{
                fontSize: '16px',
                color: '#4a5568',
                lineHeight: '1.6'
              }}>
                A swift legal process allows our partners to have fastest go-live on the market.
              </p>
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
                3
              </div>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#1a202c',
                marginBottom: '16px'
              }}>
                95%
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ 
        padding: '80px 0',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Animated Background Elements */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '150px',
          height: '150px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite',
          zIndex: 0
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '20%',
          right: '15%',
          width: '100px',
          height: '100px',
          background: 'rgba(255, 255, 255, 0.15)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite reverse',
          zIndex: 0
        }}></div>
        
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <h2 
            className={isVisible ? 'animate-fadeInUp' : ''}
            style={{
              fontSize: '32px',
              fontWeight: '700',
              color: 'white',
              marginBottom: '40px',
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
              opacity: isVisible ? 1 : 0
            }}>
            Let's set you up for success!
          </h2>
          
          <div 
            className={isVisible ? 'animate-fadeInUp' : ''}
            style={{
              opacity: isVisible ? 1 : 0,
              animationDelay: '0.2s'
            }}>
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <button style={{
                padding: '20px 40px',
                borderRadius: '16px',
                border: 'none',
                background: 'linear-gradient(135deg, #ff6b6b, #ee5a24)',
                color: 'white',
                fontSize: '18px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                fontFamily: 'system-ui, -apple-system, sans-serif',
                boxShadow: '0 10px 30px rgba(255, 107, 107, 0.4)',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(255, 107, 107, 0.6)';
                e.currentTarget.style.background = 'linear-gradient(135deg, #ff5252, #d63031)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(255, 107, 107, 0.4)';
                e.currentTarget.style.background = 'linear-gradient(135deg, #ff6b6b, #ee5a24)';
              }}>
                Continue
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
