import {userTypes} from '../types';

const initialState = {
  users: [],
  loading: false,
  error: null,
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case userTypes.GET_USERS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case userTypes.GET_USERS_SUCCESS:
      
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case userTypes.GET_USERS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    default:
      return state;
  }
}
