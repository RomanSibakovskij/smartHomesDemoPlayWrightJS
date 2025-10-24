# smartHomesDemoPlayWrightJS

PlayWright test suite on basic web e-commerce app functionality (product(s) addition to cart, view single product info, product purchase confirmation). The test suite captures screenshots at the end of test case run (for logging purposes). The PlayWright also generates HTML reports at the end of each test run (to limit test suite run for a single test only, add after describe or test keyword "only" (ex. test.only / test.describe.only))

#Tech Requirements:
 
 1.Node.js (20.x and above)

 2.PlayWright 1.54 or above
 
 3.IntelliJ IDEA (or another IDE)
    
 4. ESLint 9.x

#Setup

1. Clone this repository into IntelliJ (or other IDE) workspace folder (or wherever the project can be launched by the IDE).
2. Open the IDE and open the project folder.
3. Install Node.js.
4. Make sure JavaScript/TypeScript plugins are enabled in the IDE.
5. Install and configure PlayWright (enter in IDE terminal: npm init playwright@latest).
6. Install ESLint with cmd in IDE terminal: npm install --save-dev eslint eslint-plugin-playwright globals or npm init @eslint/config@latest
7. Run the test suite (in-terminal) on the IDE with npx playwright test (to run ESLint input in the terminal: npx eslint)

## Test Case List

//Navigate To Product Page Test

1.	// Test 001 -> user navigation to product page test

//Add Single Product To Cart Test

1.	// Test 002 -> add single product ("Smart LED System") to cart test

//Add Multiple Products To Cart Tests

1.	// Test 002a -> add multiple products ("Smart Cleaner", "Home Security", "Smart Thermostat", "Smart Door Lock", "Smart Speaker") to cart test
2.	// Test 002b -> add multiple products ("Home Security") to cart test

//Update Product Quantity During Addition To Cart Test

1.	// Test 003 -> update products ("Smart LED System") quantity during addition to cart test

//Cancel Product Addition To Cart Test

1.	// Test 004 -> cancel product ("Smart LED System") addition to cart test

//View Single Product Info During Addition To Cart Test

1.	// Test 005 -> view single product info ("Smart Thermostat") during addition to cart test

//Single Product Purchase Confirmation Tests

1.	// Test 006 -> single product ("Smart LED System") purchase confirmation test
2.	// Test 006a -> single product ("Smart Thermostat") (with product page view) purchase confirmation test

//Multiple Products Purchase Confirmation Tests

1.	// Test 006b -> multiple products ("Smart Cleaner", "Home Security", "Smart Thermostat", "Smart Door Lock", "Smart Speaker") purchase confirmation test
2.	// Test 006c -> multiple products ("Home Security") purchase confirmation test

//Update Product Quantity In Shopping Cart Page Test

1.	// Test 007 -> update product ("Smart LED System") quantity in shopping cart page test

//Remove Product From Shopping Cart Page Tests

1.	// Test 008 -> remove product ("Smart LED System") from shopping cart page test
2.	// Test 008a -> remove set products ("Smart Cleaner", "Smart Thermostat") from shopping cart page test
