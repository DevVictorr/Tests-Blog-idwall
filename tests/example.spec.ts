import { test, expect } from '@playwright/test';

test('Abrir link e clicar no botão de pesquisar', async ({ page }) => {
  await page.goto('https://blog.idwall.co/');

  await page.getByRole('button', { name: '' }).first().click();

});



