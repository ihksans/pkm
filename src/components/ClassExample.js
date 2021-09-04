import React, { Component } from 'react'
//Ini buat dependecies/library nya
//import + "nama variabel" + from + "nama librarynya";

class ClassExample extends Component {
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
        {/* 
        <div style={{ marginTop: 20 }}>
           {JSON.stringify(this.state.typeNomor)}
        </div> */}
        <p>Ini Class Komponen</p>
      </>
    )
  }
}
export default ClassExample
