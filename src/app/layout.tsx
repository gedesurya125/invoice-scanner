import type { Metadata } from 'next';
import './globals.css';
import { NextThemeUiProvider } from 'theme/components';

import localFont from 'next/font/local';

const font_abc_arizona_mix_bold = localFont({
  src: '../theme/fonts/raw/ABCArizonaMix-Bold.woff',
  display: 'swap',
  variable: '--abc_arizona_mix_bold',
  fallback: ['serif']
});
const font_abc_arizona_mix_bold_italic = localFont({
  src: '../theme/fonts/raw/ABCArizonaMix-BoldItalic.woff',
  display: 'swap',
  variable: '--abc_arizona_mix_bold_italic',
  fallback: ['serif']
});
const font_abc_arizona_mix_light_italic = localFont({
  src: '../theme/fonts/raw/ABCArizonaMix-LightItalic.woff',
  display: 'swap',
  variable: '--abc_arizona_mix_light_italic',
  fallback: ['serif']
});

const font_abc_arizona_mix_regular = localFont({
  src: '../theme/fonts/raw/ABCArizonaMix-Regular.woff',
  display: 'swap',
  variable: '--abc_arizona_mix_regular',
  fallback: ['serif']
});

const font_abc_arizona_sans_bold = localFont({
  src: '../theme/fonts/raw/ABCArizonaSans-Bold.woff',
  display: 'swap',
  variable: '--abc_arizona_sans_bold',
  fallback: ['sans-serif']
});
const font_abc_arizona_sans_medium = localFont({
  src: '../theme/fonts/raw/ABCArizonaSans-Medium.woff',
  display: 'swap',
  variable: '--abc_arizona_sans_medium',
  fallback: ['sans-serif']
});
const font_abc_arizona_sans_regular = localFont({
  src: '../theme/fonts/raw/ABCArizonaSans-Regular.woff',
  display: 'swap',
  variable: '--abc_arizona_sans_regular',
  fallback: ['sans-serif']
});
const font_hvdedding780_normal = localFont({
  src: '../theme/fonts/raw/HVD_Edding.otf',
  display: 'swap',
  variable: '--hvdedding780-normal',
  fallback: ['sans-serif']
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${font_abc_arizona_mix_bold.variable} 
          ${font_abc_arizona_mix_bold_italic.variable} 
          ${font_abc_arizona_mix_light_italic.variable}
          ${font_abc_arizona_mix_regular.variable}
          ${font_abc_arizona_sans_bold.variable}
          ${font_abc_arizona_sans_medium.variable}
          ${font_abc_arizona_sans_regular.variable}
          ${font_hvdedding780_normal.variable}
        `}>
        <NextThemeUiProvider>{children}</NextThemeUiProvider>
      </body>
    </html>
  );
}
