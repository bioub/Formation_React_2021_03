import { createStore } from "redux";
import reducer from "./store/reducers/index";

function configureStore() {
  const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  // plugins...

  return store;
}

export default configureStore;
