---
title: AI Syllabus Analysis
description: Pipeline to collect and analyze AI-related syllabi across universities using scraping + LLM-assisted extraction.
link: https://xuanyuchen.com
github: https://github.com/Xuanyu6Chen
tags: [python, web-scraping, llm, data-analysis]
types: [research]
order: 2
---

### What it is

A research project to compare AI-related course syllabi across institutions and departments, focusing on topic coverage, learning objectives, and policy language.

### Pipeline

- **Collection (Web scraping):** Crawl public university pages and collect syllabus PDFs + metadata.
- **Conversion (PDF → text):** Convert PDFs to normalized text.
- **Extraction (LLM-assisted):** Extract and normalize AI-related course policy into a structured schema.
- **Dataset build (JSONL):** Build one JSONL record per syllabus.
- **Fine-tuning (NEXT):** LoRA fine-tune an instruction-following model on a labeled subset of syllabi to improve policy extraction consistency.
- **Analysis:** Compare policy patterns across schools and departments.

### Status

In progress: Preparing labeled data and implementing LoRA fine-tuning.
