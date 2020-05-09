import { combineReducers } from "redux"

import dataReducer from "./dataReducer"
import errors from "./errors"
import options from "./optionsReducer"
import loading from "./LoadingReducer"

export default combineReducers({
    dataReducer,
    errors,
    options,
    loading
})