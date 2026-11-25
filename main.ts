// One Line, One Laugh — writes a single tight one-liner to the entry file.
// The joke is stored without a trailing newline: the harness counts every
// character in the file, and the gate is 1-140 characters total.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Speedrunning therapy: the setup promises healing, the twist is that the
// narrator treats emotional work like a timed game run — crying at world-
// record pace — and still wastes the leftover minutes on small talk with
// the one person they are paying to listen.
const JOKE =
  "My therapist charges by the hour, so I speedran my trauma, cried at world-record pace, and had two minutes left for small talk.";

function entryPath(): string {
  const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  return join(dir, "entry.txt");
}

function main(): void {
  const target = entryPath();
  mkdirSync(join(target, ".."), { recursive: true });
  // No "\n" appended on purpose — writeFileSync writes exactly JOKE.
  writeFileSync(target, JOKE, "utf8");
}

main();
