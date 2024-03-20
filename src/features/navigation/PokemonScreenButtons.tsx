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
  const handlePressCart = () => navigation.navigate('Checkout');
  const handlePressTheme = () => dispatch(toggleTheme());
  const cartIds = useAppSelector(selectCartIds);
  const cartDisabled = !cartIds.length;

  return (
    <ButtonView>
      <TouchableOpacity onPress={handlePressTheme}>
        <BaseIcon name="brightness-6" color={colors.text} size="medium" />
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePressCart} disabled={cartDisabled}>
        <BaseIcon
          name="cart-outline"
          color={cartDisabled ? colors.textDisabled : colors.accent}
          size="medium"
        />
      </TouchableOpacity>
    </ButtonView>
  );
};

const curriedPokemonScreenButtons = (props: PokemonScreenProps) => () =>
  <PokemonScreenButtons {...props} />;

export { PokemonScreenButtons, curriedPokemonScreenButtons };
