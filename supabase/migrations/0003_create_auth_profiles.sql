create table public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  workspace_id uuid references public.workspaces (id),
  display_name text,
  email text,
  role text not null default 'client_admin',
  status text not null default 'pending',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint profiles_role_check
    check (role in ('platform_owner', 'client_admin', 'staff', 'technician')),
  constraint profiles_status_check
    check (status in ('pending', 'active', 'inactive', 'archived')),
  constraint profiles_workspace_role_check
    check (role = 'platform_owner' or workspace_id is not null)
);

create index idx_profiles_workspace_id
  on public.profiles (workspace_id);

create index idx_profiles_role
  on public.profiles (role);

create index idx_profiles_status
  on public.profiles (status);

create trigger set_profiles_updated_at
  before update on public.profiles
  for each row
  execute function public.set_updated_at();
