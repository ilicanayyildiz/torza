'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function PartnerLoginPage() {
  const [formData, setFormData] = useState({
    user: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Login logic would go here
    alert('Login successful! Redirecting to dashboard...');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      fontFamily: 'system-ui, -apple-system, sans-serif',
      background: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>

      {/* Login Form */}
      <div style={{
        maxWidth: '650px',
        width: '100%',
        padding: '0 20px'
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '40px'
        }}>
          <h1 style={{
            fontSize: '28px',
            fontWeight: '600',
            color: '#000000',
            marginBottom: '0',
            letterSpacing: '-0.025em',
            fontFamily: 'system-ui, -apple-system, sans-serif'
          }}>
            Sign in to Torza
          </h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '32px' }}>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: '400',
              color: '#020203',
              marginBottom: '8px'
            }}>
              User
            </label>
            <input 
              type="text" 
              name="user"
              value={formData.user}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '12px 0',
                border: 'none',
                borderBottom: '1px solid #d1d5db',
                fontSize: '16px',
                fontFamily: 'system-ui, -apple-system, sans-serif',
                outline: 'none',
                transition: 'border-color 0.2s ease',
                background: 'transparent',
                boxSizing: 'border-box'
              }}
              onFocus={(e) => {
                e.target.style.borderBottomColor = '#3b82f6';
              }}
              onBlur={(e) => {
                e.target.style.borderBottomColor = '#d1d5db';
              }}
              placeholder=""
            />
          </div>

          <div style={{ marginBottom: '40px' }}>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: '400',
              color: '#020203',
              marginBottom: '8px'
            }}>
              Password
            </label>
            <div style={{ position: 'relative' }}>
              <input 
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '12px 0',
                  paddingRight: '32px',
                  border: 'none',
                  borderBottom: '1px solid #d1d5db',
                  fontSize: '16px',
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  outline: 'none',
                  transition: 'border-color 0.2s ease',
                  background: 'transparent',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => {
                  e.target.style.borderBottomColor = '#3b82f6';
                }}
                onBlur={(e) => {
                  e.target.style.borderBottomColor = '#d1d5db';
                }}
                placeholder=""
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: '0',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '16px',
                  color: '#020203',
                  padding: '4px'
                }}
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>
          </div>

          <button 
            type="submit"
            style={{
              width: '100%',
              padding: '14px 24px',
              borderRadius: '8px',
              border: 'none',
              background: '#020203',
              color: 'white',
              fontSize: '16px',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease',
              fontFamily: 'system-ui, -apple-system, sans-serif'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = '#1f2937';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = '#374151';
            }}
          >
            Log In
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Link href="/forgot-password" style={{
            fontSize: '14px',
            color: '#003fbd',
            textDecoration: 'none',
            fontFamily: 'system-ui, -apple-system, sans-serif'
          }}>
            Forgot your password?
          </Link>
        </div>
      </div>
    </div>
  );
}
