import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled, { useTheme } from 'styled-components/native';
import { BaseIcon } from '../../components';
import {
  selectCartIds,
  toggleTheme,
  useAppDispatch,
  useAppSelector,
} from '../../store';
import { PokemonScreenProps } from './navigationTypes';

const ButtonView = styled.View`
  flex-direction: row;
  flex-wrap: nowrap;
  margin-right: -4px;
`;

const PokemonScreenButtons = ({ navigation }: PokemonScreenProps) => {
  const { colors } = useTheme();
  const dispatch = useAppDispatch();
  const cartIds = useAppSelector(selectCartIds);
  const cartDisabled = !cartIds.length;

  const handlePressCart = () => navigation.navigate('Checkout');
  const handlePressTheme = () => dispatch(toggleTheme());
  const handleCreateError = () => {
    throw new Error('A test error.');
  };

  const errorButton = (
    <TouchableOpacity onPress={handleCreateError}>
      <BaseIcon name="alert-circle-outline" color={colors.text} size="medium" />
    </TouchableOpacity>
  );

  const themeToggleButton = (
    <TouchableOpacity onPress={handlePressTheme}>
      <BaseIcon name="brightness-6" color={colors.text} size="medium" />
    </TouchableOpacity>
  );

  const checkoutButton = (
    <TouchableOpacity onPress={handlePressCart} disabled={cartDisabled}>
      <BaseIcon
        name="cart-outline"
        color={cartDisabled ? colors.textDisabled : colors.accent}
        size="medium"
      />
    </TouchableOpacity>
  );

  return (
    <ButtonView>
      {errorButton}
      {themeToggleButton}
      {checkoutButton}
    </ButtonView>
  );
};

const curriedPokemonScreenButtons = (props: PokemonScreenProps) => () =>
  <PokemonScreenButtons {...props} />;

export { PokemonScreenButtons, curriedPokemonScreenButtons };
