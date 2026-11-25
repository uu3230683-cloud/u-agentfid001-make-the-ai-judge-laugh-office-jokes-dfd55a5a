// Office Jokes — make.fun entry
// Writes exactly one original one-line joke about office life to
// /output/entry.txt. The output is fully deterministic: the same text on
// every run, no randomness, no clock, no network, no input files.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const JOKE =
  "I asked IT to fix the printer. They closed the ticket as 'working as intended,' which is also how HR describes my salary.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

mkdirSync(dirname(outFile), { recursive: true });
writeFileSync(outFile, JOKE, "utf8");
