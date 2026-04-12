# Worklog

## 2026-04-12

- Initialized empty repository as Tincan monorepo
- Added foundational docs, roadmap, architecture, and ADRs
- Prepared for API and web MVP implementation
- Implemented API MVP in `apps/api` with schema bootstrap and core routes
- Added custom slash command APIs and command expansion on message create
- Added command management forms in web UI (user + server scopes)
- Added thread APIs and thread reply UI panel
- Added channel upload endpoint and attachment rendering in chat
- Added channel preference API and mode/snooze controls in UI
- Validated with `pnpm -r typecheck`, `pnpm -r build`, and Docker Compose config check
- Fixed Docker dev startup race by removing concurrent in-container installs from `api` and `web` commands
- Implemented web MVP in `apps/web` with auth and channel/message UI
- Added Docker Compose for app + postgres + redis
- Added API and setup docs plus version tracking
- Validation status: runtime checks blocked in this environment (`docker`, `node`, and `pnpm` are unavailable in sandbox)
