import { test, expect } from '@playwright/test';

test.describe('Calculator App', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:5173');
    });
  
    test.describe('operations', () => {
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

    test.describe('number buttons', () => {
        test('displays number 0 on screen when clicked', async ({ page }) => {
            await page.click('button:text("0")');
            const screenValue = await page.textContent('.screen');
            expect(screenValue).toBe('0');
        });

        test('displays number 1 on screen when clicked', async ({ page }) => {
            await page.click('button:text("1")');
            const screenValue = await page.textContent('.screen');
            expect(screenValue).toBe('1');
        });

        test('displays number 2 on screen when clicked', async ({ page }) => {
            await page.click('button:text("2")');
            const screenValue = await page.textContent('.screen');
            expect(screenValue).toBe('2');
        });

        test('displays number 3 on screen when clicked', async ({ page }) => {
            await page.click('button:text("3")');
            const screenValue = await page.textContent('.screen');
            expect(screenValue).toBe('3');
        });

        test('displays number 4 on screen when clicked', async ({ page }) => {
            await page.click('button:text("4")');
            const screenValue = await page.textContent('.screen');
            expect(screenValue).toBe('4');
        });

        test('displays number 5 on screen when clicked', async ({ page }) => {
            await page.click('button:text("5")');
            const screenValue = await page.textContent('.screen');
            expect(screenValue).toBe('5');
        });

        test('displays number 6 on screen when clicked', async ({ page }) => {
            await page.click('button:text("6")');
            const screenValue = await page.textContent('.screen');
            expect(screenValue).toBe('6');
        });

        test('displays number 7 on screen when clicked', async ({ page }) => {
            await page.click('button:text("7")');
            const screenValue = await page.textContent('.screen');
            expect(screenValue).toBe('7');
        });

        test('displays number 8 on screen when clicked', async ({ page }) => {
            await page.click('button:text("8")');
            const screenValue = await page.textContent('.screen');
            expect(screenValue).toBe('8');
        });

        test('displays number 9 on screen when clicked', async ({ page }) => {
            await page.click('button:text("9")');
            const screenValue = await page.textContent('.screen');
            expect(screenValue).toBe('9');
        });
    });

    test('clears display with "C" button', async ({ page }) => {
        await page.click('button:text("3")');
        await page.click('button:text("+")');
        await page.click('button:text("5")');
        await page.click('button:text("=")');
        await page.click('button:text("C")');
        const screenValue = await page.textContent('.screen');
        expect(screenValue).toBe('0');
    });
    
    test('changes "=" button color to red', async ({ page }) => {
        const buttonColor = await page.$eval('button:text("=")', (button) => {
            return button.style.backgroundColor === 'red';
        });
        expect(buttonColor).toBeTruthy();
    });
});


/* Bug détecté */
// Les tests sur l'adition m'ont permis de voir que l'addtion ne fonctionne pas. C'est la soustraction qui est effectuée à la place.
// Les tests sur la soustraction m'ont permis de voir que la soustraction ne fonctionne pas. C'est l'addition qui est effectuée à la place.
// Les chiffres 3 et 5 sont inversés
