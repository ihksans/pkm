import { SET_ALL_PENCATATAN, UNSET_ALL_PENCATATAN} from '../actions'
const INITIAL_STATE = {
    allPencatatanInfo: null,
}
const applySetAllPencatatan = (state, action) => ({
    ...state,
    allPencatatanInfo: action.payload,
})

const applyUnsetAllPencatatan = (state) => ({
    ...state,
    allPencatatanInfo: [],
})
const setAllPencatatan = (state, action) => ({
    ...state,
    allPencatatanInfo: action.payload,
})
function AllPencatatan(state = INITIAL_STATE, action) {
    switch (action.type) {
    case SET_ALL_PENCATATAN:
        return applySetAllPencatatan(state, action)
    case UNSET_ALL_PENCATATAN:
        return applyUnsetAllPencatatan(state)
    default:
        return state
    }
}
export default AllPencatatan
