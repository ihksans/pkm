//reducer for auth
// add a actions
import { ADD_AUTHTOKEN, DEL_AUTHTOKEN } from '../actions'

const INITIAL_STATE = {
  authToken: null,
}

const applySetUserType = (state, action) => ({
  ...state,
  token: action.payload,
})
const applyUnsetUserType = (state) => ({
  ...state,
  token: null,
})

function authToken(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_AUTHTOKEN:
      return applySetUserType(state, action)
    case DEL_AUTHTOKEN:
      return applyUnsetUserType(state)
    default:
      return state
  }
}

export default authToken
