import { combineReducers } from "redux";
import accountReducer from "./account/slice";
const rootReducer = combineReducers({
    account: accountReducer,
});
export default rootReducer;
