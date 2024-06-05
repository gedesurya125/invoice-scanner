export const text = {
  default: {
    //? fix the font looks different with figma https://forum.figma.com/t/font-in-browser-seem-bolder-than-in-the-figma/24656/4
    // for safari and chrome
    "-webkit-font-smoothing": "antialiased",
    //for firefox
    "-moz-osx-font-smoothing": "grayscale",
    //other
    fontSmooth: "never",
    fontWeight: "normal",
    fontStyle: "normal",
    "& *": {
      fontStyle: "normal",
      fontWeight: "normal",
    },
    // this means if the word is too long on any breakpoint it will break
    overflowWrap: "anywhere",
  },

  // HEADING FONTS
  heading: {
    normal: {
      variant: "text.default",
      fontFamily: "primary.normal",
      fontFeatureSettings: `'ss02' on, 'ss03' on, 'ss01' on, 'salt' on`,
    },
    italic: {
      variant: "text.default",
      fontFamily: "primary.italic",
      fontFeatureSettings: '"ss01" 0 ,"ss03" on',
    },
    bold: {
      variant: "text.default",
      fontFamily: "primary.bold",
      fontFeatureSettings: '"ss01" on, "ss03" on',
    },
    boldItalic: {
      variant: "text.default",
      fontFamily: "primary.boldItalic",
      fontFeatureSettings: `'ss02' on, 'ss03' on, 'ss01' on, 'salt' on`,
    },
  },

  "primary-mixed": {
    variant: "text.heading.normal",
    "& i, & em": {
      variant: "text.heading.boldItalic",
    },
    "& strong": {
      variant: "text.heading.bold",
    },
  },

  "primary-135-normal": {
    variant: "text.heading.normal",
    lineHeight: 1.35,
  },
  "primary-150-normal": {
    variant: "text.heading.normal",
    lineHeight: 1.5,
  },
  "primary-120-bold": {
    variant: "text.heading.bold",
    lineHeight: 1.2,
  },
  "primary-150-mixed": {
    variant: "text.primary-mixed",
    lineHeight: 1.5,
  },
  "primary-135-bold": {
    variant: "text.heading.bold",
    lineHeight: 1.35,
  },
  "primary-135-mixed": {
    variant: "text.primary-mixed",
    lineHeight: 1.35,
  },

  "primary-125-mixed": {
    variant: "text.primary-mixed",
    lineHeight: 1.25,
  },
  "primary-120-mixed": {
    variant: "text.primary-mixed",
    lineHeight: 1.2,
  },
  "primary-115-mixed": {
    variant: "text.primary-mixed",
    lineHeight: 1.15,
  },

  // BODY FONTS
  body: {
    normal: {
      variant: "text.default",
      fontFamily: "body.normal",
    },
    medium: {
      variant: "text.default",
      fontFamily: "body.medium",
    },
    bold: {
      variant: "text.default",
      fontFamily: "body.bold",
    },
  },
  "body-mixed": {
    variant: "text.body.normal",
    "& strong": {
      variant: "text.body.bold",
    },
  },

  "body-100-normal": {
    variant: "text.body.normal",
    lineHeight: 1,
  },
  "body-100-bold": {
    variant: "text.body.bold",
    lineHeight: 1,
  },
  "body-115-bold": {
    variant: "text.body.bold",
    lineHeight: 1.15,
  },
  "body-115-normal": {
    variant: "text.body.normal",
    lineHeight: 1.15,
  },
  "body-125-normal": {
    variant: "text.body.normal",
    lineHeight: 1.25,
  },
  "body-125-medium": {
    variant: "text.body.medium",
    lineHeight: 1.25,
  },
  "body-135-normal": {
    variant: "text.body.normal",
    lineHeight: 1.35,
  },
  "body-125-bold": {
    variant: "text.body.bold",
    lineHeight: 1.25,
  },
  "body-135-mixed": {
    variant: "text.body-mixed",
    lineHeight: 1.35,
  },
  "body-135-bold": {
    variant: "text.body.bold",
    lineHeight: 1.35,
  },
  "body-150-normal": {
    variant: "text.body.normal",
    lineHeight: 1.5,
  },
  "body-150-bold": {
    variant: "text.body.bold",
    lineHeight: 1.5,
  },
  "body-150-medium": {
    variant: "text.body.medium",
    lineHeight: 1.5,
  },
  "body-150-mixed": {
    variant: "text.body.normal",
    lineHeight: 1.5,
    "& em": {
      fontStyle: "italic",
    },
    "& strong": {
      variant: "text.body.bold",
    },
  },
  "body-160-mixed": {
    variant: "text.body.normal",
    lineHeight: 1.6,
    "& em": {
      fontStyle: "italic",
    },
  },

  // EXTRA FONTS
  extra: {
    normal: {
      variant: "text.default",
      fontFamily: "extra.normal",
    },
  },

  // COMPONENT FONTS
  lead: {
    variant: "text.default",
    fontFamily: "body.medium",
  },
  caption: {
    variant: "text.default",
    fontFamily: "body.bold",
    textTransform: "uppercase",
    fontSize: ["1.2rem", null, null, "1.2rem"],
  },
  quoteAuthor: {
    variant: "text.body.medium",
    fontSize: ["1.4rem", "1.4rem", "1.4rem", "1.5rem"],
    lineHeight: 1.45,
    color: "texts.tertiary",
    mt: ["2.4rem", "2.4rem", "4.8rem", "4.8rem"],
  },
};
