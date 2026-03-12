# Tre60 Grader

En premium one-page företagswebb byggd med Next.js, TypeScript och Tailwind CSS.

## Kom igång lokalt

```bash
npm install
npm run dev
```

Öppna `http://localhost:3000`.

## Bygg för produktion

```bash
npm run build
npm run start
```

## Struktur

- `app/` innehåller layout, metadata och startsidan.
- `components/site/` innehåller sektioner för landningssidan.
- `components/ui/` innehåller återanvändbara primitives.
- `lib/` innehåller innehållsdata och enklare hjälpfunktioner.

## Deployment

Sajten kan deployas direkt till Vercel eller annan Node-miljö som stöder Next.js.

1. Installera beroenden.
2. Kör `npm run build`.
3. Starta med `npm run start` eller deploya via plattformens Next.js-flöde.
