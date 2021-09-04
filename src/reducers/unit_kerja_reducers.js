//reducer for user
//add a actions
import { SET_ALL_UNIT_KERJA, UNSET_ALL_UNIT_KERJA } from '../actions'
const INITIAL_STATE = {
  allUnitKerjaInfo: [],
}

const applySetUnitKerja = (state, action) => ({
  ...state,
  allUnitKerjaInfo: action.payload,
})

const applyUnsetUnitKerja = (state) => ({
  ...state,
  allUnitKerjaInfo: [],
})
//manggil nya disini nama method + nama variabel
function RUnitKerja(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_ALL_UNIT_KERJA:
      return applySetUnitKerja(state, action)
    case UNSET_ALL_UNIT_KERJA:
      return applyUnsetUnitKerja(state)
    default:
      return state
  }
}

export default RUnitKerja
