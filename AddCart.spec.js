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
    await expect(page.locator('[data-test="cart-quantity"]')).toHaveText('1')
    await expect(page.locator('[data-test="nav-cart"]')).click()
    const currentStep = page.locator('ul.steps-4steps-indicator > li.current')
    await expect(currentStep).toBeVisible()
    await expect(currentStep).toContainText('1')
    await expect(currentStep).toHaveText('Cart')
    await expect(page.locator('[data-test="product-title')).toHaveText('Slip Joint Pliers')
    await expect(page.locator('[data-test="product-quantity"]')).toHaveText('1')
    await expect(page.locator('[data-test="product-price"]')).toHaveText('$9.17')
    await expect(page.locator('[data-test="line-price"]')).toHaveText('$9.17')
    await expect(page.locator('[data-icon="xmark"]')).toBeVisible()
    await expect(page.locator('[data-test="cart-total"]')).toHaveText('$9.17')
    await expect(page.locator('[data-test="continue-shopping"]')).click()
    await expect(page.locator('[data-test="filters"]')).toBeVisible()
    await expect(page.locator('[data-test="nav-cart"]')).click()
    await expect(page.locator('[data-test="proceed-1"]')).click()
    await expect(page.locator('[data-bs-toggle="tab"]')).toBeVisible()
    await expect(page.locator('[href="#signin-tab"]')).toHaveText('Sign in')
    await expect(page.locator('[href="#guest-tab"]')).toHaveText('Continue as Guest')
    await expect(page.locator('[href="#guest-tab"]')).click()
    await expect(guestTab.getByRole('heading', {
        name: 'Continue as Guest'
    })).toBeVisible()
    await expect(guestTab.getByText(
        'Checkout without creating an account'
        'Email address *'
        'First name *'
        'Last name *'
    )).toBeVisible
    await expect(page.locator('[data-test="guest-submit"]')).click()
    const emailInput = page.locator('[data-test="guest-email"]')
    await expect(emailInput).toHaveClass(/is-invalid/)
    await expect(emailInput).toHaveAttribute('aria-invalid', 'true')
    await expect(page.locator('[data-test="guest-email-error"]')).toHaveText('Email is required')
    const firstNameInput = page.locator('[data-test="guest-first-name"]')
    await expect(firstNameInput).toHaveClass(/is-invalid/)
    await expect(firstNameInput).toHaveAttribute('aria-invalid', 'true')
    await expect(page.locator('[data-test="guest-first-name-error')).toHaveText('First name is required')
    const lastNameInput = page.locator('[data-test="guest-last-name"]')
    await expect(lastNameInput).toHaveClass(/is-invalid/)
    await expect(lastNameInput).toHaveAttribute('aria-invalid', 'true')
    await expect(page.locator('[data-test="guest-last-name-error"]')).toHaveText('Last name is required')
    

  
})

