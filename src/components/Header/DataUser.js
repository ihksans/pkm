//this component for header
import React, { Component } from 'react'
import { connect } from 'react-redux'

class DataUser extends Component {
  constructor(props) {
    super()
    this.state = {}
  }
  render() {
    return (
      <>
        <div className="font-semibold">
        {/* {this.props.User.currentUser.NAMA} */}
          <p className="font-semibold text-right text-md">{this.props.User.currentUser.NAMA}</p>
          <p className="font-semibold text-right text-xs">
            {this.props.User.currentUser.ROLE == 1
            ? 'ADMINISTRATOR'
            : 'STAF PENGGUNA'}</p>
        </div>
        {/* <div className="text-sm font-semibold text-right text-xs">
          {this.props.User.currentUser.ROLE == 1
            ? 'ADMINISTRATOR'
            : 'STAF PENGGUNA'}  
        </div> */}
      </>
    )
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, null)(DataUser)
