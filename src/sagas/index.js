import { put, takeLatest, delay, all } from 'redux-saga/effects';

export function* incrementAsync() {
  yield delay(1000); console.log('incre')
  yield put({ type: 'INCREMENT_ASYNC' });
}

export function* decrementAsync() {
  yield delay(1000); console.log('decre')
  yield put({ type: 'DECREMENT_ASYNC' });
}

export function* watchIncrementDecrementAsync() {
  yield takeLatest('INCREMENT', incrementAsync);
  yield takeLatest('DECREMENT', decrementAsync);
}

export default function* rootSaga() {
  yield all([
    watchIncrementDecrementAsync()
  ])
}