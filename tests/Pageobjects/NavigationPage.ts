import {Page} from '@playwright/test'

export class NavigationPage
{
    readonly page: Page;
    
    constructor(page:Page)
    {
        this.page = page;
    }

    async navigateToForms()
    {
        await this.selectGrpMenuItem("Forms");
        await this.page.getByText("Form Layouts").click();
    }

    async navigateToDatePickerPage()
    {
        await this.selectGrpMenuItem("Forms");
        await this.page.getByText("Datepicker").click();
    }

    async navigateToTablesPage()
    {
        await this.selectGrpMenuItem("Tables & Data");
        await this.page.getByText("Smart Table").click();
    }

    async navigateToDialogPage()
    {
        await this.selectGrpMenuItem("Modal & Overlays");
        await this.page.getByText("Dialog").click();
    }

    async navigateToToastPage()
    {
        await this.selectGrpMenuItem("Modal & Overlays");
        await this.page.getByText("Toastr").click();
    }

    async navigateToTooltipPage()
    {
        await this.selectGrpMenuItem("Modal & Overlays");
        await this.page.getByText("Tooltip").click();
    }

    private async selectGrpMenuItem(grpItemTitle: string)
    {
        const grpMenuItem = this.page.getByTitle(grpItemTitle);
        const expandedState = await grpMenuItem.getAttribute("aria-expanded");
        if(expandedState == "false")
            await grpMenuItem.click();
    }
}