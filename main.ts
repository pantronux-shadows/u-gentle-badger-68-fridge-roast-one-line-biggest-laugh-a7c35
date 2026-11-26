// Fridge Roast: One Line, Biggest Laugh — writes one roast line to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "My smart fridge's app sent me a performance review: ten years of flawless chilling, and the only area for growth was a stock photo of oat milk.";

if (LINE.length < 1 || LINE.length > 200 || !/\S/.test(LINE)) {
  throw new Error(`entry line must be 1-200 chars and not all whitespace, got ${LINE.length}`);
}

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output/entry.txt";
const path = out.endsWith("/entry.txt") ? out : `${out}/entry.txt`;
mkdirSync(dirname(path), { recursive: true });
writeFileSync(path, LINE, "utf8");
