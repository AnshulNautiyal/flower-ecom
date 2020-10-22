import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { plpReducer } from "../pages/plp/plp-reducer";
import { modalReducer } from "../components/Common/Modal/modal-reducer";
import { LoaderReducer } from "../components/Common/Loader/Loader-reducer";
import { toastReducer } from "../components/Common/Toast/Toast-reducer";
import { PdpReducer, PdpLocalStateReducer } from "../pages/pdp/Pdp-reducer";
import thunk from "redux-thunk";

export default function configureStore(initialState = {}) {
  const rootReducer = combineReducers({
    plpData: plpReducer,
    modalState: modalReducer,
    loaderState: LoaderReducer,
    toastState: toastReducer,
    pdpData: PdpReducer,
    pdpLocalState: PdpLocalStateReducer,
  });
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : (f) => f
    )
  );
  return store;
}
