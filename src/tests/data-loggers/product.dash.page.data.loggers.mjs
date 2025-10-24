"use strict"

import {ProductsDashboardPage} from "../../pages/products.dashboard.page.mjs";
import {Logger} from "../../pages/utilities/logger.mjs";

class ProductDashPageDataLoggers{

    //product dashboard page product data logger method
    async logProductDashboardPageProductData(page){
        const productDashboardPage = new ProductsDashboardPage(page);
        console.log("Product dashboard page displayed data: " + "\n");

        Logger.info("Product dashboard page product name(s): " + await productDashboardPage.getProductDashPageProductName());
        Logger.info("Product dashboard page product description(s): " + await productDashboardPage.getProductDashPageProductDesc());
        Logger.info("Product dashboard page product unit price(s): " + await productDashboardPage.getProductDashPageProductUnitPrice() + "\n");

    }

    //product dashboard page added product to cart data logger method
    async logProductDashboardPageAddedToCartProductCountData(page){
        const productDashboardPage = new ProductsDashboardPage(page);
        console.log("Product dashboard page added product(s) to cart displayed data: " + "\n");

        Logger.info("Added product(s) to cart count data: " + await productDashboardPage.getProductDashPageProductCountInCart() + "\n");

    }

}
export {ProductDashPageDataLoggers};