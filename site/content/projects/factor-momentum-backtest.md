---
title: Factor Momentum Backtest
description: Monthly top-K momentum strategy backtest with transaction costs, metrics, and reproducible results.
link: https://xuanyuchen.com
github: https://github.com/Xuanyu6Chen/Factor-Momentum-Backtest
tags: [python, pandas, numpy, backtesting, finance]
types: [open-source]
order: 1
---

### What it is

A backtesting pipeline for a factor momentum strategy: generate momentum signals, form a portfolio on rebalance dates, and evaluate performance with realistic trading costs.

### What I built

- **Signal generation:** momentum scores computed from historical returns
- **Portfolio construction:** monthly rebalance, top-K selection, equal-weight allocation
- **Backtest engine:** daily portfolio returns from weights × daily asset returns
- **Evaluation:** CAGR, volatility, Sharpe, max drawdown, turnover + cost impact
- **Reporting:** equity curve and comparison tables across cost assumptions
