import {test, expect} from '@playwright/test';

test('locators', async ({page}) =>
{
  await page.goto("http://localhost:4200/pages/forms/layouts");
  await page.getByRole('textbox',{name:'Email'}).first().click();

  //Inline form
  await page.getByPlaceholder("Jane Doe").fill("JANE DOE");

  //get by text
  await page.getByText("Using the Grid").click();

  //get by title
  await page.getByTitle("IoT Dashboard").click();
});

test('Child locators', async({page})=>{

  await page.goto("http://localhost:4200/pages/forms/layouts");

  await page.locator("nb-card nb-radio :text-is('Option 1')").click();
  await page.locator('nb-card').locator('nb-radio').locator(":text-is('Option 2')").click();

  //click on Signin
  await page.locator("nb-card").getByRole('button',{name:'Sign in'}).first().click();
  await page.locator('nb-card').nth(3).getByRole('button').click();  
})

test('Practice locators', async({page})=>{

  await page.goto("https://askomdch.com/");
  const searchFilter = "Blue";
  await page.getByRole('link',{name:'Store'}).click();
  await page.getByPlaceholder('Search products…').fill(searchFilter);
  await page.getByRole('button',{name:'Search'}).click();

  let searchResult = await page.locator('h1.woocommerce-products-header__title.page-title').textContent();
  expect(searchResult).toContain(searchFilter);
});

test('Parent locators', async({page})=>{

  await page.goto("http://localhost:4200/pages/forms/layouts");
  await page.locator('nb-card',{hasText:'Using the Grid'}).getByRole('textbox',{name:'email'}).click();

  //Basic form -> email address
  await page.locator("nb-card",{hasText:'Basic form'}).getByRole('textbox',{name:'email'}).click();

  await page.locator("nb-card").filter({hasText:'Basic form'}).getByRole('textbox',{name:'email'}).click();
  await page.locator("nb-card").filter({has:page.locator('.status-danger')});
  
})