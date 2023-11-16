import type { Meta, StoryObj } from '@storybook/angular'
import { ProductDetailComponent } from './product-detail.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<ProductDetailComponent> = {
	component: ProductDetailComponent,
	title: 'ProductDetailComponent',
}
export default meta
type Story = StoryObj<ProductDetailComponent>

export const Primary: Story = {
	args: {},
}

export const Heading: Story = {
	args: {},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/product-detail works!/gi)).toBeTruthy()
	},
}
