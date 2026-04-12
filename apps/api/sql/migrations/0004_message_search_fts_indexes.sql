CREATE INDEX IF NOT EXISTS idx_messages_body_fts
  ON messages
  USING GIN (to_tsvector('english', COALESCE(body, '')));

