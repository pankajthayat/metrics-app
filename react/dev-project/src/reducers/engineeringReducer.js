import { SAVE_ENGINEERING, UPDATE_ENGINEERING } from '../constants/types'

const initialState = {
  item: {}
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SAVE_ENGINEERING:
      return {
        ...state,
        item: action.payload
      }
      case UPDATE_ENGINEERING:
            console.log("update in reducer")
            return {
                ...state,
                item: action.payload
            }
    default:
      return state;
  }
}