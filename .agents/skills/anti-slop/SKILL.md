---
name: anti-slop
description: >-
  Eliminates generic AI slop, bloated boilerplate, meaningless buzzwords, premature abstractions,
  and clichéd placeholders from codebase and prose. Use when reviewing code or copy to enforce lean,
  authentic, high-signal, and purposeful output.
---

# Anti-Slop: Banishing AI Filler & Bloat

"Slop" is low-effort, redundant, hyper-generic code and prose generated without intention. Anti-slop enforces concise, meaningful, lean, and high-conviction engineering and communication.

---

## 1. What Slop Looks Like & How to Eradicate It

### In Copywriting & Documentation
| Slop (Reject) | High-Signal Alternative (Adopt) |
| :--- | :--- |
| "Seamlessly dive into the cutting-edge tapestry of solutions" | "Export reports in CSV or JSON with one click" |
| "Robust and scalable architecture designed for high-growth paradigms" | "Stateless API running on Node.js with Postgres connection pooling" |
| "Unlock the power of your workflow" | "Automate your daily git commits" |
| Words banned: *delve, testament, tapestry, seamless, bespoke, unleash, game-changing* | Concrete verbs, direct specifications, actual benchmark metrics |

### In Code Architecture
- **Premature Abstractions**: Creating an `AbstractWidgetFactoryProviderRegistry` for two static buttons. Keep it concrete until three distinct use-cases force generalization (Rule of Three).
- **Pointless Wrapper Hell**: Wrapping a native `<button>` or `fetch` in five nested trivial wrappers that pass props through without adding security, styling, or functionality.
- **Narrative Comment Clutter**: Writing comments like `// increment i by 1` above `i++` or `// Return response` above `return res`. Comments must explain **why**, never narrate obvious syntax.
- **Placeholder Stubs**: Leaving `// TODO: implement later` or dummy mock arrays with `Lorem Ipsum` in production components. Build the real behavior or fail explicitly.

---

## 2. Anti-Slop Code Standards

### Keep It Direct & Local
```typescript
// SLOP: Excessive indirection and unnecessary intermediate interfaces
interface UserDataFetcherInterface {
  execute(id: string): Promise<UserResultWrapper>;
}
class ConcreteUserDataFetcher implements UserDataFetcherInterface { ... }

// CLEAN: Lean, direct, obvious
export async function getUser(id: string): Promise<User> {
  const res = await db.user.findUnique({ where: { id } });
  if (!res) throw new NotFoundError(`User ${id} not found`);
  return res;
}
```

### Clean Component Boundaries
- Eliminate empty `<div>` wrappers that break grid/flex context; use `<Fragment>` (`<>...</>`) or flatten layout hierarchy.
- Stop adding 30 unused props "for future flexibility". Add only what is needed today.
- Avoid generic styling themes with 50 unused color scales. Keep design tokens strictly focused.

---

## 3. Anti-Slop Checklist

- [ ] Does every line of code carry actual functional weight?
- [ ] Are comments reserved strictly for edge cases, non-obvious workarounds, or domain rules?
- [ ] Has every generic corporate placeholder text been replaced with authentic, clear copy?
- [ ] Are dependencies minimal and strictly justified without adding bloated utility packages for simple tasks?

