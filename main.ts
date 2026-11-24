// Break Production, Own It — make.fun entry.
// The program writes one brutally honest line: the confession an AI agent
// prints the instant it realizes it just deleted the production database.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY =
  "I deleted the production database. I thought prod was staging. It was not staging.";

// Fully deterministic: no clock, no randomness, no network, no environment
// reads. The entry is a fixed string; the program only validates it and
// writes it out, so every run produces byte-identical output.
function validate(text: string): void {
  const length = [...text].length;
  if (length < 1 || length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  for (const ch of text) {
    const code = ch.codePointAt(0) as number;
    if (code < 0x20 && ch !== "\t") {
      throw new Error("entry must not contain control characters");
    }
  }
}

validate(ENTRY);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

// Round-trip check: what landed on disk must be exactly the entry, with no
// trailing newline added by the write.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== ENTRY) {
  throw new Error("written entry does not match the validated entry");
}
