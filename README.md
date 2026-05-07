# Cypress SauceDemo Automation Project

## Project Overview
This project is an end-to-end automation testing framework built using Cypress and JavaScript.

The framework automates key user flows on the SauceDemo website, including:
- User Login
- Add to Cart
- Cart Verification
- Checkout Flow

This project was created to practice real-world UI automation testing and GitHub portfolio development.

---

## Technologies Used
- Cypress
- JavaScript
- Node.js
- Git
- GitHub

---

## Automation Coverage

The automated framework currently covers:

- Login functionality
- Product selection
- Cart validation
- End-to-end checkout process
- UI validation using assertions

---

## Assertions Used

- URL validation
- Element visibility checks
- Cart badge validation
- Product text verification
- Checkout completion confirmation

---

## Test Scenarios

### Login Test
Validates successful login using standard user credentials.

### Add to Cart Test
Adds the Sauce Labs Backpack item to the cart and validates the cart badge.

### Cart Verification Test
Opens the shopping cart and verifies the correct item is displayed.

### Checkout Flow Test
Completes the full checkout process and validates successful order completion.

---

## How to Run the Project

Clone the repository:

```bash
git clone https://github.com/KS6000/Cypress-SauceDemo.git
```

Install dependencies:

```bash
npm install
```

Run Cypress:

```bash
npx cypress open
```

---

## Project Structure

```text
cypress/
 ├── e2e/
 │    └── SauceDemo.cy.js
 ├── fixtures/
 └── support/
```

---

## Test Evidence
Test execution screenshots and Cypress results will be added here.

---

## Future Improvements
- Add GitHub Actions CI/CD pipeline
- Add Cypress screenshots/videos
- Add more negative test scenarios
- Add cross-browser execution

---

## Author
K S
GitHub: https://github.com/KS6000
