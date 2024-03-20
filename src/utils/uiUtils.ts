import {
  ColorValue,
  PressableStateCallbackType,
  StyleProp,
  ViewStyle,
} from 'react-native';

type PressableStyleCallback = (
  state: PressableStateCallbackType,
) => StyleProp<ViewStyle>;

const pressableColorCallback =
  (
    colorOnPress: string | ColorValue,
    colorOffPress: string | ColorValue,
    style?: StyleProp<ViewStyle>,
  ): PressableStyleCallback =>
  ({ pressed }) =>
    [
      {
        backgroundColor: pressed ? colorOnPress : colorOffPress,
      },
      style,
    ];

export { pressableColorCallback };
