"use strict"

import {GeneralPage} from "../../pages/general.page.mjs";
import {expect} from "@playwright/test";
import {Logger} from "../../pages/utilities/logger.mjs";

class GeneralPageTextElementAssert{

    //general page text element assert test method
    async isGeneralPageTextElementAsExpected(page){
        const generalPage = new GeneralPage(page);
        //header
        //assert the header home page title is as expected
        const headerHomePageTitle = await generalPage.getHeaderHomePageTitle();
        expect(headerHomePageTitle).toBe("Smart Homes");
        //navbar (list elements)
        //assert home page category names are as expected (as a list)
        const headerNavbarBtnTexts = await generalPage.getHeaderHomePageNavbarBtnText();
        //log the misspelling issue
        (headerNavbarBtnTexts.includes("My Cart")) ? Logger.info("The 'My Cart' button text is spelled correctly") : Logger.info(`The "My Cart" button text isn't spelled correctly. Expected: "My Cart", actual: ${headerNavbarBtnTexts[3]}`);
        const expectedHeaderNavbarBtnTexts = ["Home", "Products", "Contact", "MyCart"];
        expect(headerNavbarBtnTexts).toEqual(expectedHeaderNavbarBtnTexts);
    }

}
export {GeneralPageTextElementAssert};