import { createServer } from '@/lib/supabase/server';

export default function NewCollectionPage() {
  async function createAction(formData: FormData) {
    'use server';
    const supabase = await createServer();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;
    
    const title = String(formData.get('title') ?? '');
    const description = String(formData.get('description') ?? '');
    const cover_url = String(formData.get('cover_url') ?? '');
    
    await supabase.from('collections').insert({
      owner: user.id,
      title,
      description,
      cover_url,
      is_active: true,
    });
  }

  return (
    <form action={createAction} className="max-w-lg space-y-3">
      <h1 className="text-2xl font-bold">New Collection</h1>
      <input name="title" placeholder="Title" className="border p-2 rounded w-full" required />
      <input name="description" placeholder="Description" className="border p-2 rounded w-full" />
      <input name="cover_url" placeholder="Cover URL" className="border p-2 rounded w-full" />
      <button className="px-4 py-2 bg-black text-white rounded" type="submit">Create</button>
    </form>
  );
}
