import { RouteProp } from '@react-navigation/native';
import type {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { UnionOfObjPropTypes } from '../../types';

enum Screen {
  POKEMON = 'Pokemon',
  CART = 'Cart',
}

type ScreenType = `${Screen}`;

type RootStackParamList = {
  Pokemon: undefined;
  Cart: undefined;
};

type RootStackParamValue = UnionOfObjPropTypes<RootStackParamList>;

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, Screen.HOME>;

type CartScreenProps = NativeStackScreenProps<RootStackParamList, Screen.CART>;

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
  HomeScreenProps,
  RootNavigationProp,
  RootRouteProp,
  RootStackParamList,
  RootStackParamValue,
  ScreenType,
};
