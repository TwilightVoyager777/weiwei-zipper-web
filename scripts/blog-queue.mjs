#!/usr/bin/env node
/**
 * Prints how many articles are still waiting for their date, for the weekly
 * GitHub Actions job. Dependency-free on purpose: the job does not install
 * packages.
 */
import fs from 'node:fs';
import path from 'node:path';
import { countScheduled, readFrontmatterDate, shanghaiDate } from '../src/lib/blog-schedule.mjs';

const EN_DIR = path.join(process.cwd(), 'content/blog/en');
const dates = fs
  .readdirSync(EN_DIR)
  .filter((file) => file.endsWith('.md'))
  .map((file) => readFrontmatterDate(fs.readFileSync(path.join(EN_DIR, file), 'utf8')));

console.log(countScheduled(dates, shanghaiDate()));
