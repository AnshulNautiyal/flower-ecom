import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { plpReducer } from "../pages/plp/plp-reducer";
import { modalReducer } from "../components/Common/Modal/modal-reducer";
import thunk from "redux-thunk";

export default function configureStore(initialState = {}) {
  const rootReducer = combineReducers({
    plpData: plpReducer,
    modalState: modalReducer,
  });
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
    )
  );
  return store;
}
