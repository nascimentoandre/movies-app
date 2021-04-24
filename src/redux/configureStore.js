import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import movieReducer from "./ducks/movie";
import { watcherSaga } from "./sagas/rootSaga";

const reducer = combineReducers({
  movie: movieReducer
});

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = createStore(reducer, {}, applyMiddleware(...middleware));

sagaMiddleware.run(watcherSaga);

export default store;