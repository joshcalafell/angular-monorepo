export const header = () => cy.get('div[class="wrapper"]').get('h1')

export const headerLeft = () =>
	cy
		.get('<div[class="wrapper"]>')
		.get('<header[class="header"]')
		.get('div[class="header-left"]')
		.parent()

export const headerRight = () =>
	cy
		.get('div[class="wrapper"]')
		.get('header[class="header"]')
		.get('div[class="header-right"]')
