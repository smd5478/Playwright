import { test, expect } from '@playwright/test'
import { login } from './login'

test('Product - Information', async ({ page }) => {
    await page.goto("https://practicesoftwaretesting.com/")
    await page.locator('[data-test="search-query"]').fill("slip")
    await page.locator('[data-test="search-submit"]').click()
    const firstImage = page.locator('card-img-top')
    await expect(firstImage).toHaveAttribute('alt', 'Slip Joint Pliers')
    await page.getByRole('img', { name: 'Slip Joint Pliers' }).click()
    await page.locator('[data-test="product-name"]').toHaveText('Slip Joint Pliers')
    await page.getByLabel('category').toHaveText('Pliers')
    await page.getByLabel('brand').toHaveText('MightyCraft Hardware')
    await page.getByLabel('price').toHaveText('9.17')
    await page expect(page.locator('.co2'))
})