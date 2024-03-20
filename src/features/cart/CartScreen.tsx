import React from 'react';
import { ScrollView } from 'react-native';
import { selectCartIds, useAppSelector } from '../../store';
import { AppScreenProp } from '../navigation/navigationTypes';
import CartRow from './CartRow';

const CartScreen = (props: AppScreenProp) => {
  const cartIds = useAppSelector(selectCartIds);

  return (
    <ScrollView style={{ flex: 1 }}>
      {cartIds.map(id => {
        return <CartRow pokemonId={id} />;
      })}
    </ScrollView>
  );
};

export { CartScreen };
