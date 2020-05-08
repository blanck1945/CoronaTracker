import { SET_WORLD, GET_COUNTRY, LINE_COUNTRY } from "../Types"

const initialState = {
    worldBar: [],
    barData: [],
    lineData: "",
    world: true,
    country: false
}

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WORLD:
            return {
                ...state,
                barData: action.data,
                world: true,
                country: false
            }
        case GET_COUNTRY:
            return {
                ...state,
                barData: action.data,
                world: false,
                country: true
            }
        case LINE_COUNTRY:
            return {
                ...state,
                lineData: action.data,
            }
        default:
            return state
    }
}

export default dataReducer
