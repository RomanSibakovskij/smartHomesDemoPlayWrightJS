import { test } from '@playwright/test';

import {TestMethods} from "./utilities/test.methods.mjs";

const testMethods = new TestMethods();

test.setTimeout(6000);


test.describe("View Single Product Info During Addition To Cart Test", () => {

    // Test 005 -> view single product info ("Smart Thermostat") during addition to cart test
    test("View Single Product Info (Smart Thermostat) During Addition To Cart Test", async ({page}) => {
        //launch the page
        await page.goto('/');
        //user navigation to product page test
        await testMethods.navigateToProductPageTest(page);
        //view single product info ("Smart Thermostat") during addition to cart test
        await testMethods.viewSingleProductInfoDuringAddToCartTest(page);
    });

});