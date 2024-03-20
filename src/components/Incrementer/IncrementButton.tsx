import React from 'react';
import styled, { useTheme } from 'styled-components/native';
import { BaseIcon } from '..';
import { decrementCart, incrementCart, useAppDispatch } from '../../store';
import { IconSize, getIconSize } from '../../theme';

const TouchableContainer = styled.TouchableOpacity<{ size: number }>`
  align-items: center;
  justify-content: center;
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  background-color: ${({ theme }) => theme.colors.buttonBackground};
  border-radius: ${({ size }) => size / 4.5}px;
`;

type Props = {
  id: string;
  variant: '+' | '-';
  size?: IconSize;
  margin?: string;
};

const IncrementButton = ({ id, margin, variant, size }: Props) => {
  const { colors } = useTheme();
  const dispatch = useAppDispatch();
  const iconSize = getIconSize(size);
  const handlePress = () =>
    dispatch(variant === '+' ? incrementCart(id) : decrementCart(id));

  return (
    <TouchableContainer onPress={handlePress} size={iconSize} hitSlop={3}>
      {variant === '+' ? (
        <BaseIcon
          name="plus"
          color={colors.background1}
          padding="0px"
          size={size}
          margin={margin}
        />
      ) : (
        <BaseIcon
          name="minus"
          color={colors.background1}
          padding="0px"
          size={size}
          margin={margin}
        />
      )}
    </TouchableContainer>
  );
};

export { IncrementButton };
