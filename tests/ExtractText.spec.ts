import {test, expect} from '@playwright/test';

test('Extract the text from the button', async({page})=>{

    await page.goto("http://localhost:4200/pages/forms/layouts");
    const basicForm = page.locator("nb-card").filter({ hasText: 'Basic form'});
    const buttonTextLabel = await basicForm.locator('button').textContent();
    expect(buttonTextLabel).toContain("Submit");
});

test('Extract multiple text from a web element', async({page})=>{

    await page.goto("http://localhost:4200/pages/forms/layouts");
    const radioButtonTextLabels = await page.locator("nb-card nb-radio").allTextContents();
    expect(radioButtonTextLabels).toContain("Option 1");
    expect(radioButtonTextLabels).toContain("Disabled Option");
});

test('Extract the text from a input box', async({page})=>
{
    await page.goto("http://localhost:4200/pages/forms/layouts");
    const basicform = page.locator("nb-card").filter({hasText:'Basic form'});
    await basicform.getByRole('textbox',{name:'email'}).fill("test@test.com");
    const emailVaue = await basicform.getByRole('textbox',{name:'email'}).inputValue();  
    expect(emailVaue).toContain("test@test.com");
});

test('Extract text using get attribute function',async({page})=>{

    await page.goto("http://localhost:4200/pages/forms/layouts");
    const basicform = page.locator("nb-card").filter({hasText:'Basic form'});
    await basicform.getByRole('textbox',{name:'email'}).fill("test@test.com");
    const emailValue = await basicform.getByRole('textbox',{name:'email'}).getAttribute('placeholder');
    expect(emailValue).toContain('Email');
});