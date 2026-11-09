import { test, expect } from '@playwright/test';

test.describe('Kezban Tanli — Fine Art Portfolio E2E Tests', () => {
  test('Home Page renders artist identity, hero, and featured artworks', async ({ page }) => {
    // Monitor console errors
    const consoleErrors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') consoleErrors.push(msg.text());
    });

    await page.goto('/');

    // Check artist title and name
    await expect(page.getByText('KEZBAN TANLI').first()).toBeVisible();
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();

    // Check CTAs
    const exploreCta = page.getByRole('link', { name: 'Explore Artwork' });
    await expect(exploreCta).toBeVisible();

    // Verify featured artwork grid has cards
    const featuredHeadings = page.getByRole('heading', { name: 'Solitude in Ochre No. 4' });
    await expect(featuredHeadings.first()).toBeVisible();

    // Verify navigation works
    await exploreCta.click();
    await expect(page).toHaveURL(/.*\/gallery/);
  });

  test('Gallery Page supports category filtering and available toggle', async ({ page }) => {
    await page.goto('/gallery');

    // Check main gallery title
    await expect(page.getByRole('heading', { name: 'Exhibition Catalog & Archive' })).toBeVisible();

    // Initial count should show 12 artworks
    await expect(page.getByText(/Showing 12 artworks/i)).toBeVisible();

    // Filter by 'Oil on Canvas'
    await page.getByRole('button', { name: 'Oil on Canvas' }).click();
    await expect(page.getByText(/Showing \d+ artworks/i)).toBeVisible();

    // Filter by 'Abstract Expressionism'
    await page.getByRole('button', { name: 'Abstract Expressionism' }).click();
    await expect(page.getByText(/Showing \d+ artworks/i)).toBeVisible();

    // Click 'All'
    await page.getByRole('button', { name: 'All' }).click();
    await expect(page.getByText(/Showing 12 artworks/i)).toBeVisible();

    // Toggle 'Available Only'
    await page.getByRole('button', { name: /Available Only/i }).click();
    await expect(page.getByText(/Showing \d+ artworks/i)).toBeVisible();
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
    await expect(page).toHaveURL(/.*\/contact\?artwork=Solitude%20in%20Ochre%20No\.%204/);

    // Form inputs should contain the artwork in subject
    const subjectInput = page.locator('input#subject');
    await expect(subjectInput).toHaveValue('Acquisition Inquiry: "Solitude in Ochre No. 4"');
  });

  test('About Page renders biography, philosophy, and exhibitions', async ({ page }) => {
    await page.goto('/about');

    await expect(page.getByRole('heading', { name: /Giving weight and breath to the unspoken memory/i })).toBeVisible();
    await expect(page.getByText(/Material Honesty & Raw Earth/i)).toBeVisible();
    await expect(page.getByText(/Selected Exhibitions & Fairs/i)).toBeVisible();

    // Check exhibition entry
    await expect(page.getByText('Resonance of Silence & Stone')).toBeVisible();
  });

  test('Contact Page validates form fields client-side', async ({ page }) => {
    await page.goto('/contact');

    await expect(page.getByRole('heading', { name: /Connect with Kezban Tanli/i })).toBeVisible();

    // Submit empty form to trigger validation
    const submitBtn = page.getByRole('button', { name: /Open Email to Send Inquiry/i });
    await submitBtn.click();

    // Validation errors should appear
    await expect(page.getByText('Full name is required')).toBeVisible();
    await expect(page.getByText('Email address is required')).toBeVisible();
  });
});
