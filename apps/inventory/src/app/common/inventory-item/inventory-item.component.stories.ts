import type { Meta, StoryObj } from '@storybook/angular'
import { InventoryItemComponent } from './inventory-item.component'

import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import { InventoryItem } from '../../service/inventory/inventory.model'

const meta: Meta<InventoryItemComponent> = {
	component: InventoryItemComponent,
	title: 'InventoryItemComponent',
}
export default meta
type Story = StoryObj<InventoryItemComponent>

const mockItem: InventoryItem = {
	id: 1,
	name: 'Test',
	description: 'test',
	price: 1,
	quantity: 1,
	imageUrl: '',
	inventoryDate: '',
	starRating: 0,
	starRatingCount: 0,
	inventoryStatus: 'InStock',
	dimensions: '',
	waxType: '',
	weight: '',
	wickType: '',
	burnTime: '',
	inCart: false,
}

export const Primary: Story = {
	args: {
		item: mockItem as InventoryItem,
	},
}

export const TestInventory: Story = {
	args: {
		item: mockItem as InventoryItem,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/test/gi)).toBeTruthy()
	},
}
