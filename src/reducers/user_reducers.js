//reducer for user
//add a actions
import { SET_USER, UNSET_USER } from '../actions'
const INITIAL_STATE = {
  currentUser: [],
}

const applySetCurrentUser = (state, action) => ({
  ...state,
  currentUser: action.payload,
})

const applyUnsetCurrentUser = (state) => ({
  ...state,
  currentUser: [],
})
//manggil nya disini nama method + nama variabel
function User(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_USER:
      return applySetCurrentUser(state, action)
    case UNSET_USER:
      return applyUnsetCurrentUser(state)
    default:
      return state
  }
}

export default User
