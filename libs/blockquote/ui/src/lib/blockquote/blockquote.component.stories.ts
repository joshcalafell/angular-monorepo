import type { Meta, StoryObj } from '@storybook/angular'
import { BlockquoteComponent } from './blockquote.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<BlockquoteComponent> = {
	component: BlockquoteComponent,
	title: 'BlockquoteComponent',
}
export default meta
type Story = StoryObj<BlockquoteComponent>

export const Primary: Story = {
	args: {},
}

export const Heading: Story = {
	args: {},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/blockquote works!/gi)).toBeTruthy()
	},
}
