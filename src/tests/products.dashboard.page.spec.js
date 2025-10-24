import { test } from '@playwright/test';

import {TestMethods} from "./utilities/test.methods.mjs";

const testMethods = new TestMethods();

test.setTimeout(20000);

test.describe("Add Single Product To Cart Test", () => {

    // Test 002 -> add single product ("Smart LED System") to cart test
    test("Add Single Product (Smart LED System) To Cart Test", async ({page}) => {
        //launch the page
        await page.goto('/');
        //user navigation to product page test
        await testMethods.navigateToProductPageTest(page);
        //add single product ("Smart LED System") to cart test
        await testMethods.addSingleProductToCartTest(page);
    });

});

test.describe("Add Multiple Products To Cart Tests", () => {

    // Test 002a -> add multiple products ("Smart Cleaner", "Home Security", "Smart Thermostat", "Smart Door Lock", "Smart Speaker") to cart test
    test("Add Multiple Products (Smart Cleaner, Home Security, Smart Thermostat, Smart Door Lock, Smart Speaker) To Cart Test", async ({page}) => {
        //launch the page
        await page.goto('/');
        //user navigation to product page test
        await testMethods.navigateToProductPageTest(page);
        //add multiple products ("Smart Cleaner", "Home Security", "Smart Thermostat", "Smart Door Lock", "Smart Speaker") to cart test
        await testMethods.addMultipleProductsToCartTest(page);
    });

    // Test 002b -> add multiple products ("Home Security") to cart test
    test("Add Multiple Products (Home Security) To Cart Test", async ({page}) => {
        //launch the page
        await page.goto('/');
        //user navigation to product page test
        await testMethods.navigateToProductPageTest(page);
        //add multiple products ("Home Security") to cart test
        await testMethods.addMultipleSingleProductsToCartTest(page);
    });

});

test.describe("Update Product Quantity During Addition To Cart Test", () => {

    // Test 003 -> update products ("Smart LED System") quantity during addition to cart test
    test("Update Product (Smart LED System) Quantity During Addition To Cart Test", async ({page}) => {
        //launch the page
        await page.goto('/');
        //user navigation to product page test
        await testMethods.navigateToProductPageTest(page);
        //update products ("Smart LED System") quantity during addition to cart test
        await testMethods.updateSingleProductCartQtyTest(page);
    });

});

test.describe("Cancel Product Addition To Cart Test", () => {

    // Test 004 -> cancel product ("Smart LED System") addition to cart test
    test("Cancel Product (Smart LED System) Addition To Cart Test", async ({page}) => {
        //launch the page
        await page.goto('/');
        //user navigation to product page test
        await testMethods.navigateToProductPageTest(page);
        //cancel product ("Smart LED System") addition to cart test
        await testMethods.cancelSingleProductAdditionToCartTest(page);
    });

});