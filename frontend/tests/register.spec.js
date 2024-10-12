// const { test, expect } = require('@playwright/test');
import { test, expect } from '@playwright/test';

test('has title and contains REGISTER', async ({ page }) => {
    await page.goto('http://localhost:5173/register');
    await page.waitForTimeout(3000); 

    const registerHeader = await page.locator('h1').innerText();
    expect(registerHeader).toContain('REGISTER');
})

test('click register button, but field is empty', async ({ page }) => {
    await page.goto('http://localhost:5173/register');
    await page.waitForTimeout(3000); 

    const submitButton = page.locator('#submit');
    await submitButton.click();

    const messageParagraph = page.locator('p:has-text("Please fill all the fields")');
    await expect(messageParagraph).toBeVisible();
})

test('input existing email', async ({ page }) => {
    await page.goto('http://localhost:5173/register');
    await page.waitForTimeout(3000);

    const emailInput = page.locator('input[name="email"]');
    await emailInput.click();
    await emailInput.fill('admin@gmail.com');

    const passwordInput = page.locator('input[name="password"]');
    await passwordInput.click();
    await passwordInput.fill('admin@gmail.com')
    await page.waitForTimeout(3000);

    const conformPasswordInput = page.locator('input[name="confirmPassword"]');
    await conformPasswordInput.click();
    await conformPasswordInput.fill('admin@gmail.com')
    await page.waitForTimeout(3000);

    const submitButton = page.locator('#submit');
    await submitButton.click();

    const messageParagraph = page.locator('p:has-text("Email already exist")');
    await expect(messageParagraph).toBeVisible();
})

test('input correct email but wrong password', async ({ page }) => {
    await page.goto('http://localhost:5173/register');
    await page.waitForTimeout(3000);

    const emailInput = page.locator('input[name="email"]');
    await emailInput.click();
    await emailInput.fill('admin121@gmail.com');

    const passwordInput = page.locator('input[name="password"]');
    await passwordInput.click();
    await passwordInput.fill('ks12@gmail.com')
    await page.waitForTimeout(3000);

    const conformPasswordInput = page.locator('input[name="confirmPassword"]');
    await conformPasswordInput.click();
    await conformPasswordInput.fill('kesehatan')
    await page.waitForTimeout(3000);

    const submitButton = page.locator('#submit');
    await submitButton.click();

    const messageParagraph = page.locator('p:has-text("Password doesnt match")');
    await expect(messageParagraph).toBeVisible();
})

// test('input corect email and password', async ({ page }) => {
//     await page.goto('http://localhost:5173/register');
//     await page.waitForTimeout(3000);

//     const emailInput = page.locator('input[name="email"]');
//     await emailInput.click();
//     await emailInput.fill('secret11@gmail.com');

//     const passwordInput = page.locator('input[name="password"]');
//     await passwordInput.click();
//     await passwordInput.fill('secret10@gmail.com')
//     await page.waitForTimeout(3000);

//     const conformPasswordInput = page.locator('input[name="confirmPassword"]');
//     await conformPasswordInput.click();
//     await conformPasswordInput.fill('secret10@gmail.com')
//     await page.waitForTimeout(3000);

//     const submitButton = page.locator('#submit');
//     await submitButton.click();

//     const messageParagraph = page.locator('p:has-text("User created successfully")');
//     await expect(messageParagraph).toBeVisible();
// })