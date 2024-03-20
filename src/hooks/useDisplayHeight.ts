import { useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const useDisplayHeight = () => {
  const insets = useSafeAreaInsets();
  const { height } = useWindowDimensions();
  return height - insets.bottom - insets.top;
};

export { useDisplayHeight };
