import { test } from '@playwright/test'
import { PageObjectManager } from '../tests/Pageobjects/PageObjectManager';
import { faker } from '@faker-js/faker'

test.describe('forms layout page', async () => {

    test.describe.configure({retries:2})
    
    test.beforeEach(async ({ page }) => {
        await page.goto("http://localhost:4200/");
    });

    test('Navigate to Forms', async ({ page }) => {
        const pm = new PageObjectManager(page);
        await pm.navigateTo().navigateToForms();
        await pm.navigateTo().navigateToDatePickerPage();
        await pm.navigateTo().navigateToTablesPage();
        await pm.navigateTo().navigateToDialogPage();
        await pm.navigateTo().navigateToToastPage();
        await pm.navigateTo().navigateToTooltipPage();
    });

    test('Pararmeterized tests', async ({ page }) => {
        const pm = new PageObjectManager(page);
        const fullName = faker.person.fullName();
        const randomEmail = `${fullName.replace(" ", "")}${faker.number.int(100)}@test.com`;
        await pm.navigateTo().navigateToForms();
        await pm.FormsLayoutPage().submitFormUsingGridWithOption("nikhil@test.com", "Welcome1", "Option 1");
        await pm.FormsLayoutPage().submitInlineForm(fullName, randomEmail, true);
    });
})