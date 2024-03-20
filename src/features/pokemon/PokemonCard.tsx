import React from 'react';
import styled from 'styled-components/native';
import { Incrementer } from '../../components';
import { selectPokemonById, useAppSelector } from '../../store';

const GridItemView = styled.View`
  width: ${({ theme }) => (theme.dimensions.screenWidth - 32) / 3}px;
  align-items: center;
  padding: 8px 0px 16px 0px;
  background-color: ${({ theme }) => theme.colors.background2};
  border-radius: ${({ theme }) => theme.rad(4)}px;
  ${({ theme }) => theme.shadow[0]};
`;

const Placeholder = styled.View`
  height: 70px;
  width: ${({ theme }) => (theme.dimensions.screenWidth - 32) / 3}px;
  height: 1px;
`;

const PokemonIcon = styled.Image`
  height: 70px;
  width: 70px;
`;

const PokemonNameText = styled.Text`
  ${({ theme }) => theme.typography.titleSmall}
  margin-bottom: 10px;
  font-style: italic;
`;

type Props = {
  pokemonId: string;
};

const PokemonCard = ({ pokemonId }: Props) => {
  const { name, imageUrl } = useAppSelector(selectPokemonById(pokemonId));

  return (
    <GridItemView>
      <PokemonIcon
        source={{ uri: imageUrl }}
        onError={err => console.log(err)}
      />

      <PokemonNameText>{name}</PokemonNameText>
      <Incrementer
        id={pokemonId}
        countPosition="middle"
        invertButtons
        size="small"
      />
    </GridItemView>
  );
};

export { Placeholder, PokemonCard };
