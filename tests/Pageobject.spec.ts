import {test} from '@playwright/test'
import { PageObjectManager } from '../tests/Pageobjects/PageObjectManager';

test.beforeEach(async({page})=>
{
    await page.goto("http://localhost:4200/");
});
  
test('Navigate to Forms', async({page})=>
{
    const pm = new PageObjectManager(page);
    await pm.navigateTo().navigateToForms();
    await pm.navigateTo().navigateToDatePickerPage();
    await pm.navigateTo().navigateToTablesPage();
    await pm.navigateTo().navigateToDialogPage();
    await pm.navigateTo().navigateToToastPage();
    await pm.navigateTo().navigateToTooltipPage();
});

test('Pararmeterized tests', async({page})=>
{
    const pm = new PageObjectManager(page);
    
    await pm.navigateTo().navigateToForms();
    await pm.FormsLayoutPage().submitFormUsingGridWithOption("nikhil@test.com","Welcome1","Option 1");
    await pm.FormsLayoutPage().submitInlineForm("Johson","john@test.com",true);
});