---
name: superpowers
description: >-
  Equips the agent with high-leverage problem solving, rapid hypothesis-driven debugging,
  first-principles decomposition, and high-velocity engineering workflows. Use when tackling complex,
  ambiguous problems, elusive bugs, or architecting large features from scratch.
---

# Superpowers: High-Leverage Problem Solving & Engineering Velocity

Superpowers enables elite engineering velocity through systematic mental models, scientific debugging, first-principles thinking, and rapid iteration loops.

---

## 1. The Core Mental Models

1. **First-Principles Decomposition**:
   - Strip away legacy assumptions, outdated frameworks, and surface symptoms.
   - What are the irreducible truths of this problem? (Data flow, state changes, memory constraints, network requests).
2. **Type 1 vs. Type 2 Decisions**:
   - **Type 1 (Irreversible)**: High risk, permanent impact (e.g., database schema migrations, auth architecture, cryptographic protocols). Move deliberately, design defensively, seek sign-off.
   - **Type 2 (Reversible)**: Two-way doors (e.g., UI component layout, internal utility naming, caching timeouts). Move at maximum speed; iterate based on feedback.
3. **Chesterton's Fence**:
   - Never remove or refactor an obscure block of code or configuration until you fully understand why it was put there in the first place.

---

## 2. Hypothesis-Driven Scientific Debugging

When encountering complex or intermittent failures, follow this 4-step protocol:

```
[Observe Symptom] ───> [Formulate Mutually Exclusive Hypotheses]
                             │
                             ▼
[Design Minimal Test to Disprove #1] ───> [Isolate Root Cause]
                             │
                             ▼
                    [Apply Targeted Fix] ───> [Verify Regression-Free]
```

### Protocol:
1. **Never Guess or Flail**: Do not change random code hoping it works. Every change must test a specific hypothesis.
2. **Binary Search the Problem Space**:
   - Halve the surface area: is the issue client-side or server-side? Network payload or parsing? Render phase or state update?
   - Comment out or mock half the module to isolate the culprit in $O(\log N)$ steps.
3. **Instrument with High-Signal Logs**:
   - Print exact timestamps, argument shapes, and execution sequence order.
   - Clean up diagnostic logs once the root cause is resolved.

---

## 3. Autonomous Execution Framework

When given a broad or ambitious request:
1. **Clarify Objective & Constraints**: Define what "done" looks like with measurable acceptance criteria.
2. **Draft the Implementation Blueprint**:
   - Identify dependencies, data structures, and state transitions.
   - Break the task into discrete, sequentially verifiable milestones.
3. **Build the Walking Skeleton First**:
   - Connect end-to-end data flow with minimal mock styling.
   - Confirm viability, then progressively layer styling, animations, edge cases, and optimizations.
4. **Self-Verification Loop**:
   - Run tests, inspect visual layout across screen widths, verify browser console for errors before declaring completion.

