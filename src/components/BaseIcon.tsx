import React from 'react';
import { TextStyle } from 'react-native';
import BaseMatComIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import BaseMaterialIcon from 'react-native-vector-icons/MaterialIcons';
import styled, { useTheme } from 'styled-components/native';
import { IconSize, getIconSize } from '../theme';
import { dimensions } from '../theme/theme';
import { AnyReturnCallback } from '../types';
type Spacing = {
  $padding?: string;
  $margin?: string;
};

const MatComIcon = styled(BaseMatComIcon)<Spacing>`
  ${({ $margin }) => ($margin ? `margin: ${$margin};` : ``)}
  padding: ${({ $padding }) => ($padding ? `${$padding};` : `${6}px`)};
`;

const MaterialIcon = styled(BaseMaterialIcon)<Spacing>`
  ${({ $margin }) => ($margin ? `margin: ${$margin};` : ``)}
  padding: ${({ $padding }) => ($padding ? `${$padding};` : `${6}px`)};
`;

type Props = {
  animatedProps?: Partial<{
    fontSize?: number;
    opacity?: number;
  }>;
  name: string;
  size?: IconSize | number;
  color?: string;
  onPress?: AnyReturnCallback;
  disabled?: boolean;
  icoLibrary?: 'material' | 'material-community';
  margin?: string;
  padding?: string;
  style?: TextStyle;
};

const BaseIcon = ({
  animatedProps,
  name,
  color,
  size: _size = dimensions.iconSmall,
  disabled = false,
  icoLibrary = 'material-community',
  margin,
  padding,
  style,
  ...rest
}: Props) => {
  const { colors } = useTheme();
  const size = typeof _size === 'number' ? _size : getIconSize(_size);

  const iconColor = disabled
    ? colors.textDisabled
    : color
    ? color
    : colors.textSecondary;

  const matComIcon = (
    <MatComIcon
      name={name}
      size={size}
      color={iconColor}
      $padding={padding}
      $margin={margin}
      // @ts-ignore
      style={style}
      {...rest}
    />
  );

  const materialIcon = (
    <MaterialIcon
      name={name}
      size={size}
      color={iconColor}
      $padding={padding}
      $margin={margin}
      // @ts-ignore
      style={style}
      {...rest}
    />
  );

  return icoLibrary === 'material-community' ? matComIcon : materialIcon;
};

export type { Props as BaseIconProps };

export { BaseIcon };
