import React from "react";
import { ANCHOR, Drawer, SIZE } from "baseui/drawer";
import { StyledLink as BaseLink } from "baseui/link";
import { StyledBaseButton as BaseButton } from "baseui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFoursquare, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { themedStyled, themedWithStyle, useThemedStyletron } from "../theme";
import { Link } from "gatsby";

const NavbarColumn = themedStyled("div", {
  display: "flex",
  flexDirection: "column",
});

const NavbarTop = themedStyled("div", ({ $theme: { sizing } }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingLeft: sizing.scale800,
}));

const SocialLinks = themedStyled("div", {
  display: "flex",
  justifyContent: "space-between",
});

const StyledBaseButton = themedWithStyle(
  BaseButton,
  ({ $theme: { sizing, colors } }) => ({
    fontSize: sizing.scale800,
    width: "72px",
    height: "72px",
    backgroundColor: colors.primaryA,
  })
);

const StyledLink = themedWithStyle(BaseLink, ({ $theme: { sizing } }) => ({
  display: "flex",
  flex: "1",
  width: "72px",
  height: "72px",
  justifyContent: "center",
  alignItems: "center",
  borderTop: "1px solid rgba(14, 14, 15, 0.1)",
  borderRight: "1px solid rgba(14, 14, 15, 0.1)",
  borderBottom: "1px solid rgba(14, 14, 15, 0.1)",
  fontSize: sizing.scale800,
}));

export const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [css, theme] = useThemedStyletron();
  const { typography, colors } = theme;

  const navLinkClasses = css({
    ...typography.DisplaySmall,
    display: "block",
    color: colors.primaryB,
    textDecoration: "none",
    opacity: 0.5,
  });

  return (
    <header>
      <NavbarColumn>
        <NavbarTop>
          <Link
            className={css({
              ...typography.DisplaySmall,
              display: "block",
              color: colors.primaryA,
              textDecoration: "none",
            })}
            to="/"
          >
            Rest_17
          </Link>
          <StyledBaseButton onClick={() => setIsOpen(true)}>
            <FontAwesomeIcon icon={faBars} color={colors.primaryB} />
          </StyledBaseButton>
        </NavbarTop>

        <SocialLinks>
          <StyledLink href="https://baseweb.design" $theme={theme}>
            <FontAwesomeIcon icon={faFoursquare} />
          </StyledLink>
          <StyledLink href="https://baseweb.design" $theme={theme}>
            <FontAwesomeIcon icon={faInstagram} />
          </StyledLink>
        </SocialLinks>
      </NavbarColumn>

      <Drawer
        isOpen={isOpen}
        autoFocus
        onClose={() => setIsOpen(false)}
        size={SIZE.full}
        anchor={ANCHOR.left}
        overrides={{
          DrawerContainer: {
            style: ({ $theme }) => ({
              backgroundColor: $theme.colors.primaryA,
            }),
          },
        }}
      >
        <Link className={navLinkClasses} to="/">
          Home
        </Link>
        <Link className={navLinkClasses} to="/">
          Our Story
        </Link>
        <Link className={navLinkClasses} to="/">
          Menu
        </Link>
        <Link className={navLinkClasses} to="/">
          Reservations
        </Link>
        <Link className={navLinkClasses} to="/">
          News
        </Link>
        <Link className={navLinkClasses} to="/">
          Contact
        </Link>
      </Drawer>
    </header>
  );
};
