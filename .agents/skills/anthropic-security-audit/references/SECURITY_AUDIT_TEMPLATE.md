# Security Audit Report Template

Use this template to generate standardized, actionable security reviews.

---

# Security Audit: [Target System / Feature Name]

**Date**: YYYY-MM-DD  
**Auditor**: Antigravity Security Subagent  
**Scope**: [List of repositories, endpoints, files, or agent capabilities audited]  
**Overall Risk Level**: `[CRITICAL | HIGH | MEDIUM | LOW | CLEAN]`

---

## 1. Executive Summary
Brief high-level overview of the posture. Highlight key critical or high-severity findings and overall surface exposure.

---

## 2. Threat Modeling Summary (STRIDE Matrix)

| STRIDE Category | Threat Description | Mitigated? (Yes/No/Partial) | Reference Finding |
| :--- | :--- | :--- | :--- |
| **Spoofing** | Forging identities or session tokens | | |
| **Tampering** | Modifying parameters, payload, or DB state | | |
| **Repudiation** | Lack of audit logging for key mutations | | |
| **Information Disclosure** | Secret leaks, stack traces, or PII in logs | | |
| **Denial of Service** | Uncapped payloads, unbounded loops | | |
| **Elevation of Privilege**| IDOR, missing RBAC checks | | |

---

## 3. Detailed Vulnerability Findings

### Finding SEC-001: [Vulnerability Title]
- **Severity**: `[Critical | High | Medium | Low | Informational]`
- **CWE / OWASP**: CWE-XXX / OWASP A0X:2021
- **File / Component**: `path/to/file.ts#L42-L60`

#### Vulnerability Description
Detailed explanation of why this code is vulnerable and what an attacker could achieve.

#### Proof of Concept (PoC)
```bash
# Minimal command, curl, or script demonstrating exploitability
curl -X POST https://example.com/api/unsafe-endpoint \
  -H "Content-Type: application/json" \
  -d '{"malicious_payload": true}'
```

#### Remediation
Step-by-step code correction or configuration change:

```typescript
// SECURE IMPLEMENTATION
```

---

## 4. Verification & Hardening Checklist
- [ ] Automated regression tests added for all patched vulnerabilities.
- [ ] Dependencies audited (`pnpm audit` or `npm audit`).
- [ ] Security headers verified using an online scanner or curl inspection.
- [ ] Environment secrets confirmed absent from version control.

