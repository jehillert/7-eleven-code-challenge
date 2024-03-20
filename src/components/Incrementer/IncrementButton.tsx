import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components/native';
import { BaseIcon } from '..';
import { decrementCart, incrementCart, useAppDispatch } from '../../store';
import { IconSize } from '../../theme';

type Props = {
  id: string;
  variant: '+' | '-';
  size?: IconSize;
};

const IncrementButton = ({ id, variant, size }: Props) => {
  const { colors } = useTheme();
  const dispatch = useAppDispatch();
  const handlePress = () =>
    dispatch(variant === '+' ? incrementCart(id) : decrementCart(id));

  return (
    <TouchableOpacity onPress={handlePress}>
      {variant === '+' ? (
        <BaseIcon
          name="plus-box"
          color={colors.incrementButton}
          padding="0px"
          size={size}
        />
      ) : (
        <BaseIcon
          name="minus-box"
          color={colors.incrementButton}
          padding="0px"
          size={size}
        />
      )}
    </TouchableOpacity>
  );
};

export { IncrementButton };
