import { select, put, takeLatest, all } from 'redux-saga/effects';
export function* actionWatcher() {
    yield console.log('Hello Sagas!')
    yield takeLatest("FORM_SUBMITED", apiCall)
}
const state = select();
// 
export function* apiCall(s) {
    yield console.log('api call')
    // yield console.log(state)
    
    try {
        let response = yield fetch("https://apiformwizard.herokuapp.com/register", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                user: s.payload
            })
        }
        );

       let data = yield response.json();
        yield put({ type: "USER_SAVED", data });
    }
    catch (error) {
        console.log(error)
        return;
    }

   
}
export function* rootSaga() {
    yield all(
        [
            actionWatcher(),
        ]
    )
}
