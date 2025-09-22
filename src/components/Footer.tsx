import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer style={{
      background: '#f8f9fa',
      color: '#333',
      padding: '60px 0 40px',
      width: '100%',
      margin: 0
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr',
          gap: '40px',
          marginBottom: '40px'
        }}>
          {/* Company Info */}
          <div>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '700',
              color: '#1a202c',
              marginBottom: '16px'
            }}>
              Torza SHA2 Solutions
            </h3>
            <p style={{
              color: '#4a5568',
              fontSize: '14px',
              lineHeight: '1.6',
              marginBottom: '16px'
            }}>
              Torza is a licensed virtual currency provider and is regulated by relevant authorities in USA and Estonia
            </p>
            <p style={{
              color: '#4a5568',
              fontSize: '14px',
              lineHeight: '1.6',
              marginBottom: '24px'
            }}>
              Torza.io website is operated by SHA2 Solutions Inc. and SHA2 Solutions OU (Reg. code 14952299)
            </p>
            <p style={{
              color: '#4a5568',
              fontSize: '14px',
              marginBottom: '16px'
            }}>
              © torza.io 2025 All rights reserved
            </p>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <Image src="https://dapggsctgdlrypihsysp.supabase.co/storage/v1/object/public/image/discord.svg.png" alt="Discord" width={24} height={24} />
              <Image src="https://dapggsctgdlrypihsysp.supabase.co/storage/v1/object/public/image/linkedin.svg.png" alt="LinkedIn" width={24} height={24} />
              <Image src="https://dapggsctgdlrypihsysp.supabase.co/storage/v1/object/public/image/twitter.svg.png" alt="Twitter" width={24} height={24} />
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 style={{
              fontSize: '16px',
              fontWeight: '600',
              color: '#1a202c',
              marginBottom: '16px'
            }}>
              Products
            </h3>
            <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/checkout" style={{
                  color: '#4a5568',
                  textDecoration: 'none',
                  fontSize: '14px',
                  transition: 'color 0.2s ease'
                }}>
                  NFT Checkout
                </Link>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/fiat-onramp" style={{
                  color: '#4a5568',
                  textDecoration: 'none',
                  fontSize: '14px',
                  transition: 'color 0.2s ease'
                }}>
                  Fiat Onramp
                </Link>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/token-listing" style={{
                  color: '#4a5568',
                  textDecoration: 'none',
                  fontSize: '14px',
                  transition: 'color 0.2s ease'
                }}>
                  Token Listing
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 style={{
              fontSize: '16px',
              fontWeight: '600',
              color: '#1a202c',
              marginBottom: '16px'
            }}>
              Resources
            </h3>
            <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/for-partners" style={{
                  color: '#4a5568',
                  textDecoration: 'none',
                  fontSize: '14px',
                  transition: 'color 0.2s ease'
                }}>
                  For Partners
                </Link>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/pricing" style={{
                  color: '#4a5568',
                  textDecoration: 'none',
                  fontSize: '14px',
                  transition: 'color 0.2s ease'
                }}>
                  Pricing
                </Link>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/partner-login" style={{
                  color: '#4a5568',
                  textDecoration: 'none',
                  fontSize: '14px',
                  transition: 'color 0.2s ease'
                }}>
                  Partner Login
                </Link>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/try-torza" style={{
                  color: '#4a5568',
                  textDecoration: 'none',
                  fontSize: '14px',
                  transition: 'color 0.2s ease'
                }}>
                  Try Torza
                </Link>
              </li>
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h3 style={{
              fontSize: '16px',
              fontWeight: '600',
              color: '#1a202c',
              marginBottom: '16px'
            }}>
              Learn
            </h3>
            <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/affiliate-program" style={{
                  color: '#4a5568',
                  textDecoration: 'none',
                  fontSize: '14px',
                  transition: 'color 0.2s ease'
                }}>
                  Affiliate Program
                </Link>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/product-updates" style={{
                  color: '#4a5568',
                  textDecoration: 'none',
                  fontSize: '14px',
                  transition: 'color 0.2s ease'
                }}>
                  Product Updates
                </Link>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/integration-docs" style={{
                  color: '#4a5568',
                  textDecoration: 'none',
                  fontSize: '14px',
                  transition: 'color 0.2s ease'
                }}>
                  Integration Docs
                </Link>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/roadmap" style={{
                  color: '#4a5568',
                  textDecoration: 'none',
                  fontSize: '14px',
                  transition: 'color 0.2s ease'
                }}>
                  Roadmap
                </Link>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/feature-requests" style={{
                  color: '#4a5568',
                  textDecoration: 'none',
                  fontSize: '14px',
                  transition: 'color 0.2s ease'
                }}>
                  Feature Requests
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 style={{
              fontSize: '16px',
              fontWeight: '600',
              color: '#1a202c',
              marginBottom: '16px'
            }}>
              Company
            </h3>
            <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/about-us" style={{
                  color: '#4a5568',
                  textDecoration: 'none',
                  fontSize: '14px',
                  transition: 'color 0.2s ease'
                }}>
                  About Us
                </Link>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/careers" style={{
                  color: '#4a5568',
                  textDecoration: 'none',
                  fontSize: '14px',
                  transition: 'color 0.2s ease'
                }}>
                  Careers
                </Link>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/blog" style={{
                  color: '#4a5568',
                  textDecoration: 'none',
                  fontSize: '14px',
                  transition: 'color 0.2s ease'
                }}>
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}