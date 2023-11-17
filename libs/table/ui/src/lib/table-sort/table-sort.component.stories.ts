import type { Meta, StoryObj } from '@storybook/angular'
import { TableSortComponent } from './table-sort.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<TableSortComponent> = {
	component: TableSortComponent,
	title: 'TableSortComponent',
}
export default meta
type Story = StoryObj<TableSortComponent>

export const Primary: Story = {
	args: {
		displayedColumns: [],
		columns: [],
	},
}

export const Heading: Story = {
	args: {
		displayedColumns: [],
		columns: [],
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/table-sort works!/gi)).toBeTruthy()
	},
}
