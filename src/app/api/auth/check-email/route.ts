import { NextResponse } from 'next/server';
import { createAdmin } from '@/lib/supabase/admin';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const admin = createAdmin();
    // listUsers doesn't support filtering by email directly; fetch first page and check
    const { data, error } = await admin.auth.admin.listUsers({ page: 1, perPage: 2000 });
    if (error) return NextResponse.json({ error: error.message }, { status: 400 });
    const exists = (data?.users || []).some(u => (u.email || '').toLowerCase() === email.toLowerCase());
    return NextResponse.json({ exists });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || 'Failed to check email' }, { status: 500 });
  }
}


