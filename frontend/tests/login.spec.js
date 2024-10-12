import { test, expect } from '@playwright/test';

test('has title and contains LOGIN', async ({ page }) => {
    await page.goto('http://localhost:5173/login');
    await page.waitForTimeout(3000); 

    // Memeriksa apakah ada elemen <h1> dengan teks 'LOGIN'
    const loginHeader = await page.locator('h1').innerText();
    expect(loginHeader).toContain('LOGIN');
})

test('click login button, but field is empty', async ({ page }) => {
    await page.goto('http://localhost:5173/login');
    await page.waitForTimeout(3000); 

    const submitButton = page.locator('#submit');
    await submitButton.click();

    const messageParagraph = page.locator('p:has-text("Please fill all the fields")');
    await expect(messageParagraph).toBeVisible();
});

test('input wrong email', async ({ page }) => {
    await page.goto('http://localhost:5173/login');
    await page.waitForTimeout(3000); 

    // Mencari input dengan name 'email', mengkliknya, dan mengisinya
    const emailInput = page.locator('input[name="email"]');
    await emailInput.click();
    await emailInput.fill('guest@gmail.com');

    const passwordInput = page.locator('input[name="password"]');
    await passwordInput.click();
    await passwordInput.fill('guest@gmail.com')

    const submitButton = page.locator('#submit');
    await submitButton.click();

    const messageParagraph = page.locator('p:has-text("User not found")');
    await expect(messageParagraph).toBeVisible();
})

test('input wrong password', async ({ page }) => {
    await page.goto('http://localhost:5173/login');
    await page.waitForTimeout(3000);

    const emailInput = page.locator('input[name="email"]');
    await emailInput.click();
    await emailInput.fill('admin@gmail.com');

    const passwordInput = page.locator('input[name="password"]');
    await passwordInput.click();
    await passwordInput.fill('guest')

    const submitButton = page.locator('#submit');
    await submitButton.click();

    const messageParagraph = page.locator('p:has-text("Password doesnt match")');
    await expect(messageParagraph).toBeVisible();
})

test('input correct email and password', async ({ page }) => {
    await page.goto('http://localhost:5173/login');
    await page.waitForTimeout(3000);

    const emailInput = page.locator('input[name="email"]');
    await emailInput.click();
    await emailInput.fill('admin@gmail.com');

    const passwordInput = page.locator('input[name="password"]');
    await passwordInput.click();
    await passwordInput.fill('admin@gmail.com')

    const submitButton = page.locator('#submit');
    await submitButton.click();

    await page.waitForTimeout(3000);
    await expect(page).toHaveURL(/\/$/);
    
})

test('Logout', async ({ page }) => {
    await page.goto('http://localhost:5173/login');
    await page.waitForTimeout(3000);

    const emailInput = page.locator('input[name="email"]');
    await emailInput.click();
    await emailInput.fill('admin@gmail.com');

    const passwordInput = page.locator('input[name="password"]');
    await passwordInput.click();
    await passwordInput.fill('admin@gmail.com')

    const submitButton = page.locator('#submit');
    await submitButton.click();

    await page.waitForTimeout(3000);
    await expect(page).toHaveURL(/\/$/);

    await page.goto('http://localhost:5173/account');
    const logoutButton = page.locator('#logout');
    await logoutButton.click();
    await page.waitForTimeout(3000);
    await expect(page).toHaveURL(/\/login$/);
})