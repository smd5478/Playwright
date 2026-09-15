import { test, expect } from '@playwright/test'
import { login } from './login'

test('Filter - Sort :Name asc', async ({ page }) => {
    await page.goto("https://practicesoftwaretesting.com/")
    
    const sort = page.locator('select').first()
    await expect(sort).toHaveValue('')
    const firstImage = page.locator('.card-img-top').first();
    await expect(firstImage).toHaveAttribute('alt', 'Combination Pliers')
    await page.locator('[data-test="sort"]').click()
    await sort.selectOption('name,asc');
    await expect(sort).toHaveValue('name,asc')
    await expect(firstImage).toHaveAttribute('alt', 'Adjustable Wrench')
})

test('Filter - Sort :Name desc', async ({ page }) => {
    await page.goto("https://practicesoftwaretesting.com/")
    
    const sort = page.locator('select').first()
    await expect(sort).toHaveValue('')
    const firstImage = page.locator('.card-img-top').first();
    await expect(firstImage).toHaveAttribute('alt', 'Combination Pliers')
    await page.locator('[data-test="sort"]').click()
    await sort.selectOption('name,desc');
    await expect(sort).toHaveValue('name,desc')
    await expect(firstImage).toHaveAttribute('alt', 'Wood Saw')
})

test('Filter - Sort : Price desc', async ({ page }) => {
    await page.goto("https://practicesoftwaretesting.com/")
    
    const sort = page.locator('select').first()
    await expect(sort).toHaveValue('')
    const firstImage = page.locator('.card-img-top').first();
    await expect(firstImage).toHaveAttribute('alt', 'Combination Pliers')
    await page.locator('[data-test="sort"]').click()
    await sort.selectOption('price,desc');
    await expect(sort).toHaveValue('price,desc')
    await expect(firstImage).toHaveAttribute('alt', 'Drawer Tool Cabinet')
})

test('Filter - Sort : Price asc', async ({ page }) => {
    await page.goto("https://practicesoftwaretesting.com/")
    
    const sort = page.locator('select').first()
    await expect(sort).toHaveValue('')
    const firstImage = page.locator('.card-img-top').first();
    await expect(firstImage).toHaveAttribute('alt', 'Combination Pliers')
    await page.locator('[data-test="sort"]').click()
    await sort.selectOption('price,asc');
    await expect(sort).toHaveValue('price,asc')
    await expect(firstImage).toHaveAttribute('alt', 'Washers')
})

test('Filter - Sort : CO2 Rating asc', async ({ page }) => {
    await page.goto("https://practicesoftwaretesting.com/")
    
    const sort = page.locator('select').first()
    await expect(sort).toHaveValue('')
    const firstImage = page.locator('.card-img-top').first();
    await expect(firstImage).toHaveAttribute('alt', 'Combination Pliers')
    await page.locator('[data-test="sort"]').click()
    await sort.selectOption('co2_rating,asc');
    await expect(sort).toHaveValue('co2_rating,asc')
    await expect(firstImage).toHaveAttribute('alt', 'Wood Saw')
})

test('Filter - Sort : C02 Rating desc', async ({ page }) => {
    await page.goto("https://practicesoftwaretesting.com/")
    
    const sort = page.locator('select').first()
    await expect(sort).toHaveValue('')
    const firstImage = page.locator('.card-img-top').first();
    await expect(firstImage).toHaveAttribute('alt', 'Combination Pliers')
    await page.locator('[data-test="sort"]').click()
    await sort.selectOption('co2_rating,desc');
    await expect(sort).toHaveValue('co2_rating,desc')
    await expect(firstImage).toHaveAttribute('alt', 'Cordless Drill 12V')
})

test('Filter - Price Range - Sort :Name', async ({ page }) => {
    await page.goto("https://practicesoftwaretesting.com/")
    
    const priceMin = page.locator('.ngx-slider-pointer-min')
    const priceMax = page.locator('.ngx-slider-pointer-max')
    await expect(priceMin).toHaveAttribute('aria-valuenow', '1')
    await expect(priceMax).toHaveAttribute('aria-valuenow', '100')
})

test('Filter - Search', async ({ page }) => {
    await page.goto("https://practicesoftwaretesting.com/")

    const firstImage = page.locator('.card-img-top').first();
    await expect(firstImage).toHaveAttribute('alt', 'Combination Pliers')
    await page.locator('[data-test="search-query"]').fill('Hammer')
    await page.locator('[data-test="search-submit"]').click()
    await expect(firstImage).toHaveAttribute('alt', 'Claw Hammer with Shock Reduction Grip')
    await page.locator('[data-test="search-reset"]').click()
    await expect(firstImage).toHaveAttribute('alt', 'Combination Pliers')
})

test('Filter - By Category', async ({ page }) => {
    await page.goto("https://practicesoftwaretesting.com/")
    const firstImage = page.locator('.card-img-top').first();
    await expect(firstImage).toHaveAttribute('alt', 'Combination Pliers')
    await page.locator('[data-test="category-01M2ECJ9Z9NFNXQM9S5RZ4ADWT"]').click()
    await expect(firstImage).toHaveAttribute('alt', 'Combination Pliers')
    await page.locator('[data-test="category-01M2ECJ9Z9NFNXQM9S5RZ4ADWT"]').click()
    await page.locator('[data-test="category-01M2ECJ9ZQS40FR93FEZ55V6SS"]').click()
    await expect(firstImage).toHaveAttribute('alt', 'Claw Hammer with Shock Reduction Grip')
    await page.locator('[data-test="category-01M2ECJ9ZQS40FR93FEZ55V6ST"]').click()
    await expect(firstImage).toHaveAttribute('alt', 'Wood Saw')
    await page.locator('[data-test="category-01M2ECJ9ZQS40FR93FEZ55V6ST"]').click()
    await page.locator('[data-test="category-01M2ECJ9ZQS40FR93FEZ55V6SV"]').click()
    await expect(firstImage).toHaveAttribute('alt', 'Adjustable Wrench')
    await page.locator('[data-test="category-01M2ECJ9ZQS40FR93FEZ55V6SV"]').click()
    await page.locator('[data-test="category-01M2ECJ9ZQS40FR93FEZ55V6SW"]').click()
    await expect(firstImage).toHaveAttribute('alt', 'Phillips Screwdriver')
    await page.locator('[data-test="category-01M2ECJ9ZQS40FR93FEZ55V6SW"]').click()
    await page.locator('[data-test="category-01M2ECJ9ZQS40FR93FEZ55V6SX"]').click()
    await expect(firstImage).toHaveAttribute('alt', 'Combination Pliers')
    await page.locator('[data-test="category-01M2ECJ9ZQS40FR93FEZ55V6SX"]').click()
    await page.locator('[data-test="category-01M2ECJ9ZQS40FR93FEZ55V6SY"]').click()
    await expect(firstImage).toHaveAttribute('alt', 'Chisels Set')
    await page.locator('[data-test="category-01M2ECJ9ZQS40FR93FEZ55V6SY"]').click()
    await page.locator('[data-test="category-01M2ECJ9ZQS40FR93FEZ55V6SZ"]').click()
    await expect(firstImage).toHaveAttribute('alt', 'Tape Measure 7.5m')
})

test('Filter - By Category - Power Tools', async ({ page }) => {
    await page.goto("https://practicesoftwaretesting.com/")
    const firstImage = page.locator('.card-img-top').first();
    await expect(firstImage).toHaveAttribute('alt', 'Combination Pliers')
    await page.locator('[data-test="category-01M2JSAME1MY30QP0N15GGZN12"]').click()
    await expect(firstImage).toHaveAttribute('
})    
