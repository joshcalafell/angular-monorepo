import type { Meta, StoryObj } from '@storybook/angular'
import { OrderListComponent } from './order-list.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<OrderListComponent> = {
	component: OrderListComponent,
	title: 'OrderListComponent',
}
export default meta
type Story = StoryObj<OrderListComponent>

export const Primary: Story = {
	args: {},
}

export const Heading: Story = {
	args: {},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/order-list works!/gi)).toBeTruthy()
	},
}
