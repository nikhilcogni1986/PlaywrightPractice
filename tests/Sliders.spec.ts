import {test} from '@playwright/test'

test('Slider operations by modifying atributes', async({page})=>
{
    await page.goto("http://localhost:4200/pages/iot-dashboard");
    const tempGauge = page.locator("[ng-reflect-tab-title='Temperature'] ngx-temperature-dragger circle");
    await tempGauge.evaluate(node =>{
        node.setAttribute('cx',"232.630")
        node.setAttribute('cy',"232.630")
    })
    await tempGauge.click();
});

test('Slider operations by mouse movement', async({page})=>
{
    await page.goto("http://localhost:4200/pages/iot-dashboard");
    const tempBox = page.locator("[ng-reflect-tab-title='Temperature'] ngx-temperature-dragger");
    await tempBox.scrollIntoViewIfNeeded();
    
    const box = tempBox.boundingBox();
    const x = (await box).x + (await box).width/2;
    const y = (await box).y + (await box).height/2;
    await page.mouse.move(x, y);
    await page.mouse.down();
    await page.mouse.move(x+100, y);
    await page.mouse.move(x+100, y+100);
    await page.mouse.down();
});