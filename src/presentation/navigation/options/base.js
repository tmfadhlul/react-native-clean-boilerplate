import {navAnimations, customTopBar} from './config';
import {SCREENS} from '@presentation/navigation/screens';

export const navOptionsLessons = {
  stack: {
    options: {
      layout: {
        backgroundColor: 'white',
      },
      animations: navAnimations,
    },
    children: [
      {
        component: {
          name: SCREENS.LESSONS,
          options: {
            topBar: customTopBar,
            bottomTab: {
              text: 'Lessons',
            },
          },
        },
      },
    ],
  },
};
