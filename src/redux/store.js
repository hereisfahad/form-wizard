import { createStore, applyMiddleware, compose } from "redux";
import allReducers from "./reducers";
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './saga'

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

const store = createStore(
  allReducers,
  compose(applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
sagaMiddleware.run(rootSaga)
export default store;
