import type { Meta, StoryObj } from '@storybook/angular'
import { AboutPageComponent } from './about-page.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<AboutPageComponent> = {
	component: AboutPageComponent,
	title: 'AboutPageComponent',
}
export default meta
type Story = StoryObj<AboutPageComponent>

export const Primary: Story = {
	args: {},
}

export const Heading: Story = {
	args: {},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/about-page works!/gi)).toBeTruthy()
	},
}
