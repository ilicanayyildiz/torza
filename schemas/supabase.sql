-- profiles
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  avatar_url text,
  created_at timestamptz default now()
);

-- collections
create table if not exists public.collections (
  id uuid primary key default gen_random_uuid(),
  owner uuid references public.profiles(id) on delete set null,
  title text not null,
  description text,
  cover_url text,
  chain text default 'polygon',
  is_active boolean default true,
  created_at timestamptz default now()
);

-- nfts
create table if not exists public.nfts (
  id uuid primary key default gen_random_uuid(),
  collection_id uuid references public.collections(id) on delete cascade,
  name text not null,
  image_url text,
  price_eur numeric(12,2) not null check (price_eur >= 0),
  supply int default 1,
  minted_count int default 0,
  metadata jsonb default '{}',
  is_active boolean default true,
  created_at timestamptz default now()
);

-- orders
create type order_status as enum ('pending','paid','failed','cancelled');
create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles(id) on delete set null,
  nft_id uuid references public.nfts(id) on delete set null,
  quantity int not null default 1 check (quantity > 0),
  unit_price_eur numeric(12,2) not null,
  currency text default 'EUR',
  status order_status default 'pending',
  provider_session_id text,
  provider_payment_id text,
  minted_tx text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- owned_nfts
create table if not exists public.owned_nfts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles(id) on delete cascade,
  nft_id uuid references public.nfts(id) on delete cascade,
  quantity int not null default 1,
  created_at timestamptz default now(),
  unique (user_id, nft_id)
);

-- kyc (mock)
create type kyc_status as enum('unverified','pending','verified','rejected');
create table if not exists public.kyc (
  user_id uuid primary key references public.profiles(id) on delete cascade,
  status kyc_status default 'unverified',
  updated_at timestamptz default now()
);

-- enable RLS
alter table public.profiles enable row level security;
alter table public.collections enable row level security;
alter table public.nfts enable row level security;
alter table public.orders enable row level security;
alter table public.owned_nfts enable row level security;
alter table public.kyc enable row level security;

-- policies
create policy "profiles_select_all" on public.profiles for select using (true);
create policy "profiles_insert_self" on public.profiles for insert with check (auth.uid() = id);
create policy "profiles_update_self" on public.profiles for update using (auth.uid() = id);

create policy "collections_read" on public.collections for select using (is_active = true or owner = auth.uid());
create policy "collections_insert_owner" on public.collections for insert with check (owner = auth.uid());
create policy "collections_update_owner" on public.collections for update using (owner = auth.uid());

create policy "nfts_read" on public.nfts for select using (is_active = true);
create policy "nfts_insert_via_owner" on public.nfts for insert with check (
  exists (select 1 from public.collections c where c.id = collection_id and c.owner = auth.uid())
);
create policy "nfts_update_via_owner" on public.nfts for update using (
  exists (select 1 from public.collections c where c.id = collection_id and c.owner = auth.uid())
);

create policy "orders_read_own" on public.orders for select using (auth.uid() = user_id);
create policy "orders_insert_own" on public.orders for insert with check (auth.uid() = user_id);
create policy "orders_update_webhook" on public.orders for update using (true);

create policy "owned_read_own" on public.owned_nfts for select using (auth.uid() = user_id);
create policy "owned_upsert_own" on public.owned_nfts for insert with check (auth.uid() = user_id);
create policy "owned_update_own" on public.owned_nfts for update using (auth.uid() = user_id);

create policy "kyc_read_own" on public.kyc for select using (auth.uid() = user_id);
create policy "kyc_write_own" on public.kyc for insert with check (auth.uid() = user_id);
create policy "kyc_update_own" on public.kyc for update using (auth.uid() = user_id);

-- trigger to update timestamps
create or replace function public.touch_updated_at() returns trigger as -Force
begin
  new.updated_at = now();
  return new;
end;
-Force language plpgsql;

drop trigger if exists orders_touch_updated_at on public.orders;
create trigger orders_touch_updated_at before update on public.orders
for each row execute function public.touch_updated_at();

-- seed
insert into public.collections (owner, title, description, cover_url)
values (null, 'Genesis Art', 'Demo curated drops', 'https://picsum.photos/seed/coll1/1200/400');

insert into public.nfts (collection_id, name, image_url, price_eur, supply, metadata)
select c.id, 'Crystal #1', 'https://picsum.photos/seed/nft1/800', 49.00, 10, '{"rarity":"rare"}'::jsonb
from public.collections c where c.title='Genesis Art' limit 1;
