import { LOAD_OPEN, LOAD_CLOSE } from "./../Types"

const initialState = {
    loading: false
}
export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_OPEN:
            return { ...state, load: true }
        case LOAD_CLOSE:
            return { ...state, load: false }
        default:
            return state
    }
}