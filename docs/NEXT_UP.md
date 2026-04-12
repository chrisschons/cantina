# Next Up (Near-Term)

## Priority sequence

1. Add OGP refresh/expiry jobs and failure retry strategy
2. Add collection item curation UX (bulk select, remove, reorder, filters)
3. Add library taxonomy editing and validated-vs-suggested metadata states
4. Add search query highlighting/snippet extraction in web results

## Recently completed

1. Improved search relevance and added Postgres full-text index for message body search

## Hardening

1. Add integration tests around auth and channel authorization
2. Add background cleanup jobs for expired/revoked auth sessions and old login attempt rows
3. Add audit logging for role changes, invite issuance/revocation, and admin actions
4. Add optional MFA/TOTP for owner/admin accounts
