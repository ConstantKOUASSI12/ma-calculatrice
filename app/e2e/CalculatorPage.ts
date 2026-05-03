import { type Locator, type Page, expect } from '@playwright/test';

export class CalculatorPage {
  readonly page: Page;
  readonly display: Locator;

  constructor(page: Page) {
    this.page = page;
    this.display = page.locator('.display-result');
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

    /* await this.page.getByRole('button', { name: 'C', exact: true }).click();
    await this.page.getByRole('button', { name: a.toString(), exact: true }).click();
    await this.page.getByRole('button', { name: operator, exact: true }).click();
    await this.page.getByRole('button', { name: b.toString(), exact: true }).click();
    await this.page.getByRole('button', { name: '=', exact: true }).click(); */
  }
}