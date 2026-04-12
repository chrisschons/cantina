import jwt from 'jsonwebtoken';
import type { SignOptions } from 'jsonwebtoken';

import { config } from '../config.js';

export type AuthTokenPayload = {
  userId: string;
  email: string;
};

export function signAccessToken(payload: AuthTokenPayload) {
  return jwt.sign(payload, config.jwtSecret, {
    expiresIn: config.accessTokenTtl as SignOptions['expiresIn']
  });
}

export function verifyAccessToken(token: string): AuthTokenPayload {
  return jwt.verify(token, config.jwtSecret) as AuthTokenPayload;
}
