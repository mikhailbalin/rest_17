import React, { PropsWithoutRef } from "react";
import { Link as GatsbyLink, GatsbyLinkProps } from "gatsby";
import {
  LinkProps as BaseLinkProps,
  StyledLink as BaseLink,
} from "baseui/link";
import { useThemedStyletron, themedWithStyle } from "../theme";
import { StyleObject } from "styletron-react";

type LinkProps<TState> =
  | PropsWithoutRef<GatsbyLinkProps<TState>>
  | BaseLinkProps;

const style: StyleObject = {
  color: "#0e0e0f",
  fontWeight: "500",
  fontSize: "16px",
  lineHeight: "24px",
  fontFamily: "Jost, sans-serif",
  textUnderlinePosition: "auto",
};

const StyledLink = themedWithStyle(BaseLink, style);

export function Link<TState>(props: LinkProps<TState>) {
  const [css] = useThemedStyletron();

  if ("to" in props) {
    return <GatsbyLink {...props} className={css(style)} />;
  } else {
    return <StyledLink {...props} />;
  }
}
