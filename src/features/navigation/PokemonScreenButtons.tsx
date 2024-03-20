import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled, { useTheme } from 'styled-components/native';
import { BaseIcon } from '../../components';
import { toggleTheme, useAppDispatch } from '../../store';
import { PokemonScreenProps } from './navigationTypes';

const ButtonView = styled.View`
  flex-direction: row;
  flex-wrap: nowrap;
  margin-right: -4px;
`;

const PokemonScreenButtons = ({ navigation }: PokemonScreenProps) => {
  const { colors } = useTheme();
  const dispatch = useAppDispatch();
  const handlePressCart = () => navigation.navigate('Cart');
  const handlePressTheme = () => dispatch(toggleTheme());

  return (
    <ButtonView>
      <TouchableOpacity onPress={handlePressTheme}>
        <BaseIcon name="circle-half-full" color={colors.text} size="medium" />
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePressCart}>
        <BaseIcon name="cart-outline" color={colors.text} size="medium" />
      </TouchableOpacity>
    </ButtonView>
  );
};

const curriedPokemonScreenButtons = (props: PokemonScreenProps) => () =>
  <PokemonScreenButtons {...props} />;

export { PokemonScreenButtons, curriedPokemonScreenButtons };
