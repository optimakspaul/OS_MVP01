create table public.clients (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  status text not null default 'draft',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint clients_status_check
    check (status in ('draft', 'active', 'inactive', 'archived'))
);

create table public.workspaces (
  id uuid primary key default gen_random_uuid(),
  client_id uuid not null references public.clients (id),
  name text not null,
  status text not null default 'draft',
  plan_key text not null default 'solo_complete',
  template_key text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint workspaces_status_check
    check (status in ('draft', 'active', 'inactive', 'archived')),
  constraint workspaces_client_id_key
    unique (client_id)
);
