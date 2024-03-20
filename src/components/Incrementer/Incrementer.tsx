import React from 'react';
import styled, { useTheme } from 'styled-components/native';
import { BaseIcon } from '..';
import { selectPokemonById, useAppSelector } from '../../store';
import { IconSize } from '../../theme';
import { IncrementButton } from './IncrementButton';

const ButtonGroupView = styled.View`
  flex-direction: row;
  top: 0px;
  right: 0px;
  column-gap: 8px;
  margin: 2px;
`;

const CountContainer = styled.View``;

const CountText = styled.Text`
  ${({ theme }) => theme.absoluteFill};
  ${({ theme }) => theme.typography.badge};
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
`;

type IProps = {
  id: string;
  position: 'beginning' | 'middle' | 'end';
  size?: IconSize;
};

const Incrementer = ({ id, position = 'middle', size }: IProps) => {
  const { colors } = useTheme();
  const pokemon = useAppSelector(selectPokemonById(id));
  const { cartCount } = pokemon;
  const CountBox = (
    <CountContainer>
      <BaseIcon name="checkbox-blank" color={colors.white} padding="0px" />
      <CountText>{cartCount}</CountText>
    </CountContainer>
  );

  return (
    <ButtonGroupView>
      {position === 'beginning' && CountBox}
      <IncrementButton id={id} variant="+" />
      {position === 'middle' && CountBox}
      <IncrementButton id={id} variant="-" />
      {position === 'end' && CountBox}
    </ButtonGroupView>
  );
};

export { Incrementer };
