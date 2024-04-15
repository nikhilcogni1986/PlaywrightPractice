import { expect, test } from "@playwright/test"

test.beforeEach(async({page})=>{
    await page.goto("http://www.uitestingplayground.com/ajax");
    await page.getByText("Button Triggering AJAX Request").click();
});

test('Handling Auto waits', async({page})=>{
    const successLabel = page.locator(".bg-success");
    let successMsg = await successLabel.textContent();
    expect(successMsg).toContain("Data loaded with AJAX get request.");
});

test('Wait for element using selector', async({page})=>{
    
    const successLabel = page.locator(".bg-success");
    await page.waitForSelector('.bg-success');
    let successMsg = await successLabel.allTextContents();
    expect(successMsg).toContain("Data loaded with AJAX get request.");
});

test('Wait till API response is complete', async({page})=>{
    
    const successLabel = page.locator(".bg-success");
    await page.waitForResponse("http://www.uitestingplayground.com/ajaxdata");
    let successMsg = await successLabel.allTextContents();
    expect(successMsg).toContain("Data loaded with AJAX get request.");
});

