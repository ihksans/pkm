import { SET_JENIS_SURAT, UNSET_JENIS_SURAT } from '../actions'
const INITIAL_STATE = {
  allJenisSurat: null,
}
const applySetJenisSurat = (state, action) => ({
  ...state,
  allJenisSurat: action.payload,
})

const applyUnsetJenisSurat = (state) => ({
  ...state,
  allJenisSurat: [],
})

function AllJenisSurat(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_JENIS_SURAT:
      return applySetJenisSurat(state, action)
    case UNSET_JENIS_SURAT:
      return applyUnsetJenisSurat(state)
    default:
      return state
  }
}
export default AllJenisSurat
