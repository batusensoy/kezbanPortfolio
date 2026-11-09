---
name: security-guidance
description: >-
  Provides secure-by-default engineering standards, defensive coding patterns, credential protection,
  and vulnerability prevention across web applications and APIs. Use when configuring security headers,
  handling authentication, storing secrets, or implementing user input processing.
---

# Security Guidance: Secure-by-Default Engineering

Security is not an afterthought or an external layer; it is an architectural property built into every line of code, configuration file, and communication flow.

---

## 1. Golden Rules of Application Security

1. **Never Trust Client Input**: Everything originating from the client (headers, cookies, query strings, request bodies, local storage) is untrusted and potentially malicious.
2. **Defense in Depth**: Rely on multiple independent defense layers. If frontend validation fails, backend schema validation catches it; if backend fails, database constraints prevent corruption.
3. **Least Privilege**: Grant components, service accounts, and API tokens the minimum permissions necessary to perform their duty.
4. **Fail Securely**: When an unexpected error occurs, fail closed. Deny access, roll back transactions, and output safe, generic error messages.

---

## 2. Practical Security Patterns

### 1. Input Validation & Schema Enforcement
Always parse and sanitize inputs with Zod, Valibot, or similar libraries before passing to database or business logic:

```typescript
import { z } from 'zod';

export const ContactMessageSchema = z.object({
  name: z.string().trim().min(2, 'Name too short').max(80, 'Name too long'),
  email: z.string().trim().email('Invalid email address').max(254),
  message: z.string().trim().min(10, 'Message too short').max(2000, 'Message too long'),
});

export type ContactMessage = z.infer<typeof ContactMessageSchema>;
```

### 2. Secret Protection & Environment Hygiene
- Never commit `.env` or configuration files containing API keys, private tokens, or database credentials.
- Add `.env*` to `.gitignore` while providing an `.env.example` documenting variable names without real values.
- In Next.js / Vite projects: Ensure private server keys never carry `NEXT_PUBLIC_` or `VITE_` prefixes.

### 3. Secure HTTP Headers Configuration
Ensure your reverse proxy, CDN, or application framework serves hardened headers:

```javascript
// Next.js security headers example in next.config.js
const securityHeaders = [
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
  {
    key: 'Content-Security-Policy',
    value: "default-src 'self'; img-src 'self' data: https:; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline';",
  },
];
```

### 4. Cross-Site Request Forgery (CSRF) & SameSite Cookies
- Store authentication tokens in `HttpOnly`, `Secure`, `SameSite=Lax` (or `Strict`) cookies, not in browser `localStorage`.
- Use anti-CSRF tokens for state-modifying requests if cookies are used across domains.

---

## 3. Dependency & Supply Chain Hygiene

- Regularly run `npm audit` or `pnpm audit` to detect known vulnerabilities.
- Pin dependency versions or use lockfiles (`pnpm-lock.yaml`, `package-lock.json`) checked into version control.
- Avoid installing micro-packages for trivial functions (e.g. `is-number`, `left-pad`) to reduce attack surface.

