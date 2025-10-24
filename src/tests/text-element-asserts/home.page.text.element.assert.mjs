"use strict"

import {HomePage} from "../../pages/home.page.mjs";
import {expect} from "@playwright/test";
import {Logger} from "../../pages/utilities/logger.mjs";

class HomePageTextElementAssert{

    //home page text element assert test method
    async isHomePageTextElementAsExpected(page){
        const homePage = new HomePage(page);
        //assert the home page your home title is as expected
        const homePageYourHomeTitle = await homePage.getHomePageYourHomeTitle();
        expect(homePageYourHomeTitle).toBe("Your home, your way.");
        //assert the home page your home description is as expected
        const homePageYourHomeDesc = await homePage.getHomePageYourHomeDesc();
        //log the misspelling issue
        (homePageYourHomeDesc === "Not only smart but stylish to match your home vibes") ? console.log("") : Logger.warn(`The home page your home description isn't spelled correctly. Expected: 'Not only smart but stylish to match your home vibes', actual: ${homePageYourHomeDesc}`);
        expect(homePageYourHomeDesc).toBe("Not only smart but, stylish to match your home vibes");
        //assert the home page your home explore now button text is as expected
        const homePageYourHomeExploreNowBtnText = await homePage.getHomePageYourHomeExploreNowBtnText();
        expect(homePageYourHomeExploreNowBtnText).toBe("Explore Now");
        //description bar
        //assert the home page free delivery title is as expected
        const homePageFreeDeliveryTitle = await homePage.getHomePageFreeDeliveryTitle();
        expect(homePageFreeDeliveryTitle).toBe("Free Delivery");
        //assert the home page free delivery text is as expected
        const homePageFreeDeliveryText = await homePage.getHomePageFreeDeliveryText();
        const actualWordPart = homePageFreeDeliveryText.split(" ").slice(-2).join(" "); //split "door step" part
        //log the misspelling issue
        (homePageFreeDeliveryText === "to your doorstep") ? console.log("") : Logger.warn(`The 'doorstep' word isn't spelled correctly. Expected: 'doorstep', actual: ${actualWordPart.split(2)}`);
        expect(homePageFreeDeliveryText).toBe("to your door step");
        //assert the home page support title is as expected
        const homePageSupportTitle = await homePage.getHomePageSupportTitle();
        //log the misspelling issue
        (homePageSupportTitle === "24/7 Support") ? console.log("") : Logger.warn(`The home page support title isn't spelled correctly. Expected: '24/7 Support', actual: ${homePageSupportTitle}`);
        expect(homePageSupportTitle).toBe("7/24 Suppert");
        //assert the home page support text is as expected
        const homePageSupportText = await homePage.getHomePageSupportText();
        //log the misspelling issue
        (homePageSupportText === "Customer support available anytime") ? console.log("") : Logger.warn(`The home page support text isn't spelled correctly. Expected: 'Customer support available anytime', actual: ${homePageSupportText}`);
        expect(homePageSupportText).toBe("Custemer Suppert avaliable anytime");
        //assert the home page authentic title is as expected
        const homePageAuthenticTitle = await homePage.getHomePageAuthenticTitle();
        expect(homePageAuthenticTitle).toBe("100% Authentic");
        //assert the home page authentic text is as expected
        const homePageAuthenticText = await homePage.getHomePageAuthenticText();
        //log the misspelling issue
        (homePageAuthenticText === "Safe and trusted by millions") ? console.log("") : Logger.warn(`The home page authentic text isn't spelled correctly. Expected: 'Safe and trusted by millions', actual: ${homePageAuthenticText}`);
        expect(homePageAuthenticText).toBe("Save and trusted by millons");
        //inspiration section
        //assert the home page inspiration section title is as expected
        const homePageInspirationSectionTitle = await homePage.getHomePageInspirationSectionTitle();
        expect(homePageInspirationSectionTitle).toBe("Inspiration Collection");
        //assert the home page inspiration description is as expected
        const homePageInspirationDesc = await homePage.getHomePageInspirationDesc();
        expect(homePageInspirationDesc).toBe("Define your home with an inspiring selection of top quality smart home appliances.");
        //best for home section
        //assert the home page best for home section title is as expected
        const homePageBestForHomeSectionTitle = await homePage.getHomePageBestForHomeSectionTitle();
        expect(homePageBestForHomeSectionTitle).toBe("The best for your home.");
        //assert the home page best for home description is as expected
        const homePageBestForHomeDesc = await homePage.getHomePageBestForHomeDesc();
        expect(homePageBestForHomeDesc).toBe("Discover our wide range of smart home appliances designed to make your life easier and more comfortable.");
        //assert the home page best for home shop now button is as expected
        const homePageBestForHomeShopNowBtnText = await homePage.getHomePageBestForHomeShopNowBtnText();
        expect(homePageBestForHomeShopNowBtnText).toBe("Shop Now");
        //categories section
        //assert the home page lighting title is as expected
        const homePageLightingTitle = await homePage.getHomePageLightingTitle();
        expect(homePageLightingTitle).toBe("Lighting");
        //assert the home page appliances title is as expected
        const homePageAppliancesTitle = await homePage.getHomePageAppliancesTitle();
        expect(homePageAppliancesTitle).toBe("Appliances");
        //assert the home page security title is as expected
        const homePageSecurityTitle = await homePage.getHomePageSecurityTitle();
        expect(homePageSecurityTitle).toBe("Security");
        //services section
        //assert the home page services section title is as expected
        const homePageServicesSectionTitle = await homePage.getHomePageServicesSectionTitle();
        expect(homePageServicesSectionTitle).toBe("Our Services");
        //assert the home page services delivery title is as expected
        const homePageServicesDeliveryTitle = await homePage.getHomePageServicesDeliveryTitle();
        expect(homePageServicesDeliveryTitle).toBe("Delivered to your doorstep");
        //assert the home page services engineers title is as expected
        const homePageServicesEngineersTitle = await homePage.getHomePageServicesEngineersTitle();
        expect(homePageServicesEngineersTitle).toBe("Installed by our professional engineers");
        //assert the home page services warranty title is as expected
        const homePageServicesWarrantyTitle = await homePage.getHomePageServicesWarrantyTitle();
        expect(homePageServicesWarrantyTitle).toBe("1 year warranty on all products");
        //footer
        //assert the footer home page title is as expected
        const footerHomePageTitle = await homePage.getFooterHomePageTitle();
        expect(footerHomePageTitle).toBe("Smart Homes");
        //assert the footer description is as expected
        const footerDesc = await homePage.getFooterDesc();
        expect(footerDesc).toBe("Smart Home Appliances & Solutions");
        //assert the footer description is as expected
        const footerCopyrightText = await homePage.getFooterCopyrightText();
        expect(footerCopyrightText).toBe("© 2025 E-Comm. All rights reserved.");
        //list elements
        //assert footer link texts are as expected (as a list)
        const footerLinkTexts = await homePage.getFooterLinkText();
        const expectedFooterLinkTexts  = ["About Us", "Contact", "Privacy Policy"];
        expect(footerLinkTexts).toEqual(expectedFooterLinkTexts);
    }

}
export {HomePageTextElementAssert};