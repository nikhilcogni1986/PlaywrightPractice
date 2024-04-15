import {expect, test} from '@playwright/test'

test('Dropdown Demo', async({page})=>{

    await page.goto("http://localhost:4200/pages/forms/layouts");
    const drpdwn = page.locator("nb-select button");
    await drpdwn.click();

    const options = page.locator("nb-option-list nb-option");
    await expect(options).toHaveText(['Light','Dark','Cosmic','Corporate']);
    
    await options.filter({hasText:"Cosmic"}).click();
    const header = page.locator("nb-layout-header");
    await expect(header).toHaveCSS('background-color','rgb(50, 50, 89)');

    const colors = {
        "Light": "rgb(255, 255, 255)",
        "Dark": "rgb(34, 43, 69)",
        "Cosmic": "rgb(50, 50, 89)",
        "Corporate": "rgb(255, 255, 255)"
    }
    
    await drpdwn.click();
    for(const color in colors)
    {
        await options.filter({hasText:color}).click();
        await expect(header).toHaveCSS('background-color',colors[color]);
        await drpdwn.click();
    }
});


test("handling Select dropdown using label", async ({ page }) => 
{
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
    await page.selectOption("#select-demo", {
      label: "Tuesday" });
    await page.waitForTimeout(3000);
    const drpdwnText = await page.locator("#select-demo").textContent();
    await console.log(drpdwnText);
    expect(drpdwnText).toContain("Friday");
    expect(drpdwnText.includes("Monday")).toBeTruthy();
});

test("handling Select dropdown using value", async ({ page }) => 
{
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
    let drpdwn = await page.$("#select-demo");
    let options = await drpdwn.$$('option');
    await page.selectOption("#select-demo", {
      value: "Monday" });

    //print the drop down options
    for(let i=0; i<options.length; i++)
    {
        let element = options[i];
        let optionValue = await element.textContent();
        console.log("Value in the drop down: "+optionValue);
    }
});

test("handling Select dropdown using index", async ({ page }) => 
{
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
    await page.selectOption("#select-demo", {
      index:4 });
    await page.waitForTimeout(3000);
});

test('Select multiple values from the drop down', async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
    await page.selectOption("#multi-select", [
        {
            label: "Texas"
        }, {
            index: 2
        }, {
            value: "Washington"
        }
    ])
});

test('JQuery select drop down', async({page})=>{

    await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo");
    await selectCountry("India");
    await selectCountry("Denmark");
    await selectCountry("South Africa");
 
    async function selectCountry(countryName) 
    {
        await page.click("#country+span");
        await page.locator("ul#select2-country-results")
            .locator("li", {
                hasText: countryName
            }).click();
    }
});

