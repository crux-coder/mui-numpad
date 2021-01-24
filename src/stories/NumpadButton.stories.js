import React from 'react';

import { NumpadButton } from './NumpadButton';

export default {
  title: 'Example/NumpadButton',
  component: NumpadButton,
};

const Template = (args) => <NumpadButton {...args} />;

export const Button = Template.bind({});
Button.args = {
  label: '1',
};

