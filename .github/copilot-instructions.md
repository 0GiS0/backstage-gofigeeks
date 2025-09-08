# Copilot instructions for this Backstage repo

This is a Yarn 4 monorepo for a Backstage IDP. Use these codebase-specific notes to work effectively and avoid guesswork.

## Repo shape and tooling
- Monorepo root: `backstage/` (workspaces: `packages/*`, `plugins/*`).
- Frontend: `packages/app` (role: frontend). Backend: `packages/backend` (role: backend).
- Tooling: Node 20/22, Yarn 4.4.1, Backstage CLI. Default ports: app 3000, backend 7007.

## Run, build, test
- Dev (both services): from `backstage/` run `yarn install` then `yarn start` (alias for `backstage-cli repo start`).
- Build: `yarn build:all`; backend Docker image: `yarn build-image`.
- Tests: `yarn test` (unit), `yarn test:all` (coverage). E2E: `yarn test:e2e` (Playwright auto-starts `yarn start`; see `playwright.config.ts`).
- Lint/format: `yarn lint` (since origin/main), `yarn lint:all`, `yarn fix`, `yarn prettier:check`.
- Targeted scripts: `yarn workspace app|backend <script>` (e.g., `yarn workspace backend build`).

## Configuration model
- Base config: `app-config.yaml`; local dev overrides: `app-config.local.yaml`; prod: `app-config.production.yaml`.
- Common env vars: `POSTGRES_HOST|PORT|USER|PASSWORD`, `GITHUB_APP_CLIENT_ID|SECRET`, `BACKEND_SECRET`.
- GitHub App credentials are included via `$include: github-app-credentials.yaml` under `integrations.github`.
- TechDocs: local builder; generator runs in Docker; publisher is local by default (switch in prod).

## Architecture at a glance
- Frontend (`packages/app/src/App.tsx`):
  - Boot with `createApp({ apis, bindRoutes, components })`; GitHub sign-in via `githubAuthApiRef`.
  - Routes via `FlatRoutes` for Catalog, TechDocs, Scaffolder, Search, User Settings, Catalog Graph.
  - Route bindings connect plugins (e.g., `catalogPlugin.externalRoutes.createComponent` -> `scaffolderPlugin.routes.root`).
  - Customize entity UI in `components/catalog/EntityPage.tsx`; branding in `components/Root/*`.
- Backend (`packages/backend/src/index.ts`):
  - Composed with `createBackend()` and `backend.add(import('...'))` per plugin.
  - Enabled: app-backend, proxy, scaffolder (+github), techdocs, auth (+github provider), catalog (+github org/entity providers + logs), permissions (allow-all policy), search (pg engine + catalog/techdocs collators), kubernetes.
  - Database: Postgres; search uses the Postgres module (see `app-config*.yaml`).

## Catalog and data flow
- GitHub providers under `catalog.providers.github` ingest org/repos (see `app-config.yaml`).
- Additional `catalog.locations` include local examples (e.g., `examples/org.yaml` for Users/Groups).
- Frontend talks to backend via app-backend plugin; in prod, align `app.baseUrl` with `backend.baseUrl` (`app-config.production.yaml`).

## Conventions and tips
- Add backend plugin: `backend.add(import('@backstage/plugin-<name>'))` and configure in `app-config*.yaml`.
- Add frontend plugin/page: import plugin, add a `<Route/>` in `App.tsx`, wire external routes in `bindRoutes` if needed.
- Prefer repo-level scripts; fall back to workspace scripts for app/backend specific tasks.
- Keep secrets in env/credential files; reference via `${VARS}` in configs.

## Quick pointers
- Root scripts: `backstage/package.json`.
- App/backend scripts: `packages/app/package.json`, `packages/backend/package.json`.
- E2E example: `packages/app/e2e-tests/app.test.ts` (expects “Enter” then “My Company Catalog”).
- Playwright setup: `playwright.config.ts` (starts local server, sets baseURL).
- Configs: `app-config.yaml`, `app-config.local.yaml`, `app-config.production.yaml`.

If anything is unclear or missing (e.g., CI workflows or additional providers), open an issue/ask and we’ll refine this file.
