'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function TryTorzaPage() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      fontFamily: 'system-ui, -apple-system, sans-serif',
      background: 'white'
    }}>
      {/* Hero (minimal try page) */}
      <section style={{
        padding: '120px 0 80px',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #fff7ed 0%, #ffedd5 45%, #fde68a 90%)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.25rem)', fontWeight: 800, color: '#0b1020', marginBottom: 12, lineHeight: 1.1 }}>Torza checkout demo on</h1>
          <div style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)', fontWeight: 900, color: '#ea580c', marginBottom: 12 }}>production environment</div>
          <p style={{
            fontSize: 16,
            color: '#374151',
            maxWidth: 720,
            margin: '0 auto 32px',
            lineHeight: 1.6
          }}>
            Your card will be charged and the purchased item will be sent to your wallet provided during the checkout.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/checkout" aria-label="Go to NFT Checkout" style={{ textDecoration: 'none' }}>
              <button style={{ padding: '12px 20px', borderRadius: 10, border: 'none', background: '#3b82f6', color: 'white', fontSize: 16, fontWeight: 700, cursor: 'pointer' }}>NFT Checkout</button>
            </Link>
            <span style={{ display: 'inline-flex', alignItems: 'center', color: '#6b7280' }}>or</span>
            <Link href="/fiat-onramp" aria-label="Go to Fiat Onramp" style={{ textDecoration: 'none' }}>
              <button style={{ padding: '12px 20px', borderRadius: 10, border: '2px solid #1f2937', background: 'transparent', color: '#111827', fontSize: 16, fontWeight: 700, cursor: 'pointer' }}>Fiat Onramp</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Minimal page ends here (footer follows) */}
    </div>
  );
}
