import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styled, { useTheme } from 'styled-components/native';
import {
  removeFromCart,
  selectPokemonById,
  useAppDispatch,
  useAppSelector,
} from '../../store';
import { IconSize, getIconSize } from '../../theme';
import { IncrementButton } from './IncrementButton';

const BaseButtonGroup = styled.View`
  flex-direction: row;
  align-items: center;
`;

const ButtonGroup = styled(BaseButtonGroup)`
  top: 0px;
  right: 0px;
  column-gap: 12px;
  margin: 2px;
`;

const IncButtonGroup = styled(BaseButtonGroup)`
  column-gap: 6px;
`;

const CounterBox = styled(BaseButtonGroup)<{ size: number }>`
  align-items: center;
  justify-content: center;
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ size }) => size / 4}px;
`;

const TouchableBox = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.transparent};
  margin-left: -6px;
`;

const TextContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

const CountText = styled.Text`
  ${({ theme }) => theme.typography.badge};
  color: ${({ theme }) => theme.colors.black};
  line-height: 12px;
  text-align: center;
`;

type Props = {
  id: string;
  countPosition: 'beginning' | 'middle' | 'end';
  invertButtons?: boolean;
  showDelete?: boolean;
  incButtonMargin?: string;
  buttonGap?: number;
  size?: IconSize;
};

const Incrementer = ({
  id,
  incButtonMargin,
  buttonGap,
  countPosition = 'middle',
  invertButtons = false,
  showDelete = false,
  size,
}: Props) => {
  const { colors } = useTheme();
  const dispatch = useAppDispatch();
  const pokemon = useAppSelector(selectPokemonById(id));
  const cartCount = pokemon.cartCount;
  const boxSize = getIconSize(size);

  const handlePressTrash = () => dispatch(removeFromCart(id));

  const CountBox = (
    <CounterBox size={boxSize}>
      <TextContainer>
        <CountText>{cartCount}</CountText>
      </TextContainer>
    </CounterBox>
  );

  const plusButton = (
    <IncrementButton id={id} variant="+" margin={incButtonMargin} size={size} />
  );

  const minusButton = (
    <IncrementButton id={id} variant="-" margin={incButtonMargin} size={size} />
  );

  const Button1 = invertButtons ? minusButton : plusButton;

  const Button2 = invertButtons ? plusButton : minusButton;

  const trashButton = (
    <TouchableBox onPress={handlePressTrash}>
      <Icon
        name="trash-can"
        size={boxSize + 0.2 * boxSize}
        color={colors.text}
        // @ts-ignore
      />
    </TouchableBox>
  );

  const ButtonsWBeginCounter = (
    <>
      {countPosition === 'beginning' && CountBox}
      <IncButtonGroup>
        {Button1}
        {Button2}
      </IncButtonGroup>
    </>
  );

  const OtherButtonConfigs = (
    <>
      {Button1}
      {countPosition === 'middle' && CountBox}
      {Button2}
      {countPosition === 'end' && CountBox}
    </>
  );

  return (
    <ButtonGroup>
      {countPosition === 'beginning'
        ? ButtonsWBeginCounter
        : OtherButtonConfigs}
      {showDelete && trashButton}
    </ButtonGroup>
  );
};

export { Incrementer };
