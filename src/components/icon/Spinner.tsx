import React from 'react';
import { Box } from 'theme/components';
import { Box as ThemeUiBox } from 'theme/components/themeUiComponent';
interface IconProps extends React.ComponentProps<typeof ThemeUiBox> {}

export const SpinnerCustom = ({ sx, ...props }: IconProps) => {
  return (
    <Box
      as="svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      sx={{
        width: '3rem',
        ...sx
      }}
      {...props}>
      <path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z">
        <animateTransform
          attributeName="transform"
          begin="0s"
          dur="10s"
          type="rotate"
          from="0 85 85"
          to="360 85 85"
          repeatCount="indefinite"
        />
      </path>
    </Box>
  );
};
