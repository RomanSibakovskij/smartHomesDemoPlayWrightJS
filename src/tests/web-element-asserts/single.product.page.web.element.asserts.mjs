"use strict"

import {SingleProductPage} from "../../pages/single.product.page.mjs";
import {expect} from "@playwright/test";

class SingleProductPageWebElementAsserts{

    //single product page web element test method
    async isSingleProductPageWebElementVisible(page){
        const singleProductPage = new SingleProductPage(page);
        //assert the single product page product card is visible
        await expect(singleProductPage.singleProductPageProductCard).toBeVisible();
        //assert the single product page product image is visible
        await expect(singleProductPage.singleProductPageProductImg).toBeVisible();
        //assert the single product page product name is visible
        await expect(singleProductPage.singleProductPageProductName).toBeVisible();
        //assert the single product page product desc is visible
        await expect(singleProductPage.singleProductPageProductDesc).toBeVisible();
        //assert the single product page product features section title is visible
        await expect(singleProductPage.singleProductPageProductFeaturesSectionTitle).toBeVisible();
        //list elements
        //assert the single product page product features are visible (as a list)
        const singleProductPageProductFeatures = singleProductPage.singleProductPageProductFeatureElement;
        const singleProductPageProductFeatureCount = await singleProductPageProductFeatures.count();
        for (let i = 0; i < singleProductPageProductFeatureCount; i++) {
            await expect(singleProductPageProductFeatures.nth(i)).toBeVisible();
        }
        //singular elements
        //assert the single product page product unit price is visible
        await expect(singleProductPage.singleProductPageProductUnitPrice).toBeVisible();
        //buttons
        //assert the single product page product buy now button is visible
        await expect(singleProductPage.singleProductPageProductBuyNowBtn).toBeVisible();
        //assert the single product page product back button is visible
        await expect(singleProductPage.singleProductPageProductBackBtn).toBeVisible();
    }

    //single product page (added product quantity) web element test method
    async isSingleProductPageAddedProductQtyWebElementVisible(page){
        const singleProductPage = new SingleProductPage(page);
        //buttons
        //assert the single product page product remove button is visible (dubs as product qty decrease button)
        await expect(singleProductPage.singleProductPageProductRemoveBtn).toBeVisible();
        //assert the single product page product quantity is visible
        await expect(singleProductPage.singleProductPageProductCartCount).toBeVisible();
    }

}
export {SingleProductPageWebElementAsserts};