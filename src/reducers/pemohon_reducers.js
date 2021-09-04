import { SET_PEMOHON, UNSET_PEMOHON } from '../actions'
const INITIAL_STATE = {
  allPemohon: [],
}

const applySetPemohon = (state, action) => ({
  ...state,
  allPemohon: action.payload,
})

const applyUnsetPemohon = (state) => ({
  ...state,
  allPemohon: [],
})
//manggil nya disini nama method + nama variabel
function RPemohon(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_PEMOHON:
      return applySetPemohon(state, action)
    case UNSET_PEMOHON:
      return applyUnsetPemohon(state)
    default:
      return state
  }
}

export default RPemohon
