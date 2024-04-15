import {expect, test} from '@playwright/test'
import { escape } from 'querystring';

test('Handing dialog box on click of delete button', async({page})=>{

    await page.goto("http://localhost:4200/pages/iot-dashboard");
    await page.getByText("Tables & Data").click();
    await page.getByText("Smart Table").click();

    //Add an event to handle Dialog
    page.on('dialog',dialog=>{
        expect(dialog.message()).toEqual("Are you sure you want to delete?");
        dialog.accept();
    });

    await page.getByRole("table").locator('tr',{hasText:"mdo@gmail.com"}).locator(".nb-trash").click();

    //validate whether first row with above email address is deleted
    await expect(page.locator('table tr').first()).not.toHaveText("mdo@gmail.com");
});

test('Open Dialog with component', async({page})=>{

    await page.goto("http://localhost:4200/pages/modal-overlays/dialog");
    await page.getByText("Open Dialog with component").click();
    await page.getByText("Dismiss Dialog").click();
    await page.keyboard.press('Escape');
});

test('Open Dialog with component and press escape', async({page})=>{

    await page.goto("http://localhost:4200/pages/modal-overlays/dialog");
    await page.getByText("Open Dialog with esc close").click();
    await page.keyboard.press('Escape');
});