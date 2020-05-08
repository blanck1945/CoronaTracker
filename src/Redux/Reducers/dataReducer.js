import { SET_WORLD, SET_USA, LINE_USA } from "../Types"

const initialState = {
    barData: [],
    lineData: []
}

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WORLD:
            return {
                ...state,
                barData: action.data
            }
        case SET_USA:
            return {
                ...state,
                barData: action.data
            }
        case LINE_USA:
            return {
                ...state,
                lineData: action.data
            }
        default:
            return state
    }
}

export default dataReducer
