import { headerLeft, headerRight } from '../support/app.po'

describe('inventory-e2e', () => {
	beforeEach(() => cy.visit('/orders'))

	it('should accept support commands', () => {
		// Custom command example, see `../support/commands.ts` file
		cy.login('my-email@something.com', 'myPassword')
	})

	it('should display svg icon', () => {
		headerLeft().get('svg').should('be.visible')
	})

	it('should display "GENESIS CANDLES"', () => {
		headerLeft().get('h1 a').should('contain', 'GENESIS CANDLES')
	})

	it('should display "Orders" link', () => {
		headerLeft().get('nav ul li a').should('contain', 'Orders')
	})

	it('should display "Inventory" link', () => {
		headerLeft().get('nav ul li a').should('contain', 'Inventory')
	})

	it('should display "Testimonials" link', () => {
		headerLeft().get('nav ul li a').should('contain', 'Testimonials')
	})

	it('should display login button', () => {
		// Function helper example, see `../support/app.po.ts` file
		headerRight()
			.get('button.btn-primary span')
			.should('contain', 'Login / Sign Up')
	})
})
