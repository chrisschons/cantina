# Setup Guide

## Prerequisites

- Docker + Docker Compose

## Quick start

1. Copy env template:
   - `cp .env.example .env`
2. Start stack:
   - `docker compose up --build`
3. Open:
   - Web: `http://localhost:5173`
   - API health: `http://localhost:4000/api/health`

## Notes

- API runs SQL schema bootstrap on startup from `apps/api/sql/schema.sql`.
- This is a development-oriented Compose file (installs dependencies at startup).
