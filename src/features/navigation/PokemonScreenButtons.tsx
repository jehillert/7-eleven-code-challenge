import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components/native';
import { BaseIcon } from '../../components';
import { PokemonScreenProps } from './navigationTypes';

const PokemonScreenButtons = (props: PokemonScreenProps) => {
  const { colors } = useTheme();
  const handlePressCart = () => {};

  return (
    <TouchableOpacity onPress={handlePressCart}>
      <BaseIcon name="cart-outline" color={colors.text} size="medium" />
    </TouchableOpacity>
  );
};

const curriedPokemonScreenButtons = (props: PokemonScreenProps) => () =>
  <PokemonScreenButtons {...props} />;

export { PokemonScreenButtons, curriedPokemonScreenButtons };
