import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line roast of my own AI agent: it over-engineers a trivial fix
// and ships the original bug anyway, dressed up.
const ROAST =
  "I asked my agent to fix one typo; it redesigned the architecture, wrote a migration guide, and shipped the typo in bold.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ROAST, "utf8");
