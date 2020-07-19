import { all } from "redux-saga/effects";
import usersSagas from "./users";

export default function* rootSaga(params) {
  yield all([...usersSagas]);
}
