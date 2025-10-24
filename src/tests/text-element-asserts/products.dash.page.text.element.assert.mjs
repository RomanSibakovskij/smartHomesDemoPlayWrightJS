"use strict"

import {ProductsDashboardPage} from "../../pages/products.dashboard.page.mjs";
import {expect} from "@playwright/test";

class ProductsDashPageTextElementAssert{

    //products dashboard page text element assert test method
    async isProductsDashPageTextElementAsExpected(page){
        const productsDashboardPage = new ProductsDashboardPage(page);
        //assert products dashboard page title is as expected
        const productsDashPageTitle = await productsDashboardPage.getProductDashPageTitle();
        expect(productsDashPageTitle).toBe("Our Products");
        //list elements
        //assert products dashboard page buy now button texts as expected (as a list)
        const productsDashPageProductBuyNowBtnTexts = await productsDashboardPage.getProductDashPageProductBuyNowBtnText();
        expect(productsDashPageProductBuyNowBtnTexts.length).toBeGreaterThan(0);
        productsDashPageProductBuyNowBtnTexts.forEach(text => {
            expect(text).toBe("Buy Now");
        });
        //assert products dashboard page product info button texts as expected (as a list)
        const productsDashPageProductInfoBtnTexts = await productsDashboardPage.getProductDashPageProductInfoBtnText();
        expect(productsDashPageProductInfoBtnTexts.length).toBeGreaterThan(0);
        productsDashPageProductInfoBtnTexts.forEach(text => {
            expect(text).toBe("Info");
        });
    }

}
export {ProductsDashPageTextElementAssert};