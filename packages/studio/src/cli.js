#!/usr/bin/env node

import { program } from "commander";
import { build, dev, preview } from "astro";
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

program
  .command('dev')
  .action(async () => {
    const server = await dev({
      root: join(__dirname, 'studio'),
      outDir: join(process.cwd(), 'build'),
    });
  });

program
  .command('build')
  .action(async () => {
    await build({
        root: join(__dirname, 'studio'),
        outDir: join(process.cwd(), 'build'),
    });
  });

program
  .command('preview')
  .action(async () => {
    await preview({
      root: join(__dirname, 'studio'),
      outDir: join(process.cwd(), 'build'),
    });
  });

program.parse();
