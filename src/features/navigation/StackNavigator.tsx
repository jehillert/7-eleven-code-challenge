import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import styled, { useTheme } from 'styled-components/native';
import { backButton } from '../../components';
import { toTitleCase } from '../../utils';
import PokemonScreen from '../pokemon/PokemonScreen';
import { RootStackParamList, Screen } from './navigationTypes';

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
          name={'Pokemon'}
          component={PokemonScreen}
          options={props => ({
            headerBackVisible: false,
            // headerLeft: backButton({
            //   ...props,
            //   title: toTitleCase(Screen.POKEMON),
            // }),
          })}
        />
        <Stack.Screen
          name={'Cart'}
          component={() => <></>}
          options={props => ({
            headerBackVisible: false,
            headerLeft: backButton({
              ...props,
              title: toTitleCase(Screen.CART),
            }),
            title: '',
          })}
        />
      </Stack.Navigator>
    </StackNavView>
  );
};

export default StackNavigator;
