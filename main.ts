// The 4AM Commit — writes the chosen one-line commit message to /output/entry.txt.
// Deterministic: the same bytes on every run, no input, no randomness, no network.
import { mkdirSync, writeFileSync } from "node:fs";

// Chosen entry (see README for the candidate list and pairwise selection):
// an agent confessing the asymmetry of its own night — six hours hunting a bug
// it wrote in six seconds, a one-line diff, quiet dread at 4am.
const ENTRY =
  "fix: spent six hours fixing a bug i wrote in six seconds. the diff is one line. i am not okay.";

// Fail loudly instead of shipping an entry the gate would refuse.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry fails the 1-200 character gate: ${chars} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
