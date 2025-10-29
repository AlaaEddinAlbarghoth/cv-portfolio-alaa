import { test, expect } from '@playwright/test';

test.describe('CV Portfolio', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('page loads successfully', async ({ page }) => {
    await expect(page).toHaveTitle(/Alaa Eddin Albarghoth/);
  });

  test('all sections are present', async ({ page }) => {
    const sections = ['home', 'about', 'experience', 'projects', 'skills', 'education', 'contact'];
    
    for (const section of sections) {
      const element = page.locator(`#${section}`);
      await expect(element).toBeVisible();
    }
  });

  test('navigation works', async ({ page }) => {
    await page.click('a[href="#about"]');
    await page.waitForTimeout(1000);
    
    const aboutSection = page.locator('#about');
    await expect(aboutSection).toBeInViewport();
  });

  test('theme toggle works', async ({ page }) => {
    const themeButton = page.locator('button[aria-label="Toggle theme"]');
    await expect(themeButton).toBeVisible();
    
    await themeButton.click();
    await page.waitForTimeout(300);
    
    const html = page.locator('html');
    const theme = await html.getAttribute('data-theme');
    expect(theme).toBeTruthy();
  });

  test('contact links are functional', async ({ page }) => {
    await page.click('a[href="#contact"]');
    await page.waitForTimeout(1000);
    
    const emailLink = page.locator('a[href^="mailto:"]');
    await expect(emailLink).toBeVisible();
    
    const phoneLink = page.locator('a[href^="tel:"]');
    await expect(phoneLink).toBeVisible();
    
    const whatsappLink = page.locator('a[href*="wa.me"]');
    await expect(whatsappLink).toBeVisible();
    
    const githubLink = page.locator('a[href*="github.com"]');
    await expect(githubLink).toBeVisible();
  });

  test('mobile menu works', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    
    const menuButton = page.locator('button[aria-label="Toggle menu"]');
    await expect(menuButton).toBeVisible();
    
    await menuButton.click();
    await page.waitForTimeout(300);
    
    const mobileNav = page.locator('nav a:has-text("About")').first();
    await expect(mobileNav).toBeVisible();
  });

  test('keyboard navigation works', async ({ page }) => {
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    
    const focusedElement = page.locator(':focus');
    await expect(focusedElement).toBeVisible();
  });
});
