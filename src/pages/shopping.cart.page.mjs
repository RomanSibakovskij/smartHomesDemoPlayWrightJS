"use strict"

import {BasePage} from "./utilities/base.page.mjs";

class ShoppingCartPage extends BasePage{

    constructor(page) {
        super(page);

        //shopping cart page web elements
        this._shoppingCartPageTitle = page.locator("//h1[@class='text-3xl font-bold mb-8 text-sky-900']");
        this._shoppingCartPageCard = page.locator("//div[@class='w-full max-w-xl bg-sky-900 text-white rounded-xl shadow-md p-6']");
        //product table (list elements)
        this._shoppingCartPageProductNameElements = page.locator("//ul/li/div[1]/span[1]");
        this._shoppingCartPageProductQtyElements = page.locator("//ul/li/div[1]/span[2]");
        this._shoppingCartPageProductUnitPriceElements = page.locator("//ul/li/div[2]/span");
        this._shoppingCartPageProductQtyDecreaseBtnElements = page.locator("//ul/li/div[2]/button[1]");
        this._shoppingCartPageProductQtyIncreaseBtnElements = page.locator("//ul/li/div[2]/button[2]");
        //singular elements
        this._shoppingCartPageTotalProductPriceSubtext = page.locator("//div[@class='flex justify-between items-center mb-4']/span[1]");
        this._shoppingCartPageTotalProductPrice = page.locator("//div[@class='flex justify-between items-center mb-4']/span[2]");
        //buttons
        this._shoppingCartPageClearCartBtn = page.locator("//div[@class='w-full max-w-xl bg-sky-900 text-white rounded-xl shadow-md p-6']/button[1]");
        this._shoppingCartPageConfirmPurchaseBtn = page.locator("//div[@class='w-full max-w-xl bg-sky-900 text-white rounded-xl shadow-md p-6']/button[2]");
        //empty shopping cart message element
        this._emptyShoppingCartPageMessage = page.locator("//div[@class='min-h-screen bg-amber-100 flex flex-col items-center py-10']/p");
    }

    //click set product decrease button method
    async clickSetProductQtyDecreaseBtn(index, times = 1){
        const setProductQtyDecreaseBtn = await this._shoppingCartPageProductQtyDecreaseBtnElements.nth(index);

        for (let i = 0; i < times; i++) {
            await setProductQtyDecreaseBtn.click();
        }
    }

    //click set product decrease button method
    async clickSetProductQtyIncreaseBtn(index, times = 1){
        const setProductQtyIncreaseBtn = await this._shoppingCartPageProductQtyIncreaseBtnElements.nth(index);

        for (let i = 0; i < times; i++) {
            await setProductQtyIncreaseBtn.click();
        }
    }

    //click "Confirm purchase" button method
    async clickConfirmPurchaseBtn(){await this._shoppingCartPageConfirmPurchaseBtn.click();}

    //click "Clear cart" button method
    async clickClearCartBtn(){await this._shoppingCartPageClearCartBtn.click();}

    //shopping cart page product data getters
    //product table (list elements)
    async getShoppingCartPageProductName(){
        const elements = await this._shoppingCartPageProductNameElements.all();
        return await Promise.all(
            elements.map(async (element) => {
                const text = await element.innerText();
                return text.trim();
            })
        );
    }
    async getShoppingCartPageProductQty(){
        const elements = await this._shoppingCartPageProductQtyElements.all();
        return await Promise.all(
            elements.map(async (element) => {
                const text = await element.innerText();
                return text.trim();
            })
        );
    }
    async getShoppingCartPageProductUnitPrice(){
        const elements = await this._shoppingCartPageProductUnitPriceElements.all();
        return await Promise.all(
            elements.map(async (element) => {
                const text = await element.innerText();
                return text.trim();
            })
        );
    }
    //product table (singular elements)
    async getShoppingCartPageTotalProductPrice(){return this._shoppingCartPageTotalProductPrice.innerText();}

    //shopping cart page text element getters
    async getShoppingCartPageTitle(){return this._shoppingCartPageTitle.innerText();}
    //product table
    async getShoppingCartPageTotalPriceSubtext(){return this._shoppingCartPageTotalProductPriceSubtext.innerText();}
    //buttons
    async getShoppingCartPageClearCartBtnText(){return this._shoppingCartPageClearCartBtn.innerText();}
    async getShoppingCartPageConfirmPurchaseBtnText(){return this._shoppingCartPageConfirmPurchaseBtn.innerText();}

    //empty shopping cart message getter
    async getEmptyShoppingCartMessage(){return this._emptyShoppingCartPageMessage.innerText();}

    //shopping cart page web element getters
    get shoppingCartPageTitle(){return this._shoppingCartPageTitle;}
    get shoppingCartPageCard(){return this._shoppingCartPageCard;}
    //product table (list elements)
    get shoppingCartPageProductNameElement(){return this._shoppingCartPageProductNameElements;}
    get shoppingCartPageProductQtyElement(){return this._shoppingCartPageProductQtyElements;}
    get shoppingCartPageProductUnitPriceElement(){return this._shoppingCartPageProductUnitPriceElements;}
    get shoppingCartPageProductQtyDecreaseBtnElement(){return this._shoppingCartPageProductQtyDecreaseBtnElements;}
    get shoppingCartPageProductQtyIncreaseBtnElement(){return this._shoppingCartPageProductQtyIncreaseBtnElements;}
    //singular elements
    get shoppingCartPageTotalProductPriceSubtext(){return this._shoppingCartPageTotalProductPriceSubtext;}
    get shoppingCartPageTotalProductPrice(){return this._shoppingCartPageTotalProductPrice;}
    //buttons
    get shoppingCartPageClearCartBtn(){return this._shoppingCartPageClearCartBtn;}
    get shoppingCartPageConfirmPurchaseBtn(){return this._shoppingCartPageConfirmPurchaseBtn;}
    //empty shopping cart message
    get emptyShoppingCartPageMessage(){return this._emptyShoppingCartPageMessage;}

}
export {ShoppingCartPage};