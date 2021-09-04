//component CreateUser
import { data } from 'autoprefixer'
import axios from 'axios'
import React, { Component, useState } from 'react'
import api from '../../service/api'
// import { removeTokenByID } from '../../actions'
// import { logoutAuth } from '../../service/auth'
import { connect } from 'react-redux'
import { NavItem, Row } from 'reactstrap'
import { getDataPengguna } from '../../service/pengguna'

class CreateUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pengguna : [],
      // id : "",
      // nama : "",
      // username : "",
      // password : "",
      // msg: null,
      // type: null,
      // flash:false,
    }
    this.getPengguna = this.getPengguna.bind(this);
    // this.deletePengguna = this.deletePengguna.bind(this);
  }
  hideAlert() {
    this.setState({
        alert: null
    });
  }

  componentDidMount(){
    this.getPengguna();
  }

  getPengguna(){
    api()
    .get('api/allPenggunaInfo')
    .then(response=>{
        this.setState({
            pengguna:response.data,
        });
        console.log('pengguna:'+ response.data)
      });
  }  

  render() {
    const {pengguna} = this.state
    return (
      <>
        <div classNname="mt-4">
        <button
                  type="submit"
                  className=" w-full border-2 rounded-md  bg-primary"
                  data-target="#myForm"
                >
        <div className="text-sm mb-2 text-white	h-6">Tambah data</div>
        </button>

        </div>
        <table>
        <div className="mt-12">
          <table  class="border-collapse border border-gray-800">
          <thead>
            <tr class="border border-gray-600 ...">
              <th scope="row">No</th>
              <th scope="row">Nama Pengguna</th>
              <th scope="row">Username</th>
              <th scope="row">Password</th>
              <th scope="row">Role</th>
              <th scope="row">Aksi</th>

            </tr>
          </thead>
          <tbody>
            {pengguna.map((pengguna, i)=>(
            <tr key={i}>
              <td scope="row">{i+1}</td>
              <td scope="row">{pengguna.NAMA}</td>
              <td scope="row">{pengguna.USERNAME}</td>
              <td scope="row">*******</td>
              <td scope="row">{pengguna.ROLE == 1 ? 'Administrator':'Pengguna'}</td>
              <td scope="row">
                <button
                  size="sm"
                  type="submit"
                  className=" w-full border-2 rounded-md  bg-primary"
                >
                  <div className="text-sm mb-2 text-white	h-6">Edit</div>
                </button>
                <button
                  size="sm"
                  type="submit"
                  className=" w-full border-2 rounded-md  bg-brokenblack"
                  onClick={() => this.deletePengguna(pengguna.ID_PENGGUNA)}
                >
                  <div className="text-sm mb-2 text-white	h-6">Hapus</div>
                </button>
              </td>
            </tr>
            ))}
          </tbody>
          </table>
        </div>
        </table>
        
        
      </>
    )
  }
}

// function mapStateToProps(state) {
//   return state
// }
export default CreateUser

// if(document.getElementById('')){
//   ReactDOM.render(<index />, document.getElementById(''));
// }