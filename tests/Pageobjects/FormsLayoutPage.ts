import { Page } from "@playwright/test";

export class FormsLayoutPage
{
    readonly page: Page;

    constructor(page: Page)
    {
        this.page = page;
    }

    async submitFormUsingGridWithOption(email: string, password: string, optionText: string)
    {
        const usingTheGridLocator = this.page.locator("nb-card",{hasText:'Using the Grid'});
        await usingTheGridLocator.getByRole('textbox',{name:'Email'}).fill(email);
        await usingTheGridLocator.getByRole('textbox',{name:'Password'}).fill(password);
        await usingTheGridLocator.getByRole('radio',{name:optionText}).check({force:true});
        await usingTheGridLocator.getByRole('button',{name:'Sign in'}).click();
    }

    async submitInlineForm(name: string, email: string, rememberMe: boolean)
    {
        const inlineFormLocator = this.page.locator("nb-card",{hasText:'Inline form'});
        await inlineFormLocator.getByRole('textbox',{name:'Jane Doe'}).fill(name);
        await inlineFormLocator.getByRole('textbox',{name:'Email'}).fill(email);
        if(rememberMe)
            await inlineFormLocator.getByRole('checkbox').check({force:true});
        
        await inlineFormLocator.getByRole('button',{name:'Submit'}).click();
    }

}