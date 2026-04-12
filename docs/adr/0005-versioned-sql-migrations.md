# ADR 0005: Versioned SQL Migrations

- Date: 2026-04-12
- Status: Accepted

## Context
Startup schema bootstrap was useful for early prototyping but does not provide migration history, ordering, or safe incremental schema evolution.

## Decision
Move to versioned SQL files in `apps/api/sql/migrations` and track applied migrations in a `schema_migrations` table.

## Consequences
- Deterministic migration order and durable migration history
- Clear path for incremental schema changes
- Slightly more operational overhead compared to a single bootstrap script
