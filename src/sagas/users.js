import { takeEvery, call, fork, put } from "redux-saga/effects";

import { Types, getUsersSuccess } from "../actions/users";
import * as api from "../api/users";

function* getUsers() {
  try {
    const results = yield call(api.getUsers);
    const { data } = results;
    yield put(getUsersSuccess({ items: data.data }));
  } catch (error) {}
}

function* watchGetUsersRequest() {
  yield takeEvery(Types.GET_USERS_REQUEST, getUsers);
}

const usersSagas = [fork(watchGetUsersRequest)];

export default usersSagas;
