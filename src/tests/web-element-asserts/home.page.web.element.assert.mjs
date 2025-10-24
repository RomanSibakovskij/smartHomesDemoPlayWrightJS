"use strict"

import {HomePage} from "../../pages/home.page.mjs";
import {expect} from "@playwright/test";

class HomePageWebElementAssert{

    //home page web element assert test method
    async isHomePageWebElementVisible(page){
        const homePage = new HomePage(page);
        //assert the home page your home card is visible
        await expect(homePage.homePageYourHomeCard).toBeVisible();
        //assert the home page your home title is visible
        await expect(homePage.homePageYourHomeTitle).toBeVisible();
        //assert the home page your home description is visible
        await expect(homePage.homePageYourHomeDesc).toBeVisible();
        //assert the home page your home explore more button is visible
        await expect(homePage.homePageYourHomeExploreNowBtn).toBeVisible();
        //assert the home page your home background image is visible
        await expect(homePage.homePageUpperBackgroundImg).toBeVisible();
        //description bar
        //assert the home page free delivery icon is visible
        await expect(homePage.homePageFreeDeliveryIcon).toBeVisible();
        //assert the home page free delivery title is visible
        await expect(homePage.homePageFreeDeliveryTitle).toBeVisible();
        //assert the home page free delivery text is visible
        await expect(homePage.homePageFreeDeliveryText).toBeVisible();
        //assert the home page support icon is visible
        await expect(homePage.homePageSupportIcon).toBeVisible();
        //assert the home page support title is visible
        await expect(homePage.homePageSupportTitle).toBeVisible();
        //assert the home page support text is visible
        await expect(homePage.homePageSupportText).toBeVisible();
        //assert the home page authentic icon is visible
        await expect(homePage.homePageAuthenticIcon).toBeVisible();
        //assert the home page authentic title is visible
        await expect(homePage.homePageAuthenticTitle).toBeVisible();
        //assert the home page authentic text is visible
        await expect(homePage.homePageAuthenticText).toBeVisible();
        //inspiration section
        //assert the home page inspiration section title is visible
        await expect(homePage.homePageInspirationSectionTitle).toBeVisible();
        //assert the home page inspiration description is visible
        await expect(homePage.homePageInspirationDesc).toBeVisible();
        //list elements
        //assert the home page inspiration images are visible (as a list)
        const homePageInspirationalImgs = homePage.homePageInspirationImgElement;
        const homePageInspirationalImgCount = await homePageInspirationalImgs.count();
        for (let i = 0; i < homePageInspirationalImgCount; i++) {
            await expect(homePageInspirationalImgs.nth(i)).toBeVisible();
        }
        //best for home section
        //assert the home page best for home section title is visible
        await expect(homePage.homePageBestForHomeSectionTitle).toBeVisible();
        //assert the home page best for home description is visible
        await expect(homePage.homePageBestForHomeDesc).toBeVisible();
        //assert the home page best for home shop now button is visible
        await expect(homePage.homePageBestForHomeShopNowBtn).toBeVisible();
        //assert the home page best for home image is visible
        await expect(homePage.homePageBestForHomeImg).toBeVisible();
        //categories section
        //assert the home page lightning image is visible
        await expect(homePage.homePageLightingImg).toBeVisible();
        //assert the home page lightning title is visible
        await expect(homePage.homePageLightingTitle).toBeVisible();
        //assert the home page appliances image is visible
        await expect(homePage.homePageAppliancesImg).toBeVisible();
        //assert the home page appliances title is visible
        await expect(homePage.homePageAppliancesTitle).toBeVisible();
        //assert the home page security image is visible
        await expect(homePage.homePageSecurityImg).toBeVisible();
        //assert the home page security title is visible
        await expect(homePage.homePageSecurityTitle).toBeVisible();
        //services section
        //assert the home page services section title is visible
        await expect(homePage.homePageServicesSectionTitle).toBeVisible();
        //assert the home page services delivery image is visible
        await expect(homePage.homePageServicesDeliveryImg).toBeVisible();
        //assert the home page services delivery title is visible
        await expect(homePage.homePageServicesDeliveryTitle).toBeVisible();
        //assert the home page services engineers image is visible
        await expect(homePage.homePageServicesEngineersImg).toBeVisible();
        //assert the home page services engineers title is visible
        await expect(homePage.homePageServicesEngineersTitle).toBeVisible();
        //assert the home page services warranty image is visible
        await expect(homePage.homePageServicesWarrantyImg).toBeVisible();
        //assert the home page services warranty title is visible
        await expect(homePage.homePageServicesWarrantyTitle).toBeVisible();
        //footer
        //assert the footer home page title is visible
        await expect(homePage.footerHomePageTitle).toBeVisible();
        //assert the footer home page description is visible
        await expect(homePage.footerHomePageDesc).toBeVisible();
        //assert the footer home page copyright text is visible
        await expect(homePage.footerCopyrightText).toBeVisible();
        //list elements
        //assert the footer links are visible (as a list)
        const footerLinks = homePage.footerLinkElement;
        const footerLinkCount = await footerLinks.count();
        for (let i = 0; i < footerLinkCount; i++) {
            await expect(footerLinks.nth(i)).toBeVisible();
        }

    }

}
export {HomePageWebElementAssert};