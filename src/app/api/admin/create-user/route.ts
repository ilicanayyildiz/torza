import { NextRequest } from 'next/server';
import { createAdmin } from '@/lib/supabase/admin';
import { createServer } from '@/lib/supabase/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const email: string | undefined = body?.email;
    if (!email) return Response.json({ error: 'Email required' }, { status: 400 });

    // Authenticated user and admin check
    const supabaseServer = await createServer();
    const { data: { user } } = await supabaseServer.auth.getUser();
    if (!user) return Response.json({ error: 'Unauthorized' }, { status: 401 });

    const admins = (process.env.ADMIN_EMAILS || '').split(',').map((s) => s.trim()).filter(Boolean);
    if (!admins.includes(user.email || '')) {
      return Response.json({ error: 'Forbidden' }, { status: 403 });
    }

    const admin = createAdmin();
    // Create user without password; send invite/magic link
    const { data, error } = await admin.auth.admin.createUser({
      email,
      email_confirm: true,
    });
    if (error) return Response.json({ error: error.message }, { status: 400 });

    // Generate sign-in link so the admin can copy/paste
    const linkRes = await admin.auth.admin.generateLink({
      type: 'magiclink',
      email,
      options: { redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback` },
    });
    if (linkRes.error) return Response.json({ error: linkRes.error.message }, { status: 400 });

    return Response.json({ user: data.user, signInLink: linkRes.data.properties?.action_link });
  } catch (e: any) {
    return Response.json({ error: e?.message || 'Unexpected error' }, { status: 500 });
  }
}


