import {Page} from '@playwright/test'
import { NavigationPage } from '../Pageobjects/NavigationPage';
import {FormsLayoutPage} from '../Pageobjects/FormsLayoutPage';

export class PageObjectManager
{
    private readonly page: Page;
    private readonly navigationPage: NavigationPage;
    private readonly formsLayoutPage: FormsLayoutPage;

    constructor(page: Page)
    {
        this.page =page;
        this.navigationPage = new NavigationPage(this.page);
        this.formsLayoutPage = new FormsLayoutPage(this.page);
    }

    navigateTo()
    {
        return this.navigationPage;
    }

    FormsLayoutPage()
    {
        return this.formsLayoutPage;
    }
}