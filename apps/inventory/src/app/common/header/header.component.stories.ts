import type { Meta, StoryObj } from '@storybook/angular'
import { HeaderComponent } from './header.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<HeaderComponent> = {
	component: HeaderComponent,
	title: 'HeaderComponent',
}
export default meta
type Story = StoryObj<HeaderComponent>

export const Primary: Story = {
	args: {
		title: 'Primary',
		link: 'link',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Primary/gi)).toBeTruthy()
	},
}

export const Heading: Story = {
	args: {
		title: 'Heading',
		link: 'link',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/Heading/gi)).toBeTruthy()
	},
}
