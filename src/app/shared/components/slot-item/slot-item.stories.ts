import type { Meta, StoryObj } from '@storybook/angular';
import { SlotItemComponent } from './slot-item.component';

const meta: Meta<SlotItemComponent> = {
  title: 'Slot Item',
  component: SlotItemComponent,
  render: (args: SlotItemComponent) => ({
    props: {
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<SlotItemComponent>;

export const Primary: Story = {
  args: {
    title: 'Slots',
    imgUrl: 'https://static.crocobet.com/cms/slot/egt/801.jpg',
  },
};
