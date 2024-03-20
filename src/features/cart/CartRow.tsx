import React from 'react';
import styled from 'styled-components/native';
import { Incrementer } from '../../components';
import { selectPokemonById, useAppSelector } from '../../store';
import { toTitleCase } from '../../utils';

const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.background2};
  ${({ theme }) => theme.shadow[0]};
`;

const LeftSide = styled.View`
  align-items: center;
  flex-direction: row;
  column-gap: 8px;
`;

const RightSide = styled.View``;

const TextColumn = styled.View`
  row-gap: 6px;
  padding-vertical: 8px;
`;

const PokemonIcon = styled.Image<{ size: number }>`
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  margin-horizontal: 8px;
`;

const PokemonNameText = styled.Text`
  ${({ theme }) => theme.typography.titleSmall}
`;

const PokemonCostText = styled.Text`
  ${({ theme }) => theme.typography.bodySmall}
`;

type Props = {
  pokemonId: string;
};

const CartRow = ({ pokemonId }: Props) => {
  const iconSize = 'medium-small';
  const pokemonSize = 70;
  const { name, imageUrl, cartCount, weight } = useAppSelector(
    selectPokemonById(pokemonId),
  );

  // fix minor issue
  const subTotal = `${cartCount} x $${weight ?? 'n/a'}`;

  return (
    <Row>
      <LeftSide>
        <PokemonIcon
          size={pokemonSize}
          source={{ uri: imageUrl }}
          onError={err => console.log(err)}
        />
        <TextColumn>
          <PokemonNameText>{toTitleCase(name)}</PokemonNameText>
          <PokemonCostText>{subTotal}</PokemonCostText>
        </TextColumn>
      </LeftSide>
      <RightSide>
        <Incrementer
          id={pokemonId}
          countPosition="beginning"
          size={iconSize}
          showDelete
          incButtonMargin="-5px"
        />
      </RightSide>
    </Row>
  );
};

export default CartRow;
