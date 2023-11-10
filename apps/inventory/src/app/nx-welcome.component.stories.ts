import type { Meta, StoryObj } from '@storybook/angular';
import { NxWelcomeComponent } from './nx-welcome.component';

const meta: Meta<NxWelcomeComponent> = {
  component: NxWelcomeComponent,
  title: 'NxWelcomeComponent',
};
export default meta;
type Story = StoryObj<NxWelcomeComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
};
