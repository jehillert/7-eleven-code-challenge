import React from 'react';
import styled from 'styled-components/native';
import { Incrementer } from '../../components';
import { selectPokemonById, useAppSelector } from '../../store';
import { getIconSize } from '../../theme';
import { toTitleCase } from '../../utils';

const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.background2};
  ${({ theme }) => theme.shadow[0]};
`;

const LeftColumn = styled.View`
  align-items: center;
  flex-direction: row;
  column-gap: 8px;
`;

const PokemonIcon = styled.Image<{ size: number }>`
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  margin-horizontal: 8px;
`;

const PokemonNameText = styled.Text`
  ${({ theme }) => theme.typography.titleSmall}
`;

type Props = {
  pokemonId: string;
};

const CartRow = ({ pokemonId }: Props) => {
  const iconSize = 'medium-small';
  const pokemonIconSize = getIconSize('large');
  const { name, imageUrl } = useAppSelector(selectPokemonById(pokemonId));

  return (
    <Row>
      <LeftColumn>
        <PokemonIcon
          size={pokemonIconSize}
          source={{ uri: imageUrl }}
          onError={err => console.log(err)}
        />
        <PokemonNameText>{toTitleCase(name)}</PokemonNameText>
      </LeftColumn>
      <Incrementer
        id={pokemonId}
        countPosition="beginning"
        size={iconSize}
        showDelete
        incButtonMargin="-5px"
      />
    </Row>
  );
};

export default CartRow;
