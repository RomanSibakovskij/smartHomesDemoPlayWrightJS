"use strict"

import {BasePage} from "./utilities/base.page.mjs";

class HomePage extends BasePage{

    constructor(page) {
        super(page);

        //home page web elements
        //your home card
        this._homePageYourHomeCard = page.locator("//div[@class='flex flex-col relative justify-center items-center top-20 left-6 bg-amber-50 w-[300px] h-[300px] rounded-3xl ']");
        this._homePageYourHomeTitle = page.locator("//div[@class='flex flex-col relative justify-center items-center top-20 left-6 bg-amber-50 w-[300px] h-[300px] rounded-3xl ']/h1");
        this._homePageYourHomeDesc = page.locator("//div[@class='flex flex-col relative justify-center items-center top-20 left-6 bg-amber-50 w-[300px] h-[300px] rounded-3xl ']/p");
        this._homePageYourHomeExploreNowBtn = page.locator("//div[@class='flex flex-col relative justify-center items-center top-20 left-6 bg-amber-50 w-[300px] h-[300px] rounded-3xl ']/button");
        this._homePageUpperBackgroundImg = page.locator("//div[@class='flex w-full h-[750px] bg-cover bg-center']");
        //description bar
        this._homePageFreeDeliveryIcon = page.locator("//div[@class='flex flex-row justify-between items-center bg-blue-200 p-4 text-black width-full h-[122px]']/div[1]/img");
        this._homePageFreeDeliveryTitle = page.locator("//div[@class='flex flex-row justify-between items-center bg-blue-200 p-4 text-black width-full h-[122px]']/div[1]/div/p1");
        this._homePageFreeDeliveryText = page.locator("//div[@class='flex flex-row justify-between items-center bg-blue-200 p-4 text-black width-full h-[122px]']/div[1]/div/p2");
        this._homePageSupportIcon = page.locator("//div[@class='flex flex-row justify-between items-center bg-blue-200 p-4 text-black width-full h-[122px]']/div[2]/img");
        this._homePageSupportTitle = page.locator("//div[@class='flex flex-row justify-between items-center bg-blue-200 p-4 text-black width-full h-[122px]']/div[2]/div/p1");
        this._homePageSupportText = page.locator("//div[@class='flex flex-row justify-between items-center bg-blue-200 p-4 text-black width-full h-[122px]']/div[2]/div/p2");
        this._homePageAuthenticIcon = page.locator("//div[@class='flex flex-row justify-between items-center bg-blue-200 p-4 text-black width-full h-[122px]']/div[3]/img");
        this._homePageAuthenticTitle = page.locator("//div[@class='flex flex-row justify-between items-center bg-blue-200 p-4 text-black width-full h-[122px]']/div[3]//p1");
        this._homePageAuthenticText = page.locator("//div[@class='flex flex-row justify-between items-center bg-blue-200 p-4 text-black width-full h-[122px]']/div[3]//p2");
        //inspiration section
        this._homePageInspirationSectionTitle = page.locator("//div[@class='flex flex-col justify-center items-center text-center bg-amber-100 min-w-screen']/h2");
        this._homePageInspirationDesc = page.locator("//div[@class='flex flex-col justify-center items-center text-center bg-amber-100 min-w-screen']/p");
        //list elements
        this._homePageInspirationImgElements = page.locator("//div[@class='flex flex-row justify-center m-2']/img");
        //best for home section
        this._homePageBestForHomeSectionTitle = page.locator("//div[@class='flex flex-col justify-center items-center text-center max-w-1/2 m-2']/h2");
        this._homePageBestForHomeDesc = page.locator("//div[@class='flex flex-col justify-center items-center text-center max-w-1/2 m-2']/p");
        this._homePageBestForHomeShopNowBtn = page.locator("//div[@class='flex flex-col justify-center items-center text-center max-w-1/2 m-2']/button");
        this._homePageBestForHomeImg = page.locator("//div[@class='w-full flex flex-row justify-center items-center bg-sky-900 text-white p-5']/img");
        //categories section
        this._homePageLightingImg = page.locator("//div[@class='w-full flex flex-row justify-center items-center bg-amber-100 text-sky-900 p-5 h-100']/div[1]/img");
        this._homePageLightingTitle = page.locator("//div[@class='w-full flex flex-row justify-center items-center bg-amber-100 text-sky-900 p-5 h-100']/div[1]/h2");
        this._homePageAppliancesImg = page.locator("//div[@class='w-full flex flex-row justify-center items-center bg-amber-100 text-sky-900 p-5 h-100']/div[2]/img");
        this._homePageAppliancesTitle = page.locator("//div[@class='w-full flex flex-row justify-center items-center bg-amber-100 text-sky-900 p-5 h-100']/div[2]/h2");
        this._homePageSecurityImg = page.locator("//div[@class='w-full flex flex-row justify-center items-center bg-amber-100 text-sky-900 p-5 h-100']/div[3]/img");
        this._homePageSecurityTitle = page.locator("//div[@class='w-full flex flex-row justify-center items-center bg-amber-100 text-sky-900 p-5 h-100']/div[3]/h2");
        //services section
        this._homePageServicesSectionTitle = page.locator("//div[@class='flex flex-col justify-center items-center text-center bg-blue-200 min-w-screen text-black p-5']/h2");
        this._homePageServicesDeliveryImg = page.locator("//div[@class='w-full flex flex-row justify-center items-center bg-blue-200 text-black p-5 h-100']/div[1]/img");
        this._homePageServicesDeliveryTitle = page.locator("//div[@class='w-full flex flex-row justify-center items-center bg-blue-200 text-black p-5 h-100']/div[1]/h2");
        this._homePageServicesEngineersImg = page.locator("//div[@class='w-full flex flex-row justify-center items-center bg-blue-200 text-black p-5 h-100']/div[2]/img");
        this._homePageServicesEngineersTitle = page.locator("//div[@class='w-full flex flex-row justify-center items-center bg-blue-200 text-black p-5 h-100']/div[2]/h2");
        this._homePageServicesWarrantyImg = page.locator("//div[@class='w-full flex flex-row justify-center items-center bg-blue-200 text-black p-5 h-100']/div[3]/img");
        this._homePageServicesWarrantyTitle = page.locator("//div[@class='w-full flex flex-row justify-center items-center bg-blue-200 text-black p-5 h-100']/div[3]/h2");
        //footer
        this._footerHomePageTitle = page.locator("//footer//div[@class='mb-4 md:mb-0 items-center text-center']/h3");
        this._footerHomePageDesc = page.locator("//footer//div[@class='mb-4 md:mb-0 items-center text-center']/p");
        this._footerCopyrightText = page.locator("//footer//div[@class='mt-4 md:mt-0 text-sm']");
        //list elements
        this._footerLinkElements = page.locator("//footer//div[@class='flex flex-col md:flex-row gap-6 items-center']/a");

    }

    //home page text element getters
    async getHomePageYourHomeTitle(){return this._homePageYourHomeTitle.innerText();}
    async getHomePageYourHomeDesc(){return this._homePageYourHomeDesc.innerText();}
    async getHomePageYourHomeExploreNowBtnText(){return this._homePageYourHomeExploreNowBtn.innerText();}
    //description bar
    async getHomePageFreeDeliveryTitle(){return this._homePageFreeDeliveryTitle.innerText();}
    async getHomePageFreeDeliveryText(){return this._homePageFreeDeliveryText.innerText();}
    async getHomePageSupportTitle(){return this._homePageSupportTitle.innerText();}
    async getHomePageSupportText(){return this._homePageSupportText.innerText();}
    async getHomePageAuthenticTitle(){return this._homePageAuthenticTitle.innerText();}
    async getHomePageAuthenticText(){return this._homePageAuthenticText.innerText();}
    //inspiration section
    async getHomePageInspirationSectionTitle(){return this._homePageInspirationSectionTitle.innerText();}
    async getHomePageInspirationDesc(){return this._homePageInspirationDesc.innerText();}
    //best for home section
    async getHomePageBestForHomeSectionTitle(){return this._homePageBestForHomeSectionTitle.innerText();}
    async getHomePageBestForHomeDesc(){return this._homePageBestForHomeDesc.innerText();}
    async getHomePageBestForHomeShopNowBtnText(){return this._homePageBestForHomeShopNowBtn.innerText();}
    //categories section
    async getHomePageLightingTitle(){return this._homePageLightingTitle.innerText();}
    async getHomePageAppliancesTitle(){return this._homePageAppliancesTitle.innerText();}
    async getHomePageSecurityTitle(){return this._homePageSecurityTitle.innerText();}
    //services section
    async getHomePageServicesSectionTitle(){return this._homePageServicesSectionTitle.innerText();}
    async getHomePageServicesDeliveryTitle(){return this._homePageServicesDeliveryTitle.innerText();}
    async getHomePageServicesEngineersTitle(){return this._homePageServicesEngineersTitle.innerText();}
    async getHomePageServicesWarrantyTitle(){return this._homePageServicesWarrantyTitle.innerText();}
    //footer
    async getFooterHomePageTitle(){return this._footerHomePageTitle.innerText();}
    async getFooterDesc(){return this._footerHomePageDesc.innerText();}
    async getFooterCopyrightText(){return this._footerCopyrightText.innerText();}
    //list elements
    async getFooterLinkText(){
        const elements = await this._footerLinkElements.all();
        return await Promise.all(
            elements.map(async (element) => {
                const text = await element.innerText();
                return text.trim();
            })
        );
    }

    //home page web element getters
    get homePageYourHomeCard(){return this._homePageYourHomeCard;}
    get homePageYourHomeTitle(){return this._homePageYourHomeTitle;}
    get homePageYourHomeDesc(){return this._homePageYourHomeDesc;}
    get homePageYourHomeExploreNowBtn(){return this._homePageYourHomeExploreNowBtn;}
    get homePageUpperBackgroundImg(){return this._homePageUpperBackgroundImg;}
    //description bar
    get homePageFreeDeliveryIcon(){return this._homePageFreeDeliveryIcon;}
    get homePageFreeDeliveryTitle(){return this._homePageFreeDeliveryTitle;}
    get homePageFreeDeliveryText(){return this._homePageFreeDeliveryText;}
    get homePageSupportIcon(){return this._homePageSupportIcon;}
    get homePageSupportTitle(){return this._homePageSupportTitle;}
    get homePageSupportText(){return this._homePageSupportText;}
    get homePageAuthenticIcon(){return this._homePageAuthenticIcon;}
    get homePageAuthenticTitle(){return this._homePageAuthenticTitle;}
    get homePageAuthenticText(){return this._homePageAuthenticText;}
    //inspiration section
    get homePageInspirationSectionTitle(){return this._homePageInspirationSectionTitle;}
    get homePageInspirationDesc(){return this._homePageInspirationDesc;}
    //list elements
    get homePageInspirationImgElement(){return this._homePageInspirationImgElements;}
    //best for home section
    get homePageBestForHomeSectionTitle(){return this._homePageBestForHomeSectionTitle;}
    get homePageBestForHomeDesc(){return this._homePageBestForHomeDesc;}
    get homePageBestForHomeShopNowBtn(){return this._homePageBestForHomeShopNowBtn;}
    get homePageBestForHomeImg(){return this._homePageBestForHomeImg;}
    //categories section
    get homePageLightingImg(){return this._homePageLightingImg;}
    get homePageLightingTitle(){return this._homePageLightingTitle;}
    get homePageAppliancesImg(){return this._homePageAppliancesImg;}
    get homePageAppliancesTitle(){return this._homePageAppliancesTitle;}
    get homePageSecurityImg(){return this._homePageSecurityImg;}
    get homePageSecurityTitle(){return this._homePageSecurityTitle;}
    //services section
    get homePageServicesSectionTitle(){return this._homePageServicesSectionTitle;}
    get homePageServicesDeliveryImg(){return this._homePageServicesDeliveryImg;}
    get homePageServicesDeliveryTitle(){return this._homePageServicesDeliveryTitle;}
    get homePageServicesEngineersImg(){return this._homePageServicesEngineersImg;}
    get homePageServicesEngineersTitle(){return this._homePageServicesEngineersTitle;}
    get homePageServicesWarrantyImg(){return this._homePageServicesWarrantyImg;}
    get homePageServicesWarrantyTitle(){return this._homePageServicesWarrantyTitle;}
    //footer
    get footerHomePageTitle(){return this._footerHomePageTitle;}
    get footerHomePageDesc(){return this._footerHomePageDesc;}
    get footerCopyrightText(){return this._footerCopyrightText;}
    //list elements
    get footerLinkElement(){return this._footerLinkElements;}

}
export {HomePage};