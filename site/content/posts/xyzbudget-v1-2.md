---
title: 'XYZBudget v1.2 — Fixing What Was Quietly Broken'
description: 'Two promised features shipped, one deferred, and ten small bugs that had to be fixed before adding anything new.'
pubDate: 2026-04-11
tags: ['project', 'web-dev', 'next-js', 'supabase']
featured: true
ogImage: '/images/xyzbudget/cover.png'
---

For v1.2, I promised three things: better handling of daylight saving time, a redesigned analytics page, and recurring income. I kept two, pushed one to next release, and fixed ten smaller bugs along the way.

---

## What I Shipped

**Recurring income.** v1.1 could track recurring expenses (Netflix, rent) but not recurring income (salary, retainers). That felt lopsided — if the app is about planning your money, you need to plan both sides of the ledger. Now you can set your salary to auto-post on the 1st and forget about it.

![Recurring income rule setup — same form pattern as subscriptions, flowing the other direction](/images/xyzbudget/recurring-income.png)
*Fig. 1: Recurring income setup — salary and retainers auto-post on their scheduled day.*

**Daylight saving time fix.** Twice a year, clocks shift by an hour. In v1.1, that small shift could occasionally cause a subscription to look like two charges instead of one. Annoying, rare, and now fixed.

---

## What I Pushed to v1.3

**The analytics redesign.** I started it, then stopped. The current page shows a lot of charts but doesn't really answer a specific question. I'd rather hold it until I know exactly what I want it to say than ship a prettier version of something vague. A good analytics page answers one question clearly, not twelve questions fuzzily.

---

## The Quiet Bugs

While working on the two big features, I kept finding small things in v1.1 that were subtly wrong. I fixed ten of them. Most shared the same root cause: **I had assumed everyone lived in the same time zone as the server. They don't.**

Here's what that looked like in practice:

- If you opened the app late at night, you could sometimes see *next month's* budget instead of the current one.
- A coffee bought at 11pm could get logged on the wrong day, which then threw off weekly and monthly charts.
- Some week labels around New Year's were grouped into the wrong year entirely.

Six of the ten fixes were variations of this same mistake. The rule I follow now: the database stores one universal time, the app shows your local time, and the conversion happens in exactly one place.

The other four were unrelated but worth mentioning:

- **A small security hole in the login flow** that could have redirected users to a malicious site right after signing in. Closed.
- **Monthly and weekly charts were secretly showing daily data.** The numbers were real — just grouped wrong.
- **Over-budget alerts weren't firing** because of a mismatch between how the app categorized a charge and how the check looked it up.
- **A rule that had been inactive for a long time could get stuck** and never catch up. Now it moves forward properly.

None of these would have shown up in a changelog most users read. But they were the kind of thing that erodes trust if you leave them alone.

---

## What's Next

v1.3 is the analytics redesign I deferred. Now that the underlying numbers are actually correct — right time zones, right categories, right groupings — I can finally think about what story they should tell.

---

## Try It

XYZBudget is live at [xyzbudget.vercel.app](https://xyzbudget.vercel.app).

If you've ever shipped something and later discovered it was quietly wrong in six places at once — you know exactly the feeling v1.2 was built to fix.
