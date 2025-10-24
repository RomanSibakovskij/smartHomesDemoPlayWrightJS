"use strict"

import {GeneralPage} from "../../pages/general.page.mjs";
import {ProductsDashboardPage} from "../../pages/products.dashboard.page.mjs";
import {SingleProductPage} from "../../pages/single.product.page.mjs";
import {ShoppingCartPage} from "../../pages/shopping.cart.page.mjs";

import {GeneralPageWebElementAssert} from "../web-element-asserts/general.page.web.element.assert.mjs";
import {HomePageWebElementAssert} from "../web-element-asserts/home.page.web.element.assert.mjs";
import {ProductsDashPageWebElementAsserts} from "../web-element-asserts/products.dash.page.web.element.asserts.mjs";
import {SingleProductPageWebElementAsserts} from "../web-element-asserts/single.product.page.web.element.asserts.mjs";

import {GeneralPageTextElementAssert} from "../text-element-asserts/general.page.text.element.assert.mjs";
import {HomePageTextElementAssert} from "../text-element-asserts/home.page.text.element.assert.mjs";
import {ProductsDashPageTextElementAssert} from "../text-element-asserts/products.dash.page.text.element.assert.mjs";
import {SingleProductPageTextElementAssert} from "../text-element-asserts/single.product.page.text.element.assert.mjs";

import {ProductDashPageDataLoggers} from "../data-loggers/product.dash.page.data.loggers.mjs";
import {SingleProductPageDataLoggers} from "../data-loggers/single.product.page.data.loggers.mjs";

import {expect} from "@playwright/test";
import {Logger} from "../../pages/utilities/logger.mjs";
import {ShoppingCartWebElementAsserts} from "../web-element-asserts/shopping.cart.web.element.asserts.mjs";
import {ShoppingCartPageTextElementAsserts} from "../text-element-asserts/shopping cart.page.text.element.asserts.mjs";
import {ShoppingCartPageDataLogger} from "../data-loggers/shopping.cart.page.data.logger.mjs";

class TestMethods{

    //add single set category product to cart test method
    async navigateToProductPageTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert()
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //home page web element assert
        await homePageWebElementAssert.isHomePageWebElementVisible(page);
        //home page text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected(page);
        //capture screenshot of the home page display
        await page.screenshot({ path: "src/tests/screenshots/Home Page Display.png", fullPage: true });
        //click set header navbar button ("Products")
        await generalPage.clickSetHeaderNavbarBtn(1);
        //assert the user gets onto expected page
        const expectedProductDashURL = "https://e-commerce-demo-kohl.vercel.app/products";
        const actualProductDashURL = page.url();
        expect(expectedProductDashURL).toBe(actualProductDashURL);
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/User Navigation To Product Dashboard Page Test Result.png", fullPage: true });
    }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //product(s) addition to cart tests

    //add single product ("Smart LED System") to cart test method
    async addSingleProductToCartTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const productsDashboardPage = new ProductsDashboardPage(page);
        const productsDashPageWebElementAsserts = new ProductsDashPageWebElementAsserts();
        const productsDashPageTextElementAssert = new ProductsDashPageTextElementAssert();
        const productsDashPageDataLoggers = new ProductDashPageDataLoggers();
        const shoppingCartPage = new ShoppingCartPage(page);
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //products dashboard page web element assert
        await productsDashPageWebElementAsserts.isProductsDashPageWebElementVisible(page);
        //products dashboard page text element assert
        await productsDashPageTextElementAssert.isProductsDashPageTextElementAsExpected(page);
        //log products dashboard product data
        await productsDashPageDataLoggers.logProductDashboardPageProductData(page);
        //capture screenshot of the product dashboard page display
        await page.screenshot({ path: "src/tests/screenshots/Product Dashboard Page Display.png", fullPage: true });
        //click set product ("Smart LED System") "Buy Now" button
        await productsDashboardPage.clickSetProductBuyNowBtn(0);
        //wait for elements to load
        await page.waitForTimeout(2000);
        //products dashboard additional product card web element assert
        await productsDashPageWebElementAsserts.isProductsDashPageAdditionalCardWebElementVisible(page);
        //log product dashboard page product count data
        await productsDashPageDataLoggers.logProductDashboardPageAddedToCartProductCountData(page);
        //assert the expected product quantity has been added to cart
        const actualProductQty = await productsDashboardPage.getProductDashPageProductCountInCart();
        const expectedProductQty = "In Cart: 1";
        expect(actualProductQty[0]).toBe(expectedProductQty);
        //click set header navbar ("My Cart") button
        await generalPage.clickSetHeaderNavbarBtn(3);
        //assert the user gets onto expected page
        const expectedMyCartURL = "https://e-commerce-demo-kohl.vercel.app/mycart";
        const actualMyCartURL = page.url();
        expect(expectedMyCartURL).toBe(actualMyCartURL);
        //wait for elements to load (for shopping cart elements to load)
        await page.waitForTimeout(300);
        //assert the expected product has been added to cart
        const expectedProductName = "Smart LED System";
        const actualProductName = await shoppingCartPage.getShoppingCartPageProductName();
        expect(actualProductName[0]).toBe(expectedProductName);
        //assert the expected product quantity has been added to cart
        const expectedShopCartProductQty = "x1";
        const actualShopCartProductQty = await shoppingCartPage.getShoppingCartPageProductQty();
        expect(actualShopCartProductQty[0]).toBe(expectedShopCartProductQty);
        //assert the expected product price appears in cart
        const expectedProductPrice = "$49.99";
        const actualProductPrice = await shoppingCartPage.getShoppingCartPageProductUnitPrice();
        expect(actualProductPrice[0]).toBe(expectedProductPrice);
        //assert the expected product total price has been displayed in shopping cart
        const actualShopCartProductTotalPrice = await shoppingCartPage.getShoppingCartPageTotalProductPrice();
        const expectedShopCartProductTotalPrice = "$49.99";
        expect(actualShopCartProductTotalPrice).toBe(expectedShopCartProductTotalPrice);
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Add Single Product (Smart LED System) To Cart Test Result.png", fullPage: true });
    }

    //add multiple products ("Smart Cleaner", "Home Security", "Smart Thermostat", "Smart Door Lock", "Smart Speaker") to cart test method
    async addMultipleProductsToCartTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const productsDashboardPage = new ProductsDashboardPage(page);
        const productsDashPageWebElementAsserts = new ProductsDashPageWebElementAsserts();
        const productsDashPageTextElementAssert = new ProductsDashPageTextElementAssert();
        const productsDashPageDataLoggers = new ProductDashPageDataLoggers();
        const shoppingCartPage = new ShoppingCartPage(page);
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //products dashboard page web element assert
        await productsDashPageWebElementAsserts.isProductsDashPageWebElementVisible(page);
        //products dashboard page text element assert
        await productsDashPageTextElementAssert.isProductsDashPageTextElementAsExpected(page);
        //log products dashboard product data
        await productsDashPageDataLoggers.logProductDashboardPageProductData(page);
        //capture screenshot of the product dashboard page display
        await page.screenshot({ path: "src/tests/screenshots/Product Dashboard Page Display.png", fullPage: true });
        //click set product ("Smart Cleaner") "Buy Now" button
        await productsDashboardPage.clickSetProductBuyNowBtn(1);
        //click set product ("Home Security") "Buy Now" button
        await productsDashboardPage.clickSetProductBuyNowBtn(2);
        //click set product ("Smart Thermostat") "Buy Now" button
        await productsDashboardPage.clickSetProductBuyNowBtn(3);
        //click set product ("Smart Door Lock") "Buy Now" button
        await productsDashboardPage.clickSetProductBuyNowBtn(4);
        //click set product ("Smart Speaker") "Buy Now" button
        await productsDashboardPage.clickSetProductBuyNowBtn(5);
        //wait for elements to load
        await page.waitForTimeout(1000);
        //products dashboard additional product card web element assert
        await productsDashPageWebElementAsserts.isProductsDashPageAdditionalCardWebElementVisible(page);
        //log product dashboard page product count data
        await productsDashPageDataLoggers.logProductDashboardPageAddedToCartProductCountData(page);
        //assert the expected products quantity has been added to cart (multiple products by one0
        const actualProductsQty = await productsDashboardPage.getProductDashPageProductCountInCart();
        const expectedProductsQty = ["In Cart: 1", "In Cart: 1", "In Cart: 1", "In Cart: 1", "In Cart: 1"];
        expect(actualProductsQty).toStrictEqual(expectedProductsQty);
        //click set header navbar ("My Cart") button
        await generalPage.clickSetHeaderNavbarBtn(3);
        //assert the user gets onto expected page
        const expectedMyCartURL = "https://e-commerce-demo-kohl.vercel.app/mycart";
        const actualMyCartURL = page.url();
        expect(expectedMyCartURL).toBe(actualMyCartURL);
        //wait for elements to load (for shopping cart elements to load)
        await page.waitForTimeout(300);
        //assert the expected products have been added to cart
        const expectedProductsName = ["Smart Cleaner", "Home Security", "Smart Thermostat", "Smart Door Lock", "Smart Speaker"];
        const actualProductsName = await shoppingCartPage.getShoppingCartPageProductName();
        expect(actualProductsName).toStrictEqual(expectedProductsName);
        //assert the expected products price list appears in cart
        const expectedProductPrices = ["$129.99", "$89.99", "$149.99", "$99.99", "$79.99"];
        const actualProductPrices = await shoppingCartPage.getShoppingCartPageProductUnitPrice();
        expect(actualProductPrices).toStrictEqual(expectedProductPrices);
        //assert the expected products total price has been displayed in shopping cart
        const actualShopCartProductsTotalPrice = await shoppingCartPage.getShoppingCartPageTotalProductPrice();
        const expectedShopCartProductsTotalPrice = "$549.95";
        expect(actualShopCartProductsTotalPrice).toBe(expectedShopCartProductsTotalPrice);
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Add Multiple Products (Smart Cleaner, Home Security, Smart Thermostat, Smart Door Lock, Smart Speaker) To Cart Test Result.png", fullPage: true });
    }

    //add multiple single products ("Home Security") to cart test method
    async addMultipleSingleProductsToCartTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const productsDashboardPage = new ProductsDashboardPage(page);
        const productsDashPageWebElementAsserts = new ProductsDashPageWebElementAsserts();
        const productsDashPageTextElementAssert = new ProductsDashPageTextElementAssert();
        const productsDashPageDataLoggers = new ProductDashPageDataLoggers();
        const shoppingCartPage = new ShoppingCartPage(page);
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //products dashboard page web element assert
        await productsDashPageWebElementAsserts.isProductsDashPageWebElementVisible(page);
        //products dashboard page text element assert
        await productsDashPageTextElementAssert.isProductsDashPageTextElementAsExpected(page);
        //log products dashboard product data
        await productsDashPageDataLoggers.logProductDashboardPageProductData(page);
        //capture screenshot of the product dashboard page display
        await page.screenshot({ path: "src/tests/screenshots/Product Dashboard Page Display.png", fullPage: true });
        //click set product ("Home Security") "Buy Now" button
        await productsDashboardPage.clickSetProductBuyNowBtn(2, 4);
        //wait for elements to load
        await page.waitForTimeout(1000);
        //products dashboard additional product card web element assert
        await productsDashPageWebElementAsserts.isProductsDashPageAdditionalCardWebElementVisible(page);
        //log product dashboard page product count data
        await productsDashPageDataLoggers.logProductDashboardPageAddedToCartProductCountData(page);
        //assert the expected products quantity has been added to cart (multiple products)
        const actualProductsQty = await productsDashboardPage.getProductDashPageProductCountInCart();
        const expectedProductsQty = "In Cart: 4";
        expect(actualProductsQty[0]).toBe(expectedProductsQty);
        //click set header navbar ("My Cart") button
        await generalPage.clickSetHeaderNavbarBtn(3);
        //assert the user gets onto expected page
        const expectedMyCartURL = "https://e-commerce-demo-kohl.vercel.app/mycart";
        const actualMyCartURL = page.url();
        expect(expectedMyCartURL).toBe(actualMyCartURL);
        //wait for elements to load (for shopping cart elements to load)
        await page.waitForTimeout(300);
        //assert the expected products have been added to cart
        const expectedProductsName = "Home Security";
        const actualProductsName = await shoppingCartPage.getShoppingCartPageProductName();
        expect(actualProductsName[0]).toBe(expectedProductsName);
        //assert the expected products quantity have been added to cart
        const expectedShopCartProductsQty = "x4";
        const actualShopCartProductsQty = await shoppingCartPage.getShoppingCartPageProductQty();
        expect(actualShopCartProductsQty[0]).toBe(expectedShopCartProductsQty);
        //assert the expected products price list appears in cart
        const expectedProductPrices = "$359.96";
        const actualProductPrices = await shoppingCartPage.getShoppingCartPageProductUnitPrice();
        expect(actualProductPrices[0]).toBe(expectedProductPrices);
        //assert the expected products total price has been displayed in shopping cart
        const actualShopCartProductsTotalPrice = await shoppingCartPage.getShoppingCartPageTotalProductPrice();
        const expectedShopCartProductsTotalPrice = "$359.96";
        expect(actualShopCartProductsTotalPrice).toBe(expectedShopCartProductsTotalPrice);
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Add Multiple Products (Home Security) To Cart Test Result.png", fullPage: true });
    }

    //update product quantity during addition to cart test

    //update single product ("Smart LED System") quantity during addition to cart test method
    async updateSingleProductCartQtyTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const productsDashboardPage = new ProductsDashboardPage(page);
        const productsDashPageWebElementAsserts = new ProductsDashPageWebElementAsserts();
        const productsDashPageTextElementAssert = new ProductsDashPageTextElementAssert();
        const productsDashPageDataLoggers = new ProductDashPageDataLoggers();
        const shoppingCartPage = new ShoppingCartPage(page);
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //products dashboard page web element assert
        await productsDashPageWebElementAsserts.isProductsDashPageWebElementVisible(page);
        //products dashboard page text element assert
        await productsDashPageTextElementAssert.isProductsDashPageTextElementAsExpected(page);
        //log products dashboard product data
        await productsDashPageDataLoggers.logProductDashboardPageProductData(page);
        //capture screenshot of the product dashboard page display
        await page.screenshot({ path: "src/tests/screenshots/Product Dashboard Page Display.png", fullPage: true });
        //click set product ("Smart LED System") "Buy Now" button (several times to increase quantity)
        await productsDashboardPage.clickSetProductBuyNowBtn(0, 7);
        //wait for elements to load (for product quantity to be updated0
        await page.waitForTimeout(350);
        //assert the expected product quantity has been displayed
        const actualProductQtyIncreased = await productsDashboardPage.getProductDashPageProductCountInCart();
        const expectedProductQtyIncreased = "In Cart: 7";
        expect(actualProductQtyIncreased[0]).toBe(expectedProductQtyIncreased);
        //products dashboard additional product card web element assert
        await productsDashPageWebElementAsserts.isProductsDashPageAdditionalCardWebElementVisible(page);
        //log product dashboard page product count data
        await productsDashPageDataLoggers.logProductDashboardPageAddedToCartProductCountData(page);
        //click set product ("Smart LED System") remove button (several times to decrease quantity)
        await productsDashboardPage.clickSetProductRemoveFromCartBtn(0, 2);
        //wait for elements to load (for product quantity to be updated0
        await page.waitForTimeout(350);
        //assert the expected product quantity has been displayed
        const actualProductQtyDecreased = await productsDashboardPage.getProductDashPageProductCountInCart();
        const expectedProductQtyDecreased = "In Cart: 5";
        expect(actualProductQtyDecreased[0]).toBe(expectedProductQtyDecreased);
        //wait for elements to load
        await page.waitForTimeout(700);
        //products dashboard additional product card web element assert
        await productsDashPageWebElementAsserts.isProductsDashPageAdditionalCardWebElementVisible(page);
        //log product dashboard page product count data
        await productsDashPageDataLoggers.logProductDashboardPageAddedToCartProductCountData(page);
        //click set header navbar ("My Cart") button
        await generalPage.clickSetHeaderNavbarBtn(3);
        //assert the user gets onto expected page
        const expectedMyCartURL = "https://e-commerce-demo-kohl.vercel.app/mycart";
        const actualMyCartURL = page.url();
        expect(expectedMyCartURL).toBe(actualMyCartURL);
        //wait for elements to load (for shopping cart elements to load)
        await page.waitForTimeout(300);
        //assert the expected product has been added to cart
        const expectedProductName = "Smart LED System";
        const actualProductName = await shoppingCartPage.getShoppingCartPageProductName();
        expect(actualProductName[0]).toBe(expectedProductName);
        //assert the expected product quantity has been displayed in shopping cart
        const expectedShopCartProductQty = "x5";
        const actualShopCartProductQty = await shoppingCartPage.getShoppingCartPageProductQty();
        expect(actualShopCartProductQty[0]).toBe(expectedShopCartProductQty);
        //assert the expected product price appears in cart
        const expectedProductPrice = "$249.95";
        const actualProductPrice = await shoppingCartPage.getShoppingCartPageProductUnitPrice();
        expect(actualProductPrice[0]).toBe(expectedProductPrice);
        //assert the expected product total price has been displayed in shopping cart
        const actualShopCartProductTotalPrice = await shoppingCartPage.getShoppingCartPageTotalProductPrice();
        const expectedShopCartProductTotalPrice = "$249.95";
        expect(actualShopCartProductTotalPrice).toBe(expectedShopCartProductTotalPrice);
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Update Single Product (Smart LED System) Quantity During Addition To Cart Test Result.png", fullPage: true });
    }

    //cancel product addition to cart test

    //cancel single product ("Smart LED System") addition to cart test method
    async cancelSingleProductAdditionToCartTest(page){
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const productsDashboardPage = new ProductsDashboardPage(page);
        const productsDashPageWebElementAsserts = new ProductsDashPageWebElementAsserts();
        const productsDashPageTextElementAssert = new ProductsDashPageTextElementAssert();
        const productsDashPageDataLoggers = new ProductDashPageDataLoggers();
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //products dashboard page web element assert
        await productsDashPageWebElementAsserts.isProductsDashPageWebElementVisible(page);
        //products dashboard page text element assert
        await productsDashPageTextElementAssert.isProductsDashPageTextElementAsExpected(page);
        //log products dashboard product data
        await productsDashPageDataLoggers.logProductDashboardPageProductData(page);
        //capture screenshot of the product dashboard page display
        await page.screenshot({ path: "src/tests/screenshots/Product Dashboard Page Display.png", fullPage: true });
        //click set product ("Smart LED System") "Buy Now" button
        await productsDashboardPage.clickSetProductBuyNowBtn(0);
        //wait for elements to load (for product quantity to be updated)
        await page.waitForTimeout(350);
        //assert the expected product quantity has been displayed
        const actualProductQty = await productsDashboardPage.getProductDashPageProductCountInCart();
        const expectedProductQty = "In Cart: 1";
        expect(actualProductQty[0]).toBe(expectedProductQty);
        //click set product ("Smart LED System") remove button
        await productsDashboardPage.clickSetProductRemoveFromCartBtn(0);
        //wait for elements to load (for product quantity to be updated)
        await page.waitForTimeout(700);
        //assert the product count isn't displayed
        if(await productsDashPageWebElementAsserts.isProductsDashPageAdditionalCardWebElementVisible(page)){
            await page.screenshot({ path: "src/tests/screenshots/Cancel Single Product (Smart LED System) Addition To Cart Test Result (failed).png", fullPage: true });
            throw new Error("The product count is still displayed, test has failed");
        }
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Cancel Single Product (Smart LED System) Addition To Cart Test Result.png", fullPage: true });
    }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //view single product info during addition to cart test

    //view single product ("Smart Thermostat") info during addition to cart test method
    async viewSingleProductInfoDuringAddToCartTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const productsDashboardPage = new ProductsDashboardPage(page);
        const productsDashPageWebElementAsserts = new ProductsDashPageWebElementAsserts();
        const productsDashPageTextElementAssert = new ProductsDashPageTextElementAssert();
        const productsDashPageDataLoggers = new ProductDashPageDataLoggers();
        const singleProductPage = new SingleProductPage(page);
        const singleProductPageWebElementAsserts = new SingleProductPageWebElementAsserts();
        const singleProductPageTextElementAssert = new SingleProductPageTextElementAssert();
        const singleProductPageDataLoggers = new SingleProductPageDataLoggers()
        const shoppingCartPage = new ShoppingCartPage(page);
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //products dashboard page web element assert
        await productsDashPageWebElementAsserts.isProductsDashPageWebElementVisible(page);
        //products dashboard page text element assert
        await productsDashPageTextElementAssert.isProductsDashPageTextElementAsExpected(page);
        //log products dashboard product data
        await productsDashPageDataLoggers.logProductDashboardPageProductData(page);
        //capture screenshot of the product dashboard page display
        await page.screenshot({ path: "src/tests/screenshots/Product Dashboard Page Display.png", fullPage: true });
        //click set product ("Smart Thermostat") "Info" button
        await productsDashboardPage.clickSetProductInfoBtn(3);
        //assert the user is on the valid single product page
        const actualProductName = await singleProductPage.getSingleProductPageName();
        const expectedProductName = "Smart Thermostat";
        expect(actualProductName).toBe(expectedProductName);
        //single product page web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageWebElementVisible(page);
        //single product text element assert
        await singleProductPageTextElementAssert.isSingleProductPageTextElementAsExpected(page);
        //log single product page data
        await singleProductPageDataLoggers.logSingleProductPageProductData(page);
        //capture screenshot of the single product page display
        await page.screenshot({ path: "src/tests/screenshots/Single Product (Smart Thermostat) Page Display.png", fullPage: true });
        //click "Buy now" button
        await singleProductPage.clickBuyNowBtn();
        //single product page (additional web elements) web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageAddedProductQtyWebElementVisible(page);
        //log single product page product in-cart count data
        await singleProductPageDataLoggers.logSingleProductPageProductInCartCountData(page);
        //click set header navbar ("My Cart") button
        await generalPage.clickSetHeaderNavbarBtn(3);
        //assert the user gets onto expected page
        const expectedMyCartURL = "https://e-commerce-demo-kohl.vercel.app/mycart";
        const actualMyCartURL = page.url();
        expect(expectedMyCartURL).toBe(actualMyCartURL);
        //wait for elements to load (for shopping cart elements to load)
        await page.waitForTimeout(300);
        //assert the expected product has been added to cart
        const expectedSingleProductName = "Smart Thermostat";
        const actualSingleProductName = await shoppingCartPage.getShoppingCartPageProductName();
        expect(actualSingleProductName[0]).toBe(expectedSingleProductName);
        //assert the expected product quantity has been added to cart
        const expectedShopCartProductQty = "x1";
        const actualShopCartProductQty = await shoppingCartPage.getShoppingCartPageProductQty();
        expect(actualShopCartProductQty[0]).toBe(expectedShopCartProductQty);
        //assert the expected product price appears in cart
        const expectedProductPrice = "$149.99";
        const actualProductPrice = await shoppingCartPage.getShoppingCartPageProductUnitPrice();
        expect(actualProductPrice[0]).toBe(expectedProductPrice);
        //assert the expected product total price has been displayed in shopping cart
        const actualShopCartProductTotalPrice = await shoppingCartPage.getShoppingCartPageTotalProductPrice();
        const expectedShopCartProductTotalPrice = "$149.99";
        expect(actualShopCartProductTotalPrice).toBe(expectedShopCartProductTotalPrice);
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/View Single Product Info (Smart Thermostat) During Addition To Cart Test Result.png", fullPage: true });
    }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //product(s) purchase confirmation test

    //product(s) purchase confirmation test method
    async productPurchaseConfirmationTest(page){
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const shoppingCartPage = new ShoppingCartPage(page);
        const shoppingCartPageWebElementAsserts = new ShoppingCartWebElementAsserts();
        const shoppingCartPageTextElementAsserts = new ShoppingCartPageTextElementAsserts();
        const shoppingCartPageDataLogger = new ShoppingCartPageDataLogger();
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //shopping cart page web element assert
        await shoppingCartPageWebElementAsserts.isShoppingCartPageWebElementAssert(page);
        //shopping cart page text element assert
        await shoppingCartPageTextElementAsserts.isShoppingCartPageTextElementAsExpected(page);
        //log shopping cart page data
        await shoppingCartPageDataLogger.logShoppingCartPageProductData(page);
        //capture screenshot of the shopping cart page display
        await page.screenshot({ path: "src/tests/screenshots/Shopping Cart Page Display.png", fullPage: true });
        //click "Confirm purchase" button
        await shoppingCartPage.clickConfirmPurchaseBtn();
        //capture screenshot of the pop-up alert display
        await page.screenshot({ path: "src/tests/screenshots/JS PopUp Alert Display.png", fullPage: true });
        //wait for pop-up alert to appear (it's JS alert, not present in DOM) and click "OK" button
        page.once('dialog', async dialog => {
            Logger.info('Dialog message: ', dialog.message());
            expect(dialog.message()).toBe('Thanks for shopping!');
            await dialog.accept();
        });
        //empty shopping cart page web element assert
        await shoppingCartPageWebElementAsserts.isEmptyShoppingCartPageWebElementAssert(page);
        //empty shopping cart page text element assert
        await shoppingCartPageTextElementAsserts.isEmptyShoppingCartPageTextElementAsExpected(page);
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Product(s) Purchase Confirmation Test Result.png", fullPage: true });
    }

    //update product quantity in shopping cart page test
    async updateProductQtyInShopCartPageTest(page){
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const shoppingCartPage = new ShoppingCartPage(page);
        const shoppingCartPageWebElementAsserts = new ShoppingCartWebElementAsserts();
        const shoppingCartPageTextElementAsserts = new ShoppingCartPageTextElementAsserts();
        const shoppingCartPageDataLogger = new ShoppingCartPageDataLogger();
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //shopping cart page web element assert
        await shoppingCartPageWebElementAsserts.isShoppingCartPageWebElementAssert(page);
        //shopping cart page text element assert
        await shoppingCartPageTextElementAsserts.isShoppingCartPageTextElementAsExpected(page);
        //log shopping cart page data
        await shoppingCartPageDataLogger.logShoppingCartPageProductData(page);
        //capture screenshot of the shopping cart page display before quantity update
        await page.screenshot({ path: "src/tests/screenshots/Shopping Cart Page Display Before Quantity Update.png", fullPage: true });
        //click set product quantity increase button
        await shoppingCartPage.clickSetProductQtyIncreaseBtn(0, 6);
        //capture screenshot of the shopping cart page display after quantity increase
        await page.screenshot({ path: "src/tests/screenshots/Shopping Cart Page Display After Quantity Increase.png", fullPage: true });
        //assert the expected product quantity has been displayed in shopping cart
        const actualShopCartProductQtyIncreased = await shoppingCartPage.getShoppingCartPageProductQty();
        const expectedShopCartProductQtyIncreased = "x7";
        expect(actualShopCartProductQtyIncreased[0]).toBe(expectedShopCartProductQtyIncreased);
        //assert the expected product price has been displayed in shopping cart
        const actualShopCartProductPriceIncreased = await shoppingCartPage.getShoppingCartPageProductUnitPrice();
        const expectedShopCartProductPriceIncreased = "$349.93";
        expect(actualShopCartProductPriceIncreased[0]).toBe(expectedShopCartProductPriceIncreased);
        //log shopping cart page data (to verify the product quantity has been updated)
        await shoppingCartPageDataLogger.logShoppingCartPageProductData(page);
        //click set product quantity decrease button
        await shoppingCartPage.clickSetProductQtyDecreaseBtn(0, 3);
        //assert the expected product quantity has been displayed in shopping cart
        const actualShopCartProductQtyDecreased = await shoppingCartPage.getShoppingCartPageProductQty();
        const expectedShopCartProductQtyDecreased = "x4";
        expect(actualShopCartProductQtyDecreased[0]).toBe(expectedShopCartProductQtyDecreased);
        //assert the expected product price has been displayed in shopping cart
        const actualShopCartProductPriceDecreased = await shoppingCartPage.getShoppingCartPageProductUnitPrice();
        const expectedShopCartProductPriceDecreased = "$199.96";
        expect(actualShopCartProductPriceDecreased[0]).toBe(expectedShopCartProductPriceDecreased);
        //log shopping cart page data (to verify the product quantity has been updated)
        await shoppingCartPageDataLogger.logShoppingCartPageProductData(page);
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Update Product Quantity In Shopping Cart Page Test Result.png", fullPage: true });
    }

    //remove product from shopping cart tests

    //remove product from shopping cart test method
    async removeProductFromShopCartPageTest(page){
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const shoppingCartPage = new ShoppingCartPage(page);
        const shoppingCartPageWebElementAsserts = new ShoppingCartWebElementAsserts();
        const shoppingCartPageTextElementAsserts = new ShoppingCartPageTextElementAsserts();
        const shoppingCartPageDataLogger = new ShoppingCartPageDataLogger();
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //shopping cart page web element assert
        await shoppingCartPageWebElementAsserts.isShoppingCartPageWebElementAssert(page);
        //shopping cart page text element assert
        await shoppingCartPageTextElementAsserts.isShoppingCartPageTextElementAsExpected(page);
        //log shopping cart page data
        await shoppingCartPageDataLogger.logShoppingCartPageProductData(page);
        //capture screenshot of the shopping cart page display before product removal
        await page.screenshot({ path: "src/tests/screenshots/Shopping Cart Page Display Before Product Removal.png", fullPage: true });
        //click set product quantity decrease button (in this case, it bears the same functionality as product remove button would)
        await shoppingCartPage.clickSetProductQtyDecreaseBtn(0);
        //empty shopping cart page web element assert
        await shoppingCartPageWebElementAsserts.isEmptyShoppingCartPageWebElementAssert(page);
        //empty shopping cart page text element assert
        await shoppingCartPageTextElementAsserts.isEmptyShoppingCartPageTextElementAsExpected(page);
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Product Removal From Shopping Cart Test Result.png", fullPage: true });
    }

    //remove set products ("Smart Cleaner", "Home Security") from shopping cart test method
    async removeSetProductsFromShopCartPageTest(page){
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const shoppingCartPage = new ShoppingCartPage(page);
        const shoppingCartPageWebElementAsserts = new ShoppingCartWebElementAsserts();
        const shoppingCartPageTextElementAsserts = new ShoppingCartPageTextElementAsserts();
        const shoppingCartPageDataLogger = new ShoppingCartPageDataLogger();
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //shopping cart page web element assert
        await shoppingCartPageWebElementAsserts.isShoppingCartPageWebElementAssert(page);
        //shopping cart page text element assert
        await shoppingCartPageTextElementAsserts.isShoppingCartPageTextElementAsExpected(page);
        //log shopping cart page data
        await shoppingCartPageDataLogger.logShoppingCartPageProductData(page);
        //capture screenshot of the shopping cart page display before product removal
        await page.screenshot({ path: "src/tests/screenshots/Shopping Cart Page Display Before Product Removal.png", fullPage: true });
        //assert the expected products price list appears in cart
        const expectedProductPrices = ["$129.99", "$89.99", "$149.99", "$99.99", "$79.99"];
        const actualProductPrices = await shoppingCartPage.getShoppingCartPageProductUnitPrice();
        expect(actualProductPrices).toStrictEqual(expectedProductPrices);
        //assert the expected products total price has been displayed in shopping cart
        const actualShopCartProductsTotalPrice = await shoppingCartPage.getShoppingCartPageTotalProductPrice();
        const expectedShopCartProductsTotalPrice = "$549.95";
        expect(actualShopCartProductsTotalPrice).toBe(expectedShopCartProductsTotalPrice);
        //click set product ("Smart Cleaner") quantity decrease button (in this case, it bears the same functionality as product remove button would)
        await shoppingCartPage.clickSetProductQtyDecreaseBtn(0);
        //log shopping cart page data (to verify set product has been removed)
        await shoppingCartPageDataLogger.logShoppingCartPageProductData(page);
        //assert the expected products names list appears in cart (after first product removal)
        const expectedProductsNameFirstRemoval = ["Home Security", "Smart Thermostat", "Smart Door Lock", "Smart Speaker"];
        const actualProductsNameFirstRemoval = await shoppingCartPage.getShoppingCartPageProductName();
        expect(actualProductsNameFirstRemoval).toStrictEqual(expectedProductsNameFirstRemoval);
        //assert the expected products price list appears in cart (after first product removal)
        const expectedProductPricesFirstRemoval = ["$89.99", "$149.99", "$99.99", "$79.99"];
        const actualProductPricesFirstRemoval = await shoppingCartPage.getShoppingCartPageProductUnitPrice();
        expect(actualProductPricesFirstRemoval).toStrictEqual(expectedProductPricesFirstRemoval);
        //assert the expected products total price has been displayed in shopping cart (after first product removal)
        const actualShopCartProductsTotalPriceFirstRemoval = await shoppingCartPage.getShoppingCartPageTotalProductPrice();
        const expectedShopCartProductsTotalPriceFirstRemoval = "$419.96";
        expect(actualShopCartProductsTotalPriceFirstRemoval).toBe(expectedShopCartProductsTotalPriceFirstRemoval);
        //click set product ("Smart Thermostat") quantity decrease button (in this case, it bears the same functionality as product remove button would)
        await shoppingCartPage.clickSetProductQtyDecreaseBtn(1);
        //log shopping cart page data (to verify set product has been removed)
        await shoppingCartPageDataLogger.logShoppingCartPageProductData(page);
        //assert the expected products names list appears in cart (after second product removal)
        const expectedProductsNameSecondRemoval = ["Home Security", "Smart Door Lock", "Smart Speaker"];
        const actualProductsNameSecondRemoval = await shoppingCartPage.getShoppingCartPageProductName();
        expect(actualProductsNameSecondRemoval).toStrictEqual(expectedProductsNameSecondRemoval);
        //assert the expected products price list appears in cart (after second product removal)
        const expectedProductPricesSecondRemoval = ["$89.99", "$99.99", "$79.99"];
        const actualProductPricesSecondRemoval = await shoppingCartPage.getShoppingCartPageProductUnitPrice();
        expect(actualProductPricesSecondRemoval).toStrictEqual(expectedProductPricesSecondRemoval);
        //assert the expected products total price has been displayed in shopping cart (after second product removal)
        const actualShopCartProductsTotalPriceSecondRemoval = await shoppingCartPage.getShoppingCartPageTotalProductPrice();
        const expectedShopCartProductsTotalPriceSecondRemoval = "$269.97";
        expect(actualShopCartProductsTotalPriceSecondRemoval).toBe(expectedShopCartProductsTotalPriceSecondRemoval);
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Multiple Set Products (Smart Cleaner, Smart Thermostat) Removal From Shopping Cart Test Result.png", fullPage: true });
    }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
export {TestMethods};