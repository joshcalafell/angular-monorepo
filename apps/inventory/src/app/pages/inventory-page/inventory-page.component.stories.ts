import type { Meta, StoryObj } from '@storybook/angular'
import { InventoryPageComponent } from './inventory-page.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<InventoryPageComponent> = {
	component: InventoryPageComponent,
	title: 'InventoryPageComponent',
}
export default meta
type Story = StoryObj<InventoryPageComponent>

export const Primary: Story = {
	args: {},
}

export const Heading: Story = {
	args: {},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/inventory-page works!/gi)).toBeTruthy()
	},
}
