import { RouteProp } from '@react-navigation/native';
import type {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { UnionOfObjPropTypes } from '../../types';

enum Screen {
  HOME = 'Home',
  CART = 'Cart',
}

type ScreenType = `${Screen}`;

type RootStackParamList = {
  Home: undefined;
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

type FCScreenProp = {
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
  CartScreenProps,
  FCScreenProp,
  HomeScreenProps,
  RootNavigationProp,
  RootRouteProp,
  RootStackParamList,
  RootStackParamValue,
  ScreenType,
};
