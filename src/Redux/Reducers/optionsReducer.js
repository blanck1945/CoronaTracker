import { SET_OPTIONS } from "./../Types"

const intialState = {
    options: null
}

export default (state = intialState, action) => {
    switch (action.type) {
        case SET_OPTIONS:
            return {
                ...state,
                options: action.data
            }
        default:
            return state
    }
}