'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    setIsVisible(true);
    return () => window.removeEventListener('scroll', handleScroll);
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
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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
        
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
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
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
        
        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        
        @keyframes shake {
          0%, 100% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-5px);
          }
          75% {
            transform: translateX(5px);
          }
        }
        
        @keyframes wiggle {
          0%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(5deg);
          }
          75% {
            transform: rotate(-5deg);
          }
        }
        
        @keyframes float-gentle {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        
        .animate-bounce {
          animation: bounce 2s infinite;
        }
        
        .animate-rotate {
          animation: rotate 3s linear infinite;
        }
        
        .animate-shake {
          animation: shake 0.5s ease-in-out infinite;
        }
        
        .animate-wiggle {
          animation: wiggle 1s ease-in-out infinite;
        }
        
        .animate-float-gentle {
          animation: float-gentle 3s ease-in-out infinite;
        }
        
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s ease-out forwards;
        }
        
        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out forwards;
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
        
        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
        
        .animate-slideInLeft {
          animation: slideInFromLeft 1s ease-out forwards;
        }
        
        .animate-slideInRight {
          animation: slideInFromRight 1s ease-out forwards;
        }
        
        .animate-bounce {
          animation: bounce 2s infinite;
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        
        .animate-rotate {
          animation: rotate 10s linear infinite;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.6s ease-out forwards;
        }
      `}</style>
      <div style={{ 
        minHeight: '100vh', 
        width: '100vw',
        margin: 0,
        padding: 0,
        fontFamily: 'system-ui, -apple-system, sans-serif',
        background: 'white',
        position: 'relative',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw'
      }}>
      
      {/* Hero Section */}
      <section style={{ 
        padding: '80px 0 60px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Animated Background Elements */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '10%',
          width: '100px',
          height: '100px',
          background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(59, 130, 246, 0.15))',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite, glow 3s ease-in-out infinite',
          zIndex: 0
        }}></div>
        <div style={{
          position: 'absolute',
          top: '20%',
          right: '15%',
          width: '60px',
          height: '60px',
          background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.15), rgba(139, 92, 246, 0.15))',
          borderRadius: '50%',
          animation: 'float 4s ease-in-out infinite reverse, bounce 2s ease-in-out infinite',
          zIndex: 0
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '20%',
          left: '20%',
          width: '80px',
          height: '80px',
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(16, 185, 129, 0.15))',
          borderRadius: '50%',
          animation: 'float 5s ease-in-out infinite, rotate 20s linear infinite',
          zIndex: 0
        }}></div>
        
        {/* Additional Floating Elements */}
        <div style={{
          position: 'absolute',
          top: '60%',
          right: '5%',
          width: '40px',
          height: '40px',
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(59, 130, 246, 0.2))',
          borderRadius: '50%',
          animation: 'float 3s ease-in-out infinite, scaleIn 2s ease-in-out infinite',
          zIndex: 0
        }}></div>
        <div style={{
          position: 'absolute',
          top: '30%',
          left: '5%',
          width: '30px',
          height: '30px',
          background: 'linear-gradient(135deg, rgba(245, 101, 101, 0.2), rgba(236, 72, 153, 0.2))',
          borderRadius: '50%',
          animation: 'float 4s ease-in-out infinite reverse, bounce 1.5s ease-in-out infinite',
          zIndex: 0
        }}></div>
        
        {/* Geometric Shapes */}
        <div style={{
          position: 'absolute',
          top: '15%',
          left: '50%',
          width: '20px',
          height: '20px',
          background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(59, 130, 246, 0.3))',
          transform: 'rotate(45deg)',
          animation: 'rotate 15s linear infinite, float 7s ease-in-out infinite',
          zIndex: 0
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '30%',
          right: '25%',
          width: '25px',
          height: '25px',
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.3), rgba(59, 130, 246, 0.3))',
          transform: 'rotate(45deg)',
          animation: 'rotate 12s linear infinite reverse, float 5s ease-in-out infinite',
          zIndex: 0
        }}></div>

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <h1 
            className={isVisible ? 'animate-fadeInUp' : ''}
            style={{ 
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: '700',
              color: '#1a202c',
              marginBottom: '24px',
              lineHeight: '1.1',
              letterSpacing: '-0.025em',
              opacity: isVisible ? 1 : 0
            }}>
            Building blocks for the{' '}
            <span style={{ 
              color: '#8b5cf6',
              background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'pulse 3s ease-in-out infinite'
            }}>enterprise</span> of the future
        </h1>
          
          <p 
            className={isVisible ? 'animate-fadeInUp' : ''}
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: '#6b7280',
              marginBottom: '48px',
              maxWidth: '600px',
              margin: '0 auto 48px',
              lineHeight: '1.6',
              fontWeight: '400',
              opacity: isVisible ? 1 : 0,
              animationDelay: '0.2s'
            }}>
            We've built Torza based on industry leading financial partners and cutting edge technology to ensure we provide the best services to our clients.
          </p>
          
          {/* Main Cards */}
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '40px',
            marginBottom: '80px'
          }}>
            {/* NFT Checkout Card */}
            <div 
              className={isVisible ? 'animate-slideInLeft' : ''}
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(248,250,252,0.9))',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                padding: '40px',
                boxShadow: '0 8px 32px rgba(139, 92, 246, 0.1), 0 4px 20px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(139, 92, 246, 0.2)',
                textAlign: 'left',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                opacity: isVisible ? 1 : 0,
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-12px) scale(1.03) rotateY(2deg)';
                e.currentTarget.style.boxShadow = '0 25px 50px rgba(139, 92, 246, 0.2), 0 10px 30px rgba(0, 0, 0, 0.15)';
                e.currentTarget.style.borderColor = '#8b5cf6';
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(248,250,252,0.95))';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1) rotateY(0deg)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(139, 92, 246, 0.1), 0 4px 20px rgba(0, 0, 0, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.2)';
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(248,250,252,0.9))';
              }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <div style={{ width: 44, height: 44, position: 'relative', borderRadius: 12, overflow: 'hidden' }}>
                  <Image src="https://images.unsplash.com/photo-1517433456452-f9633a875f6f?q=80&w=256&auto=format&fit=crop" alt="NFT Checkout blockchain UI" fill style={{ objectFit: 'cover' }} />
                </div>
                <h3 style={{ fontSize: '28px', fontWeight: '700', color: '#1a202c', margin: 0 }}>NFT checkout</h3>
              </div>
              <p style={{
                fontSize: '16px',
                color: '#6b7280',
                marginBottom: '24px',
                lineHeight: '1.6'
              }}>
                Enable seamless checkout of your web3 assets and NFTs.
              </p>
              <Link href="/checkout" style={{
                color: '#1a202c',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: '500',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                More about NFT checkout →
              </Link>
            </div>

            {/* Fiat Onramp Card */}
            <div 
              className={isVisible ? 'animate-fadeInRight' : ''}
              style={{
                background: 'white',
                borderRadius: '16px',
                padding: '40px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                border: '1px solid #e5e7eb',
                textAlign: 'left',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                opacity: isVisible ? 1 : 0,
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
                e.currentTarget.style.borderColor = '#3b82f6';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
                e.currentTarget.style.borderColor = '#e5e7eb';
              }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <div style={{ width: 44, height: 44, position: 'relative', borderRadius: 12, overflow: 'hidden' }}>
                  <Image src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=256&auto=format&fit=crop" alt="Onramp" fill style={{ objectFit: 'cover' }} />
                </div>
                <h3 style={{ fontSize: '28px', fontWeight: '700', color: '#1a202c', margin: 0 }}>Fiat onramp</h3>
              </div>
              <p style={{
                fontSize: '16px',
                color: '#6b7280',
                marginBottom: '24px',
                lineHeight: '1.6'
              }}>
                Sell utility tokens, gas and other DeFi assets along with your web3 assets.
              </p>
              <Link href="/fiat-onramp" style={{
                color: '#1a202c',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: '500',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                More about Fiat onramp →
              </Link>
            </div>

          </div>

          {/* CTA Buttons */}
          <div 
            className={isVisible ? 'animate-fadeInUp' : ''}
            style={{ 
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '80px',
              opacity: isVisible ? 1 : 0
            }}>
            <Link href="/contact" aria-label="Contact Sales" style={{ textDecoration: 'none' }}>
              <button style={{
                padding: '16px 32px',
                borderRadius: '8px',
                border: 'none',
                background: 'linear-gradient(135deg, #1a202c, #374151)',
                color: 'white',
                fontSize: '16px',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                fontFamily: 'system-ui, -apple-system, sans-serif',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(26, 32, 44, 0.3)';
                e.currentTarget.style.background = 'linear-gradient(135deg, #374151, #4b5563)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.background = 'linear-gradient(135deg, #1a202c, #374151)';
              }}>
                Contact Sales
              </button>
            </Link>
            <Link href="/docs" aria-label="Read the docs" style={{ textDecoration: 'none' }}>
              <button style={{
                padding: '16px 32px',
                borderRadius: '8px',
                border: '2px solid #1f2937',
                background: 'white',
                color: '#111827',
                fontSize: '16px',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                fontFamily: 'system-ui, -apple-system, sans-serif',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = '#f9fafb';
                e.currentTarget.style.borderColor = '#8b5cf6';
                e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(139, 92, 246, 0.2)';
                e.currentTarget.style.color = '#8b5cf6';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'white';
                e.currentTarget.style.borderColor = '#d1d5db';
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.color = '#1a202c';
              }}>
                Get Docs
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section style={{
        padding: '120px 0',
        background: 'white',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          {/* Demo heading/paragraph removed as requested */}

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px',
            marginBottom: '80px'
          }}>
            <div style={{
              background: 'white',
              borderRadius: '16px',
              padding: '30px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              border: '1px solid #e5e7eb',
              textAlign: 'center',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.12)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
            }}>
              <div style={{ width: 60, height: 60, position: 'relative', borderRadius: 12, overflow: 'hidden', margin: '0 auto 20px' }}>
                <Image src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=256&auto=format&fit=crop" alt="NFT Marketplaces" fill style={{ objectFit: 'cover' }} />
              </div>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '700',
                color: '#1a202c',
                marginBottom: '12px'
              }}>
                NFT Marketplaces
              </h3>
              <p style={{
                fontSize: '14px',
                color: '#6b7280',
                lineHeight: '1.5'
              }}>
                Accept credit cards for NFT purchases with instant settlement and fraud protection.
              </p>
          </div>

            <div style={{
              background: 'white',
              borderRadius: '16px',
              padding: '30px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              border: '1px solid #e5e7eb',
              textAlign: 'center',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.12)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
            }}>
              <div style={{ width: 60, height: 60, position: 'relative', borderRadius: 12, overflow: 'hidden', margin: '0 auto 20px' }}>
                <Image src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=256&auto=format&fit=crop" alt="DeFi" fill style={{ objectFit: 'cover' }} />
              </div>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '700',
                color: '#1a202c',
                marginBottom: '12px'
              }}>
                DeFi Protocols
              </h3>
              <p style={{
                fontSize: '14px',
                color: '#6b7280',
                lineHeight: '1.5'
              }}>
                Enable fiat onramps for your DeFi platform with seamless user experience.
              </p>
            </div>

            <div style={{
              background: 'white',
              borderRadius: '16px',
              padding: '30px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              border: '1px solid #e5e7eb',
              textAlign: 'center',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.12)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
            }}>
              <div style={{ width: 60, height: 60, position: 'relative', borderRadius: 12, overflow: 'hidden', margin: '0 auto 20px' }}>
                <Image src="https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=256&auto=format&fit=crop" alt="Gaming" fill style={{ objectFit: 'cover' }} />
              </div>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '700',
                color: '#1a202c',
                marginBottom: '12px'
              }}>
                Gaming Platforms
              </h3>
              <p style={{
                fontSize: '14px',
                color: '#6b7280',
                lineHeight: '1.5'
              }}>
                Integrate payment solutions for in-game purchases and virtual economies.
              </p>
            </div>

            <div style={{
              background: 'white',
              borderRadius: '16px',
              padding: '30px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              border: '1px solid #e5e7eb',
              textAlign: 'center',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.12)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
            }}>
              <div style={{ width: 60, height: 60, position: 'relative', borderRadius: 12, overflow: 'hidden', margin: '0 auto 20px' }}>
                <Image src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=256&auto=format&fit=crop" alt="Enterprise" fill style={{ objectFit: 'cover' }} />
              </div>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '700',
                color: '#1a202c',
                marginBottom: '12px'
              }}>
                Enterprise Solutions
              </h3>
              <p style={{
                fontSize: '14px',
                color: '#6b7280',
                lineHeight: '1.5'
              }}>
                Custom payment infrastructure for large-scale Web3 applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Security */}
      <section style={{
        padding: '80px 0',
        background: 'white',
        color: '#1a202c'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', fontWeight: 800, color: '#0b1020' }}>Compliance & Security</h2>
            <p style={{ color: '#6b7280' }}>Bank‑grade security, global coverage, battle‑tested risk.</p>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '16px'
          }}>
            {[{
              title: 'PCI DSS Level 1',
              desc: 'Card data handled with the highest certification.'
            },{
              title: 'GDPR compliant',
              desc: 'Data residency & privacy first.'
            },{
              title: 'AML / KYC',
              desc: 'Screening via leading risk partners.'
            },{
              title: '24/7 Monitoring',
              desc: 'Automated fraud and anomaly detection.'
            }].map((b) => (
              <div key={b.title} style={{
                background: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '14px',
                padding: '20px',
                boxShadow: '0 6px 16px rgba(0,0,0,0.04)'
              }}>
                <div style={{ fontWeight: 700, color: '#111827' }}>{b.title}</div>
                <div style={{ color: '#4b5563', marginTop: '6px', lineHeight: 1.5 }}>{b.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{
        padding: '120px 0',
        background: '#f9fafb',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Animated Background Pattern */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)',
          zIndex: 0
        }}></div>
        
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <div 
            className={isVisible ? 'animate-fadeInUp' : ''}
            style={{ 
              textAlign: 'center', 
              marginBottom: '80px',
              opacity: isVisible ? 1 : 0
            }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: '700',
              color: '#1a202c',
              marginBottom: '24px',
              letterSpacing: '-0.025em'
            }}>
              Why Leading Companies Choose Torza
            </h2>
            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: '#6b7280',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Enterprise-grade payment infrastructure with bank-level security, global compliance, and 24/7 dedicated support.
            </p>
        </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px'
          }}>
            <div 
              className={isVisible ? 'animate-fadeInUp' : ''}
              style={{
                background: 'white',
                borderRadius: '16px',
                padding: '40px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                border: '1px solid #e5e7eb',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                opacity: isVisible ? 1 : 0,
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
                e.currentTarget.style.borderColor = '#667eea';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
                e.currentTarget.style.borderColor = '#e5e7eb';
              }}>
              <div 
                className="animate-pulse"
                style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #667eea, #764ba2)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  marginBottom: '24px'
                }}>
                ⚡
              </div>
              <h3 style={{
                fontSize: '24px',
                fontWeight: '700',
                color: '#1a202c',
                marginBottom: '16px'
              }}>
                Global Scale
              </h3>
              <p style={{
                fontSize: '16px',
                color: '#6b7280',
                lineHeight: '1.6'
              }}>
                Process millions of transactions daily with our distributed infrastructure across 180+ countries.
              </p>
            </div>

            <div 
              className={isVisible ? 'animate-fadeInUp' : ''}
              style={{
                background: 'white',
                borderRadius: '16px',
                padding: '40px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                border: '1px solid #e5e7eb',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                opacity: isVisible ? 1 : 0,
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
                e.currentTarget.style.borderColor = '#f093fb';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
                e.currentTarget.style.borderColor = '#e5e7eb';
              }}>
              <div 
                className="animate-pulse"
                style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #f093fb, #f5576c)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  marginBottom: '24px'
                }}>
                🔒
              </div>
              <h3 style={{
                fontSize: '24px',
                fontWeight: '700',
                color: '#1a202c',
                marginBottom: '16px'
              }}>
                Regulatory Compliance
              </h3>
              <p style={{
                fontSize: '16px',
                color: '#6b7280',
                lineHeight: '1.6'
              }}>
                PCI DSS Level 1, SOC 2 Type II, and GDPR compliant with advanced fraud detection and AML compliance.
              </p>
            </div>

            <div 
              className={isVisible ? 'animate-fadeInUp' : ''}
              style={{
                background: 'white',
                borderRadius: '16px',
                padding: '40px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                border: '1px solid #e5e7eb',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                opacity: isVisible ? 1 : 0,
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
                e.currentTarget.style.borderColor = '#4facfe';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
                e.currentTarget.style.borderColor = '#e5e7eb';
              }}>
              <div 
                className="animate-pulse"
                style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #4facfe, #00f2fe)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  marginBottom: '24px'
                }}>
                🛠️
              </div>
              <h3 style={{
                fontSize: '24px',
                fontWeight: '700',
                color: '#1a202c',
                marginBottom: '16px'
              }}>
                Enterprise Support
              </h3>
              <p style={{
                fontSize: '16px',
                color: '#6b7280',
                lineHeight: '1.6'
              }}>
                Dedicated account managers, 24/7 technical support, and custom integration assistance for enterprise clients.
              </p>
          </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{
        padding: '120px 0',
        background: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Animated Background Elements */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '5%',
          width: '200px',
          height: '200px',
          background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.03), rgba(59, 130, 246, 0.03))',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite',
          zIndex: 0
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '30%',
          right: '10%',
          width: '150px',
          height: '150px',
          background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.03), rgba(139, 92, 246, 0.03))',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite reverse',
          zIndex: 0
        }}></div>
        
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <div 
            className={isVisible ? 'animate-fadeInUp' : ''}
            style={{ 
              textAlign: 'center', 
              marginBottom: '80px',
              opacity: isVisible ? 1 : 0
            }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: '700',
              color: '#1a202c',
              marginBottom: '24px',
              letterSpacing: '-0.025em'
            }}>
              Trusted by Industry Leaders
            </h2>
            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: '#6b7280',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              From Fortune 500 companies to innovative startups, see how businesses trust Torza for their payment infrastructure.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '40px',
            marginBottom: '80px'
          }}>
            <div 
              className={isVisible ? 'animate-fadeInUp' : ''}
              style={{ 
                textAlign: 'center',
                opacity: isVisible ? 1 : 0,
                transition: 'all 0.6s ease',
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
              }}>
              <div 
                className="animate-pulse"
                style={{
                  fontSize: 'clamp(2rem, 5vw, 3rem)',
                  fontWeight: '800',
                  color: '#1a202c',
                  marginBottom: '8px',
                  background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>$2.4B+</div>
              <div style={{
                fontSize: '16px',
                color: '#6b7280',
                fontWeight: '500'
              }}>Processed Volume</div>
            </div>
            <div 
              className={isVisible ? 'animate-fadeInUp' : ''}
              style={{ 
                textAlign: 'center',
                opacity: isVisible ? 1 : 0,
                transition: 'all 0.6s ease 0.1s',
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
              }}>
              <div 
                className="animate-pulse"
                style={{
                  fontSize: 'clamp(2rem, 5vw, 3rem)',
                  fontWeight: '800',
                  color: '#1a202c',
                  marginBottom: '8px',
                  background: 'linear-gradient(135deg, #f093fb, #f5576c)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>10,000+</div>
              <div style={{
                fontSize: '16px',
                color: '#6b7280',
                fontWeight: '500'
              }}>Active Merchants</div>
            </div>
            <div 
              className={isVisible ? 'animate-fadeInUp' : ''}
              style={{ 
                textAlign: 'center',
                opacity: isVisible ? 1 : 0,
                transition: 'all 0.6s ease 0.2s',
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
              }}>
              <div 
                className="animate-pulse"
                style={{
                  fontSize: 'clamp(2rem, 5vw, 3rem)',
                  fontWeight: '800',
                  color: '#1a202c',
                  marginBottom: '8px',
                  background: 'linear-gradient(135deg, #4facfe, #00f2fe)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>99.99%</div>
              <div style={{
                fontSize: '16px',
                color: '#6b7280',
                fontWeight: '500'
              }}>Uptime SLA</div>
            </div>
            <div 
              className={isVisible ? 'animate-fadeInUp' : ''}
              style={{ 
                textAlign: 'center',
                opacity: isVisible ? 1 : 0,
                transition: 'all 0.6s ease 0.3s',
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
              }}>
              <div 
                className="animate-pulse"
                style={{
                  fontSize: 'clamp(2rem, 5vw, 3rem)',
                  fontWeight: '800',
                  color: '#1a202c',
                  marginBottom: '8px',
                  background: 'linear-gradient(135deg, #10b981, #059669)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>180+</div>
              <div style={{
                fontSize: '16px',
                color: '#6b7280',
                fontWeight: '500'
              }}>Countries</div>
            </div>
          </div>

          {/* Testimonials */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '40px'
          }}>
            <div 
              className={isVisible ? 'animate-fadeInUp' : ''}
              style={{
                background: 'white',
                borderRadius: '16px',
                padding: '40px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                border: '1px solid #e5e7eb',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                opacity: isVisible ? 1 : 0,
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
                e.currentTarget.style.borderColor = '#667eea';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
                e.currentTarget.style.borderColor = '#e5e7eb';
              }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '24px'
              }}>
                <div style={{
                  width: '50px', height: '50px', borderRadius: '50%', marginRight: '16px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: 700, color: 'white',
                  background: 'linear-gradient(135deg, #667eea, #764ba2)'
                }}>S</div>
                <div>
                  <div style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    color: '#1a202c',
                    marginBottom: '4px'
                  }}>
                    Sarah Mitchell
                  </div>
                  <div style={{
                    fontSize: '14px',
                    color: '#6b7280'
                  }}>
                    VP of Engineering, TechCorp
                  </div>
                </div>
              </div>
              <p style={{
                fontSize: '16px',
                color: '#6b7280',
                lineHeight: '1.6',
                fontStyle: 'italic'
              }}>
                "Torza's payment infrastructure has been instrumental in scaling our global operations. The reliability and security are unmatched."
              </p>
            </div>

            <div 
              className={isVisible ? 'animate-fadeInUp' : ''}
              style={{
                background: 'white',
                borderRadius: '16px',
                padding: '40px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                border: '1px solid #e5e7eb',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                opacity: isVisible ? 1 : 0,
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
                e.currentTarget.style.borderColor = '#f093fb';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
                e.currentTarget.style.borderColor = '#e5e7eb';
              }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '24px'
              }}>
                <div style={{
                  width: '50px', height: '50px', borderRadius: '50%', marginRight: '16px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: 700, color: 'white',
                  background: 'linear-gradient(135deg, #f093fb, #f5576c)'
                }}>M</div>
                <div>
                  <div style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    color: '#1a202c',
                    marginBottom: '4px'
                  }}>
                    Michael Rodriguez
                  </div>
                  <div style={{
                    fontSize: '14px',
                    color: '#6b7280'
                  }}>
                    CEO, FinTech Innovations
                  </div>
                </div>
              </div>
              <p style={{
                fontSize: '16px',
                color: '#6b7280',
                lineHeight: '1.6',
                fontStyle: 'italic'
              }}>
                "Torza's comprehensive API suite and enterprise support enabled us to launch our payment platform 3x faster than expected."
              </p>
            </div>

            <div 
              className={isVisible ? 'animate-fadeInUp' : ''}
              style={{
                background: 'white',
                borderRadius: '16px',
                padding: '40px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                border: '1px solid #e5e7eb',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                opacity: isVisible ? 1 : 0,
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
                e.currentTarget.style.borderColor = '#4facfe';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
                e.currentTarget.style.borderColor = '#e5e7eb';
              }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '24px'
              }}>
                <div style={{
                  width: '50px', height: '50px', borderRadius: '50%', marginRight: '16px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: 700, color: 'white',
                  background: 'linear-gradient(135deg, #4facfe, #00f2fe)'
                }}>D</div>
                <div>
                  <div style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    color: '#1a202c',
                    marginBottom: '4px'
                  }}>
                    David Kim
                  </div>
                  <div style={{
                    fontSize: '14px',
                    color: '#6b7280'
                  }}>
                    CTO, Global Commerce Inc.
                  </div>
                </div>
              </div>
              <p style={{
                fontSize: '16px',
                color: '#6b7280',
                lineHeight: '1.6',
                fontStyle: 'italic'
              }}>
                "The compliance and regulatory features of Torza gave us the confidence to expand into new markets globally."
              </p>
            </div>
        </div>
        </div>
      </section>

      {/* Integration Section */}
      <section style={{
        padding: '120px 0',
        background: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: '700',
              color: '#1a202c',
              marginBottom: '24px',
              letterSpacing: '-0.025em'
            }}>
              Seamless Integration
            </h2>
            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: '#6b7280',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Get started in minutes with our comprehensive APIs, SDKs, and developer tools.
            </p>
    </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px'
          }}>
            <div style={{
              background: '#f9fafb',
              borderRadius: '16px',
              padding: '40px',
              textAlign: 'center'
            }}>
              <div style={{
                width: '80px',
                height: '103px',
                background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '32px',
                margin: '0 auto 24px'
              }}>
                ⚡
              </div>
              <h3 style={{
                fontSize: '24px',
                fontWeight: '700',
                color: '#1a202c',
                marginBottom: '16px'
              }}>
                Quick Setup
              </h3>
              <p style={{
                fontSize: '16px',
                color: '#6b7280',
                lineHeight: '1.6',
                marginBottom: '24px'
              }}>
                Get up and running in under 5 minutes with our simple integration process.
              </p>
              <div style={{
                background: '#1a202c',
                color: 'white',
                height: '40px',
                minWidth: '260px',
                padding: '0 16px',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '600',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                letterSpacing: '0.2px'
              }}>
                Contact Sales for Setup
              </div>
            </div>

            <div style={{
              background: '#f9fafb',
              borderRadius: '16px',
              padding: '40px',
              textAlign: 'center'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #f093fb, #f5576c)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '32px',
                margin: '0 auto 24px'
              }}>
                🔧
              </div>
              <h3 style={{
                fontSize: '24px',
                fontWeight: '700',
                color: '#1a202c',
                marginBottom: '16px'
              }}>
                Developer Tools
              </h3>
              <p style={{
                fontSize: '16px',
                color: '#6b7280',
                lineHeight: '1.6',
                marginBottom: '24px'
              }}>
                Comprehensive documentation, testing tools, and sandbox environment.
              </p>
              <div style={{
                background: '#1a202c',
                color: 'white',
                height: '40px',
                minWidth: '260px',
                padding: '0 16px',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '600',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                letterSpacing: '0.2px'
              }}>
                Custom API Documentation
              </div>
            </div>

            <div style={{
              background: '#f9fafb',
              borderRadius: '16px',
              padding: '40px',
              textAlign: 'center'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #4facfe, #00f2fe)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '32px',
                margin: '0 auto 24px'
              }}>
                🛡️
              </div>
              <h3 style={{
                fontSize: '24px',
                fontWeight: '700',
                color: '#1a202c',
                marginBottom: '16px'
              }}>
                Enterprise Security
              </h3>
              <p style={{
                fontSize: '16px',
                color: '#6b7280',
                lineHeight: '1.6',
                marginBottom: '24px'
              }}>
                Bank-grade security with PCI DSS compliance and advanced fraud detection.
              </p>
              <div style={{
                background: '#1a202c',
                color: 'white',
                height: '40px',
                minWidth: '260px',
                padding: '0 16px',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '600',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                letterSpacing: '0.2px'
              }}>
                99.99% Uptime SLA
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{
        padding: '120px 0',
        background: 'white',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          {/* Demo subtitle/desc removed */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px'
          }}>
            {[{
              icon: '🧩',
              title: '1. Configure',
              desc: 'Set up products, pricing and geographies in the dashboard.'
            },{
              icon: '🧪',
              title: '2. Integrate',
              desc: 'Drop-in checkout or API – copy, paste, and start testing.'
            },{
              icon: '🚀',
              title: '3. Go live',
              desc: 'Enable risk and compliance, then flip the switch to prod.'
            }].map((s) => (
              <div key={s.title} style={{
                background: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '16px',
                padding: '28px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.06)'
              }}>
                <div style={{ fontSize: '28px', marginBottom: '10px' }}>{s.icon}</div>
                <div style={{ fontWeight: 700, color: '#111827', marginBottom: '6px' }}>{s.title}</div>
                <div style={{ color: '#6b7280', lineHeight: 1.55 }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      

      {/* Final CTA Section */}
      <section style={{
        padding: '120px 0',
        textAlign: 'center',
        background: '#f9fafb',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Animated Background Elements */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '10%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 10s ease-in-out infinite',
          zIndex: 0
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '10%',
          right: '10%',
          width: '250px',
          height: '250px',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite reverse',
          zIndex: 0
        }}></div>
        
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <h2 
            className={isVisible ? 'animate-fadeInUp' : ''}
            style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: '700',
              color: '#1a202c',
              marginBottom: '24px',
              letterSpacing: '-0.025em',
              opacity: isVisible ? 1 : 0
            }}>
            Ready to Transform Your Payment Infrastructure?
          </h2>
          <p 
            className={isVisible ? 'animate-fadeInUp' : ''}
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: '#6b7280',
              marginBottom: '48px',
              lineHeight: '1.6',
              opacity: isVisible ? 1 : 0,
              animationDelay: '0.2s'
            }}>
            Join 10,000+ businesses already using Torza to power their payment operations worldwide.
          </p>
          <div 
            className={isVisible ? 'animate-fadeInUp' : ''}
            style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              opacity: isVisible ? 1 : 0,
              animationDelay: '0.4s'
            }}>
            <Link href="/try-torza" style={{ textDecoration: 'none' }}>
              <button style={{
                padding: '16px 32px',
                borderRadius: '8px',
                border: 'none',
                background: 'linear-gradient(135deg, #1a202c, #374151)',
                color: 'white',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                fontFamily: 'system-ui, -apple-system, sans-serif',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #374151, #4b5563)';
                e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(26, 32, 44, 0.3)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #1a202c, #374151)';
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                Get Started Today
              </button>
            </Link>
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <button style={{
                padding: '16px 32px',
                borderRadius: '8px',
                border: '1px solid #d1d5db',
                background: 'white',
                color: '#1a202c',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                fontFamily: 'system-ui, -apple-system, sans-serif',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = '#f9fafb';
                e.currentTarget.style.borderColor = '#8b5cf6';
                e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(139, 92, 246, 0.2)';
                e.currentTarget.style.color = '#8b5cf6';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'white';
                e.currentTarget.style.borderColor = '#d1d5db';
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.color = '#1a202c';
              }}>
                Contact Sales
              </button>
            </Link>
          </div>
        </div>
      </section>

    </div>
    </>
  );
}