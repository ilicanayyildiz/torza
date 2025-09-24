"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';

export default function BuySellPage() {
  const supabase = createClient();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const init = async () => {
      await supabase.auth.getSession();
      setReady(true);
    };
    init();
  }, [supabase]);

  if (!ready) {
    return (
      <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 12, padding: 20 }}>Loading...</div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '60vh', padding: '40px 24px', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <h1 style={{ fontSize: 28, fontWeight: 800, color: '#1a202c', marginBottom: 8 }}>Buy / Sell</h1>
      <p style={{ color: '#4b5563' }}>This page is intentionally left minimal for now.</p>
      <Link href="/dashboard" style={{ color: '#3b82f6', textDecoration: 'none', fontWeight: 600 }}>Back to Dashboard</Link>
    </div>
  );
}


