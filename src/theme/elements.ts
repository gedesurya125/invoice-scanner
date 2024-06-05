export const hoverState = {
  withLinkArrow: {
    ":hover": {
      "& .link-arrow": {
        transform: [null, null, null, "scaleX(1.27)"],
      },
    },
  },
  opacityChange: {
    ":hover": {
      opacity: 0.6,
    },
  },
  colorChange: {
    ":hover": {
      color: "neutral.yellow",
    },
  },
};

const linkDefault = {
  ...hoverState.withLinkArrow,
  cursor: "pointer",
  textDecoration: "none",
  color: "texts.secondary",
  variant: "text.body.bold",
  p: 0,
};

const buttonDefault = {
  // ...hoverState.withLinkArrow,
  cursor: "pointer",
  textDecoration: "none",
  transition: "filter 0.2s ease",
  // needs to before the buttonDefault styles, so that no hover styles are applied to disabled buttons
  variant: "text.body.medium",
  fontSize: ["1.4rem", "1.5rem", "1.5rem", "1.6rem"],
  bg: "primary",
  color: "texts.secondary",
  p: "1.2rem 2.4rem",
  borderRadius: "4px",
  width: "max-content",
  whiteSpace: "nowrap",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  lineHeight: 1.35,

  textAlign: "center",
  ":disabled, &[disabled]": {
    pointerEvents: "none",
  },
};

const largeButton = {
  px: "2.4rem",
  py: "1.2rem",
  fontSize: ["1.4rem", "1.5rem", "1.5rem", "1.6rem"],
};

const mediumButton = {
  px: "2.2rem",
  py: "1rem",
  fontSize: ["1.4rem", "1.5rem", "1.5rem", "1.6rem"],
};

const smallButton = {
  px: "2rem",
  py: "0.8rem",
  fontSize: ["1.3rem", "1.4rem", "1.4rem", "1.4rem"],
};
const extraSmallButton = {
  px: "1.6rem",
  py: "1rem",
  fontSize: ["1.3rem", "1.3rem", "1.4rem", "1.4rem"],
};

const primaryButton = {
  bg: "buttons.primary",
  color: "texts.primary",
  ":hover": {
    bg: "buttons.primaryHovered",
    color: "buttons.primaryColorHovered",
  },
  transition: "box-shadow 0.2s ease",
  ":disabled, &[disabled]": {
    pointerEvents: "none",
    bg: "neutral.tundoraGray",
  },
};
const primaryLightButton = {
  bg: "buttons.primaryLight",
  color: "texts.secondary",
  ":hover": {
    bg: "buttons.primaryLightHovered",
  },
  transition: "box-shadow 0.2s ease",
};

const secondaryButton = {
  bg: "buttons.secondary",
  color: "texts.secondary",
  ":hover": {
    bg: [null, null, null, "buttons.secondaryHovered"],
  },
};

const tertiaryButton = {
  bg: "transparent",
  color: "texts.primary",
  border: "2px solid",
  borderColor: "texts.primary",

  "&:hover": {
    bg: "buttons.tertiaryBgHovered",
    color: "buttons.tertiaryColorHovered",
  },
};

const tertiaryInvertButton = {
  bg: "transparent",
  color: "texts.secondary",
  border: "2px solid",
  borderColor: "texts.secondary",
  "&:hover": {
    bg: [null, null, null, "buttons.tertiaryInvertBgHovered"],
  },
  // boxShadow: `inset 0px 0px 0px 2px ${colors.texts.secondary}` //? use box shadow to maintain the correct button size
};

const getTertiaryButtonStyle = (buttonSize: any, isInvert = false) => {
  const tertiaryButtonStyle = isInvert ? tertiaryInvertButton : tertiaryButton;

  return {
    ...buttonDefault,
    ...buttonSize,
    ...tertiaryButtonStyle,
    px: `calc(${buttonSize.px} - 2px)`,
    py: `calc(${buttonSize.py} - 2px)`,
  };
};

const buttons = {
  primary: {
    large: {
      ...buttonDefault,
      ...primaryButton,
      ...largeButton,
    },
    medium: {
      ...buttonDefault,
      ...mediumButton,
      ...primaryButton,
    },
    small: {
      ...buttonDefault,
      ...smallButton,
      ...primaryButton,
    },
    extraSmall: {
      ...buttonDefault,
      ...extraSmallButton,
      ...primaryButton,
    },
  },
  secondary: {
    large: {
      ...buttonDefault,
      ...secondaryButton,
      ...largeButton,
    },
    medium: {
      ...buttonDefault,
      ...mediumButton,
      ...secondaryButton,
    },
    small: {
      ...buttonDefault,
      ...smallButton,
      ...secondaryButton,
    },
  },
  tertiary: {
    large: getTertiaryButtonStyle(largeButton),
    medium: getTertiaryButtonStyle(mediumButton),
    small: getTertiaryButtonStyle(smallButton),
    extraSmall: getTertiaryButtonStyle(extraSmallButton),
  },
  tertiaryInvert: {
    large: getTertiaryButtonStyle(largeButton, true),
    medium: getTertiaryButtonStyle(mediumButton, true),
    small: getTertiaryButtonStyle(smallButton, true),
    extraSmall: getTertiaryButtonStyle(extraSmallButton, true),
  },
  primaryLight: {
    large: {
      ...buttonDefault,
      ...primaryLightButton,
      ...largeButton,
    },
    medium: {
      ...buttonDefault,
      ...mediumButton,
      ...primaryLightButton,
    },
    small: {
      ...buttonDefault,
      ...smallButton,
      ...primaryLightButton,
    },
    extraSmall: {
      ...buttonDefault,
      ...extraSmallButton,
      ...primaryLightButton,
    },
  },
  clear: {
    ...buttonDefault,
    p: 0,
    bg: "transparent",
    border: "none",
  },
};

const links = {
  primary: {
    large: {
      // ...largeButton,
      fontSize: ["1.4rem", "1.5rem", "1.4rem", "1.5rem"],
      ...linkDefault,
    },
    small: {
      ...smallButton,
      ...linkDefault,
    },
  },
  footer: {
    ...linkDefault,
    color: "texts.primary",
    variant: "text.body.normal",
    lineHeight: 1.25,
    fontSize: ["1.4rem", "1.5rem", "1.5rem", "1.5rem"],
    "&:disabled, &[disabled]": {
      pointerEvents: "none",
    },
    ...hoverState.opacityChange,
  },
  navigationLink: {
    ...linkDefault,
    variant: "text.body.normal",
    lineHeight: 1,
    fontSize: [null, null, "1.5rem", "1.5rem"],
    p: 0,
    bg: "transparent",
    color: "texts.primary",
    display: "flex",
    alignItems: "center",
    ...hoverState.opacityChange,
  },
  mobileMainNavigationLink: {
    ...linkDefault,
    variant: "text.body-150-medium",
    lineHeight: 1.5,
    fontSize: ["1.6rem", "1.6rem", null, null],
    py: ["1.2rem", "1.2rem", null, null],
    bg: "neutral.beigeDark",
    color: "texts.secondary",
    textAlign: "left",
    px: ["phonePageMargin", "tabletPortraitPageMargin", "unset", "unset"],
    borderBottom: "mobileMainNavigationLink",
    borderColor: "neutral.beigeDarkest",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  clear: {
    ...linkDefault,
    p: 0,
    bg: "transparent",
  },
  clearCardContainArrow: {
    variant: "links.clear",
    ":hover": {
      ...hoverState.withLinkArrow[":hover"],
      boxShadow: [null, null, null, "0px 1px 30px 0px rgba(0,0,0, 0.1)"],
    },
    transition: "box-shadow 0.5s ease",
  },
};

// TODO: CLEAN UP ALL THE SECTION BACKGROUND TO TAKE THE SIZE FROM CARDS VARIANT
const cards = {
  sectionBackground: {
    extraSmall: {
      width: [
        "phoneSectionBackground",
        "tabletPortraitSectionBackgroundV2",
        "100%",
        "100%",
      ],
      gridColumn: ["1/13", "1/25", "1/25", "2/ span 22"],
    },
    small: {
      width: [
        "phoneSectionBackground",
        "tabletPortraitSectionBackgroundV2",
        "tabletLandscapeSectionBackgroundV2",
        "100%",
      ],
      gridColumn: ["1/13", "1/25", "1/25", "1/25"],
    },
    large: {
      width: [
        "phoneSectionBackground",
        "tabletPortraitSectionBackground",
        "tabletLandscapeSectionBackground",
        "desktopSectionBackground",
      ],
      gridColumn: ["1/13", "1/25", "1/25", "1/25"],
    },
  },
};

export { links, buttons, cards };
