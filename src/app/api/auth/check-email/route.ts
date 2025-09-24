import { NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/admin';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const admin = createAdminClient();
    const { data, error } = await admin.auth.admin.getUserByEmail(email);
    if (error && error.message && !error.message.includes('not found')) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    const exists = !!data;
    return NextResponse.json({ exists });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || 'Failed to check email' }, { status: 500 });
  }
}


