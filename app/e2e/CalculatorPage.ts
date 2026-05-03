import { type Locator, type Page, expect } from '@playwright/test';

export class CalculatorPage {
  readonly page: Page;
  readonly display: Locator;
  readonly historyPanel: Locator;
  readonly historyEmpty: Locator;

  constructor(page: Page) {
    this.page = page;
    this.display = page.locator('.display-result');
    this.historyPanel = page.locator('.history');
    this.historyEmpty = page.locator('.history-empty');
  }

  async goto() {
    await this.page.goto('/');
    await this.page.getByRole('button', { name: 'C' }).waitFor();
  }

  async performCalculation(a: number | string, operator: string, b: number | string) {

    await this.page.waitForTimeout(1000)
    await this.page.getByTestId('btn-clear').click();
    await this.page.getByTestId(`btn-${a}`).click();
    await this.page.getByTestId(`btn-${operator}`).click()
    await this.page.getByTestId(`btn-${b}`).click()
    await this.page.getByTestId('btn-equals').click()
  }

  async clear() {
    await this.page.getByTestId('btn-clear').click()
  }
  
  async toggleHistory() {
    await this.page.waitForTimeout(2000)
    await this.page.getByTestId('btn-history').click()
  }

}