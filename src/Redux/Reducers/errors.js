import { SET_ERROR, REMOVE_ERROR } from "./../Types"

export default (state = { msg: null }, action) => {
    switch (action.type) {
        case SET_ERROR:
            return {
                ...state,
                msg: action.error
            }
        case REMOVE_ERROR:
            return {
                ...state,
                msg: null
            }
        default:
            return state
    }
}

