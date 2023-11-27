import type { Meta, StoryObj } from '@storybook/angular'
import { NavComponent } from './nav.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<NavComponent> = {
	component: NavComponent,
	title: 'NavComponent',
}
export default meta
type Story = StoryObj<NavComponent>

export const Primary: Story = {
	args: {
		title: 'Primary',
		links: [{ name: 'link', path: 'path' }],
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Primary/gi)).toBeTruthy()
	},
}

export const Heading: Story = {
	args: {
		title: 'Heading',
		links: [{ name: 'link', path: 'path' }],
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Heading/gi)).toBeTruthy()
	},
}
