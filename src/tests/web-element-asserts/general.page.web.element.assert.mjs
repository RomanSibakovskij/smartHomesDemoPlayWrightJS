"use strict"

import {GeneralPage} from "../../pages/general.page.mjs";
import {expect} from "@playwright/test";

class GeneralPageWebElementAssert{

    //general page web element assert test method
    async isGeneralPageWebElementVisible(page){
        const generalPage = new GeneralPage(page);
        //header
        //assert the header home page title is visible
        await expect(generalPage.headerHomePageTitle).toBeVisible();
        //navbar (list elements)
        //assert header navbar buttons are visible
        const headerNavbarButtons = generalPage.headerNavbarBtnElement;
        const headerNavbarBtnCount = await headerNavbarButtons.count();
        for (let i = 0; i < headerNavbarBtnCount; i++) {
            await expect(headerNavbarButtons.nth(i)).toBeVisible();
        }
    }

}
export {GeneralPageWebElementAssert};