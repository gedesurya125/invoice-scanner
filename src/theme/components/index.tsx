'use client';
import React from 'react';

import theme from 'theme';
import { ThemeUIProvider } from 'theme-ui';

export { Themed } from '@theme-ui/mdx';

const ColorMode = React.createContext(null);

export const useColorMode = () => React.useContext(ColorMode);

export {
  Section,
  Heading,
  Paragraph,
  Box,
  Button,
  Link,
  GridItem,
  Overlay, // ! Don't use the overlay from the library because it has bugs, use the Overlay from the src/components instead
  Input,
  Label,
  Image,
  ResponsiveImage,
  GridWrapper,
  fullWidthMinusMargins
  // @ts-ignore
} from '@thepuzzlers/pieces';

export { Select, Textarea, Radio, Checkbox, Slider, Spinner } from 'theme-ui';

export const NextThemeUiProvider = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return <ThemeUIProvider theme={theme as any}>{children}</ThemeUIProvider>;
};
