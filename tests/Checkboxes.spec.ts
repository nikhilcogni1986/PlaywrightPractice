import { test,expect } from "@playwright/test";

test('Operating checkboxes', async({page})=>
{
    await page.goto("http://localhost:4200/pages/iot-dashboard");
    await page.getByText("Modal & Overlays").click();
    await page.getByText("Toastr").click();
    await page.getByRole('checkbox',{name:"Hide on click"}).uncheck({force:true});
})

test('Iterating over checkboxes', async({page})=>
{
    await page.goto("http://localhost:4200/pages/iot-dashboard");
    await page.getByText("Modal & Overlays").click();
    await page.getByText("Toastr").click();
    const checkboxes = page.getByRole('checkbox');

    for(const chkbox of await checkboxes.all())
    {
        await chkbox.check({force:true});
        expect(await chkbox.isChecked()).toBeTruthy();
    }

    //uncheck all the checkboxes
    for(const box of await checkboxes.all())
    {
        await box.uncheck({force:true});
        expect(box.isChecked).toBeFalsy();
    }
})

test('Test Automation for checkboxes', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    const daysCheckboxes = page.locator(".form-check-input");

    for(const chkbox of await daysCheckboxes.all())
    {
        chkbox.check({force:true});
        expect(chkbox.isChecked).toBeTruthy();
    }
})

test('Test Automation for checkboxes Lamda Test', async({page})=>{

    await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo");
    await page.getByText('Click on check box').check();
    expect(page.getByText("Click on check box").isChecked).toBeTruthy();
})

test('Check all the checkboxes for Day', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("input[type='checkbox'][value='sunday']").check();
    await page.locator("input[type='checkbox'][value='monday']").check();
    await page.locator("input[type='checkbox'][value='friday']").check();
    await page.locator("input[type='checkbox'][value='saturday']").check();
});