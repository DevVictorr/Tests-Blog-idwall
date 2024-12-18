import { test, expect } from '@playwright/test';

test('Pesquisar posts sobre pix', async ({ page }) => {
  await page.goto('https://blog.idwall.co/');

  await page.getByRole('button', { name: '' }).first().click();

  await page.getByPlaceholder('Digite aqui e aperte enter').first().fill('pix');

});