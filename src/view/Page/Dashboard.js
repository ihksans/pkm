import React, { Component } from 'react'
import Logout from '../../components/Logout'
//Ini buat dependecies/library nya
//import + "nama variabel" + from + "nama librarynya";
import { connect } from 'react-redux'
import api from '../../service/api'
import BoxDataBeranda from '../../components/BoxDataBeranda'
import BoxUserIntro from '../../components/BoxUserIntro'
import ModalLoading from '../../components/ModalLoading'
class Dashboard extends Component {
  //deklarasi variabel
  constructor(props) {
    super()
    this.state = {
      countSM: 0,
      countSK: 0,
      countDis: 0,
      modalLoading: false,
    }
    this.getCount = this.getCount.bind(this)
    this.handleLoading = this.handleLoading.bind(this)
  }
  handleLoading() {
    this.setState({
      modalLoading: !this.state.modalLoading,
    })
  }
  async getCount() {
    this.handleLoading()

    await api()
      .get('api/getCountSK')
      .then((response) => {
        this.setState({
          countSK: response.data.content,
        })
      })
    await api()
      .get('api/getCountSM')
      .then((response) => {
        this.setState({
          countSM: response.data.content,
        })
      })
    await api()
      .get('api/getCountDis')
      .then((response) => {
        this.setState({
          countDis: response.data.content,
        })
      })
    await api()
      .get('api/getCountPenc')
      .then((response) => {
        this.setState({
          countPen: response.data.content,
        })
      })
    await api()
      .get('api/getCountUser')
      .then((response) => {
        this.setState({
          countUser: response.data.content,
        })
      })
    this.handleLoading()
  }

  componentDidMount() {
    this.getCount()
  }
  render() {
    return (
      //html
      //js
      <>
        <div className="w-full h-5/6 bg-gray-200 p-4">
          <BoxUserIntro />
          {/* <div className=" flex flex-row "></div> */}
          <div className="grid grid-cols-3 gap-4 mt-3">
            <div>
              <BoxDataBeranda
                count={this.state.countSM}
                info={'TOTAL SURAT MASUK'}
                icon={'Surat.png'}
              />
            </div>
            <div className="">
              <BoxDataBeranda
                count={this.state.countSK}
                info={'TOTAL SURAT KELUAR'}
                icon={'Surat.png'}
              />
            </div>
            <div className="">
              <BoxDataBeranda
                count={this.state.countDis}
                info={'TOTAL DISPOSISI'}
                icon={'Surat.png'}
              />
            </div>
          </div>
        </div>
        <ModalLoading
          loading={this.state.modalLoading}
          title={'Menggambil data sistem'}
        />
      </>
    )
  }
}
function mapStateToProps(state) {
  return state
}
export default connect(mapStateToProps, {})(Dashboard)
