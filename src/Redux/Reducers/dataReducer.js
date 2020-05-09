import { SET_WORLD, GET_COUNTRY, LINE_COUNTRY } from "../Types"


const initialState = {
    worldBar: [],
    barData: [],
    lineData: "",
    world: true,
    bar: false,
    line: false
}

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WORLD:
            return {
                ...state,
                worldBar: action.data,
                barData: [],
                lineData: "",
                world: true,
                bar: false,
                line: false
            }
        case GET_COUNTRY:
            return {
                ...state,
                worldBar: [],
                barData: action.data,
                world: false,
                bar: true,
                line: false
            }
        case LINE_COUNTRY:
            return {
                ...state,
                worldBar: [],
                lineData: action.data,
                world: false,
                bar: false,
                line: true
            }
        default:
            return state
    }
}

export default dataReducer
