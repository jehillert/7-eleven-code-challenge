import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled, { useTheme } from 'styled-components/native';
import {
  decrementCart,
  incrementCart,
  selectPokemonById,
  useAppDispatch,
  useAppSelector,
} from '../store';
import { BaseIcon } from './BaseIcon';

const ButtonGroupView = styled.View`
  flex-direction: row;
  top: 0px;
  right: 0px;
  column-gap: 8px;
  margin: 2px;
`;

const CountContainer = styled.View``;

const CountText = styled.Text`
  ${({ theme }) => theme.absoluteFill};
  ${({ theme }) => theme.typography.badge};
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
`;

type IBProps = {
  id: string;
  variant: '+' | '-';
};

type IProps = {
  id: string;
  position: 'beginning' | 'middle' | 'end';
};

const IncrementButton = ({ id, variant }: IBProps) => {
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
        />
      ) : (
        <BaseIcon
          name="minus-box"
          color={colors.incrementButton}
          padding="0px"
        />
      )}
    </TouchableOpacity>
  );
};

const Incrementer = ({ id, position = 'middle' }: IProps) => {
  const { colors } = useTheme();
  const pokemon = useAppSelector(selectPokemonById(id));
  const { cartCount } = pokemon;
  const CountBox = (
    <CountContainer>
      <BaseIcon name="checkbox-blank" color={colors.white} padding="0px" />
      <CountText>{cartCount}</CountText>
    </CountContainer>
  );

  return (
    <ButtonGroupView>
      {position === 'beginning' && CountBox}
      <IncrementButton id={id} variant="+" />
      {position === 'middle' && CountBox}
      <IncrementButton id={id} variant="-" />
      {position === 'end' && CountBox}
    </ButtonGroupView>
  );
};

export { IncrementButton, Incrementer };
