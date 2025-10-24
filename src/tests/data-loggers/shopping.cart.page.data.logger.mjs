"use strict"

import {ShoppingCartPage} from "../../pages/shopping.cart.page.mjs";
import {Logger} from "../../pages/utilities/logger.mjs";

class ShoppingCartPageDataLogger{

    //shopping cart page product data logger method
    async logShoppingCartPageProductData(page){
        const shoppingCartPage = new ShoppingCartPage(page);
        console.log("Shopping cart page displayed product data: " + "\n")

        Logger.info("Shopping cart displayed product name(s): " + await shoppingCartPage.getShoppingCartPageProductName());
        Logger.info("Shopping cart displayed product quantity(ies): " + await shoppingCartPage.getShoppingCartPageProductQty());
        Logger.info("Shopping cart displayed product unit price(s): " + await shoppingCartPage.getShoppingCartPageProductUnitPrice());
        Logger.info("Shopping cart displayed total product price: " + await shoppingCartPage.getShoppingCartPageTotalProductPrice() + "\n");

    }

}
export {ShoppingCartPageDataLogger};