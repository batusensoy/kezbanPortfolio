---
name: ui-ux-pro-max
description: >-
  Delivers elite UI/UX design heuristics, conversion-focused layout patterns, cognitive load reduction,
  and psychology-backed user experience engineering. Use when designing user journeys, forms, dashboards,
  portfolios, onboarding flows, and high-converting interfaces.
---

# UI/UX Pro Max: Elite UX Heuristics & Interface Psychology

UI/UX Pro Max combines human-computer interaction (HCI) research, cognitive psychology, and top-tier product design to create interfaces that feel effortless, intuitive, and magnetic.

---

## 1. Core Psychological Laws of UX

1. **Fitts's Law**: Time to acquire a target is a function of the distance to and size of the target.
   - Keep primary action buttons large (minimum touch target 44x44px).
   - Place frequently used actions within easy thumb reach on mobile (bottom app bar, floating action bar).
2. **Hick's Law**: Decision time increases logarithmically with the number and complexity of choices.
   - Break complex choices into progressive disclosure steps.
   - Limit primary call-to-actions (CTAs) to one per viewport.
3. **Jakob's Law**: Users spend most of their time on other sites. They expect your site to work the same way.
   - Keep navigation patterns, search bars, cart icons, and profile links where users natively expect them.
4. **Miller's Law & Chunking**: The average person can hold $7 \pm 2$ chunks of information in working memory.
   - Group related portfolio projects, metrics, or settings into distinct visual cards and sections.

---

## 2. Elite Form & Input UX

Forms are high-friction choke points. Optimize them aggressively:
- **Floating / In-Line Labels**: Ensure labels remain visible once user starts typing.
- **Single Column Layout**: Multi-column forms disrupt the natural downward vertical scanning path.
- **Inline Instant Validation**: Validate fields on blur (`onBlur`), never yell at the user before they finish typing.
- **Sensible Input Types & Autocomplete**:
  - `type="email" autocomplete="email"`
  - `type="tel" inputMode="tel"`
  - `type="password" autocomplete="current-password"`
- **Optimistic UI & Immediate Feedback**: Disable the submit button and show a spinner immediately upon click to prevent double submissions.

---

## 3. The 10 Nielsen-Norman Heuristics Translated to Code

| Heuristic | Practical Implementation |
| :--- | :--- |
| **Visibility of System Status** | Display skeletons during loading, spinners on click, progress bars on upload. |
| **Match Between System & Real World** | Use familiar language ("Trash" instead of "Nullify Pointer Record"). |
| **User Control & Freedom** | Provide "Undo" toasts (Sonner style), back buttons, and dismissible modals. |
| **Consistency & Standards** | Shared design tokens across buttons, inputs, alerts, and cards. |
| **Error Prevention** | Confirm destructive actions with a modal; disable invalid submit buttons. |
| **Recognition Over Recall** | Display recently viewed projects, search history, and autosaved drafts. |
| **Flexibility & Efficiency** | Add keyboard shortcuts (`Cmd+K` command menu) for power users. |
| **Aesthetic & Minimalist Design** | Strip out decorative elements that don't convey information. |
| **Help Users Recognize & Recover** | Plain-English error messages with clear next steps ("Email taken. Want to log in instead?"). |
| **Help & Documentation** | Tooltips on complex icons, contextual FAQs, and accessible helper links. |

---

## 4. Portfolio & Personal Brand UX Checklist

- [ ] **Above the Fold Impact**: Within 3 seconds, can a visitor tell *who* you are, *what* you build, and *how* to contact you?
- [ ] **Social Proof & Proof of Work**: Are live project URLs, GitHub repos, and client outcomes immediately clickable?
- [ ] **Scannability**: Can a recruiter scan your skills and achievements in under 15 seconds using clear bolded keywords and metrics?
- [ ] **Seamless Contact**: Is there a 1-click email copy button or a 3-field contact form with zero CAPTCHA friction?

