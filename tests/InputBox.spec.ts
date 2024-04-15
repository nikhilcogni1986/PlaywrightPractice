import {expect, test} from '@playwright/test'

test('Handling text boxes', async({page})=>{

    await page.goto("http://localhost:4200/pages/iot-dashboard");
    await page.getByText("Forms").click();
    await page.getByText("Form Layouts").click();

    //Fill
    const txtEmail = page.locator('nb-card').filter({hasText:'Using the Grid'})
                        .getByRole('textbox',{name:'Email'});
    await txtEmail.fill("test@test.com");
    await txtEmail.clear();
    await txtEmail.pressSequentially("test1@test.com",{delay:500});

    //Assertions
    const emailValue = await txtEmail.inputValue();
    expect(emailValue).toContain("test1@test.com");

    //Locator assertion
    await expect(txtEmail).toHaveValue("test1@test.com");

});
