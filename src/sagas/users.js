import {
  take,
  takeEvery,
  takeLatest,
  call,
  fork,
  put,
} from "redux-saga/effects";

import { Types, getUsersSuccess, userError } from "../actions/users";
import * as api from "../api/users";

function* getUsers() {
  try {
    const results = yield call(api.getUsers);
    const { data } = results;
    yield put(getUsersSuccess({ items: data.data }));
  } catch (error) {
    yield put(userError("An error ocurred when trying to get the users list"));
  }
}

function* createUser(action) {
  try {
    const { firstName, lastName } = action.payload;
    yield call(api.createUser, { firstName, lastName }); //calling the api method
    yield call(getUsers); //refreshing the list
  } catch (error) {
    yield put(userError("An error ocurred when trying to create the user"));
  }
}

function* deleteUser({ userId }) {
  try {
    yield call(api.deleteUser, { userId });
  } catch (error) {
    yield put(userError("An error ocurred when trying to delete the user"));
  }
}

function* watchGetUsersRequest() {
  yield takeEvery(Types.GET_USERS_REQUEST, getUsers);
}

function* watchCreateUserRequest() {
  yield takeLatest(Types.CREATE_USER_REQUEST, createUser);
}

function* watchUserDeleteRequest() {
  while (true) {
    const action = yield take(Types.DELETE_USER_REQUEST);
    const { userId } = action.payload;
    yield call(deleteUser, { userId }); //calling the delete
    yield call(getUsers); //calling the getUser
  }
}

const usersSagas = [
  fork(watchGetUsersRequest),
  fork(watchCreateUserRequest),
  fork(watchUserDeleteRequest),
];

export default usersSagas;
