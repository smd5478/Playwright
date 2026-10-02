import { test, expect } from '@playwright/test';
import { login } from './login';

//Without Login
test('Add to Cart and favorites without login', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/product/slip-joint-pliers/')
    await expect(page.locator('[data-test="add-to-cart"]'))
        .toBeVisible()
    await expect(page.locator('[data-test="add-to-cart"]')).click()
    await expect(page.getByRole('alert'))
        .toHaveText('Product added to shopping cart.')
    
})

