import { combineReducers } from "redux";
import { accountReducer } from "./account/slice";
import { loadingReducer } from "./loading/slice";
const rootReducer = combineReducers({
    account: accountReducer,
    loading: loadingReducer,
});
export default rootReducer;
