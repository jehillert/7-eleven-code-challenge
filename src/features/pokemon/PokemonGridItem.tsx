import React from 'react';
import styled from 'styled-components/native';
import { Incrementer } from '../../components';
import { selectPokemonById, useAppSelector } from '../../store';

const GridItemView = styled.View`
  row-gap: 8px;
  width: ${({ theme }) => (theme.dimensions.screenWidth - 32) / 3}px;
  align-items: center;
  padding: 16px 0px;
  background-color: ${({ theme }) => theme.colors.gridItemBackground};
  ${({ theme }) => theme.shadow[0]};
`;

const PokemonIcon = styled.Image`
  height: 50px;
  width: 50px;
`;

const PokemonNameText = styled.Text`
  ${({ theme }) => theme.typography.titleSmall}
`;

type Props = {
  pokemonId: string;
};

const PokemonGridItem = ({ pokemonId }: Props) => {
  const { name, imageUrl } = useAppSelector(selectPokemonById(pokemonId));

  return (
    <GridItemView>
      <PokemonIcon
        source={{ uri: imageUrl }}
        onError={err => console.log(err)}
      />
      <PokemonNameText>{name}</PokemonNameText>
      <Incrementer id={pokemonId} position="middle" />
    </GridItemView>
  );
};

export default PokemonGridItem;