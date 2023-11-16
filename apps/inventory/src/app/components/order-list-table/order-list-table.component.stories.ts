import type { Meta, StoryObj } from '@storybook/angular'
import { OrderListTableComponent } from './order-list-table.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<OrderListTableComponent> = {
	component: OrderListTableComponent,
	title: 'OrderListTableComponent',
}
export default meta
type Story = StoryObj<OrderListTableComponent>

export const Primary: Story = {
	args: {
		orders: [],
	},
}

export const Heading: Story = {
	args: {
		orders: [],
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/order-list-table works!/gi)).toBeTruthy()
	},
}
