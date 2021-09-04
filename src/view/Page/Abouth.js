import React, { Component } from 'react'
//Ini buat dependecies/library nya
//import + "nama variabel" + from + "nama librarynya";

class LandingPage extends React.Component {
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
        <div className="App">
          <h1 className="text-red-500">hello</h1>
        </div>
      </>
    )
  }
}
export default LandingPage
