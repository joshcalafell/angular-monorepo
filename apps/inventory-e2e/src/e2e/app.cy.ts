describe('inventory-e2e', () => {
	beforeEach(() => cy.visit('/'))

	it('should accept support commands', () => {
		// Custom command example, see `../support/commands.ts` file
		cy.login('my-email@something.com', 'myPassword')
	})

	it('should display img icon', () => {
		cy.get('img').should('be.visible')
	})

	it('should display "About" link', () => {
		cy.get('nav ul li a').should('contain', 'About')
	})

	it('should display "Inventory" link', () => {
		cy.get('nav ul li a').should('contain', 'Inventory')
	})

	it('should display "Testimonials" link', () => {
		cy.get('nav ul li a').should('contain', 'Testimonials')
	})

	it('should display "Orders" link', () => {
		cy.get('nav ul li a').should('contain', 'Orders')
	})

	it('should display "Login" link', () => {
		cy.get('button span').should('contain', 'Login / Sign Up')
	})
})
