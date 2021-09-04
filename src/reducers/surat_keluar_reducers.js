//reducer for user
//add a actions
import { SET_ALL_SURAT_KELUAR, UNSET_ALL_SURAT_KELUAR } from '../actions'
const INITIAL_STATE = {
  allSuratKeluarInfo: [],
}

const applySetSuratKeluar = (state, action) => ({
  ...state,
  allSuratKeluarInfo: action.payload,
})

const applyUnsetSuratKeluar = (state) => ({
  ...state,
  allSuratKeluarInfo: [],
})
//manggil nya disini nama method + nama variabel
function SuratKeluar(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_ALL_SURAT_KELUAR:
      return applySetSuratKeluar(state, action)
    case UNSET_ALL_SURAT_KELUAR:
      return applyUnsetSuratKeluar(state)
    default:
      return state
  }
}

export default SuratKeluar
