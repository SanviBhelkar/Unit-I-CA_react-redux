import {combineReducers} from "redux";
// import cakeReducer from "./cake/cakeReducer";
// import iceCreamReducer from "./iceCream/iceCreamReducer";
import customerReducer from "./customers/customerReducer";

const rootReducer = combineReducers({
    // cake: cakeReducer,
    // icecream:iceCreamReducer,
    customer:customerReducer
})
export default rootReducer