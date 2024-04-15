import { TagContentType } from '@angular/compiler';
import {expect, test} from '@playwright/test'
import { last } from 'rxjs-compat/operator/last';

test('Handling web tables part1', async({page})=>
{
    await page.goto("http://localhost:4200/pages/tables/smart-table");
    const targetRow = page.getByRole('row',{name:'twitter@outlook.com'});
    await targetRow.locator(".nb-edit").click();
    await page.locator("input-editor").getByPlaceholder('Age').fill("22");
    await page.locator(".nb-checkmark").click();

    //get the locator for page 2
    await page.locator(".ng2-smart-pagination-nav").getByText("2").click();

    //Find the element with ID value as 11
    const getByRowIDLocator = page.getByRole('row',{name:"11"}).filter({has:page.locator('td').nth(1).getByText("11")});
    await getByRowIDLocator.locator(".nb-edit").click();
    await page.locator("input-editor").getByPlaceholder('Age').fill("22");
    await page.locator(".nb-checkmark").click();

});

test('Get the number of columns in each row',async({page})=>
{
    await page.goto("https://datatables.net/extensions/select/examples/checkbox/checkbox.html");
    
    //get the number of columns for each row
    const allrows = await page.locator("table#example tbody tr").all();
    allrows.forEach(async(rows) =>
    {
        console.log(await rows.locator('td').count());
    });
});

test('Get the count of number of rows',async({page})=>
{
    await page.goto("https://datatables.net/extensions/select/examples/checkbox/checkbox.html");
    const tableLocator = page.locator("table#example tbody");
    console.log(await tableLocator.locator('tr').count());    

    //increase the row count and print again
    await page.locator("#dt-length-0").selectOption("25");
    console.log(await tableLocator.locator('tr').count());    
});

test('Get the table data from the second row', async({page})=>
{
    await page.goto("https://datatables.net/extensions/select/examples/checkbox/checkbox.html");
    const tableLocator = page.locator("table#example tbody");
    const secondRow = await tableLocator.locator('tr').nth(0).allInnerTexts();

    await secondRow.forEach(async(text)=>
    {
        await console.log(text);
    });
});

test('Search for the city and get the details of last row', async({page})=>
{
    await page.goto("https://datatables.net/extensions/select/examples/checkbox/checkbox.html");
    const tableLocator = page.locator("table#example tbody");

    await page.locator("#dt-search-0").fill("Tokyo")
    const lastRow = await tableLocator.locator('tr').last().allInnerTexts();
    await lastRow.forEach(async rowData =>
    {
        await console.log(rowData);
    })
});

test('Get all the names from the name column', async({page})=>
{
    await page.goto("https://datatables.net/extensions/select/examples/checkbox/checkbox.html");
    const tableLocator = page.locator("table#example tbody");
    const allNames = await tableLocator.locator('tr').locator('td.sorting_1').allInnerTexts();

    //Loop to get all names
    allNames.forEach(async text=>
    {
        await console.log(text);
    })
});

test('Provide ages and validate the data', async({page})=>
{
    await page.goto("http://localhost:4200/pages/tables/smart-table");
    
    //Ages to be compared
    const ages = ["20", "30", "200"];

    //Loop through ages
    for(let age of ages)
    {
        await page.locator("input-filter").getByPlaceholder("Age").fill(age);
        await page.waitForTimeout(500);

        const ageRows = page.locator("tbody tr");
        for(let row of await ageRows.all())
        {
            let actualAge = await row.locator('td').last().textContent();

            if(age =="200")
            {
                await console.log("No assertion as no data");
            }
            else
            {
                expect(actualAge).toEqual(age);
            }
        };
    }
});