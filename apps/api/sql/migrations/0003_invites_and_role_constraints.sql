ALTER TABLE memberships
  DROP CONSTRAINT IF EXISTS memberships_role_check;
ALTER TABLE memberships
  ADD CONSTRAINT memberships_role_check
  CHECK (role IN ('owner', 'admin', 'member'));

CREATE TABLE IF NOT EXISTS invites (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  server_id UUID NOT NULL REFERENCES servers(id) ON DELETE CASCADE,
  code TEXT NOT NULL UNIQUE,
  created_by_user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  role_to_grant TEXT NOT NULL DEFAULT 'member',
  max_uses INT,
  uses_count INT NOT NULL DEFAULT 0,
  expires_at TIMESTAMPTZ,
  revoked_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CHECK (role_to_grant IN ('admin', 'member')),
  CHECK (max_uses IS NULL OR max_uses > 0)
);

CREATE INDEX IF NOT EXISTS idx_invites_server_id
  ON invites(server_id);
CREATE INDEX IF NOT EXISTS idx_invites_code
  ON invites(code);
