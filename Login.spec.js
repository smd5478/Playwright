import { test, expect } from '@playwright/test'
import { login } from './login'

test('Login válido', async ({ page }) => {

    await page.goto('https://practicesoftwaretesting.com/');

    await login(
        page,
        'test1408@email.com',
        'Test1408.'
    )
    await expect(page).toHaveURL(
        'https://practicesoftwaretesting.com/account'
    );
    await expect(
        page.locator('[data-test="page-title"]')
    ).toHaveText('My account');
    
    await page.locator('[data-test="nav-menu"]').click();
    await page.getByText('Sign out').click();
})

test('Login inválido', async ({ page }) => {

    await page.goto('https://practicesoftwaretesting.com/');
    await login(
        page,
        'test0808',
        'test12345'
    )

    await expect(
        page.getByText('Email format is invalid')).toBeVisible();
})
test('Conta não criada', async ({ page }) => {
    
    await page.goto('https://practicesoftwaretesting.com/');
    await login(
        page,
        'test1408@email.com',
        'test12345'
    )

    await expect(
        page.getByText('Invalid email or password')).toBeVisible();
})
test('Without password', async ({ page }) => {
    
    await page.goto('https://practicesoftwaretesting.com/');
    await login(
        page,
        'test1408@email.com',
        ''
    )

    await expect(
        page.getByText('Password is required')).toBeVisible();
})
test('Without Email', async ({ page }) => {
    
    await page.goto('https://practicesoftwaretesting.com/');
    await login(
        page,
        '',
        'test12345'
    )

    await expect(
        page.getByText('Email is required')).toBeVisible();
})

test('password errada', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/');
    await login(
        page,
        'test1408@email.com',
        'password123'
    )

    await expect(
        page.getByText('Invalid email or password')).toBeVisible();
})
