import { test, expect } from '@playwright/test'
import { login } from './login'

test('Contact Formulário sem login', async ({ page }) => {
    await page.goto("https://practicesoftwaretesting.com/")
    await page.locator('[data-test="nav-contact"]').click()
    await page.locator('[data-test="first-name"]').fill("Test")
    await page.locator('[data-test="last-name"]').fill("Test01")
    await page.locator('[data-test="email"]').fill("Test01@email.com")
    await page.locator('[data-test="subject"]').selectOption("Customer service")
await page.locator('[data-test="attachment"]').setInputFiles("C:/Users/Silvana Duarte/Documentos/testdoc")
    await page.locator('[data-test="message"]').fill("testdoc")
    await page.locator('[data-test="contact-submit"]').click()
})