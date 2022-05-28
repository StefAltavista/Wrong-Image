import ReactDOM from "react-dom";
import Log_In from "./logIn";

//redux set-up
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux/reducer.js";
import * as immutableState from "redux-immutable-state-invariant";

const store = createStore(
    rootReducer,
    applyMiddleware(immutableState.default())
);

let login = (
    <Provider store={store}>
        <Log_In />
    </Provider>
);

ReactDOM.render(login, document.querySelector("main"));
