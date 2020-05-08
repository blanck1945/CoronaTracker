import { BAR_CHART, LINE_CHART } from "./../Types"

const intialState = {
    bar: true,
    line: false
}

export default (state = intialState, action) => {
    switch (action.type) {
        case BAR_CHART:
            return {
                ...state,
                bar: true,
                line: false
            }
        case LINE_CHART:
            return {
                ...state,
                bar: false,
                line: true
            }
        default:
            return state
    }
}