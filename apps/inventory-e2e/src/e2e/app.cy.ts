describe('inventory-e2e menu', () => {
	beforeEach(() => cy.visit('/'))

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
		cy.get('button span').should('contain', 'Login')
	})
})
