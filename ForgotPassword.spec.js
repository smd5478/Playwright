import { test, expect } from '@playwright/test'

test('Forgot Password válido', async ({page}) => {

    await page.goto('https://practicesoftwaretesting.com/')

    await page.locator('[data-test="nav-sign-in"]').click();
    await page.locator('[data-test="forgot-password-link"]').click();
    await page.locator('[data-test="email"]').fill("test1408@email.com");
    await page.locator('[data-test="forgot-password-submit"]').click();
    await expect(
        page.getByText('page.forgot-password.confirm')).toBeVisible();

})