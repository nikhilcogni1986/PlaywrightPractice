import { test, expect } from '@playwright/test';

test.only('has title', async ({ page }) => {
  await page.goto('http://localhost:4200/pages/iot-dashboard');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/playwright-test-admin Demo Application/);
});

test('Navigate to form page', async({page})=>{

    await page.goto("http://localhost:4200/");
    await page.getByText("Forms").click();
    await page.getByText("Form Layouts").click();
    await page.locator("#inputEmail1").fill("email@test.com");
});