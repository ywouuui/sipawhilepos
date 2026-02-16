-- POSx / Sip Awhile Cafe
-- Supabase Postgres schema

create extension if not exists "pgcrypto";

create table if not exists app_settings (
  id uuid primary key default gen_random_uuid(),
  cafe_name text not null,
  address text not null,
  phone text not null,
  receipt_qr_image text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists categories (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  sizes text[] not null default '{}',
  is_drink boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists products (
  id uuid primary key default gen_random_uuid(),
  category_id uuid not null references categories(id) on delete cascade,
  name text not null,
  size text,
  price numeric(12,2) not null check (price >= 0),
  stock integer not null default 0 check (stock >= 0),
  image text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists idx_products_category_id on products(category_id);
create index if not exists idx_products_name on products(name);

create table if not exists customers (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text,
  email text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists shifts (
  id uuid primary key default gen_random_uuid(),
  is_open boolean not null default false,
  opening_amount numeric(12,2) not null default 0 check (opening_amount >= 0),
  drawer_amount numeric(12,2) not null default 0 check (drawer_amount >= 0),
  change_returned numeric(12,2) not null default 0 check (change_returned >= 0),
  opened_at timestamptz,
  closed_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists orders (
  id uuid primary key default gen_random_uuid(),
  order_code text not null unique,
  customer_name text not null,
  order_type text not null default 'Dine In' check (order_type in ('Dine In', 'Take Out')),
  payment_method text not null default 'Pending',
  payment_status text not null default 'Unpaid' check (payment_status in ('Unpaid', 'Paid')),
  fulfillment_status text not null default 'Preparing' check (fulfillment_status in ('Preparing', 'Completed')),
  subtotal numeric(12,2) not null default 0 check (subtotal >= 0),
  total numeric(12,2) not null default 0 check (total >= 0),
  received numeric(12,2) not null default 0 check (received >= 0),
  change numeric(12,2) not null default 0 check (change >= 0),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists idx_orders_created_at on orders(created_at desc);
create index if not exists idx_orders_payment_status on orders(payment_status);
create index if not exists idx_orders_fulfillment_status on orders(fulfillment_status);

create table if not exists order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references orders(id) on delete cascade,
  product_id uuid references products(id) on delete set null,
  item_name text not null,
  quantity integer not null check (quantity > 0),
  unit_price numeric(12,2) not null check (unit_price >= 0),
  line_total numeric(12,2) not null check (line_total >= 0),
  created_at timestamptz not null default now()
);

create index if not exists idx_order_items_order_id on order_items(order_id);

create table if not exists transactions (
  id uuid primary key default gen_random_uuid(),
  transaction_code text not null unique,
  order_id uuid references orders(id) on delete set null,
  method text not null,
  amount numeric(12,2) not null check (amount >= 0),
  created_at timestamptz not null default now()
);

create index if not exists idx_transactions_created_at on transactions(created_at desc);

create table if not exists expenses (
  id uuid primary key default gen_random_uuid(),
  note text not null,
  amount numeric(12,2) not null check (amount > 0),
  created_at timestamptz not null default now()
);

create index if not exists idx_expenses_created_at on expenses(created_at desc);

create or replace function set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists trg_app_settings_updated_at on app_settings;
create trigger trg_app_settings_updated_at
before update on app_settings
for each row execute function set_updated_at();

drop trigger if exists trg_categories_updated_at on categories;
create trigger trg_categories_updated_at
before update on categories
for each row execute function set_updated_at();

drop trigger if exists trg_products_updated_at on products;
create trigger trg_products_updated_at
before update on products
for each row execute function set_updated_at();

drop trigger if exists trg_customers_updated_at on customers;
create trigger trg_customers_updated_at
before update on customers
for each row execute function set_updated_at();

drop trigger if exists trg_shifts_updated_at on shifts;
create trigger trg_shifts_updated_at
before update on shifts
for each row execute function set_updated_at();

drop trigger if exists trg_orders_updated_at on orders;
create trigger trg_orders_updated_at
before update on orders
for each row execute function set_updated_at();
