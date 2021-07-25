import {registerComponent} from './reduxHelpers';

import {BaseScreen} from '@presentation/modules';

export const SCREENS = {
  BASE: 'BaseScreen',
};

export const registerScreen = () => {
  registerComponent(SCREENS.BASE, BaseScreen);
};
