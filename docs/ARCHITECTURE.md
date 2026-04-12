# Architecture Overview (v0.1)

## Scope

Tincan v1 targets a single private community hosted on one server.

## High-level components

1. Web client (`apps/web`)
2. API server (`apps/api`)
3. PostgreSQL (primary data store)
4. Redis (ephemeral state, pub/sub, cache)
5. Object storage (planned in Phase 2)

## Domain model (initial)

- `User`
- `Server` (community namespace)
- `Membership` (user-server relation)
- `Channel`
- `Message`
- `Reaction`
- `ChannelPreference` (hidden/passive/active + snooze)
- `ReadState` (per-user per-channel watermark)

## API design principles

- REST for primary CRUD and queries
- WebSocket for realtime fanout
- JWT auth (short-lived access + rotating refresh sessions)
- Capability hooks reserved for module system

## Non-goals in v1

- Federation
- Multi-home identities
- Marketplace/distributed modules
