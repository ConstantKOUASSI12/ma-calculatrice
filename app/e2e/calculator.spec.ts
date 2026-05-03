import { test, expect } from '@playwright/test'

test.describe('Calculatrice', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  
  test.describe('Addition', () => {
    test('additionne 2 + 3 = 5', async ({ page }) => {
      await page.getByRole('button', { name: 'C', exact: true }).click()
      await page.click('button:has-text("2")')
      await page.click('button:has-text("+")')
      await page.click('button:has-text("3")')
      await page.click('button:has-text("=")')
      await expect(page.locator('.display-result')).toContainText('5')
    })

    test('additionne 0 + 0 = 0', async ({ page }) => {
      await page.getByRole('button', { name: 'C', exact: true }).click()
      await page.click('button:has-text("0")')
      await page.click('button:has-text("+")')
      await page.click('button:has-text("0")')
      await page.click('button:has-text("=")')
      await expect(page.locator('.display-result')).toContainText('0')
    })
  })
})