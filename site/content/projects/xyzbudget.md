---
title: XYZBudget
description: A plan-first personal budgeting web app with live variance tracking, subscription automation, and analytics insights.
link: https://xyzbudget.vercel.app
github: https://github.com/Xuanyu6Chen/xyzbudget
tags: [next-js, typescript, supabase, tailwind-css, recharts]
types: [open-source]
order: 0
image: /images/xyzbudget/cover.png
---

### What it is

A personal budgeting web app that reverses the typical spending-then-tracking loop. You write your budget at the start of the month — planned income and per-category expense targets — then track transactions against the plan with live variance.

### What I built

- **Plan-first budgeting:** Monthly budget with planned income and per-category expense targets, enforced before spending mode becomes useful
- **Live variance tracking:** Planned minus actual, per category, updated with every transaction — green for under budget, red for over
- **Subscription automation:** Set a rule once (name, amount, cadence, charge day) and the app posts transactions automatically — with three-path idempotency to prevent duplicates
- **Timezone-aware scheduling:** Charge dates calculated in the user's local timezone, not the server's
- **Catch-up recovery:** If the app is offline, it walks back through every missed charge date and posts them all
- **Analytics dashboard:** Bar, pie, and line charts with auto-generated insights — over-budget warnings, top spending categories, month-over-month changes
- **CSV export:** Pull transaction data into a spreadsheet

### Read more

For the full technical writeup, see the blog post: [XYZBudget v1.1 — Plan First, Then Spend](/posts/2026-03-01-xyzbudget-v1-1).
