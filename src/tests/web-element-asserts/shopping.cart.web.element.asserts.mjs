"use strict"

import {ShoppingCartPage} from "../../pages/shopping.cart.page.mjs";
import {expect} from "@playwright/test";

class ShoppingCartWebElementAsserts{

    //shopping cart page web element assert test method
    async isShoppingCartPageWebElementAssert(page){
        const shoppingCartPage = new ShoppingCartPage(page);
        //assert the shopping cart page title is visible
        await expect(shoppingCartPage.shoppingCartPageTitle).toBeVisible();
        //assert the shopping cart page card is visible
        await expect(shoppingCartPage.shoppingCartPageCard).toBeVisible();
        //product table (list elements)
        //assert the shopping cart page product names are visible (as a list)
        const shoppingCartPageProductNames = shoppingCartPage.shoppingCartPageProductNameElement;
        const shoppingCartPageProductNameCount = await shoppingCartPageProductNames.count();
        for (let i = 0; i < shoppingCartPageProductNameCount; i++) {
            await expect(shoppingCartPageProductNames.nth(i)).toBeVisible();
        }
        //assert the shopping cart page product quantities are visible (as a list)
        const shoppingCartPageProductQuantities = shoppingCartPage.shoppingCartPageProductQtyElement;
        const shoppingCartPageProductQtyCount = await shoppingCartPageProductQuantities.count();
        for (let i = 0; i < shoppingCartPageProductQtyCount; i++) {
            await expect(shoppingCartPageProductQuantities.nth(i)).toBeVisible();
        }
        //assert the shopping cart page product unit prices are visible (as a list)
        const shoppingCartPageProductUnitPrices = shoppingCartPage.shoppingCartPageProductUnitPriceElement;
        const shoppingCartPageProductUnitPriceCount = await shoppingCartPageProductUnitPrices.count();
        for (let i = 0; i < shoppingCartPageProductUnitPriceCount; i++) {
            await expect(shoppingCartPageProductUnitPrices.nth(i)).toBeVisible();
        }
        //assert the shopping cart page product quantity decrease buttons are visible (as a list)
        const shoppingCartPageProductQtyDecreaseButtons = shoppingCartPage.shoppingCartPageProductQtyDecreaseBtnElement;
        const shoppingCartPageProductQtyDecreaseBtnCount = await shoppingCartPageProductQtyDecreaseButtons.count();
        for (let i = 0; i < shoppingCartPageProductQtyDecreaseBtnCount; i++) {
            await expect(shoppingCartPageProductQtyDecreaseButtons.nth(i)).toBeVisible();
        }
        //assert the shopping cart page product quantity increase buttons are visible (as a list)
        const shoppingCartPageProductQtyIncreaseButtons = shoppingCartPage.shoppingCartPageProductQtyIncreaseBtnElement;
        const shoppingCartPageProductQtyIncreaseBtnCount = await shoppingCartPageProductQtyIncreaseButtons.count();
        for (let i = 0; i < shoppingCartPageProductQtyIncreaseBtnCount; i++) {
            await expect(shoppingCartPageProductQtyIncreaseButtons.nth(i)).toBeVisible();
        }
        //singular elements
        //assert the shopping cart page total product price subtext is visible
        await expect(shoppingCartPage.shoppingCartPageTotalProductPriceSubtext).toBeVisible();
        //assert the shopping cart page total product price is visible
        await expect(shoppingCartPage.shoppingCartPageTotalProductPrice).toBeVisible();
        //buttons
        //assert the shopping cart page clear cart button is visible
        await expect(shoppingCartPage.shoppingCartPageClearCartBtn).toBeVisible();
        //assert the shopping cart page confirm purchase button is visible
        await expect(shoppingCartPage.shoppingCartPageConfirmPurchaseBtn).toBeVisible();
    }

    //empty shopping cart page web element assert test method
    async isEmptyShoppingCartPageWebElementAssert(page){
        const shoppingCartPage = new ShoppingCartPage(page);
        //assert the shopping cart page title is visible
        await expect(shoppingCartPage.shoppingCartPageTitle).toBeVisible();
        //assert the empty shopping cart message  is visible
        await expect(shoppingCartPage.emptyShoppingCartPageMessage).toBeVisible();
    }

}
export {ShoppingCartWebElementAsserts};