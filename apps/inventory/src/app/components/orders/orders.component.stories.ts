import type { Meta, StoryObj } from '@storybook/angular'
import { OrdersComponent } from './orders.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<OrdersComponent> = {
	component: OrdersComponent,
	title: 'OrdersComponent',
}
export default meta
type Story = StoryObj<OrdersComponent>

export const Primary: Story = {
	args: {},
}

export const Heading: Story = {
	args: {},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/orders works!/gi)).toBeTruthy()
	},
}
