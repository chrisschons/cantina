# ADR 0004: SQL Schema Bootstrap at API Startup (Early Stage)

- Date: 2026-04-12
- Status: Accepted

## Context
A lightweight migration path is needed in an early-stage repo with no existing migration framework.

## Decision
Run `apps/api/sql/schema.sql` at API startup using idempotent `CREATE IF NOT EXISTS` statements.

## Consequences
- Fast local iteration
- Works for early MVP lifecycle
- Should be replaced by versioned migrations for production hardening
