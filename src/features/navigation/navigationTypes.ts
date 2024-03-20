import { RouteProp } from '@react-navigation/native';
import type {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { UnionOfObjPropTypes } from '../../types';

enum Screen {
  POKEMON = 'Pokemon',
  CHECKOUT = 'Checkout',
}

type ScreenType = `${Screen}`;

type RootStackParamList = {
  Pokemon: undefined;
  Checkout: undefined;
};

type RootStackParamValue = UnionOfObjPropTypes<RootStackParamList>;

type PokemonScreenProps = NativeStackScreenProps<
  RootStackParamList,
  Screen.POKEMON
>;

type CartScreenProps = NativeStackScreenProps<
  RootStackParamList,
  Screen.CHECKOUT
>;

type RootNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  ScreenType,
  undefined
>;

type AppScreenProp = {
  route?: RouteProp<RootStackParamList, ScreenType>;
  navigation?: RootNavigationProp;
};

type RootRouteProp<RouteName extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  RouteName
>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export { Screen };

export type {
  AppScreenProp,
  CartScreenProps,
  PokemonScreenProps,
  RootNavigationProp,
  RootRouteProp,
  RootStackParamList,
  RootStackParamValue,
  ScreenType,
};
