import { BAR_CHART, LINE_CHART, WORLD_BAR } from "./../Types"

const intialState = {
    bar: true,
    line: false
}

export default (state = intialState, action) => {
    switch (action.type) {
        case WORLD_BAR:
            return {
                world: true,
                bar: false,
                line: false
            }
        case BAR_CHART:
            return {
                ...state,
                bar: true,
                world: false,
                line: false
            }
        case LINE_CHART:
            return {
                ...state,
                world: false,
                bar: false,
                line: true
            }
        default:
            return state
    }
}