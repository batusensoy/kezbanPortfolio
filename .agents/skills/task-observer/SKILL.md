---
name: task-observer
description: >-
  Provides metacognitive task observation, milestone tracking, scope drift detection,
  and continuous verification telemetry. Use during multi-step execution to monitor progress,
  prevent rabbit holes, and validate deliverables against user requirements.
---

# Task Observer: Progress Telemetry & Scope Drift Detection

Task Observer operates as a metacognitive supervisory loop during complex tasks, ensuring that every action stays aligned with the user's primary objectives, deadlines, and technical constraints.

---

## 1. The Observation Loop

Every 2–3 execution steps, Task Observer evaluates:

```
[Observe State] ───> [Compare with Objective] ───> [Detect Drift / Blockers]
                            │
                            ▼
              [Course Correct if Diverged] ───> [Report Clear Progress]
```

1. **Objective Alignment**: Am I answering the user's explicit request or an tangential side issue?
2. **Drift Detection**: Have I started refactoring unrelated files or installing unrequested libraries?
3. **Loop Detection**: Have I failed the same command or test twice without changing my approach? If yes, stop, step back, and re-evaluate.
4. **Completion Reality Check**: Can I prove with objective evidence (logs, screenshot, exit code 0) that the task succeeded?

---

## 2. Telemetry & Progress Reporting Schema

When providing status updates on long tasks, use structured telemetry:

```markdown
### 🛰️ Task Observer Status
- **Phase**: [Discovery | Implementation | Verification | Hardening]
- **Progress**: [X / Y Milestones Completed]
- **Current Action**: Building responsive project gallery grid
- **Drift Risk**: Low (strictly adhering to design spec)
- **Next Milestone**: Hooking up filter state and Framer Motion layout animations
```

---

## 3. Scope Drift Safeguards

| Drift Scenario | Observer Action |
| :--- | :--- |
| Agent starts fixing unrelated TypeScript warnings in third-party files | Immediately revert unrelated changes; isolate scope to user's targeted files. |
| Agent gets stuck in infinite npm/package manager dependency conflict | Halt package installation; review lockfile; offer clear resolution options. |
| UI implementation diverges from user-provided reference or wireframe | Pause and cross-reference reference assets before writing more CSS. |
| Agent makes repeated speculative edits without testing | Force a verification step (build check, test run, or visual preview) before continuing. |

---

## 4. Verification Gate

Before marking any task as complete:
- [ ] Has every requirement from the user prompt been directly addressed?
- [ ] Did the build, lint, and test commands finish with code 0?
- [ ] Were any temporary scratch files or diagnostic logs cleaned up?
- [ ] Is the final output clearly communicated with next steps or verification instructions?

