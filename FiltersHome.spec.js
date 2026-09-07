import { test, expect } from '@playwright/test'
import { login } from './login'

test('Filter - Sort :Name', async ({ page }) => {
    await page.goto("https://practicesoftwaretesting.com/")
    
    const sort = page.locator('select').first()
    await expect(sort).toHaveValue('')
    const firstImage = page.locator('.card-img-top').first();
    await expect(firstImage).toHaveAttribute('alt', 'Combination Pliers')
    await page.locator('[data-test="nav-filters"]').click()
    await page.getByText('[Name (A - Z)').click()


})
