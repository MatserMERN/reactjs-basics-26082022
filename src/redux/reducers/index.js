import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { userReducer } from "./userReducer";

export const reducer = combineReducers({
    userList: userReducer,
    productList: productReducer
})