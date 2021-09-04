import React, { Component } from 'react'
//ini buat ngekoneksi redux
import { connect } from 'react-redux'
import {} from '../../actions'
//Ini buat dependecies/library nya
//import + "nama variabel" + from + "nama librarynya";

class ClassReducers extends Component {
  //deklarasi variabel
  constructor(props) {
    super()
    this.state = {
      a: '',
      b: '1234',
    }
  }
  //contoh method
  isiVarA() {
    this.setState({
      a: 'aku',
    })
  }
  tambahVarB() {}
  render() {
    return (
      //html
      //js
      <>
        <p>Ini Class Komponen</p>
      </>
    )
  }
}

function mapStateToProps(state) {
  return state
}
export default connect(mapStateToProps, {
  //nama methodnya apa
})(ClassReducers)
