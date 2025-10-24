"use strict"

import {ProductsDashboardPage} from "../../pages/products.dashboard.page.mjs";
import {expect} from "@playwright/test";

class ProductsDashPageWebElementAsserts{

    //products dashboard page web element assert test method
    async isProductsDashPageWebElementVisible(page){
        const productsDashboardPage = new ProductsDashboardPage(page);
        //assert the products dashboard page title is visible
        await expect(productsDashboardPage.productDashboardPageTitle).toBeVisible();
        //list elements
        //assert the products dashboard page product cards are visible (as a list)
        const productDashPageProductCards = productsDashboardPage.productDashboardPageProductCardElement;
        const productDashPageProductCardCount = await productDashPageProductCards.count();
        for (let i = 0; i < productDashPageProductCardCount; i++) {
            await expect(productDashPageProductCards.nth(i)).toBeVisible();
        }
        //assert the products dashboard page product images are visible (as a list)
        const productDashPageProductImgs = productsDashboardPage.productDashboardPageProductImgElement;
        const productDashPageProductImgCount = await productDashPageProductImgs.count();
        for (let i = 0; i < productDashPageProductImgCount; i++) {
            await expect(productDashPageProductImgs.nth(i)).toBeVisible();
        }
        //assert the products dashboard page product names are visible (as a list)
        const productDashPageProductNames = productsDashboardPage.productDashboardPageProductNameElement;
        const productDashPageProductNameCount = await productDashPageProductNames.count();
        for (let i = 0; i < productDashPageProductNameCount; i++) {
            await expect(productDashPageProductNames.nth(i)).toBeVisible();
        }
        //assert the products dashboard page product descriptions are visible (as a list)
        const productDashPageProductDescriptions = productsDashboardPage.productDashboardPageProductDescElement;
        const productDashPageProductDescCount = await productDashPageProductDescriptions.count();
        for (let i = 0; i < productDashPageProductDescCount; i++) {
            await expect(productDashPageProductDescriptions.nth(i)).toBeVisible();
        }
        //assert the products dashboard page product unit prices are visible (as a list)
        const productDashPageProductUnitPrices = productsDashboardPage.productDashboardPageProductUnitPriceElement;
        const productDashPageProductUnitPriceCount = await productDashPageProductUnitPrices.count();
        for (let i = 0; i < productDashPageProductUnitPriceCount; i++) {
            await expect(productDashPageProductUnitPrices.nth(i)).toBeVisible();
        }
        //assert the products dashboard page product buy now buttons are visible (as a list)
        const productDashPageProductBuyNowButtons = productsDashboardPage.productDashboardPageProductBuyNowBtnElement;
        const productDashPageProductBuyNowBtnCount = await productDashPageProductBuyNowButtons.count();
        for (let i = 0; i < productDashPageProductBuyNowBtnCount; i++) {
            await expect(productDashPageProductBuyNowButtons.nth(i)).toBeVisible();
        }
        //assert the products dashboard page product info buttons are visible (as a list)
        const productDashPageProductInfoButtons = productsDashboardPage.productDashboardPageProductInfoBtnElement;
        const productDashPageProductInfoBtnCount = await productDashPageProductInfoButtons.count();
        for (let i = 0; i < productDashPageProductInfoBtnCount; i++) {
            await expect(productDashPageProductInfoButtons.nth(i)).toBeVisible();
        }
    }

    //products dashboard page (additional product card) web element assert test method
    async isProductsDashPageAdditionalCardWebElementVisible(page){
        const productsDashboardPage = new ProductsDashboardPage(page);
        //list elements
        //assert the products dashboard page product remove from cart buttons are visible (as a list)
        const productDashPageProductRemoveFromCartButtons = productsDashboardPage.productDashboardPageProductBuyNowBtnElement;
        const productDashPageProductRemoveFromCartBtnCount = await productDashPageProductRemoveFromCartButtons.count();
        for (let i = 0; i < productDashPageProductRemoveFromCartBtnCount; i++) {
            await expect(productDashPageProductRemoveFromCartButtons.nth(i)).toBeVisible();
        }
        //assert the products dashboard page product count in cart elements are visible (as a list)
        const productDashPageProductCartCountElements = productsDashboardPage.productDashboardPageProductInfoBtnElement;
        const productDashPageProductCartCountElementCount = await productDashPageProductCartCountElements.count();
        for (let i = 0; i < productDashPageProductCartCountElementCount; i++) {
            await expect(productDashPageProductCartCountElements.nth(i)).toBeVisible();
        }
    }

}
export {ProductsDashPageWebElementAsserts};