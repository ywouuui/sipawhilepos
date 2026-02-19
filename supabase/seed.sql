-- Seed data for Sip Awhile Cafe POS

insert into app_settings (cafe_name, address, phone, receipt_qr_image)
values ('Sip Awhile Cafe', '123 Main St, City', '(555) 123-4567', '')
on conflict do nothing;

insert into categories (name, sizes, is_drink)
values
  ('Coffee', array['Small','Medium','Large'], true),
  ('Food', array[]::text[], false)
on conflict (name) do update
set sizes = excluded.sizes,
    is_drink = excluded.is_drink,
    updated_at = now();

with c as (
  select id, name from categories
)
insert into products (category_id, name, size, price, stock, image)
select c.id, p.name, p.size, p.price, p.stock, '' as image
from (
  values
    ('Coffee','Americano','Small', 3.00::numeric, 30),
    ('Coffee','Americano','Medium',3.50::numeric, 28),
    ('Coffee','Americano','Large', 4.00::numeric, 24),
    ('Coffee','Cappuccino','Small',3.75::numeric, 20),
    ('Coffee','Cappuccino','Medium',4.25::numeric, 18),
    ('Coffee','Cappuccino','Large',4.75::numeric, 16),
) as p(category_name, name, size, price, stock)
join c on c.name = p.category_name
where not exists (
  select 1 from products x
  where x.category_id = c.id
    and x.name = p.name
    and coalesce(x.size,'') = coalesce(p.size,'')
);

insert into customers (name, phone, email)
values ('Walk-in Customer', '-', '')
on conflict do nothing;

insert into shifts (is_open, opening_amount, drawer_amount, change_returned, opened_at)
select false, 0, 0, 0, null
where not exists (select 1 from shifts);
