// No nesting! - colors declarations can only be one level deep
// No variables - you can't reference the colors by var name (e.g. 'primary') within this file

const neutral = {
  saltpanWhite: '#F2F8F5', // mint-cream
  tundoraGray: '#4B4848',
  codBlack: '#1E1E1E',
  mercuryGray: '#E7E6E6', //todo: remove, only used in one place
  white: '#FFFFFF',
  black: '#000000',
  beigeLight: '#FAFBFA',
  beige: '#F4F7F3',
  beigeDark: '#F1F2E8',
  beigeDarker: '#E6E7D9',
  beigeDarkest: '#C6C8A7',
  // New Colors:
  blackLighter: '#1E1E1E',

  tealLightest: '#E1FFFA',
  tealLighter: '#BEF8EE',
  teal: '#8DD7CA',
  tealDarker: '#6AB1A4',
  tealDarkest: '#4D8279',

  darkTeal: '#062F34',
  darkTealDarker: '#052326',

  yellowLightest: '#FFF6E1',
  yellowLighter: '#FFE4A2',
  yellow: '#F8CD66',
  yellowDarker: '#DDAF41',
  yellowDarkest: '#A88125',

  redLightest: '#FFCEC6',
  redLighter: '#FF8977',
  red: '#F7634D',
  redDarker: '#D24F3B',
  redDarkest: '#983A2C',

  lime: '#F6F8DA',
  limeDarker: '#E6F0D1',
  limeLighter: '#F8FBE5'
};

const brand = {
  tiber: neutral.darkTeal,
  tiberDark: neutral.darkTealDarker,
  deYorkGreen: '#6FC881',
  jordyBlue: '#94CDF5',
  goldenYellow: '#F1DE3B',
  parisGreen: '#D9E7DF',
  edgeWaterGreen: '#CBE1D7',
  gumLeafGreen: '#B4D0C0',
  springRainGreen: '#A6C7B3',
  burntRed: '#E8745D'
};

const illustration = {
  processDesigner: brand.jordyBlue,
  applicationDesigner: brand.deYorkGreen,
  dataDesigner: brand.goldenYellow,
  dark: neutral.black,
  green: brand.springRainGreen,
  light: neutral.saltpanWhite,
  red: brand.burntRed
};

const surfaces = {
  page: brand.tiber,
  darker: brand.tiberDark,
  // light: neutral.saltpanWhite,
  light: neutral.beige,
  cardPrimary: neutral.beige,
  cardSecondary: neutral.beigeDark,
  cardTertiary: neutral.beigeDarker
};

const texts = {
  primary: surfaces.light,
  secondary: neutral.black,
  tertiary: neutral.tundoraGray,
  // NEW
  secondaryDark: neutral.tundoraGray
};

const buttons = {
  primary: surfaces.darker,
  primaryColorHovered: surfaces.page,
  primaryHovered: neutral.yellow,
  secondary: surfaces.light,
  secondaryHovered: neutral.yellow,
  tertiaryBorder: surfaces.light,
  tertiaryColorHovered: surfaces.page,
  tertiaryBgHovered: neutral.yellow,
  tertiaryInvertBgHovered: neutral.yellow,
  // New colors
  primaryLight: neutral.yellow,
  primaryLightHovered: neutral.white
};

const icons = {
  light: neutral.saltpanWhite,
  dark: neutral.codBlack,
  processDesigner: brand.jordyBlue,
  applicationDesigner: brand.deYorkGreen,
  dataDesigner: brand.goldenYellow,
  primaryDark: neutral.codBlack
};

const base = {
  primary: texts.primary,
  secondary: texts.secondary,
  background: surfaces.page,
  backgroundDarker: neutral.darkTealDarker,
  text: texts.primary
};
const elements = {
  navigationLinks: buttons.secondary, // the default color for the background color of the button, or the text itself without bg
  navigationLinksInvert: buttons.primary, // the default color for the text color on the bg color elements.navigationLinks
  navigationButtonHovered: buttons.secondaryHovered,
  navigationButtonColorHovered: surfaces.page,
  navigationTertiaryButtonBgHovered: buttons.tertiaryBgHovered,
  navigationBackground: base.background,
  text: texts.primary,
  borderMobileMainNavigationLink: neutral.white
};

export const colors = {
  // defaults
  ...base,
  surfaces,
  texts,
  buttons,
  icons,
  neutral,
  elements,
  brand,
  illustration
};
