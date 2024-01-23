import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from '../button/button.component';
import { NavItemComponent } from './nav-item.component';

const meta: Meta<NavItemComponent> = {
  title: 'Nav-Item',
  component: NavItemComponent,
  render: (args: NavItemComponent) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<NavItemComponent>;

export const Primary: Story = {
  args: {
    label: 'Slots',
    imgUrl: '../../assets/images/slot-icon.svg',
    active: true,
  },
};
