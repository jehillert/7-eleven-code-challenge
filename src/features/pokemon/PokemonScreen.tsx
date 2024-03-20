import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { selectPokemon, useAppSelector } from '../../store';
import { AppScreenProp } from '../navigation/navigationTypes';
import PokemonCard from './PokemonCard';

const GridContainer = styled.View`
  justify-content: center;
  flex-direction: row;
  gap: 8px;
  flex-wrap: wrap;
  width: ${({ theme }) => theme.dimensions.screenWidth}px;
  flex: 1;
  padding: 8px 0px;
`;

const PokemonScreen = (props: AppScreenProp) => {
  const pokemon = useAppSelector(selectPokemon);
  const gridContent = pokemon.map(({ id }) => (
    <PokemonCard key={id} pokemonId={id} />
  ));

  return (
    <ScrollView style={{ flex: 1 }}>
      <GridContainer>{gridContent}</GridContainer>
    </ScrollView>
  );
};

export default PokemonScreen;
