import { test, expect } from '@playwright/test'

// without login
test('Product - Information', async ({ page }) => {
    await page.goto("https://practicesoftwaretesting.com/")

    await page.locator('[data-test="search-query"]').fill("slip")
    await page.locator('[data-test="search-submit"]').click()

    const firstImage = page.locator('.card-img-top').first()
    await expect(firstImage).toHaveAttribute('alt', 'Slip Joint Pliers')

    await page.getByRole('img', { name: 'Slip Joint Pliers' }).click()

    await expect(page.locator('[data-test="product-name"]'))
        .toHaveText('Slip Joint Pliers')

    await expect(page.getByLabel('category'))
        .toHaveText('Pliers')

    await expect(page.getByLabel('brand'))
        .toHaveText('MightyCraft Hardware')

    await expect(page.getByLabel('price'))
        .toHaveText('9.17')

    await expect(page.locator('.co2-letter.active'))
        .toHaveText('D')

    await expect(page.locator('[data-test="product-description"]'))
        .toHaveText("Adjustable slip joint pliers that feature a two-position pivot mechanism for switching between regular and wide jaw openings to accommodate different fastener sizes. The PVC-coated handles offer a comfortable, non-slip grip while the precisely machined jaws securely grasp round, flat, and hexagonal objects without slipping. Constructed from durable drop-forged carbon steel that has been heat-treated to withstand heavy daily use in professional environments. The curved jaw section grips pipes and cylindrical objects, while the flat front surface handles nuts, bolts, and sheet materials. A wire cutter integrated near the pivot handles light cutting tasks without reaching for a separate tool. Perfect for plumbing, automotive, HVAC, and general maintenance work where a single versatile gripping tool saves time.")

    await expect(page.locator('[data-test="quantity"]'))
        .toHaveText('1')

    await expect(page.locator('[data-test="increase-quantity"]'))
        .toBeVisible()

    await expect(page.locator('[data-test="increase-quantity"]'))
        .toBeEnabled()

    await page.locator('[data-test="increase-quantity"]').click()

    await expect(page.locator('[data-test="quantity"]'))
        .toHaveText('2')

    await expect(page.locator('[data-test="decrease-quantity"]'))
        .toBeVisible()

    await expect(page.locator('[data-test="decrease-quantity"]'))
        .toBeEnabled()

    await page.locator('[data-test="decrease-quantity"]').click()

    await expect(page.locator('[data-test="quantity"]'))
        .toHaveText('1')

    await expect(page.locator('[data-test="add-to-cart"]'))
        .toBeVisible()

    await expect(page.locator('[data-test="add-to-cart"]'))
        .toBeEnabled()

    await page.locator('[data-test="add-to-cart"]').click()

    await expect(page.getByRole('alert'))
        .toHaveText('Product added to shopping cart.')

    await expect(page.locator('[data-test="add-to-favorites"]'))
        .toBeVisible()

    await expect(page.locator('[data-test="add-to-favorites"]'))
        .toBeEnabled()

    await page.locator('[data-test="add-to-favorites"]').click()

    await expect(page.getByRole('alert'))
        .toHaveText('Unauthorized can not add product to favorite list.')

    const compareButton = page.locator('[data-test="add-to-compare"]')

    await expect(compareButton)
        .toHaveClass('btn btn-outline-primary')

    await compareButton.click()

    await expect(compareButton)
        .toHaveClass('btn btn-primary')

    await expect(page.locator('[data-test="specs-title"]'))
        .toHaveText('Specifications')

    await expect(page.locator('[data-test="spec-name"]'))
        .toHaveText('Handle Material')

    await expect(page.locator('[data-test="spec-value-text"]'))
        .toHaveText('PVC')

    await expect(page.locator('[data-test="spec-name"]'))
        .toHaveText('Length')

    await expect(page.locator('[data-test="spec-unit"]'))
        .toHaveText('200 mm')

    await expect(page.locator('[data-test="spec-name"]'))
        .toHaveText('Material')

    await expect(page.locator('[data-test="spec-value-text"]'))
        .toHaveText('Carbon Steel')

    await expect(page.locator('[data-test="spec-name"]'))
        .toHaveText('Warranty')

    await expect(page.locator('[data-test="spec-unit"]'))
        .toHaveText('1 years')

    await expect(page.locator('[data-test="spec-name"]'))
        .toHaveText('Weight')

    await expect(page.locator('[data-test="spec-value-text"]'))
        .toHaveText('300 g')

    await expect(page.locator('h2'))
        .toHaveText('Related products')

    await expect(page.getByRole('img', { name: 'Combination Pliers' }))
        .toBeVisible()

    await expect(page.getByText('Combination Pliers'))
        .toBeVisible()

    await expect(page.getByRole('img', { name: 'Pliers' }))
        .toBeVisible()

    await expect(page.getByText('Pliers'))
        .toBeVisible()

    await expect(page.getByRole('img', { name: 'Bolt Cutters' }))
        .toBeVisible()

    await expect(page.getByText('Bolt Cutters'))
        .toBeVisible()

    await expect(page.getByRole('img', { name: 'Long Nose Pliers' }))
        .toBeVisible()

    await expect(page.getByText('Long Nose Pliers'))
        .toBeVisible()

    const products = [
    'Combination Pliers',
    'Pliers',
    'Bolt Cutters',
    'Long Nose Pliers'
    ]

    for (const product of products) {
    const card = page.locator('.card').filter({ 
        has: page.getByRole('img', { name: product })
    })

    await card.getByRole('link', { name: 'More information' }).click()

    await expect(page.locator('[data-test="product-name"]'))
        .toHaveText(product)

    await page.goBack()

    await expect(page.getByRole('heading', { name: 'Related products' }))
        .toBeVisible()
    }
    await expect(page.locator('.card-img-top').first())
        .toHaveAttribute('alt', 'Slip Joint Pliers')

    await expect(page.locator('.figure-caption')).toHaveText('Photo by Yasin Hasan on Unsplash')
    })
})




    

