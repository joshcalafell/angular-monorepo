import type { Meta, StoryObj } from '@storybook/angular'
import { NotFoundPageComponent } from './not-found-page.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<NotFoundPageComponent> = {
	component: NotFoundPageComponent,
	title: 'NotFoundPageComponent',
}
export default meta
type Story = StoryObj<NotFoundPageComponent>

export const Primary: Story = {
	args: {},
}

export const Heading: Story = {
	args: {},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/not-found-page works!/gi)).toBeTruthy()
	},
}
