import { SET_PATH, UNSET_PATH } from '../actions'

const INITIAL_STATE = {
  currentPath: null,
}

const applySetPath = (state, action) => ({
  ...state,
  currentPath: action.payload,
})
const applyUnsetPath = (state, action) => ({
  ...state,
  currentPath: null,
})
function Path(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_PATH:
      return applySetPath(state, action)
    case UNSET_PATH:
      return applyUnsetPath(state, action)
    default:
      return state
  }
}
export default Path
