# ADR 0001: Single-Server-First Architecture

- Date: 2026-04-12
- Status: Accepted

## Context
Federation greatly increases identity, security, trust, and sync complexity.

## Decision
Build v1 as single-server only, while preserving clean boundaries for future federation.

## Consequences
- Faster initial shipping
- Simpler ops and threat model
- Migration work required later for federation
