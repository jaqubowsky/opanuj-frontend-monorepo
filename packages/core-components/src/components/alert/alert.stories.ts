import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './alert';

type Story = StoryObj;

const meta: Meta = {
  title: 'Components/Alert',
  component: 'pp-alert',
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['success', 'neutral', 'warning', 'danger', 'text'],
    },
    closable: {
      control: { type: 'boolean' },
    },
    duration: {
      control: { type: 'number' },
    },
    open: {
      control: { type: 'boolean' },
    },
  },
  args: {
    variant: 'danger',
    closable: false,
    duration: Infinity,
    open: true,
  },
  render: ({ variant, closable, duration, open }) =>
    html`<pp-alert
      variant=${variant}
      duration=${duration}
      ?closable=${closable}
      ?open=${open}
    >
      Alert
    </pp-alert>`,
};

export default meta;

export const Success: Story = {
  args: {
    variant: 'success',
  },
  render: (args) => html`
    <pp-alert
      variant=${args.variant}
      duration=${args.duration}
      ?closable=${args.closable}
      ?open=${args.open}
    >
      This is a success alert. Use it for positive confirmations.
    </pp-alert>
  `,
};

export const Neutral: Story = {
  args: {
    variant: 'neutral',
  },
  render: (args) => html`
    <pp-alert
      variant=${args.variant}
      duration=${args.duration}
      ?closable=${args.closable}
      ?open=${args.open}
    >
      This is a neutral alert. Suitable for neutral information or hints.
    </pp-alert>
  `,
};

export const Warning: Story = {
  args: {
    variant: 'warning',
  },
  render: (args) => html`
    <pp-alert
      variant=${args.variant}
      duration=${args.duration}
      ?closable=${args.closable}
      ?open=${args.open}
    >
      This is a warning alert. Use it for non-critical warnings.
    </pp-alert>
  `,
};

export const Danger: Story = {
  args: {
    variant: 'danger',
  },
  render: (args) => html`
    <pp-alert
      variant=${args.variant}
      duration=${args.duration}
      ?closable=${args.closable}
      ?open=${args.open}
    >
      This is a danger alert. Use it for critical errors or destructive actions.
    </pp-alert>
  `,
};

export const Closable: Story = {
  args: {
    variant: 'primary',
    closable: true,
  },
  render: (args) => html`
    <pp-alert
      variant=${args.variant}
      duration=${args.duration}
      ?closable=${args.closable}
      ?open=${args.open}
    >
      This alert can be closed by clicking the close button.
    </pp-alert>
  `,
};

export const AutoDismissing: Story = {
  args: {
    variant: 'success',
    duration: 3000,
  },
  render: (args) => html`
    <pp-alert
      variant=${args.variant}
      duration=${args.duration}
      ?closable=${args.closable}
      ?open=${args.open}
    >
      This success alert will automatically dismiss after 3 seconds.
    </pp-alert>
  `,
};
