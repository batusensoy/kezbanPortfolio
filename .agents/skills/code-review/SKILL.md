---
name: code-review
description: >-
  Conducts multi-pass, rigorous code reviews covering correctness, security, performance,
  maintainability, and architectural cohesion. Use when evaluating pull requests, auditing diffs,
  refactoring existing modules, or preparing code for production merge.
---

# Code Review: Multi-Pass Quality & Correctness Review

A great code review is rigorous, empathetic, constructive, and systematic. It catches subtle logic flaws, prevents performance regressions, hardens security, and elevates overall code health.

---

## 1. The 4-Pass Review Methodology

When reviewing a diff, code change, or pull request, execute four distinct passes:

```
Pass 1: Correctness & Logic  ───► Does it do what it claims? Any regressions or race conditions?
Pass 2: Security & Trust     ───► Are inputs validated? Secrets safe? Auth checked?
Pass 3: Performance & Scale  ───► Any re-render loops, N+1 queries, unindexed queries, CLS?
Pass 4: Architecture & Idioms──► Is naming clean? Clean abstractions? Consistent patterns?
```

---

## 2. Review Pass Details

### Pass 1: Correctness & Invariants
- Are off-by-one errors possible in array slicing or pagination?
- Are null/undefined values handled gracefully when accessing nested fields?
- In React/state updates: are dependencies in `useEffect` / `useCallback` / `useMemo` complete and stable? Are state setters using functional forms when depending on prior state (`setCount(prev => prev + 1)`)?

### Pass 2: Security & Boundaries
- Are all incoming parameters schema-checked before use?
- Are errors sanitized so database connection strings or stack traces are not leaked to clients?
- Is authentication checked server-side regardless of client-side visibility toggles?

### Pass 3: Performance & Resource Lifecycle
- Are promises parallelized with `Promise.all()` where independent, rather than sequential `await` cascades?
- Are event handlers debounced/throttled on high-frequency events (`scroll`, `resize`, `mousemove`)?
- Does the bundle size increase substantially? Are heavy dependencies imported whole instead of tree-shaken?

### Pass 4: Readability & Maintainability
- Does the naming reveal intent without needing comment translation?
- Is there copy-pasted boilerplate that should be unified into a focused helper?
- Are tests testing behavior rather than implementation details?

---

## 3. Review Comment Classification

To keep feedback clear and actionable, categorize comments with conventional prefixes:

- 🔴 **[Blocker]**: Must be resolved before merge. Security vulnerabilities, data loss risks, broken functionality, or severe performance flaws.
- 🟡 **[Recommendation]**: High-value improvement for maintainability, clarity, or resilience. Highly encouraged.
- 🟢 **[Nitpick]**: Minor stylistic preference or naming nuance. Author discretion to adopt or ignore.
- 💡 **[Question / Thought]**: Curiosity or architectural inquiry to understand intent without blocking.
- 👏 **[Praise]**: Acknowledging elegant solutions, thorough tests, or clever simplifications.

```markdown
<!-- Example Comment -->
🔴 **[Blocker]**: `userProfile.bio` is rendered using `dangerouslySetInnerHTML` without sanitization. An attacker could inject malicious scripts. Please sanitize using DOMPurify or render as standard text children.
```

---

## 4. Code Review Acceptance Gate

Before signing off:
- [ ] No regression introduced to existing features or workflows.
- [ ] Test coverage covers happy path AND at least two failure/edge-case paths.
- [ ] CI / Linter / TypeChecker all pass with zero warnings.
- [ ] Changes adhere to repository architectural patterns.

