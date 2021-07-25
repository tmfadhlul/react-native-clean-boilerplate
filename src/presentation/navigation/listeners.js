import {Navigation} from 'react-native-navigation';

import {navOptionsRoot} from './options';
import {DEFAULT_SCREEN, DEV_MODE} from '@utils/config';

export const registerListeners = () => {
  Navigation.events().registerAppLaunchedListener(() => {
    if (DEV_MODE) {
      Navigation.setRoot({
        root: {
          component: {
            name: DEFAULT_SCREEN,
          },
        },
      });
    } else {
      Navigation.setRoot(navOptionsRoot);
    }
  });
};
