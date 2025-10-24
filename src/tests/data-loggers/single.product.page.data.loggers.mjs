"use strict"

import {SingleProductPage} from "../../pages/single.product.page.mjs";
import {Logger} from "../../pages/utilities/logger.mjs";

class SingleProductPageDataLoggers{

    //single product page product data logger method
    async logSingleProductPageProductData(page){
        const singleProductPage = new SingleProductPage(page);
        console.log("Single product page displayed product data: " + "\n");

        Logger.info("Single product page displayed product name: " + await singleProductPage.getSingleProductPageName());
        Logger.info("Single product page displayed product description: " + await singleProductPage.getSingleProductPageDesc());
        Logger.info("Single product page displayed product unit price: " + await singleProductPage.getSingleProductPageUnitPrice());
        Logger.info("Single product page displayed product features: " + await singleProductPage.getSingleProductPageFeature() + "\n");

    }

    //single product page product in-cart count data logger method
    async logSingleProductPageProductInCartCountData(page){
        const singleProductPage = new SingleProductPage(page);
        console.log("Single product page displayed product in-cart count data: " + "\n");

        Logger.info("Single product page displayed product in-cart count: " + await singleProductPage.getSingleProductPageProductCount() + "\n");

    }

}
export {SingleProductPageDataLoggers};