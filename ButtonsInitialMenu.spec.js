import { test, expect } from '@playwright/test'
import { login } from './login'

test('Login Válido + menu horizontal categories', async ({page}) => {

    await page.goto('https://practicesoftwaretesting.com/')
    await login(
        page,
        'test1408@email.com',
        'Test1408.'
    )
    await page.locator('[data-test="nav-categories"]').click()
    await expect(
        page.locator('[data-test="nav-hand-tools"]')).toBeVisible(),
    await expect(
        page.locator('[data-test="nav-power-tools"]')).toBeVisible(),
    await expect(
        page.locator('[data-test="nav-other"]')).toBeVisible(),
    await expect(
        page.locator('[data-test="nav-special-tools"]')).toBeVisible(),
    await expect(
        page.locator('[data-test="nav-hand-tools"]')).toBeVisible()
})