import { combineReducers } from "redux"

import dataReducer from "./dataReducer"
import errors from "./errors"

export default combineReducers({
    dataReducer,
    errors
})