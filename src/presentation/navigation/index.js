import {registerListeners} from './listeners';
import {registerScreen} from './screens';

export const initNavigation = () => {
  registerScreen();
  registerListeners();
};
