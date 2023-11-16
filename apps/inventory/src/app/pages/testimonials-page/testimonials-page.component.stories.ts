import type { Meta, StoryObj } from '@storybook/angular'
import { TestimonialsPageComponent } from './testimonials-page.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<TestimonialsPageComponent> = {
	component: TestimonialsPageComponent,
	title: 'TestimonialsPageComponent',
}
export default meta
type Story = StoryObj<TestimonialsPageComponent>

export const Primary: Story = {
	args: {},
}

export const Heading: Story = {
	args: {},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		expect(canvas.getByText(/testimonials-page works!/gi)).toBeTruthy()
	},
}
