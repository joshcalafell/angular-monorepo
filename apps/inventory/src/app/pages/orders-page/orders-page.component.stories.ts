import type { Meta, StoryObj } from '@storybook/angular'
import { OrdersPageComponent } from './orders-page.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<OrdersPageComponent> = {
	component: OrdersPageComponent,
	title: 'OrdersPageComponent',
}
export default meta
type Story = StoryObj<OrdersPageComponent>

export const Primary: Story = {
	args: {},
}

export const Heading: Story = {
	args: {},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/orders-page works!/gi)).toBeTruthy()
	},
}
