import { test, expect } from '@playwright/test';

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

test('visit category page', async ({ page }) => {
    await page.goto('http://localhost:5173/category');
    await page.waitForTimeout(3000);
 
    const categoryHeader = page.locator('#title_page:has-text("FRUIT CATEGORY")');
    await expect(categoryHeader).toBeVisible(); 
})

test('input category', async ({ page }) => {
    await page.goto('http://localhost:5173/category');
    await page.waitForTimeout(3000);
 
    const fruitNameInput = page.locator('input[name="categoryName"]');
    await fruitNameInput.click();
    await fruitNameInput.fill('pepaya')

    const submitButton = page.locator('#submit');
    await submitButton.click();

    const messageParagraph = page.locator('p:has-text("Category created successfully")');
    await expect(messageParagraph).toBeVisible();
})

test('input duplicate category', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    await page.goto('http://localhost:5173/category');
    await page.waitForTimeout(3000);
 
    const fruitNameInput = page.locator('input[name="categoryName"]');
    await fruitNameInput.click();
    await fruitNameInput.fill('pepaya')

    const submitButton = page.locator('#submit');
    await submitButton.click();

    const messageParagraph = page.locator('p:has-text("Category already exist")');
    await expect(messageParagraph).toBeVisible();
})