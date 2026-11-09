---
name: impeccable
description: >-
  Enforces zero-defect engineering, impeccable code quality, rigorous type safety,
  uncompromising edge-case handling, and architectural elegance. Use when conducting deep code
  hardening, refactoring critical systems, or elevating engineering standards to production perfection.
---

# Impeccable: Zero-Defect Engineering & High-Standard Quality

Impeccable execution is the relentless pursuit of correctness, resilience, readability, and elegance. Code produced under this standard has zero dead ends, airtight typings, explicit failure modes, and deterministic behavior.

---

## 1. Pillars of Impeccable Craft

1. **Defensive Invariant Enforcement**: Never assume external data is well-formed. Validate at boundaries (Zod, ArkType, or type guards) and guarantee types inside the core logic.
2. **Explicit Over Implicit**: Reject magic values, implicit casts, loose string constants, or unhandled promise rejections.
3. **Totality & Completeness**: Every conditional branch, switch statement, union type, and network response must handle the exhaustive case (`assertNever` / TypeScript exhaustive check).
4. **Idempotence & Predictability**: Operations that modify state must be safe to re-run or recover from mid-execution failures.

---

## 2. Rigorous Coding Standards

### TypeScript & Type System
- Never use `any`. Use `unknown` with narrowing or custom type predicates.
- Enforce strict null checks; avoid non-null assertions (`!`) unless proven mathematically impossible to be null with an inline comment.
- Prefer Discriminated Unions over optional baggage bags:
```typescript
// Impeccable state modeling
type RequestState<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T; timestamp: number }
  | { status: 'error'; error: AppError; retryCount: number };
```

### Async & Error Resilience
- Always wrap external I/O in structured try/catch blocks with classified domain errors.
- Never swallow errors silently. If swallowed intentionally, log with justification.
- Implement cleanup mechanisms (e.g., `AbortController` on network fetches and `useEffect` cleanups) to prevent race conditions and memory leaks.

```typescript
// Deterministic resource teardown
export function fetchWithTimeout(url: string, ms = 5000): Promise<Response> {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), ms);
  return fetch(url, { signal: controller.signal }).finally(() => clearTimeout(id));
}
```

---

## 3. Impeccability Checklist Before Delivery

- [ ] **Boundary Verification**: Are all props, query params, local storage items, and API responses schema-validated?
- [ ] **Leak-Proof Memory**: Are event listeners, intervals, observers (IntersectionObserver, ResizeObserver) reliably disconnected?
- [ ] **Accessibility Parity**: Can the entire flow be operated via keyboard alone with full screen-reader announcements?
- [ ] **Zero Warnings**: No ESLint warnings, TypeScript errors, React key warnings, or hydration mismatches in the console.
- [ ] **Performance Guardrails**: No unnecessary re-renders in hot loops; heavy calculations wrapped in memoization where profile data dictates.

