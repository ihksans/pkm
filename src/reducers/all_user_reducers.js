import { SET_ALL_USER, UNSET_ALL_USER } from '../actions'
const INITIAL_STATE = {
  allUserInfo: null,
}
const applySetAllUser = (state, action) => ({
  ...state,
  allUserInfo: action.payload,
})

const applyUnsetAllUser = (state) => ({
  ...state,
  allUserInfo: [],
})
const setAllUser = (state, action) => ({
  ...state,
  allUserInfo: action.payload,
})
function AllUser(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_ALL_USER:
      return applySetAllUser(state, action)
    case UNSET_ALL_USER:
      return applyUnsetAllUser(state)
    default:
      return state
  }
}
export default AllUser
