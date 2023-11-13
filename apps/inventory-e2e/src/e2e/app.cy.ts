describe('inventory-e2e', () => {
	beforeEach(() => cy.visit('/orders'))

	it('should accept support commands', () => {
		// Custom command example, see `../support/commands.ts` file
		cy.login('my-email@something.com', 'myPassword')
	})

	it('should display login button', () => {
		// Function helper example, see `../support/app.po.ts` file
		cy.get('section.wrapper header.header .header-right button').should(
			'contain',
			'Login / Sign Up'
		)
	})

	it('should display svg icon', () => {
		cy.get('section.wrapper header.header .header-left svg').should(
			'be.visible'
		)
	})

	it('should display "GENESIS CANDLES"', () => {
		cy.get('section.wrapper header.header .header-left h1').should(
			'contain',
			'GENESIS CANDLES'
		)
	})
})
