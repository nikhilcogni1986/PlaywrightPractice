import {expect, test} from '@playwright/test'

test('Date picker operations', async({page})=>
{
    await page.goto("http://localhost:4200/pages/forms/datepicker");
    const dateFormPicker = page.getByPlaceholder("Form Picker");
    await dateFormPicker.click();

    let date = new Date();
    date.setDate(date.getDate()+1);
    const expectedDate = date.getDate().toString();

    const dateValuesLocator = page.locator(".day-cell.ng-star-inserted");
    await dateValuesLocator.getByText(expectedDate,{exact:true}).click();
    expect(dateFormPicker).toHaveValue("Apr 11, 2024");

});