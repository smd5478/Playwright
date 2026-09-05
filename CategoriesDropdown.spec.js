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

test('Login Válido + menu horizontal categories -> Hand Tools', async ({page}) => {

    await page.goto('https://practicesoftwaretesting.com/')
    await login(
        page,
        'test1408@email.com',
        'Test1408.'
    )
    await page.locator('[data-test="nav-categories"]').click()
    await page.locator('[data-test="nav-hand-tools"]').click()
    await expect(
        page.locator('[data-test="page-title"]')).toHaveText('Category: Hand Tools')
})

test('Login Válido + menu horizontal categories -> Power Tools', async ({page}) => {

    await page.goto('https://practicesoftwaretesting.com/')
    await login(
        page,
        'test1408@email.com',
        'Test1408.'
    )
    await page.locator('[data-test="nav-categories"]').click()
    await page.locator('[data-test="nav-power-tools"]').click()
    await expect(
        page.locator('[data-test="page-title"]')).toHaveText('Category: Power Tools')
})

test('Login Válido + menu horizontal categories -> Other', async ({page}) => {

    await page.goto('https://practicesoftwaretesting.com/')
    await login(
        page,
        'test1408@email.com',
        'Test1408.'
    )
    await page.locator('[data-test="nav-categories"]').click()
    await page.locator('[data-test="nav-other"]').click()
    await expect(
        page.locator('[data-test="page-title"]')).toHaveText('Category: Other')
})

test('Login Válido + menu horizontal categories -> Special Tools', async ({page}) => {

    await page.goto('https://practicesoftwaretesting.com/')
    await login(
        page,
        'test1408@email.com',
        'Test1408.'
    )
    await page.locator('[data-test="nav-categories"]').click()
    await page.locator('[data-test="nav-special-tools"]').click()
    await expect(
        page.locator('[data-test="page-title"]')).toHaveText('Category: Special Tools')
})


