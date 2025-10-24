import { test } from '@playwright/test';

import {TestMethods} from "./utilities/test.methods.mjs";

const testMethods = new TestMethods();

test.setTimeout(12000);

test.describe("Single Product Purchase Confirmation Tests", () => {

    // Test 006 -> single product ("Smart LED System") purchase confirmation test
    test("Single Product(Smart LED System) Purchase Confirmation Test", async ({page}) => {
        //launch the page
        await page.goto('/');
        //user navigation to product page test
        await testMethods.navigateToProductPageTest(page);
        //add single product ("Smart LED System") to cart test
        await testMethods.addSingleProductToCartTest(page);
        //single product ("Smart LED System") purchase confirmation test
        await testMethods.productPurchaseConfirmationTest(page);
    });

    // Test 006a -> single product ("Smart Thermostat") (with product page view) purchase confirmation test
    test("Single Product (Smart Thermostat) (With Product Page View) Purchase Confirmation Test", async ({page}) => {
        //launch the page
        await page.goto('/');
        //user navigation to product page test
        await testMethods.navigateToProductPageTest(page);
        //view single product info ("Smart Thermostat") during addition to cart test
        await testMethods.viewSingleProductInfoDuringAddToCartTest(page);
        //single product ("Smart Thermostat") (with product page view) purchase confirmation test
        await testMethods.productPurchaseConfirmationTest(page);
    });

});

test.describe("Multiple Products Purchase Confirmation Tests", () => {

    // Test 006b -> multiple products ("Smart Cleaner", "Home Security", "Smart Thermostat", "Smart Door Lock", "Smart Speaker") purchase confirmation test
    test("Multiple Products (Smart Cleaner, Home Security, Smart Thermostat, Smart Door Lock, Smart Speaker) Purchase Confirmation Test", async ({page}) => {
        //launch the page
        await page.goto('/');
        //user navigation to product page test
        await testMethods.navigateToProductPageTest(page);
        //add multiple products ("Smart Cleaner", "Home Security", "Smart Thermostat", "Smart Door Lock", "Smart Speaker") to cart test
        await testMethods.addMultipleProductsToCartTest(page);
        //multiple products ("Smart Cleaner", "Home Security", "Smart Thermostat", "Smart Door Lock", "Smart Speaker") purchase confirmation test
        await testMethods.productPurchaseConfirmationTest(page);
    });

    // Test 006c -> multiple products ("Home Security") purchase confirmation test
    test("Multiple Products (Home Security) Purchase Confirmation Test", async ({page}) => {
        //launch the page
        await page.goto('/');
        //user navigation to product page test
        await testMethods.navigateToProductPageTest(page);
        //add multiple products ("Home Security") to cart test
        await testMethods.addMultipleSingleProductsToCartTest(page);
        //multiple products ("Home Security") purchase confirmation test
        await testMethods.productPurchaseConfirmationTest(page);
    });

});

test.describe("Update Product Quantity In Shopping Cart Page Test", () => {

    // Test 007 -> update product ("Smart LED System") quantity in shopping cart page test
    test("Update Product (Smart LED System) Quantity In Shopping Cart Page Test", async ({page}) => {
        //launch the page
        await page.goto('/');
        //user navigation to product page test
        await testMethods.navigateToProductPageTest(page);
        //add single product ("Smart LED System") to cart test
        await testMethods.addSingleProductToCartTest(page);
        //update product ("Smart LED System") quantity in shopping cart page test
        await testMethods.updateProductQtyInShopCartPageTest(page);
    });

});

test.describe("Remove Product From Shopping Cart Page Tests", () => {

    // Test 008 -> remove product ("Smart LED System") from shopping cart page test
    test("Remove Product (Smart LED System) Quantity From Shopping Cart Page Test", async ({page}) => {
        //launch the page
        await page.goto('/');
        //user navigation to product page test
        await testMethods.navigateToProductPageTest(page);
        //add single product ("Smart LED System") to cart test
        await testMethods.addSingleProductToCartTest(page);
        //remove product ("Smart LED System") quantity from shopping cart page test
        await testMethods.removeProductFromShopCartPageTest(page);
    });

    // Test 008a -> remove set products ("Smart Cleaner", "Smart Thermostat") from shopping cart page test
    test("Remove Set Products (Smart Cleaner, Smart Thermostat) Quantity From Shopping Cart Page Test", async ({page}) => {
        //launch the page
        await page.goto('/');
        //user navigation to product page test
        await testMethods.navigateToProductPageTest(page);
        //add multiple products ("Smart Cleaner", "Home Security", "Smart Thermostat", "Smart Door Lock", "Smart Speaker") to cart test
        await testMethods.addMultipleProductsToCartTest(page);
        //remove set products ("Smart Cleaner", "Smart Thermostat") quantity from shopping cart page test
        await testMethods.removeSetProductsFromShopCartPageTest(page);
    });

});