"use strict"

import {SingleProductPage} from "../../pages/single.product.page.mjs";
import {expect} from "@playwright/test";

class SingleProductPageTextElementAssert{

    //single product page text element assert test method
    async isSingleProductPageTextElementAsExpected(page){
        const singleProductPage = new SingleProductPage(page);
        //assert the single product page features section title is as expected
        const singleProductPageFeaturesSectionTitle = await singleProductPage.getSingleProductPageFeatureSectionTitle();
        expect(singleProductPageFeaturesSectionTitle).toBe("Features:");
        //buttons
        //assert the single product page buy now button text is as expected
        const singleProductPageBuyNowBtnText = await singleProductPage.getSingleProductPageBuyNowBtnText();
        expect(singleProductPageBuyNowBtnText).toBe("Buy Now");
        //assert the single product page back button text is as expected
        const singleProductPageBackBtnText = await singleProductPage.getSingleProductPageBackBtnText();
        expect(singleProductPageBackBtnText).toBe("Back");
    }

}
export {SingleProductPageTextElementAssert};