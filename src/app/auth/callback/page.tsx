'use client';

import { Suspense, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';


export default function AuthCallbackPage() {
  return (
    <Suspense fallback={
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 12, padding: 24 }}>Signing you in...</div>
      </div>
    }>
      <CallbackInner />
    </Suspense>
  );
}

function CallbackInner() {
  const router = useRouter();
  const params = useSearchParams();
  const supabase = createClient();

  useEffect(() => {
    const exchange = async () => {
      // If the URL contains a code param, exchange it for a session
      const code = params.get('code');
      const token_hash = params.get('token_hash');
      const type = params.get('type');
      const email = params.get('email');
      const error_desc = params.get('error_description');
      if (error_desc) {
        alert(error_desc);
        return;
      }
      try {
      if (code) {
        const { error } = await supabase.auth.exchangeCodeForSession(code);
        if (error) {
          alert(`Login failed: ${error.message}`);
          return;
        }
      } else if (token_hash && type === 'magiclink' && email) {
        const { error } = await supabase.auth.verifyOtp({
          email,
          token_hash,
          type: 'magiclink'
        });
        if (error) {
          alert(`Login failed: ${error.message}`);
          return;
        }
      }

      // Whether session came from code exchange or already present
      const { data: userData } = await supabase.auth.getUser();
      const user = userData.user;
      if (user) {
        await supabase
          .from('profiles')
          .upsert({ id: user.id, display_name: user.email ?? null })
          .select();
        router.replace('/dashboard');
        return;
      }
      } catch (e: any) {
        console.error(e);
      }

      // Fallback: go to sign-in
      router.replace('/auth/sign-in');
    };

    exchange();

    // Also subscribe to auth state as a safety net
    const { data: sub } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session?.user) {
        await supabase
          .from('profiles')
          .upsert({ id: session.user.id, display_name: session.user.email ?? null })
          .select();
        router.replace('/dashboard');
      }
    });

    return () => {
      sub.subscription.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}


