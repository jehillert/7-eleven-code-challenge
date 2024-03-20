import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { selectPokemon, useAppSelector } from '../../store';
import { Placeholder, PokemonCard } from './PokemonCard';

const GridContainer = styled.View`
  justify-content: center;
  flex-direction: row;
  gap: 8px;
  flex-wrap: wrap;
  width: ${({ theme }) => theme.dimensions.screenWidth}px;
  flex: 1;
  padding: 8px 0px;
`;

const PokemonScreen = () => {
  const pokemon = useAppSelector(selectPokemon);
  const gridContent = pokemon.map(({ id }) => (
    <PokemonCard key={id} pokemonId={id} />
  ));
  const remainder = pokemon.length % 3;
  const placeholderCount = remainder === 0 ? 0 : 3 - (pokemon.length % 3);

  const placeholders = Array(placeholderCount)
    .fill(null)
    .map((_, index) => <Placeholder key={`placeholder-${index}`} />);

  return (
    <ScrollView style={{ flex: 1 }}>
      <GridContainer>{[...gridContent, ...placeholders]}</GridContainer>
    </ScrollView>
  );
};

export default PokemonScreen;
