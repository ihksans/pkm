import createDataContext from './createDataContext'

const authReducer = (state, action) => {
  switch (action.type) {
    case 'addTokenContext':
      return { ...state, myToken: action.payload }

    default:
      return state
  }
}

const saveToken = (dispatch) => (token) => {
  console.log('token to context:' + token)
  dispatch({ type: 'addTokenContext', payload: token })
}

export const { Provider, Context } = createDataContext(
  authReducer,
  {
    saveToken,
  },
  {
    myToken: null,
  },
)
