import { select, put, takeLatest, all } from 'redux-saga/effects';
export function* actionWatcher() {
    yield console.log('Hello Sagas!')
    yield takeLatest("FORM_SUBMITED", apiCall)
}
const state = select();
// 
export function* apiCall(s) {
    yield console.log('api call')
    yield console.log(s.payload)//return state
    let d = {}
    let abc = axios.post('https://apiformwizard.herokuapp.com/', s.payload)
    abc.then(res => {
        console.log(res)
        d = res.data;

    }
    )
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
