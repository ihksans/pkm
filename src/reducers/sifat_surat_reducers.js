//reducer for user
//add a actions
import { SET_ALL_SIFAT_SURAT, UNSET_ALL_SIFAT_SURAT } from '../actions'
const INITIAL_STATE = {
  allSifatSuratInfo: [],
}

const applySetSifatSurat = (state, action) => ({
  ...state,
  allSifatSuratInfo: action.payload,
})

const applyUnsetSifatSurat = (state) => ({
  ...state,
  allSifatSuratInfo: [],
})
//manggil nya disini nama method + nama variabel
function RSifatSurat(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_ALL_SIFAT_SURAT:
      return applySetSifatSurat(state, action)
    case UNSET_ALL_SIFAT_SURAT:
      return applyUnsetSifatSurat(state)
    default:
      return state
  }
}

export default RSifatSurat
