import { select, put, takeLatest, all } from 'redux-saga/effects';
export function* actionWatcher() {
    yield console.log('Hello Sagas!')
    yield takeLatest("FORM_SUBMITED", apiCall)
}
const state = select();
// 
export function* apiCall() {
    yield console.log('api call')
    // yield console.log(state)
    const data = ""
    try {
        const response = yield fetch("https://apiformwizard.herokuapp.com/register", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                user: { user: "user" }
            })
        }
        );

        data = yield response.json();
    }
    catch (error) {
        console.log(error)
        return;
    }

    yield put({ type: "USER_SAVED", data });
}
export function* rootSaga() {
    yield all(
        [
            actionWatcher(),
        ]
    )
}