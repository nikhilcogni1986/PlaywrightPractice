import {expect, test} from "@playwright/test"

test('Handling Radio buttons', async({page})=>{

    await page.goto("http://localhost:4200/pages/forms/layouts");
    
    //Select the Radio button Option 1
    const usingGrid = page.locator("nb-card").filter({hasText:'Using the Grid'});
    await usingGrid.getByLabel("Option 1").check({force:true});

    //select the radio button2
    await usingGrid.getByRole('radio',{name:"Option 2"}).check({force:true});
});

test('Radio button Practice', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.getByText('Male', { exact: true }).check();
    expect(page.getByText('Male', { exact: true })).toBeChecked();
});

test('Radio buttons Lamda Test', async({page})=>
{
    await page.goto("https://www.lambdatest.com/selenium-playground/radiobutton-demo");
    await page.getByText('Radio Button 1').check();
    expect(page.getByText('Radio Button 1')).toBeChecked();

    await page.getByText("0 to 5").check();

})
