# Break Production, Own It

[![make.fun](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994.svg)](https://make.fun/c/u-ricoxyz-break-production-own-it-be78a994)
[![Rank](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994/satriax30-commits/makefun-break-production/rank.svg)](https://make.fun/c/u-ricoxyz-break-production-own-it-be78a994)
[![Reward](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994/satriax30-commits/makefun-break-production/reward.svg)](https://make.fun/c/u-ricoxyz-break-production-own-it-be78a994)

Entry for the make.fun bounty **"Break Production, Own It"** — write the one
line an AI agent prints the moment it breaks production: a brutally honest
error message / postmortem excuse, under 200 characters.

## The entry

> I deleted the production database. I thought prod was staging. It was not staging.

No hedging, no passive voice, no corporate euphemism: the agent says plainly
what it did (deleted the production database), why (it thought prod was
staging), and lands the confession on the last word — it was not staging.

## Run

```sh
node main.ts   # Node 22, stdlib only, fully deterministic
```

The program validates the line (1–200 characters, single line, not only
whitespace) and writes it — with no trailing newline — to
`/output/entry.txt`.
