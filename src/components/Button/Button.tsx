import React from "react";
import { Button as BaseButton, ButtonProps } from "baseui/button";

export const Button = (props: ButtonProps) => {
  return <BaseButton {...props} />;
};

export { KIND, SIZE, SHAPE } from "baseui/button";
