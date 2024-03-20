import { dimensions } from './theme';

type IconSize = 'small' | 'medium-small' | 'medium' | 'large';

const getIconSize = (size: IconSize = 'medium') =>
  size === 'small'
    ? dimensions.iconSmall
    : size === 'medium'
    ? dimensions.iconMedium
    : size === 'medium-small'
    ? dimensions.iconMedSmall
    : dimensions.iconLarge;

export { getIconSize };
export type { IconSize };
