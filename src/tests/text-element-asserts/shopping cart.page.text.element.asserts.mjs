"use strict"

import {ShoppingCartPage} from "../../pages/shopping.cart.page.mjs";
import {expect} from "@playwright/test";

class ShoppingCartPageTextElementAsserts{

    //shopping cart page text element assert test method
    async isShoppingCartPageTextElementAsExpected(page){
        const shoppingCartPage = new ShoppingCartPage(page);
        //assert the shopping cart page title is as expected
        const shoppingCartPageTitle = await shoppingCartPage.getShoppingCartPageTitle();
        expect(shoppingCartPageTitle).toBe("My Cart");
        //product table
        //assert the shopping cart page total product price subtext is as expected
        const shoppingCartPageTotalPriceSubtext = await shoppingCartPage.getShoppingCartPageTotalPriceSubtext();
        expect(shoppingCartPageTotalPriceSubtext).toBe("Total:");
        //buttons
        //assert the shopping cart page clear cart button text is as expected
        const shoppingCartPageClearCartBtnText = await shoppingCartPage.getShoppingCartPageClearCartBtnText();
        expect(shoppingCartPageClearCartBtnText).toBe("Clear Cart");
        //assert the shopping cart page confirm purchase button text is as expected
        const shoppingCartPageConfirmPurchaseBtnText = await shoppingCartPage.getShoppingCartPageConfirmPurchaseBtnText();
        expect(shoppingCartPageConfirmPurchaseBtnText).toBe("Confirm Purchase");
    }

    //empty shopping cart page text element assert test method
    async isEmptyShoppingCartPageTextElementAsExpected(page){
        const shoppingCartPage = new ShoppingCartPage(page);
        //assert the shopping cart page title is as expected
        const shoppingCartPageTitle = await shoppingCartPage.getShoppingCartPageTitle();
        expect(shoppingCartPageTitle).toBe("My Cart");
        //empty shopping cart message
        //assert the empty shopping cart message is as expected
        const emptyShoppingCartMessage = await shoppingCartPage.getEmptyShoppingCartMessage();
        expect(emptyShoppingCartMessage).toBe("Your cart is empty.");
    }

}
export {ShoppingCartPageTextElementAsserts};