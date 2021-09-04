//reducer for user
//add a actions
import { SET_KODE_HAL, UNSET_KODE_HAL } from '../actions'
const INITIAL_STATE = {
  allKodeHal: [],
}

const applySetKodeHal = (state, action) => ({
  ...state,
  allKodeHal: action.payload,
})

const applyUnsetKodeHal = (state) => ({
  ...state,
  allKodeHal: [],
})
//manggil nya disini nama method + nama variabel
function RKodeHal(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_KODE_HAL:
      return applySetKodeHal(state, action)
    case UNSET_KODE_HAL:
      return applyUnsetKodeHal(state)
    default:
      return state
  }
}

export default RKodeHal
