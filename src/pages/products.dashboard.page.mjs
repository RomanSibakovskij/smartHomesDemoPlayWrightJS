"use strict"

import {BasePage} from "./utilities/base.page.mjs";

class ProductsDashboardPage extends BasePage{

    constructor(page) {
        super(page);

        //products dashboard page web elements
        this._productsDashboardPageTitle = page.locator("//h1[@class='text-3xl font-bold mb-8 text-sky-900']");
        //list elements
        this._productsDashboardPageProductCardElements = page.locator("//div[@class='flex flex-wrap justify-center gap-8']/div");
        this._productsDashboardPageProductImgElements = page.locator("//div[@class='flex flex-wrap justify-center gap-8']//img");
        this._productsDashboardPageProductNameElements = page.locator("//div[@class='flex flex-wrap justify-center gap-8']//h2");
        this._productsDashboardPageProductDescElements = page.locator("//div[@class='flex flex-wrap justify-center gap-8']//p");
        this._productsDashboardPageProductUnitPriceElements = page.locator("//div[@class='flex flex-wrap justify-center gap-8']//span");
        this._productsDashboardPageProductBuyNowBtnElements = page.locator("//div[@class='flex flex-wrap justify-center gap-8']//div[@class='flex gap-2']/button[@class='bg-sky-900 text-amber-100 px-4 py-2 rounded hover:bg-sky-700']");
        this._productsDashboardPageProductRemoveFromCartBtnElements = page.locator("//div[@class='flex flex-wrap justify-center gap-8']//div[@class='flex gap-2']/button[@class='bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-700']");
        this._productsDashboardPageProductInfoBtnElements = page.locator("//div[@class='flex flex-wrap justify-center gap-8']//div[@class='flex gap-2']/a");
        this._productsDashboardPageProductCartCountElements = page.locator("//div[@class='flex flex-wrap justify-center gap-8']//div[@class='mt-2 text-gray-700']");

    }

    //click set product "Buy Now" button method (dubs as product quantity increase button too)
    async clickSetProductBuyNowBtn(index, times = 1){
        const setProductBuyNowBtn = await this._productsDashboardPageProductBuyNowBtnElements.nth(index);

        for (let i = 0; i < times; i++) {
            await setProductBuyNowBtn.click();
        }
    }

    //click set product "Info" button method
    async clickSetProductInfoBtn(index){await this._productsDashboardPageProductInfoBtnElements.nth(index).click();}

    //click set product "Remove from cart" button method (dubs as product quantity decrease button too)
    async clickSetProductRemoveFromCartBtn(index, times = 1){
        const setProductRemoveBtn = await this._productsDashboardPageProductRemoveFromCartBtnElements.nth(index);

        for (let i = 0; i < times; i++) {
            await setProductRemoveBtn.click();
        }
    }

    //product dashboard page product data getters
    async getProductDashPageProductName(){
        const elements = await this._productsDashboardPageProductNameElements.all();
        return await Promise.all(
            elements.map(async (element) => {
                const text = await element.innerText();
                return text.trim();
            })
        );
    }
    async getProductDashPageProductDesc(){
        const elements = await this._productsDashboardPageProductDescElements.all();
        return await Promise.all(
            elements.map(async (element) => {
                const text = await element.innerText();
                return text.trim();
            })
        );
    }
    async getProductDashPageProductUnitPrice(){
        const elements = await this._productsDashboardPageProductUnitPriceElements.all();
        return await Promise.all(
            elements.map(async (element) => {
                const text = await element.innerText();
                return text.trim();
            })
        );
    }
    async getProductDashPageProductCountInCart(){
        const elements = await this._productsDashboardPageProductCartCountElements.all();
        return await Promise.all(
            elements.map(async (element) => {
                const text = await element.innerText();
                return text.trim();
            })
        );
    }

    //product dashboard page text element getters
    async getProductDashPageTitle(){return this._productsDashboardPageTitle.innerText();}
    //list elements
    async getProductDashPageProductBuyNowBtnText(){
        const elements = await this._productsDashboardPageProductBuyNowBtnElements.all();
        return await Promise.all(
            elements.map(async (element) => {
                const text = await element.innerText();
                return text.trim();
            })
        );
    }
    async getProductDashPageProductInfoBtnText(){
        const elements = await this._productsDashboardPageProductInfoBtnElements.all();
        return await Promise.all(
            elements.map(async (element) => {
                const text = await element.innerText();
                return text.trim();
            })
        );
    }

    //product dashboard page web element getters
    get productDashboardPageTitle(){return this._productsDashboardPageTitle;}
    //list elements
    get productDashboardPageProductCardElement(){return this._productsDashboardPageProductCardElements;}
    get productDashboardPageProductImgElement(){return this._productsDashboardPageProductImgElements;}
    get productDashboardPageProductNameElement(){return this._productsDashboardPageProductNameElements;}
    get productDashboardPageProductDescElement(){return this._productsDashboardPageProductDescElements;}
    get productDashboardPageProductUnitPriceElement(){return this._productsDashboardPageProductUnitPriceElements;}
    get productDashboardPageProductBuyNowBtnElement(){return this._productsDashboardPageProductBuyNowBtnElements;}
    get productDashboardPageProductInfoBtnElement(){return this._productsDashboardPageProductInfoBtnElements;}

}
export {ProductsDashboardPage};