import { FILTER_STATUS_CHANGE } from './filtersTypes'

const initialState = {
  status: 'All',
  colors: [],
}

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_STATUS_CHANGE:
      return {
        ...state,
        status: action.payload,
      }
    default:
      return state
  }
}

export default filtersReducer
