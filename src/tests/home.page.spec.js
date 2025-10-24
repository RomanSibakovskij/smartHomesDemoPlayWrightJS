import { test } from '@playwright/test';

import {TestMethods} from "./utilities/test.methods.mjs";

const testMethods = new TestMethods();

test.setTimeout(10000);

test.describe("Navigate To Product Page Test", () => {

    // Test 001 -> user navigation to product page test
    test("Navigate To Product Page Test", async ({page}) => {
        //launch the page
        await page.goto('/');
        //user navigation to product page test
        await testMethods.navigateToProductPageTest(page);
    });

});