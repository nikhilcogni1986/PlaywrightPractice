import {test} from '@playwright/test'

test('Screenshot demo', async({page})=>{

    await page.goto("https://www.spicejet.com/");
    await page.screenshot({path:'screenshot/HomePage.png'});
});