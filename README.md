# Torza - Demo NFT Marketplace

A complete demo NFT marketplace with mock payments, built with Next.js 15, Supabase, and Tailwind CSS.

## ⚠️ Demo Only

This is a demonstration project with **mock payments only**. Do not use for production.

## Features

- Email OTP authentication with Supabase
- Public marketplace with collections and NFTs
- Mock hosted checkout with fake card forms
- Webhook simulation for payment processing
- Mock blockchain minting
- Seller dashboard for CRUD operations
- Developer documentation

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Supabase (Auth, DB, RLS)
- shadcn/ui components

## Setup

1. **Create Next.js app** (already done):
   `ash
   npx create-next-app@latest torza --typescript --eslint --app --src-dir --tailwind --use-npm
   `

2. **Install dependencies**:
   `ash
   npm i @supabase/ssr zod @radix-ui/react-slot
   `

3. **Environment variables**:
   `ash
   cp .env.example .env.local
   `
   Fill in your Supabase project details.

4. **Database setup**:
   - Open Supabase dashboard → SQL Editor
   - Run the contents of schemas/supabase.sql
   - This creates tables, RLS policies, and seed data

5. **Run development server**:
   `ash
   npm run dev
   `

6. **Sign in**:
   - Go to /auth/sign-in
   - Enter your email and use the magic link

## Mock Payment Flow

1. User clicks "Buy (Credit Card)" on NFT detail page
2. Creates order with status=pending
3. Redirects to mock hosted checkout (/mock/hosted)
4. User fills fake card form and clicks "Pay Now"
5. Triggers webhook simulation via /api/mock/complete
6. Webhook updates order status to paid and mints NFT
7. Redirects to success/cancel page

## API Endpoints

### POST /api/checkout
Creates a checkout session for an NFT.

`json
{
  "nftId": "uuid",
  "quantity": 1
}
`

### POST /api/webhook
Handles payment webhooks (mock implementation).

Headers: x-torza-signature: torza_demo_secret

`json
{
  "type": "payment.succeeded",
  "data": {
    "provider_session_id": "mock_sess_...",
    "provider_payment_id": "mock_pay_..."
  }
}
`

## Replacing Mock with Real Provider

1. Replace src/lib/payments/mockProvider.ts with real payment provider
2. Update webhook signature verification
3. Replace mock minting in src/lib/blockchain/mockMint.ts
4. Update hosted checkout UI in src/components/MockHostedCheckout.tsx

## Testing Webhooks

`ash
curl -X POST http://localhost:3000/api/webhook \
  -H "Content-Type: application/json" \
  -H "x-torza-signature: torza_demo_secret" \
  -d '{"type":"payment.succeeded","data":{"provider_session_id":"mock_sess_123","provider_payment_id":"mock_pay_456"}}'
`

## Security Notes

- RLS policies restrict data access by user
- Mock webhook secret is for demo only
- No real payment processing
- No real blockchain transactions

## Project Structure

`
torza/
├── src/
│   ├── app/                 # Next.js App Router pages
│   ├── components/          # React components
│   ├── lib/                 # Utilities and services
│   └── styles/              # Global styles
├── schemas/                 # Database schema
└── README.md
`

## License

Demo project - not for production use.
