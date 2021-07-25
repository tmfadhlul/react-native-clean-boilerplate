import {userTypes} from '../types';

export function getUsers(users) {
  return {
    type: userTypes.GET_USERS_REQUESTED,
    payload: users,
  };
}
