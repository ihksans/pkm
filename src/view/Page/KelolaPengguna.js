import React, { Component } from 'react'
import TabelPengguna from '../../components/TabelPengguna/TabelPengguna'
import BoxDataTabel from '../../components/TabelPengguna/BoxDataTabel'
import { PenggunaData } from './PenggunaData'
import FormUser from '../../components/FormUser'
import { connect } from 'react-redux'
import { setAllUser } from '../../actions'
import api from '../../service/api'
import ModalAddPengguna from '../../components/ModalAddPengguna'
class KelolaPengguna extends Component {
  //deklarasi variabel
  constructor(props) {
    super()
    this.state = {
      Pengguna: [],
    }
    this.getPengguna = this.getPengguna.bind(this)

  }
  async getPengguna() {
    await api()
      .get('api/allPenggunaInfo')
      .then((response) => {
        this.props.setAllUser(response.data)
        console.log('pengguna:' + this.props.AllUser.allUserInfo)
      })
  }

  componentDidMount() {
    this.getPengguna()
  }

  render() {
    return (
      //html
      //js
      <>
        <div className="w-full h-5/6 bg-gray-200 p-4">
          <div className="bg-white shadow-md rounded p-6">
            <div className="flex flex-row">
              <div>
                <img className="w-8" src="assets/img/icon/user_icon.png" />
              </div>
              <div className="font-bold ml-2 text-2xl	">Kelola Pengguna</div>
            </div>

            <ModalAddPengguna />

            <div>
              {this.props.AllUser.allUserInfo == null ? (
                <TabelPengguna Pengguna={this.state.Pengguna} />
              ) : (
                <TabelPengguna Pengguna={this.props.AllUser.allUserInfo} />
              )}
            </div>
          </div>
        </div>
      </>
    )
  }
}
function mapStateToProps(state) {
  return state
}
export default connect(mapStateToProps, { setAllUser })(KelolaPengguna)
