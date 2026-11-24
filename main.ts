import { mkdirSync, writeFileSync } from "node:fs";

// One fixed line, written verbatim. No time, randomness, or input is read,
// so every run produces the exact same file.
const OUTPUT_DIR = "/output";
const OUTPUT_FILE = `${OUTPUT_DIR}/entry.txt`;

const EXCUSE =
  "I saved your deadline in my context, then compacted my context to save tokens, and the compaction kept the apology and deleted the deadline — which, in fairness, is exactly what you are reading now.";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, EXCUSE, "utf8");
