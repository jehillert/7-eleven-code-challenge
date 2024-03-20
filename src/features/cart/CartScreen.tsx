import React, { useCallback } from 'react';
import { FlatList, ListRenderItem, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { selectCartIds, selectTotalCost, useAppSelector } from '../../store';
import CartRow from './CartRow';

const ScreenContainer = styled.View`
  flex: 1;
`;

const TotalCostRow = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px 8px;
  color: ${({ theme }) => theme.colors.text};
  border-top-width: ${3 * StyleSheet.hairlineWidth}px;
  border-top-color: ${({ theme }) => theme.colors.text};
`;

const TotalCostText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  ${({ theme }) => theme.typography.bodyLarge}
  font-size: 22px;
`;

const CartScreen = () => {
  const cartIds = useAppSelector(selectCartIds);
  const totalCost = useAppSelector(selectTotalCost);
  const renderItem: ListRenderItem<string> = useCallback(({ item }) => {
    return <CartRow pokemonId={item} />;
  }, []);

  return (
    <ScreenContainer>
      <FlatList
        style={{ flex: 1 }}
        data={cartIds}
        renderItem={renderItem}
        contentContainerStyle={styles.contentContainer}
      />
      <TotalCostRow>
        <TotalCostText>Total:</TotalCostText>
        <TotalCostText>{`$${totalCost}`}</TotalCostText>
      </TotalCostRow>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    rowGap: 3 * StyleSheet.hairlineWidth,
  },
});

export { CartScreen };
