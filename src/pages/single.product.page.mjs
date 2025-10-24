"use strict"

import {BasePage} from "./utilities/base.page.mjs";

class SingleProductPage extends BasePage{

    constructor(page) {
        super(page);

        //single product page web elements
        this._singleProductPageProductCard = page.locator("//div[@class='bg-amber-100 shadow-amber-100 shadow-lg rounded-xl p-8 max-w-lg text-center']");
        this._singleProductPageProductImg = page.locator("//div[@class='bg-amber-100 shadow-amber-100 shadow-lg rounded-xl p-8 max-w-lg text-center']/img");
        this._singleProductPageProductName = page.locator("//div[@class='bg-amber-100 shadow-amber-100 shadow-lg rounded-xl p-8 max-w-lg text-center']/h1");
        this._singleProductPageProductDesc = page.locator("//div[@class='bg-amber-100 shadow-amber-100 shadow-lg rounded-xl p-8 max-w-lg text-center']/p");
        this._singleProductPageProductFeaturesSectionTitle = page.locator("//div[@class='mb-6']/h2");
        //list elements
        this._singleProductPageProductFeatureElements = page.locator("//ul/li");
        //singular elements
        this._singleProductPageProductUnitPrice = page.locator("//span");
        //buttons
        this._singleProductPageProductBuyNowBtn = page.locator("//div[@class='flex justify-center items-center gap-2']/button[@class='bg-sky-900 text-amber-100 px-4 py-2 rounded hover:bg-sky-700']");
        this._singleProductPageProductRemoveBtn = page.locator("//div[@class='flex justify-center items-center gap-2']/button[@class='bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-700']");
        this._singleProductPageProductBackBtn = page.locator("//div[@class='flex justify-center items-center gap-2']/a");
        this._singleProductPageProductCartCount = page.locator("//div[@class='mt-2 text-gray-700']");

    }

    //click "Buy Now" button method
    async clickBuyNowBtn(times = 1){
        const buyNowBtn = await this._singleProductPageProductBuyNowBtn;

        for(let i = 0; i < times; i++){
            buyNowBtn.click();
        }
    }

    //single product page product data getters
    async getSingleProductPageName(){return this._singleProductPageProductName.innerText();}
    async getSingleProductPageDesc(){return this._singleProductPageProductDesc.innerText();}
    async getSingleProductPageUnitPrice(){return this._singleProductPageProductUnitPrice.innerText();}
    async getSingleProductPageProductCount(){return this._singleProductPageProductCartCount.innerText();}
    //list elements
    async getSingleProductPageFeature(){
        const elements = await this._singleProductPageProductFeatureElements.all();
        return await Promise.all(
            elements.map(async (element) => {
                const text = await element.innerText();
                return text.trim();
            })
        );
    }

    //single product page text element getters
    async getSingleProductPageFeatureSectionTitle(){return this._singleProductPageProductFeaturesSectionTitle.innerText();}
    //buttons
    async getSingleProductPageBuyNowBtnText(){return this._singleProductPageProductBuyNowBtn.innerText();}
    async getSingleProductPageBackBtnText(){return this._singleProductPageProductBackBtn.innerText();}

    //single product page web element getters
    get singleProductPageProductCard(){return this._singleProductPageProductCard;}
    get singleProductPageProductImg(){return this._singleProductPageProductImg;}
    get singleProductPageProductName(){return this._singleProductPageProductName;}
    get singleProductPageProductDesc(){return this._singleProductPageProductDesc;}
    get singleProductPageProductFeaturesSectionTitle(){return this._singleProductPageProductFeaturesSectionTitle;}
    //list elements
    get singleProductPageProductFeatureElement(){return this._singleProductPageProductFeatureElements;}
    //singular elements
    get singleProductPageProductUnitPrice(){return this._singleProductPageProductUnitPrice;}
    //buttons
    get singleProductPageProductBuyNowBtn(){return this._singleProductPageProductBuyNowBtn;}
    get singleProductPageProductRemoveBtn(){return this._singleProductPageProductRemoveBtn;}
    get singleProductPageProductBackBtn(){return this._singleProductPageProductBackBtn;}
    get singleProductPageProductCartCount(){return this._singleProductPageProductCartCount;}

}
export {SingleProductPage};