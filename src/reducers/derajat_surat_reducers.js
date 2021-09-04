//reducer for user
//add a actions
import { SET_ALL_DERAJAT_SURAT, UNSET_ALL_DERAJAT_SURAT } from '../actions'
const INITIAL_STATE = {
  allDerajatSuratInfo: [],
}

const applySetDerajatSurat = (state, action) => ({
  ...state,
  allDerajatSuratInfo: action.payload,
})

const applyUnsetDerajatSurat = (state) => ({
  ...state,
  allDerajatSuratInfo: [],
})
//manggil nya disini nama method + nama variabel
function RDerajatSurat(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_ALL_DERAJAT_SURAT:
      return applySetDerajatSurat(state, action)
    case UNSET_ALL_DERAJAT_SURAT:
      return applyUnsetDerajatSurat(state)
    default:
      return state
  }
}

export default RDerajatSurat
