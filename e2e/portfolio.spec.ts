import { test, expect } from '@playwright/test';

test.describe('Kezban Tanlı — Bilingual (TR / EN) Fine Art Portfolio E2E Tests', () => {
  test('Browser language detection: defaults to Turkish for non-EN/TR browsers, detects EN, and remembers manual switch', async ({
    browser,
  }) => {
    // 1. Visitor with a non-TR, non-EN browser locale (e.g. German 'de-DE') -> must default to Turkish ('tr')
    const deContext = await browser.newContext({ locale: 'de-DE' });
    const dePage = await deContext.newPage();
    await dePage.goto('/');

    await expect(dePage.getByRole('heading', { name: /Belçika keteni üzerinde dokunsal sessizlik/i })).toBeVisible();
    await expect(dePage.getByRole('link', { name: 'Eserleri Keşfet' })).toBeVisible();

    // Manually switch to EN using the visible navbar switcher
    await dePage.locator('[data-testid^="lang-en-"]:visible').first().click();
    await expect(dePage.getByRole('heading', { name: /Tactile silence & geological memory/i })).toBeVisible();

    // Reload page: saved EN preference must be prioritized over 'de-DE' browser locale
    await dePage.reload();
    await expect(dePage.getByRole('heading', { name: /Tactile silence & geological memory/i })).toBeVisible();
    await deContext.close();

    // 2. Visitor with an English browser locale ('en-US') on first visit -> detects English ('en')
    const enContext = await browser.newContext({ locale: 'en-US' });
    const enPage = await enContext.newPage();
    await enPage.goto('/');
    await expect(enPage.getByRole('heading', { name: /Tactile silence & geological memory/i })).toBeVisible();

    // Switch manually to Turkish ('TR') and reload -> saved Turkish preference must persist over 'en-US'
    await enPage.locator('[data-testid^="lang-tr-"]:visible').first().click();
    await expect(enPage.getByRole('heading', { name: /Belçika keteni üzerinde dokunsal sessizlik/i })).toBeVisible();
    await enPage.reload();
    await expect(enPage.getByRole('heading', { name: /Belçika keteni üzerinde dokunsal sessizlik/i })).toBeVisible();
    await enContext.close();
  });

  test('Home Page renders in both Turkish and English and supports in-place language switching', async ({
    page,
  }) => {
    await page.goto('/');

    // Switch to Turkish (TR) and verify Turkish homepage content
    await page.locator('[data-testid^="lang-tr-"]:visible').first().click();
    await expect(page.getByText('Kezban Tanlı').first()).toBeVisible();
    await expect(page.getByRole('heading', { name: /Belçika keteni üzerinde dokunsal sessizlik/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Toprak Sarısında Yalnızlık No. 4' }).first()).toBeVisible();

    // Switch to English (EN) and verify English homepage content
    await page.locator('[data-testid^="lang-en-"]:visible').first().click();
    await expect(page.getByRole('heading', { name: /Tactile silence & geological memory/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Solitude in Ochre No. 4' }).first()).toBeVisible();

    const exploreCta = page.getByRole('link', { name: 'Explore Artwork' });
    await expect(exploreCta).toBeVisible();
    await exploreCta.click();
    await expect(page).toHaveURL(/.*\/gallery/);
  });

  test('Gallery Page supports category filtering, available toggle, and in-place TR/EN switching', async ({
    page,
  }) => {
    await page.goto('/gallery');

    // Test in Turkish (TR)
    await page.locator('[data-testid^="lang-tr-"]:visible').first().click();
    await expect(page.getByRole('heading', { name: 'Sergi Kataloğu & Arşiv' })).toBeVisible();
    await expect(page.getByText(/Toplam 12 eser gösteriliyor/i)).toBeVisible();
    await page.getByRole('button', { name: 'Tuval Üzerine Yağlıboya' }).click();
    await expect(page.getByText(/Toplam \d+ eser gösteriliyor/i)).toBeVisible();

    // Switch to English while on /gallery -> stays on /gallery and keeps active filter
    await page.locator('[data-testid^="lang-en-"]:visible').first().click();
    await expect(page).toHaveURL(/.*\/gallery/);
    await expect(page.getByRole('heading', { name: 'Exhibition Catalog & Archive' })).toBeVisible();
    await expect(page.getByText(/Showing \d+ artworks/i)).toBeVisible();

    // Click 'All'
    await page.getByRole('button', { name: 'All' }).click();
    await expect(page.getByText(/Showing 12 artworks/i)).toBeVisible();

    // Toggle 'Available Only'
    await page.getByRole('button', { name: /Available Only/i }).click();
    await expect(page.getByText(/Showing \d+ artworks/i)).toBeVisible();
  });

  test('Artwork Detail View displays full specs in TR and EN without redirecting on language switch', async ({
    page,
  }) => {
    await page.goto('/gallery/solitude-in-ochre');

    // Turkish view
    await page.locator('[data-testid^="lang-tr-"]:visible').first().click();
    await expect(page).toHaveURL(/.*\/gallery\/solitude-in-ochre/);
    await expect(page.getByRole('heading', { name: 'Toprak Sarısında Yalnızlık No. 4' })).toBeVisible();
    await expect(page.getByText('Belçika keteni üzerine ham Fas okru, soğuk balmumu ve ceviz yağı')).toBeVisible();

    // Switch to English in-place on the detail page
    await page.locator('[data-testid^="lang-en-"]:visible').first().click();
    await expect(page).toHaveURL(/.*\/gallery\/solitude-in-ochre/);
    await expect(page.getByRole('heading', { name: 'Solitude in Ochre No. 4' })).toBeVisible();
    await expect(page.getByText('Raw Moroccan ochre, cold wax, and walnut oil on Belgian linen')).toBeVisible();

    // Inquiry CTA
    const inquireLink = page.getByRole('link', { name: 'Enquire About This Painting' });
    await inquireLink.click();
    await expect(page).toHaveURL(/.*\/contact\?artwork=Solitude%20in%20Ochre%20No\.%204/);

    const subjectInput = page.locator('input#subject');
    await expect(subjectInput).toHaveValue('Acquisition Inquiry: "Solitude in Ochre No. 4"');
  });

  test('About Page renders artist biography and studio contact CTA in both TR and EN', async ({
    page,
  }) => {
    await page.goto('/about');

    // Turkish
    await page.locator('[data-testid^="lang-tr-"]:visible').first().click();
    await expect(page).toHaveURL(/.*\/about/);
    await expect(page.getByRole('heading', { name: /Maddenin dile dökülmemiş hafızasına/i })).toBeVisible();
    await expect(page.getByText(/Biyografi & Sanatsal Kimlik/i)).toBeVisible();

    // English
    await page.locator('[data-testid^="lang-en-"]:visible').first().click();
    await expect(page).toHaveURL(/.*\/about/);
    await expect(page.getByRole('heading', { name: /Giving weight and breath to the unspoken memory/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: /Interested in Studio Visits or Acquisitions\?/i })).toBeVisible();
  });

  test('Contact Page validates form fields client-side in both TR and EN', async ({ page }) => {
    await page.goto('/contact');

    // Turkish validation
    await page.locator('[data-testid^="lang-tr-"]:visible').first().click();
    await expect(page.getByRole('heading', { name: /Kezban Tanlı ile İletişime Geçin/i })).toBeVisible();
    await page.getByRole('button', { name: /Mesajı Göndermek İçin E-postayı Aç/i }).click();
    await expect(page.getByText('Ad ve soyad alanı zorunludur')).toBeVisible();
    await expect(page.getByText('E-posta adresi zorunludur')).toBeVisible();

    // Switch to English and validate
    await page.locator('[data-testid^="lang-en-"]:visible').first().click();
    await expect(page).toHaveURL(/.*\/contact/);
    await expect(page.getByRole('heading', { name: /Connect with Kezban Tanlı/i })).toBeVisible();
    await page.getByRole('button', { name: /Open Email to Send Inquiry/i }).click();
    await expect(page.getByText('Full name is required')).toBeVisible();
    await expect(page.getByText('Email address is required')).toBeVisible();
  });

  test('Art Teaching Page renders offerings, rate placeholders, and lesson inquiry links in TR and EN', async ({
    page,
  }) => {
    await page.goto('/teaching');

    // Turkish
    await page.locator('[data-testid^="lang-tr-"]:visible').first().click();
    await expect(page).toHaveURL(/.*\/teaching/);
    await expect(page.getByRole('heading', { name: 'Başlangıç & Hobi Sanatçıları' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Sanatsal Gelişim' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'GCSE Sanat Hazırlığı' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Güzel Sanatlar & Üniversite Hazırlığı' })).toBeVisible();
    await expect(page.getByText('Fiyat Bilgisi İçin İletişime Geçin').first()).toBeVisible();

    // Switch to English in-place on /teaching
    await page.locator('[data-testid^="lang-en-"]:visible').first().click();
    await expect(page).toHaveURL(/.*\/teaching/);
    await expect(page.getByRole('heading', { name: 'Beginners & Hobbyists' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Artistic Development' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'GCSE Art Preparation' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Art School & University Preparation' })).toBeVisible();
    await expect(page.getByText('Contact for Pricing').first()).toBeVisible();

    // Click Enquire Now and verify pre-filled Contact Form
    const enquireNowBtn = page.getByRole('link', { name: /Enquire Now/i }).first();
    await enquireNowBtn.click();
    await expect(page).toHaveURL(/.*\/contact\?lesson=Beginners%20%26%20Hobbyists/);

    const subjectInput = page.locator('input#subject');
    await expect(subjectInput).toHaveValue('Art Lesson Inquiry: "Beginners & Hobbyists"');
  });
});
