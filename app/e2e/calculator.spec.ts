// tests/e2e/calculator.spec.ts
import { test, expect } from '@playwright/test';
import { CalculatorPage } from './CalculatorPage';


test.describe('Calculatrice', () => {
  let calc: CalculatorPage;

  test.beforeEach(async ({ page }) => {
    calc = new CalculatorPage(page);
    await calc.goto();
  });

  const operations = [
    { a: 2, op: 'add', b: 3, expected: '5', desc: 'Addition' },
    { a: 0, op: 'add', b: 1, expected: '1', desc: 'Addition' },
    { a: 5, op: 'subtract', b: 3, expected: '2', desc: 'Soustraction positive' },
    { a: 3, op: 'subtract', b: 5, expected: '-2', desc: 'Soustraction négative' },
    { a: 3, op: 'multiply', b: 4, expected: '12', desc: 'Multiplication' },
    { a: 5, op: 'multiply', b: 0, expected: '0', desc: 'Multiplication' },
  ];

  for (const { a, op, b, expected, desc } of operations) {
    test(`${desc} : ${a} ${op} ${b}`, async () => {
      await calc.performCalculation(a, op, b);
      await expect(calc.display).toContainText(expected);
    });
  }
});