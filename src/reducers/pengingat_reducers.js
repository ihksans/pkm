import { SET_ALL_PENGINGAT, UNSET_ALL_PENGINGAT } from '../actions'
const INITIAL_STATE = {
  allPengingatInfo: [],
}

const applySetPengingat = (state, action) => ({
  ...state,
  allPengingatInfo: action.payload,
})

const applyUnsetPengingat = (state) => ({
  ...state,
  allPengingatInfo: [],
})
//manggil nya disini nama method + nama variabel
function Pengingat(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_ALL_PENGINGAT:
      return applySetPengingat(state, action)
    case UNSET_ALL_PENGINGAT:
      return applyUnsetPengingat(state)
    default:
      return state
  }
}

export default Pengingat