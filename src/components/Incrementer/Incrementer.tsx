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

const TextContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

const CountText = styled.Text`
  position: absolute;
  left: 0px;
  right: 0px;
  ${({ theme }) => theme.typography.badge};
  color: ${({ theme }) => theme.colors.black};
  line-height: 12px;
  text-align: center;
`;

type Props = {
  id: string;
  countPosition: 'beginning' | 'middle' | 'end';
  invertButtons?: boolean;
  size?: IconSize;
};

const Incrementer = ({
  id,
  countPosition = 'middle',
  invertButtons = false,
  size,
}: Props) => {
  const { colors } = useTheme();
  const pokemon = useAppSelector(selectPokemonById(id));
  const { cartCount } = pokemon;
  const CountBox = (
    <CountContainer>
      <TextContainer>
        <BaseIcon
          name="checkbox-blank"
          color={colors.white}
          padding="0px"
          size={size}
        />
        <CountText>{cartCount}</CountText>
      </TextContainer>
    </CountContainer>
  );

  const plusButton = <IncrementButton id={id} variant="+" size={size} />;

  const minusButton = <IncrementButton id={id} variant="-" size={size} />;

  const Button1 = invertButtons ? minusButton : plusButton;

  const Button2 = invertButtons ? plusButton : minusButton;

  return (
    <ButtonGroupView>
      {countPosition === 'beginning' && CountBox}
      {Button1}
      {countPosition === 'middle' && CountBox}
      {Button2}
      {countPosition === 'end' && CountBox}
    </ButtonGroupView>
  );
};

export { Incrementer };
