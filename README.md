# Cypress SauceDemo Automation Project

[![Cypress Tests](https://github.com/KS6000/Cypress-SauceDemo/actions/workflows/cypress.yml/badge.svg)](https://github.com/KS6000/Cypress-SauceDemo/actions/workflows/cypress.yml)

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
- GitHub Actions (CI/CD)

---

## Automation Coverage

The automated framework currently covers:

- Login functionality
- Product selection
- Cart validation
- End-to-end checkout process
- UI validation using assertions

---

## 🚀 Framework Features

- End-to-end UI automation using Cypress
- GitHub Actions CI/CD integration
- Reusable test structure
- Assertion-based validation
- Automated checkout flow testing
- Scalable framework foundation

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

## 📁 Project Structure

```bash
Cypress-SauceDemo/
│
├── cypress/
│   ├── e2e/
│   │   └── SauceDemo.cy.js
│   │
│   ├── fixtures/
│   └── support/
│
├── .github/
│   └── workflows/
│       └── cypress.yml
│
├── cypress.config.js
├── package.json
└── README.md
```
---

## Test Evidence
Test execution screenshots and Cypress results will be added here.

---

## Future Improvements
## 🔮 Future Improvements

- Add Page Object Model (POM) structure
- Add cross-browser execution
- Add more negative test scenarios
- Add reusable custom commands
- Add Cypress screenshots/videos evidence

---

## Author
K S
GitHub: https://github.com/KS6000
