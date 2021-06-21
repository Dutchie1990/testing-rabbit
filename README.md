# Testing for Rabbit Finance

## Cypress.io

The test for Cypress.io for the webpage consist out of 3 individual tests: 

1. Inputting user data to get the quotations
2. Applying a filter on the quotations page 
3. Filling in the checkout/payment data

Those 3 test is a representation of a natural flow of a user through the website and is vital for adding bussiness value. Therefore I decided to automate the flow. 

## Postman

All the API calls from the 'order pizza' are covered in the collection I made with Postman. 

1. Post Authentication
    - In this test, I check wether the API gave back the response code 200 and I check if the response has an access token. When the response have an access token I save the token in my variables to use in following tests
2. Post Add Order
    - In this test, I post a order and check whether the response code is in the 200 range, and I check if the order data is consistent with the data I posted
3. Get Order 
    - In this test, I will get the existing orders and check if the response is valid according the order I posted in the add order test
4. Delete Order
    - In this test, I delete the existing order and check the response body. 

## CI/CD

For the automated builds, I intergrated the <strong>Cypress.io && Postman<strong> test and execute them automatically when there is a Pull request to the main branch of this project, as well as a direct push to the main branch.

