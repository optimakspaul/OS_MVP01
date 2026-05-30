create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger set_clients_updated_at
  before update on public.clients
  for each row
  execute function public.set_updated_at();

create trigger set_workspaces_updated_at
  before update on public.workspaces
  for each row
  execute function public.set_updated_at();

create index idx_clients_status
  on public.clients (status);

create index idx_workspaces_status
  on public.workspaces (status);

create index idx_workspaces_plan_key
  on public.workspaces (plan_key);
