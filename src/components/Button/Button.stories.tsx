import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button, KIND, SIZE } from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: ComponentMeta<typeof Button> = {
  title: "Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export default meta;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Button",
  kind: KIND.secondary,
};

export const Large = Template.bind({});
Large.args = {
  children: "Button",
  size: SIZE.large,
};

export const Mini = Template.bind({});
Mini.args = {
  children: "Button",
  size: SIZE.mini,
};
