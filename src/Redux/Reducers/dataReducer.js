import { SET_WORLD } from "../Types"

const dataReducer = (state = [], action) => {
    switch (action.type) {
        case SET_WORLD:
            return action.data
        default:
            return state
    }
}

export default dataReducer

/*
  case SET_USA:
            return action.data*/