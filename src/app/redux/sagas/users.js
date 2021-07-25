import {call, put, takeEvery} from 'redux-saga/effects';

import {userTypes} from '../types';

const apiUrl = 'http://jsonplaceholder.typicode.com/users';

function getApi() {
  return fetch(apiUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'applcation/json',
    },
  })
    .then(response => response.json())
    .catch(error => {
      throw error;
    });
}

function* fetchUsers(action) {
  try {
    const users = yield call(getApi);
    yield put({type: userTypes.GET_USERS_SUCCESS, payload: users});
  } catch (e) {
    yield put({type: userTypes.GET_USERS_FAILED, message: e.message});
  }
}

export default function* userSaga() {
  yield takeEvery(userTypes.GET_USERS_REQUESTED, fetchUsers);
}
