import React, { Component } from 'react'
import Login from '../../components/Login'
import BoxLogin from '../../components/BoxLogin'
import { connect } from 'react-redux'
import Footer from '../../components/Footer'
class LandingPage extends React.Component {
  //deklarasi variabel
  constructor(props) {
    super()
    this.state = {}
  }
  //contoh method
  isiVarA() {
    this.setState({
      a: 'aku',
    })
  }
  tambahVarB() {}
  render() {
    // console.log("ls token:"+ this.props.authToken.token)

    return (
      <>
        <div className="bg-gradient-to-tr from-black to-blue-500 flex justify-center h-screen">
          <BoxLogin />
        </div>
        {/* <Footer /> */}
      </>
    )
  }
}

function mapStateToProps(state) {
  return state
}
export default connect(mapStateToProps, null)(LandingPage)
