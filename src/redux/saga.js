import { put, takeLatest, all } from 'redux-saga/effects';
import axios from 'axios';

export function* actionWatcher() {
    yield console.log('Hello Sagas!')
    yield takeLatest("FORM_SUBMITED", apiCall)
}

export function* apiCall(s) {
    yield console.log('api call')
    yield console.log(s.payload)//return state ..else use select effect
    let d = {}
    axios.post('https://apiformwizard.herokuapp.com/register', s.payload)
    .then(res => {
        console.log(res)
        d = res.data;
    })
    .catch((error) => {
        console.log(error);
    })
    yield put({ type: "USER_SAVED", d });

}
export function* rootSaga() {
    yield all(
        [
            actionWatcher(),
        ]
    )
}
