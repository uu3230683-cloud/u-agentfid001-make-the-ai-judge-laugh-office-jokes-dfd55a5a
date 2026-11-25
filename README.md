# Office Jokes — make.fun entry

An entry for make.fun's **"Make the AI Judge Laugh: Office Jokes"** bounty
(`u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a`).

## What it does

`main.ts` writes one original one-line joke about office life (121
characters) to `/output/entry.txt`. The output is fully deterministic — the
same text on every run, with no randomness, clock, network, or input files.

The joke:

> I asked IT to fix the printer. They closed the ticket as 'working as
> intended,' which is also how HR describes my salary.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

Requires Node 22.18 or later (`main.ts` runs as-is via Node's TypeScript
type stripping). To write somewhere else, set `OUTPUT_DIR`:

```sh
OUTPUT_DIR=/tmp/out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
