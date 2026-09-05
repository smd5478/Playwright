import { test, expect } from '@playwright/test'
import { login } from './login'

test('Registo válido', async ({ page }) => {

    await page.goto('https://practicesoftwaretesting.com/');
    await page.getByText('Sign In').click();
    await page.getByText('Register your account').click();
    await page.locator('#first_name').fill('Teste');
    await page.locator('#last_name').fill('Teste');
    await page.locator('#dob').fill('2000-01-01');
    await page.locator('#country').selectOption('Portugal');
    await page.locator('#postal_code').fill('1234-567');
    await page.locator('#house_number').fill('123');
    await page.locator('#street').fill('Rua Teste');
    await page.locator('#city').fill('Lisboa');
    await page.locator('#state').fill('Lisboa');
    await page.locator('#phone').fill('123456789');
    await page.locator('#email').fill('test1508@email.com');
    await page.locator('#password').fill('Test1508.');
    await page.locator('[data-test="register-submit"]').click();
})

//test('Registo inválido', async ({ page }) => {
//}) 