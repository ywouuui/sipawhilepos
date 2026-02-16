# Supabase DB Setup

## 1. Create tables
Open Supabase SQL Editor and run:

1. `supabase/schema.sql`
2. `supabase/seed.sql`

## 2. What gets created
- `app_settings`
- `categories`
- `products`
- `customers`
- `orders`
- `order_items`
- `transactions`
- `shifts`
- `expenses`

## 3. Notes
- IDs are UUIDs (`gen_random_uuid()`).
- `updated_at` is auto-maintained by triggers.
- Seed includes Sip Awhile defaults (categories, products, walk-in customer).
