import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { H1, H2, H3, H4, H5, P2, P3 } from "../components/typography";
import { Button } from "./Button";
// import { Link } from "gatsby";
// import { StyledLink } from "baseui/link";

const meta: ComponentMeta<typeof Button> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Button",
  component: Button,
};
export default meta;

const textString = "Heading";
const bodyString =
  "Good things happen when people can move, whether across town or towards their dreams. Opportunities appear, open up, become reality. What started as a way to tap a button to get a ride has led to billions of moments of human connection as people around the world go all kinds of places in all kinds of ways with the help of our technology.";

export const Primary: ComponentStory<typeof Button> = () => (
  <>
    <H1>{`${textString}XXLarge`}</H1>
    <H2>{`${textString}XLarge`}</H2>
    <H3>{`${textString}Large`}</H3>
    <H4>{`${textString}Medium`}</H4>
    <H5>{`${textString}Small`}</H5>

    <P2>{bodyString}</P2>
    <P3>{bodyString}</P3>

    {/* <Link to="/">Link</Link>
    <StyledLink href="https://baseweb.design/components/link">
      External Link
    </StyledLink> */}
  </>
);
