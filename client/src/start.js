import ReactDOM from "react-dom";
import App from "./app";

//redux set-up
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./redux/reducer.js";
import { composeWithDevTools } from "redux-devtools-extension";
import * as immutableState from "redux-immutable-state-invariant";

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(immutableState.default()))
);

let login = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(login, document.querySelector("main"));
