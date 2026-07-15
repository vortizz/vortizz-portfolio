---
title: Flo
tagline: Full-stack Australian personal finance tracker with real Open Banking integration and 43 shipped features
tags:
  [
    "Next.js",
    "NestJS",
    "PostgreSQL",
    "Prisma",
    "Clerk",
    "Basiq API",
    "Fastify",
    "TypeScript",
    "Docker",
    "React Query",
  ]
featured: false
sortOrder: 9
---

::stack-chips{:items='["Next.js 15", "NestJS", "Fastify", "PostgreSQL", "Prisma 7", "Clerk", "Basiq API v3.0", "React Query", "Framer Motion", "Docker", "TypeScript"]'}
::

::media-carousel{:items='[{"type": "image", "src": "/images/projects/flo/landing-page.png", "caption": "Marketing landing page - Open Banking positioning, security messaging, and onboarding entry points."}, {"type": "image", "src": "/images/projects/flo/sign-up.png", "caption": "Account creation flow - Google/Apple OAuth alongside email sign-up, with a live dashboard preview panel."}, {"type": "image", "src": "/images/projects/flo/bank-connection.png", "caption": "Bank connection onboarding - guided 5-step Open Banking consent flow with real-time sync progress."}, {"type": "image", "src": "/images/projects/flo/dashboard.png", "caption": "Main dashboard - cashflow trend, spending by category, connected accounts, and recent transactions in one view."}, {"type": "image", "src": "/images/projects/flo/accounts.png", "caption": "Accounts page with a detail panel showing derived balance history, sync status, and recent activity per account."}, {"type": "image", "src": "/images/projects/flo/transactions.png", "caption": "Transaction management - searchable, filterable list with an inline detail/edit panel for category and budget status."}]'}
::

---

## Overview

Flo is a full-stack personal finance management (PFM) app built for the Australian market, designed around real Open Banking (Consumer Data Right) integration. It handles bank connection and transaction sync, a dashboard with spending insights, transaction management, custom categories, and manual cash account tracking - the same feature set and architecture expected of a production PFM product.

I built the entire product solo across 43 completed, issue-tracked milestones, from initial project scaffolding through to a fully working dashboard and transaction system.

::callout{type="info" title="Project Scope"}
This is a personal showcase project built from scratch to demonstrate full-stack product engineering: real third-party financial API integration, timezone-correct data handling, a custom dashboard and charting layer, and navigating a real-world regulatory constraint.
::

---

## My Role

::contribution{role="Solo Full-Stack Developer"}

- Designed and built the entire product end to end - architecture, backend, frontend, and data model
- Integrated Basiq's Open Banking API for bank connection, auth, and transaction sync
- Built a `NestJS` + `Fastify` backend with `Prisma`/`PostgreSQL`, covering accounts, transactions, categories, and dashboard aggregation endpoints
- Built the `Next.js 15` frontend, including the dashboard, onboarding flow, transaction management, and settings
- Implemented timezone-aware date handling across the full stack
- Designed a custom category system supporting both system and user-defined categories
- Shipped and tracked 43 features issue-by-issue on GitHub

::

---

## Problem

Personal finance apps are only useful if they can reliably connect to real bank accounts - pulling in transactions, deriving balances, and giving people an accurate, real-time view of their spending. In Australia, that means integrating with the Consumer Data Right (CDR), the regulatory framework behind Open Banking.

To pull live bank data, a provider needs either direct accreditation from the ACCC, or to operate as a "Representative" under an already-accredited provider (an Accredited Data Recipient, or ADR - Basiq and Frollo are examples). The Representative pathway is meant to be the accessible route for smaller developers, but in practice both providers reserve it for established businesses with a commercial relationship, not individual developers building a portfolio project. I approached both and was declined on that basis.

---

## Solution

Rather than treat the regulatory wall as a dead end, I built Flo to the same standard it would need for a real launch, and pointed the one component that legally required enterprise accreditation - the live bank connection - at Basiq's sandbox environment instead.

Everything upstream of that connection is production-grade:

- A real OAuth-style Open Banking consent and auth flow
- Real transaction sync with pagination and idempotent upserts (no duplicate transactions on repeated syncs)
- Real balance derivation, scoped only to account types where it stays accurate
- A 15-minute cron-based background sync, matching how a live integration would run

The result is a fully working app that behaves exactly as it would in production, just connected to test institutions instead of real banks.

---

## Application Features

### Authentication

- Sign up, sign in, and OAuth via Clerk
- Email verification and password reset flows

### Bank Connection

- Guided multi-step onboarding: select institution, consent, mobile verification, connect, sync
- Basiq-powered Open Banking auth and 90-day historical transaction fetch
- Automatic 15-minute background sync via cron

### Dashboard

- Summary stat cards (income, expenses, net savings)
- Cashflow trend chart with Detailed/Summary toggle and period navigation
- Spending-by-category donut chart
- Connected accounts and recent transactions at a glance

### Transactions

- Searchable, filterable transaction list (date range, account, category, type)
- Detail panel with inline editing, category reassignment, and exclude-from-budget toggle

### Accounts

- Connect, disconnect, and sync individual accounts
- Account detail panel with a 30-day derived balance history (transaction/savings accounts only)

### Categories

- System-defined categories plus fully custom user-defined categories with icon and color pickers

### Manual Accounts

- Cash account tracking alongside connected bank accounts, with full add/edit/delete support

---

## Technical Highlights

::decision{title="Sandbox-first architecture for a blocked live integration" tradeoff="No real bank data → identical engineering to a production Open Banking integration"}

Rather than simplify the integration once live CDR access proved unavailable, I kept every part of the sync pipeline - auth, pagination, idempotency, cron scheduling - built to production standard against Basiq's sandbox. The only substitution is the data source, not the engineering.

::

### Timezone-Correct Data Architecture

- Every request carries an `x-timezone` header rather than storing timezone in the database, where it would go stale
- Clear separation between UTC boundary helpers (used for Prisma queries) and display/grouping helpers (used for chart bucketing)

### Backend-Grouped Analytics

- Cashflow chart summaries (weekly/fortnightly/monthly) are grouped on the backend rather than shipping raw daily records to the client, keeping payloads small and chart rendering fast

### Idempotent Sync Pipeline

- Transaction sync upserts on a unique Basiq transaction ID, so overlapping or repeated syncs never create duplicate records
- Compound-unique constraints involving nullable fields handled with explicit `findFirst` + `create`/`update` logic, since Prisma's `upsert` doesn't support nullable fields in compound uniques

### Derived Balance History

- Open Banking data doesn't include historical balance snapshots, so balance history is derived by walking backwards from the current balance through stored transactions
- Scoped to transaction/savings accounts only - credit cards, mortgages, and loans are excluded, since large repayments distort the derived trend

---

## What This Project Demonstrates

- Solo ownership of a complete, multi-milestone product - from data model to polished UI
- Working with a real third-party financial API, including its auth quirks, pagination, and idempotency requirements
- Timezone-correct data handling across a full-stack application
- Backend-driven analytics design for fast, chart-ready aggregation
- Recognizing and adapting to a regulatory constraint outside my control, without compromising the quality of the engineering

---

## Impact

Flo is a complete, production-architected PFM application built solo, covering authentication, real Open Banking integration patterns, a full dashboard, transaction management, and custom categorization. Live bank data access was blocked by CDR accreditation requirements reserved for established businesses - not a gap in the engineering - and the project stands as a demonstration of shipping real-world financial software end to end.

---

## Links

- [GitHub Repository](https://github.com/vortizz/flo)
