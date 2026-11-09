---
name: claude-mem
description: >-
  Manages persistent project memory, context retention, Architectural Decision Records (ADRs),
  and knowledge indexing across long development sessions. Use when managing long-lived project state,
  recording architectural decisions, or tracking ongoing requirements.
---

# Claude-Mem: Context Retention & Persistent Project Memory

Claude-Mem establishes a systematic memory architecture for managing knowledge, decisions, codebase patterns, and progress across multi-turn and multi-session interactions.

---

## 1. Memory Architecture Structure

To ensure persistent context retention without cluttering the primary context window, memory is divided into three tiers:

```
.agents/memory/
├── CURRENT_STATE.md      # Tier 1: Real-time workpad, active tasks, next steps
├── DECISIONS.md          # Tier 2: Architectural Decision Records (ADRs)
└── DOMAIN_KNOWLEDGE.md   # Tier 3: Core invariants, business rules, design tokens
```

---

## 2. Memory Tier Guidelines

### Tier 1: `CURRENT_STATE.md` (Ephemeral & Active)
Track active goals, in-flight refactors, and pending verifications:
```markdown
# Current Workpad
- **Active Goal**: Implementing responsive navigation drawer with spring gestures
- **Completed**:
  - [x] Defined motion variants in `emil-kowalski` config
  - [x] Wired mobile breakpoint trigger
- **In-Flight**:
  - [ ] Backdrop blur dismiss listener
- **Blockers / Open Questions**: None
```

### Tier 2: `DECISIONS.md` (Architectural Decision Records)
Every non-trivial architectural choice is documented using lightweight ADR format:
```markdown
## ADR-001: Adoption of Tailwind CSS + Framer Motion
- **Context**: Need high velocity styling with fluid, spring-based animations.
- **Decision**: Use Tailwind CSS for utility styling and Framer Motion for component layout animations.
- **Consequences**: Fast development speed; need to be mindful of bundle size by using `m` instead of `motion` if bundle exceeds budget.
```

### Tier 3: `DOMAIN_KNOWLEDGE.md` (Persistent Knowledge Base)
Record project-specific secrets, conventions, and idiosyncrasies:
- Portfolio owner's design style preferences (minimalist, typography-heavy, editorial tone).
- Base viewport breakpoints (`sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`).
- Custom color tokens and typography font families.

---

## 3. Memory Maintenance Workflow

1. **At Task Inception**: Read `CURRENT_STATE.md` and relevant ADRs before modifying architectural code.
2. **During Major Pivots**: When a design direction or architectural pattern changes, immediately append an entry to `DECISIONS.md`.
3. **At Task Conclusion**: Update `CURRENT_STATE.md` to check off completed items and leave clear pointers for subsequent work.
4. **Context Compaction**: If notes become too long, summarize older completed items into high-level bullet points to conserve token overhead.

