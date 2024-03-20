import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled, { useTheme } from 'styled-components/native';
import { BaseIcon, Incrementer } from '../../components';
import {
  removeFromCart,
  selectPokemonById,
  useAppDispatch,
  useAppSelector,
} from '../../store';
import { IconSize, getIconSize } from '../../theme';

const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 16px 0px;
  background-color: ${({ theme }) => theme.colors.gridItemBackground};
  ${({ theme }) => theme.shadow[0]};
`;

const LeftColumn = styled.View`
  flex-direction: row;
  column-gap: 8px;
`;

const PokemonIcon = styled.Image<{ size: number }>`
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
`;

const PokemonNameText = styled.Text`
  ${({ theme }) => theme.typography.titleSmall}
`;

type Props = {
  iconSize?: IconSize;
  pokemonId: string;
};

const CartRow = ({ pokemonId, iconSize = 'medium-small' }: Props) => {
  const dispatch = useAppDispatch();
  const size = getIconSize(iconSize);
  const { name, imageUrl } = useAppSelector(selectPokemonById(pokemonId));
  const { colors } = useTheme();

  const handlePressTrash = () => dispatch(removeFromCart(pokemonId));

  return (
    <Row>
      <LeftColumn>
        <PokemonIcon
          size={size}
          source={{ uri: imageUrl }}
          onError={err => console.log(err)}
        />
        <PokemonNameText>{name}</PokemonNameText>
      </LeftColumn>
      <Incrementer id={pokemonId} position="beginning" />
      <TouchableOpacity onPress={handlePressTrash}>
        <BaseIcon name="trash-can" color={colors.text} size="medium-small" />
      </TouchableOpacity>
    </Row>
  );
};

export default CartRow;
