import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { H1, H2, H3, H4, H5 } from "../components/typography";
import { Button } from "./Button";

const meta: ComponentMeta<typeof Button> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Button",
  component: Button,
};
export default meta;

export const Primary: ComponentStory<typeof Button> = () => (
  <>
    <H1>HeadingXXLarge</H1>
    <H2>HeadingXLarge</H2>
    <H3>HeadingLarge</H3>
    <H4>HeadingMedium</H4>
    <H5>HeadingSmall</H5>
  </>
);
