describe('SauceDemo Login Test', () => {

  it('should Login successfully', () => {

    cy.visit('https://www.saucedemo.com/')

    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')

    cy.get('#login-button').click()

    cy.url().should('include', '/inventory.html')
  })

})

describe('SauceDemo add to cart test', () => {
  
  it('should add item to cart', () => {

    cy.visit('https://www.saucedemo.com/')

    // Login first
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    // Add item to cart
    cy.get('#add-to-cart-sauce-labs-backpack').click()

    // Validate cart badge shows 1
    cy.get('.shopping_cart_badge').should('have.text', '1')


  })

})

describe('SauceDemo cart verfication test', () => {
  it('should open cart and verify backpack is present', () => {
  
  cy.visit('https://www.saucedemo.com/')

  // Login
  cy.get('#user-name').type('standard_user')
  cy.get('#password').type('secret_sauce')
  cy.get('#login-button').click()

  // Add Item
  cy.get('#add-to-cart-sauce-labs-backpack').click()

  // Click cart icon
  cy.get('.shopping_cart_link').click()

  // Verify item is in cart
  cy.contains('Sauce Labs Backpack').should('be.visible')

  })

})

describe('SauceDemo checkout flow test', () => {
  it('should complete checkout successfully', () => {

  cy.visit('https://www.saucedemo.com/')

   // Login
  cy.get('#user-name').type('standard_user')
  cy.get('#password').type('secret_sauce')
  cy.get('#login-button').click()

  // Add Item to cart
  cy.get('#add-to-cart-sauce-labs-backpack').click()

  // Open cart
   cy.get('.shopping_cart_link').click()

   // Start checkout
   cy.get('#checkout').click()

   // Fill checkout information
   cy.get('#first-name').type('k')
   cy.get('#last-name').type('s')
   cy.get('#postal-code').type('DA8 1AA')

   // Continue checkout
   cy.get('#continue').click()

   // Finish order
   cy.get('#finish').click()

   // Verify success message
   cy.contains('Thank you for your order!').should('be.visible')
    
  })
})