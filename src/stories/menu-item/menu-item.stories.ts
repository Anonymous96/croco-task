import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from '../button/button.component';
import { MenuItemComponent } from './menut-item.components';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<MenuItemComponent> = {
  title: 'Example/Menu-Item',
  component: MenuItemComponent,
  tags: ['autodocs'],
  render: (args: MenuItemComponent) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<MenuItemComponent>;

export const Primary: Story = {
  args: {
    label: 'Slots',
    imgUrl: '../../assets/images/slot-icon.svg',
    active: true,
  },
};
