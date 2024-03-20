import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { selectCartIds, useAppSelector } from '../../store';
import { AppScreenProp } from '../navigation/navigationTypes';
import CartRow from './CartRow';

const CartScreen = (props: AppScreenProp) => {
  const cartIds = useAppSelector(selectCartIds);

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={styles.scrollViewContent}>
      {cartIds.map(id => {
        return <CartRow pokemonId={id} />;
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    rowGap: 3 * StyleSheet.hairlineWidth,
  },
});

export { CartScreen };
