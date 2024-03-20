import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { selectPokemon, useAppSelector } from '../store';
import PokemonGridItem from './PokemonGridItem';

const GridContainer = styled.View`
  justify-content: center;
  flex-direction: row;
  gap: 8px;
  flex-wrap: wrap;
  width: ${({ theme }) => theme.dimensions.screenWidth}px;
  flex: 1;
  padding: 8px 0px;
`;

type Props = {};

const PokemonGridView = ({}: Props) => {
  const pokemon = useAppSelector(selectPokemon);

  const gridContent = pokemon.map(({ id }) => (
    <PokemonGridItem key={id} pokemonId={id} />
  ));

  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <GridContainer>{gridContent}</GridContainer>
    </ScrollView>
  );
};

export default PokemonGridView;
