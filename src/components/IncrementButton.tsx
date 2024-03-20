import React from 'react';
import styled, { useTheme } from 'styled-components/native';
import { decrementCart, incrementCart, useAppDispatch } from '../store';
import { pressableColorCallback } from '../utils';

const ButtonGroupView = styled.View`
  flex-direction: row;
  top: 0px;
  right: 0px;
  column-gap: 8px;
  margin: 2px;
`;

const ButtonPressable = styled.Pressable`
  align-items: center;
  justify-content: center;
  width: 20px;
  aspect-ratio: 1;
`;

const PlusMinusText = styled.Text`
  ${({ theme }) => theme.typography.titleMedium};
  line-height: 18px;
  text-align: center;
`;

type IBProps = {
  id: string;
  variant: '+' | '-';
};

type IProps = {
  id: string;
  quantityBoxPosition: 'beginning' | 'middle' | 'end';
};

const IncrementButton = ({ id, variant }: IBProps) => {
  const { colors } = useTheme();
  const dispatch = useAppDispatch();
  const handlePress = () =>
    dispatch(variant === '+' ? incrementCart(id) : decrementCart(id));

  return (
    <ButtonPressable
      onPress={handlePress}
      style={pressableColorCallback('transparent', colors.incrementButton)}>
      <PlusMinusText>{variant}</PlusMinusText>
    </ButtonPressable>
  );
};

const Incrementer = ({ id, quantityBoxPosition = 'middle' }: IProps) => {
  return (
    <ButtonGroupView>
      <IncrementButton id={id} variant="+" />
      <IncrementButton id={id} variant="-" />
    </ButtonGroupView>
  );
};

export { IncrementButton };
