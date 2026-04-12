<<<<<<< HEAD
# tincan
repo for tincan social app
=======
# Tincan

Tincan is a private, self-hostable chat platform experiment inspired by Discord/Slack, built for small trusted communities.

## Current status

This repository is being built iteratively with architecture-first documentation and frequent, auditable commits.

## Monorepo layout

- `apps/api` - backend API and realtime gateway
- `apps/web` - frontend client (React + Vite)
- `packages/config` - shared TypeScript and lint config fragments
- `docker` - Dockerfiles and helper assets
- `docs` - specs, decisions, roadmaps, and work logs

## Principles for v1

- Single-server first (no federation in v1)
- Self-hosted and Docker-first
- Strong docs and changelog discipline
- Extensible architecture for plugins/modules later
>>>>>>> c0fd2e4 (chore: initialize Tincan monorepo and docs baseline)
