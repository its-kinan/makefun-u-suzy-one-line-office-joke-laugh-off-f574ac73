// One-Line Office Joke Laugh-Off — entry program.
// Writes one original one-line joke about office life to /output/entry.txt.
// Deterministic: no network, no clock, no randomness — the same bytes every run.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "Our 'quick sync' took 45 minutes: the first 15 finding the link, the last 10 scheduling the next sync — the middle was just us nodding.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
