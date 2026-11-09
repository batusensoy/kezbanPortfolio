import { test, expect } from '@playwright/test';

test.describe('Kezban Tanli — Fine Art Portfolio E2E Tests', () => {
  test('Home Page renders artist identity, hero, and navigation', async ({ page }) => {
    // Monitor console errors
    const consoleErrors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') consoleErrors.push(msg.text());
    });

    await page.goto('/');

    // The handwritten "Kezban" signature logo in the navbar
    await expect(page.getByText('Kezban').first()).toBeVisible();

    // Hero h1 heading
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();

    // "write to me" link in hero navigates to /contact
    const writeCta = page.getByRole('link', { name: 'write to me' }).first();
    await expect(writeCta).toBeVisible();

    // "paintings" nav link navigates to /gallery
    const paintingsLink = page.getByRole('link', { name: 'paintings' }).first();
    await expect(paintingsLink).toBeVisible();
    await paintingsLink.click();
    await expect(page).toHaveURL(/.*\/gallery/);
  });

  test('Gallery Page loads, filters work, and count updates', async ({ page }) => {
    await page.goto('/gallery');

    // Check gallery h1 is visible
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();

    // Initial count should show 12 paintings
    await expect(page.getByText(/12 paintings/i)).toBeVisible();

    // Filter by any category — count text changes
    const filterButtons = page.locator('button').filter({ hasText: /all/i });
    await expect(filterButtons.first()).toBeVisible();

    // Click 'available only' toggle
    await page.getByRole('button', { name: /available only/i }).click();
    await expect(page.getByText(/paintings/i)).toBeVisible();

    // Click 'all' in lowercase filters
    const allBtn = page.getByRole('button', { name: /^all$/i });
    await allBtn.click();
    await expect(page.getByText(/12 paintings/i)).toBeVisible();
  });

  test('Artwork Detail View displays full specs and inquiry links', async ({ page }) => {
    await page.goto('/gallery/solitude-in-ochre');

    // Title & Specs
    await expect(page.getByRole('heading', { name: 'Solitude in Ochre No. 4' })).toBeVisible();
    await expect(page.getByText('Raw Moroccan ochre, cold wax, and walnut oil on Belgian linen')).toBeVisible();
    await expect(page.getByText('160 × 120 cm (63 × 47 in)')).toBeVisible();

    // Inquiry CTA
    const inquireLink = page.getByRole('link', { name: 'Enquire About This Painting' });
    await expect(inquireLink).toBeVisible();

    // Clicking inquire navigates to contact page with pre-filled artwork title
    await inquireLink.click();
    await expect(page).toHaveURL(/.*\/contact\?artwork=Solitude%20in%20Ochre%20No\.[%20.]4/);

    // Form subject input should contain the artwork title
    const subjectInput = page.locator('input#subject');
    await expect(subjectInput).toHaveValue('Acquisition Inquiry: "Solitude in Ochre No. 4"');
  });

  test('About Page renders biography text and exhibitions', async ({ page }) => {
    await page.goto('/about');

    // Check the organic greeting heading
    await expect(page.getByRole('heading', { name: /Hello, and thank you/i })).toBeVisible();

    // Check philosophy section — rendered as paragraph headings now
    await expect(page.getByText(/Material Honesty/i)).toBeVisible();

    // Check exhibitions section
    await expect(page.getByText(/shown at/i)).toBeVisible();

    // Check exhibition entry from data
    await expect(page.getByText('Resonance of Silence & Stone')).toBeVisible();
  });

  test('Contact Page validates form fields client-side', async ({ page }) => {
    await page.goto('/contact');

    // Check the new organic heading
    await expect(page.getByRole('heading', { name: /Write to me/i })).toBeVisible();

    // Submit empty form to trigger validation
    const submitBtn = page.getByRole('button', { name: /send via email/i });
    await submitBtn.click();

    // Validation errors should appear
    await expect(page.getByText('Full name is required')).toBeVisible();
    await expect(page.getByText('Email address is required')).toBeVisible();
  });
});
