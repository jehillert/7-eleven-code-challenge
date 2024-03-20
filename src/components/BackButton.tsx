import { useRoute } from '@react-navigation/native';
import { HeaderBackButtonProps } from '@react-navigation/native-stack/lib/typescript/src/types';
import React from 'react';
import { ColorValue, PressableProps, StyleProp, ViewStyle } from 'react-native';
import { styled, useTheme } from 'styled-components/native';
import { toTitleCase } from '../utils';
import BaseIcon from './BaseIcon';

const HeaderContainer = styled.View`
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
`;

const HeaderTitle = styled.Text`
  flex: 1;
  margin-left: ${-2}px;
  ${({ theme }) => theme.typography.titleMedium}
`;

const OffsetPressable = styled.Pressable`
  flex-direction: row;
  align-items: center;
  margin-left: -8px;
`;

type BackButtonProps = {
  color?: ColorValue;
  onPress?: (() => void) | (() => Promise<void>);
  isFab?: boolean;
  size?: number;
  title?: string;
  style?: StyleProp<ViewStyle>;
};

type Props = BackButtonProps & PressableProps & Partial<HeaderBackButtonProps>;

const BackButton = ({
  color,
  isFab = false,
  onPress,
  style,
  title,
  ...rest
}: Props) => {
  const bbIconName = 'chevron-left';
  const { colors, dimensions } = useTheme();
  const { name: currentScreen } = useRoute();
  const titleTxt =
    title !== undefined
      ? title
      : currentScreen
      ? toTitleCase(currentScreen)
      : '';
  const showTitle = !!title || !!currentScreen;

  const handlePress = () => {};

  return (
    <HeaderContainer>
      <OffsetPressable
        hitSlop={15}
        style={style}
        onPress={handlePress}
        {...rest}>
        <BaseIcon
          name={bbIconName}
          size={dimensions.iconLarge}
          color={color ? (color as string) : colors.onPrimary}
          padding="0px"
        />
        {showTitle && (
          <HeaderTitle ellipsizeMode="tail" numberOfLines={1}>
            {titleTxt}
          </HeaderTitle>
        )}
      </OffsetPressable>
    </HeaderContainer>
  );
};

const backButton = (props: Props) => () => <BackButton {...props} />;

export { BackButton, backButton };
