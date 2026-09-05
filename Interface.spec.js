import { test, expect } from '@playwright/test'

test('Abrir uma página', async ({ page }) => {
    await page.goto('https://sauce-demo.myshopify.com/')
})

