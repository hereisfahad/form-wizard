import { takeLatest, all } from 'redux-saga/effects';
import axios from 'axios';

export function* actionWatcher() {
    yield takeLatest("FORM_SUBMITED", apiCall)
}

export function* apiCall(s) {
     yield console.log('submiting form',)
    // yield console.log(s.payload)//return state ..else use select effect
    axios.post('https://apiformwizard.herokuapp.com/register', s.payload)
    .then(res => {
        console.log(res)
    })
    .catch((error) => {
        console.log(error);
    })
}
export function* rootSaga() {
    yield all(
        [
            actionWatcher(),
        ]
    )
}
