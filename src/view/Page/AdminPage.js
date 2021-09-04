import React, { Component } from 'react'
//Ini buat dependecies/library nya
//import + "nama variabel" + from + "nama librarynya";

class AdminPage extends React.Component {
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
        <p>Ini Admin Page </p>
      </>
    )
  }
}
export default AdminPage
