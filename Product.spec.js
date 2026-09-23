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
    await expect(page.locator('.co2-letter.active')).toHaveClass(/active/)
    await page.locator('[data-test="product-description"]').toHaveText("Adjustable slip joint pliers that feature a two-position pivot mechanism for switching between regular and wide jaw openings to accommodate different fastener sizes. The PVC-coated handles offer a comfortable, non-slip grip while the precisely machined jaws securely grasp round, flat, and hexagonal objects without slipping. Constructed from durable drop-forged carbon steel that has been heat-treated to withstand heavy daily use in professional environments. The curved jaw section grips pipes and cylindrical objects, while the flat front surface handles nuts, bolts, and sheet materials. A wire cutter integrated near the pivot handles light cutting tasks without reaching for a separate tool. Perfect for plumbing, automotive, HVAC, and general maintenance work where a single versatile gripping tool saves time.")
    await page.locator('')
})