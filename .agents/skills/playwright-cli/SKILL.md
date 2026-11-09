---
name: playwright-cli
description: >-
  Provides end-to-end browser automation, test execution, visual regression testing,
  and trace inspection using the Playwright CLI and test runner. Use when creating e2e tests,
  debugging user flows in headless browsers, running visual comparisons, or generating tests with codegen.
---

# Playwright CLI: End-to-End Automation & Test Orchestration

Playwright provides resilient, fast, cross-browser automation and end-to-end testing for modern web applications. This skill covers CLI workflows, locator best practices, visual regression, and debugging techniques.

---

## 1. Essential Playwright CLI Commands

```bash
# Run all E2E tests headless
npx playwright test

# Run tests in interactive UI mode (live preview, time-travel, DOM snapshots)
npx playwright test --ui

# Run tests headed (shows actual browser window)
npx playwright test --headed

# Run a specific test file or title
npx playwright test tests/portfolio.spec.ts
npx playwright test -g "should submit contact form"

# Run tests against a specific browser project
npx playwright test --project=chromium
npx playwright test --project="Mobile Safari"

# Launch test code generator by browsing a site
npx playwright codegen http://localhost:3000

# Inspect execution trace after a failure
npx playwright show-trace test-results/trace.zip

# Update visual regression golden screenshots
npx playwright test --update-snapshots
```

---

## 2. Robust Locator Strategy

Avoid brittle CSS or XPath selectors (`div > div:nth-child(2) > span`). Always use user-facing locators:

```typescript
// Recommended Locators (Ordered by Priority):
// 1. Accessibility role & accessible name
await page.getByRole('button', { name: 'Send Message' }).click();
await page.getByRole('heading', { level: 1, name: 'Portfolio' }).toBeVisible();

// 2. Form label associations
await page.getByLabel('Email Address').fill('test@example.com');

// 3. User-visible text
await page.getByText('Project successfully launched').waitFor();

// 4. Placeholder text
await page.getByPlaceholder('Search articles...').fill('Next.js');

// 5. Test ID (Fallback for ambiguous elements)
await page.getByTestId('project-card-featured').hover();
```

---

## 3. Production E2E Test Suite Template

```typescript
import { test, expect } from '@playwright/test';

test.describe('Portfolio Core User Journey', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should render hero section and navigate to projects', async ({ page }) => {
    // Verify hero text
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();

    // Click navigation link
    await page.getByRole('link', { name: 'Projects' }).click();

    // Verify URL change and section presence
    await expect(page).toHaveURL(/.*#projects/);
    const projectCards = page.getByTestId('project-card');
    await expect(projectCards.first()).toBeVisible();
  });

  test('should validate and send contact form message', async ({ page }) => {
    await page.goto('/#contact');

    // Attempt empty submission
    const submitBtn = page.getByRole('button', { name: /send|submit/i });
    await submitBtn.click();

    // Verify error messages
    await expect(page.getByText(/email is required|invalid email/i)).toBeVisible();

    // Fill valid inputs
    await page.getByLabel(/name/i).fill('Ada Lovelace');
    await page.getByLabel(/email/i).fill('ada@example.com');
    await page.getByLabel(/message/i).fill('I would love to collaborate on a design engineering project.');
    await submitBtn.click();

    // Verify success toast / alert
    await expect(page.getByText(/message sent|thank you/i)).toBeVisible();
  });

  test('visual regression: portfolio home page matches snapshot', async ({ page }) => {
    // Wait for animations and fonts to settle
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveScreenshot('home-page.png', {
      maxDiffPixelRatio: 0.02,
      animations: 'disabled',
    });
  });
});
```

---

## 4. Playwright Configuration (`playwright.config.ts`)

```typescript
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
    { name: 'Mobile Safari', use: { ...devices['iPhone 13'] } },
  ],
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  },
});
```

---

## 5. Automation Checklist

- [ ] Are dynamic animations disabled (`animations: 'disabled'`) or handled gracefully during screenshot comparisons?
- [ ] Are network requests mocked (`page.route()`) where external third-party APIs could flake the test suite?
- [ ] Does the test run successfully across both desktop and mobile viewports?
- [ ] Is test state isolated with zero shared global variables between spec files?

