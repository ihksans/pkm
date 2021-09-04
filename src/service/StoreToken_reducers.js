import { addTokenByID } from '../actions'
import { connect } from 'react-redux'

const StoreToken = (props) => {
  return addTokenByID(props)
}

function mapStateToProps(state) {
  return {
    authToken: state.authToken,
  }
}

export default connect(mapStateToProps, { addTokenByID })(StoreToken)
