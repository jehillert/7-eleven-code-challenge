import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { selectCartIds, selectCartItems, useAppSelector } from '../../store';
import { AppScreenProp } from '../navigation/navigationTypes';
import CartRow from './CartRow';

const GridContainer = styled.View`
  justify-content: center;
  flex-direction: row;
  gap: 8px;
  flex-wrap: wrap;
  width: ${({ theme }) => theme.dimensions.screenWidth}px;
  flex: 1;
  padding: 8px 0px;
`;

const CartScreen = (props: AppScreenProp) => {
  const cartItems = useAppSelector(selectCartItems);
  const cartIds = useAppSelector(selectCartIds);

  return (
    <ScrollView style={{ flex: 1 }}>
      {cartItems.map(id => {
        return <CartRow entityId />;
      })}
    </ScrollView>
  );
};

export default CartScreen;
