export async function login(page, email, password) {

    await page.getByRole('link', { name: 'Sign in' }).click();

    await page.locator('#email').fill(email);
    await page.locator('#password').fill(password);

    console.log(
        'Botão ativo:',
        await page.locator('[data-test="login-submit"]').isEnabled()
    );

    await page.locator('[data-test="login-submit"]').click();

    await page.waitForTimeout(2000);

    console.log('URL:', page.url());
}