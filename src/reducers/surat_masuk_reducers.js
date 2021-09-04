//reducer for user
//add a actions
import { SET_ALL_SURAT_MASUK, UNSET_ALL_SURAT_MASUK } from '../actions'
const INITIAL_STATE = {
  allSuratMasukInfo: [],
}

const applySetSuratMasuk = (state, action) => ({
  ...state,
  allSuratMasukInfo: action.payload,
})

const applyUnsetSuratMasuk = (state) => ({
  ...state,
  allSuratMasukInfo: [],
})
//manggil nya disini nama method + nama variabel
function SuratMasuk(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_ALL_SURAT_MASUK:
      return applySetSuratMasuk(state, action)
    case UNSET_ALL_SURAT_MASUK:
      return applyUnsetSuratMasuk(state)
    default:
      return state
  }
}

export default SuratMasuk
