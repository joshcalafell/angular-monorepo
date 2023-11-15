export const header = () => cy.get('section.wrapper header.header')

export const headerLeft = () => header().get('hgroup.header-left')

export const headerRight = () => cy.get('hgroup.header-right')
