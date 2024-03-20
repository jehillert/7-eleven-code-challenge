import { RouteProp } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import styled, { useTheme } from 'styled-components/native';
import { curriedBackButton } from '../../components';
import { toTitleCase } from '../../utils';
import { CartScreen } from '../cart';
import PokemonScreen from '../pokemon/PokemonScreen';
import { curriedPokemonScreenButtons } from './PokemonScreenButtons';
import {
  PokemonScreenProps,
  RootStackParamList,
  Screen,
} from './navigationTypes';

type Props = {
  route: RouteProp<RootStackParamList, keyof RootStackParamList>;
  navigation: any;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavView = styled.View`
  flex: 1;
`;

const StackNavigator = () => {
  const { colors } = useTheme();

  return (
    <StackNavView>
      <Stack.Navigator
        initialRouteName={'Pokemon'}
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.navHeader,
          },
          headerTitleStyle: {
            color: colors.text,
          },
          contentStyle: {
            backgroundColor: colors.background,
          },
          presentation: 'card',
        }}>
        <Stack.Screen
          name={Screen.POKEMON}
          component={PokemonScreen}
          options={(props: PokemonScreenProps) => ({
            headerTitleAlign: 'center',
            headerShadowVisible: false,
            title: 'POKEMON!',
            headerTitleStyle: {
              color: colors.text,
              fontSize: 24,
            },
            headerRight: curriedPokemonScreenButtons(props),
          })}
        />

        <Stack.Screen
          name={'Checkout'}
          component={CartScreen}
          options={props => ({
            headerBackVisible: false,
            headerLeft: curriedBackButton({
              ...props,
              title: toTitleCase(Screen.CHECKOUT),
            }),
            title: '',
          })}
        />
      </Stack.Navigator>
    </StackNavView>
  );
};

export default StackNavigator;
