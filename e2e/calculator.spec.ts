import { test, expect } from '@playwright/test';

test.describe('Calculator App', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173');
  });

  test.describe('addition', () => {
    test('performs basic addition correctly', async ({ page }) => {
        await page.click('button:text("1")');
        await page.click('button:text("+")');
        await page.click('button:text("1")');
        await page.click('button:text("=")');
        const screenValue = await page.textContent('.screen');
        expect(screenValue).toBe('2');
        });
    
        test('handles zero correctly', async ({ page }) => {
            await page.click('button:text("0")');
            await page.click('button:text("+")');
            await page.click('button:text("3")');
            await page.click('button:text("=")');
            const screenValue = await page.textContent('.screen');
            expect(screenValue).toBe('3');
        });

        test('handles multiple digit numbers correctly', async ({ page }) => {
        await page.click('button:text("1")');
        await page.click('button:text("1")');
        await page.click('button:text("+")');
        await page.click('button:text("1")');
        await page.click('button:text("1")');
        await page.click('button:text("=")');
        const screenValue = await page.textContent('.screen');
        expect(screenValue).toBe('22');
      });
  });

  test.describe('subtraction', () => {
    test('performs basic subtraction correctly', async ({ page }) => {
        await page.click('button:text("2")');
        await page.click('button:text("-")');
        await page.click('button:text("1")');
        await page.click('button:text("=")');
        const screenValue = await page.textContent('.screen');
        expect(screenValue).toBe('1');
      });

    test('handles zero correctly', async ({ page }) => {
        await page.click('button:text("3")');
        await page.click('button:text("-")');
        await page.click('button:text("0")');
        await page.click('button:text("=")');
        const screenValue = await page.textContent('.screen');
        expect(screenValue).toBe('3');
    });

    test('handles multiple digit numbers correctly', async ({ page }) => {
        await page.click('button:text("1")');
        await page.click('button:text("1")');
        await page.click('button:text("-")');
        await page.click('button:text("1")');
        await page.click('button:text("0")');
        await page.click('button:text("=")');
        const screenValue = await page.textContent('.screen');
        expect(screenValue).toBe('1');
      });
  });
  
  test.describe('multiplication', () => {
    test('performs basic multiplication correctly', async ({ page }) => {
        await page.click('button:text("3")');
        await page.click('button:text("x")');
        await page.click('button:text("2")');
        await page.click('button:text("=")');
        const screenValue = await page.textContent('.screen');
        expect(screenValue).toBe('6');
      });

    test('handles zero correctly', async ({ page }) => {
        await page.click('button:text("3")');
        await page.click('button:text("x")');
        await page.click('button:text("0")');
        await page.click('button:text("=")');
        const screenValue = await page.textContent('.screen');
        expect(screenValue).toBe('0');
      });

    test('handles multiple digit numbers correctly', async ({ page }) => {
        await page.click('button:text("1")');
        await page.click('button:text("0")');
        await page.click('button:text("x")');
        await page.click('button:text("1")');
        await page.click('button:text("0")');
        await page.click('button:text("=")');
        const screenValue = await page.textContent('.screen');
        expect(screenValue).toBe('100');
      });
  });
});
