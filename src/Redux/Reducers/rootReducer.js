import { combineReducers } from "redux"

import dataReducer from "./dataReducer"
import errors from "./errors"
import select from "./chartReducer"
import options from "./optionsReducer"

export default combineReducers({
    dataReducer,
    errors,
    select,
    options
})