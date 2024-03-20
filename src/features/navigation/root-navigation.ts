import { createNavigationContainerRef } from '@react-navigation/native';
import { ScreenType } from './navigationTypes';

const navigationRef = createNavigationContainerRef();

/**
 * This works like a ref and will not trigger useEffect.
 */
const getRouteName = () => {
  if (navigationRef.isReady()) {
    return navigationRef.getCurrentRoute()?.name as ScreenType | undefined;
  }
};

const navigate = (name: ScreenType, params: any) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
};

export { getRouteName, navigate };

export default navigationRef;
