import React, { Component } from "react";
//Ini buat dependecies/library nya
//import + "nama variabel" + from + "nama librarynya";
import TabelDisposisi from '../../components/TabelDisposisi/TabelDisposisi'
import { connect } from 'react-redux'
import {
  setAllDisposisi,
  setAllSuratMasuk,
  setJenisSurat,
  setUnitKerja,
  setDerajatSurat,
  setSifatSurat,
  setAllPencatatan,

} from '../../actions/index'
import ModalLoading from '../../components/ModalLoading'
import api from '../../service/api'
class Disposisi extends Component {
  //deklarasi variabel
  constructor(props) {
    super();
    this.state = {
      Disposisi: [],
      suratMasuk: [],
      jenisSurat: [],
      unitKerja: [],
      pencatatan: [],

      modalLoading: false,
    }
    this.getDisposisi = this.getDisposisi.bind(this)
    this.handleLoading = this.handleLoading.bind(this)
  }
  handleLoading() {
    this.setState({
      modalLoading: !this.state.modalLoading,
    })
  }
  async getDisposisi() {
    this.handleLoading()
    await api()
      .get('api/allInfoDisposisi')
      .then((response) => {
        this.setState({
          Disposisi: response.data.content,
        })
        console.log('DIsposisi: ' + response.data)
        // if (response.data) {
        //   this.props.setAllDisposisi(response.data)
        // }
      })

    await api()
      .get('api/detailSuratMasuk')
      .then((response) => {
        this.setState({
          suratMasuk: response.data.content,
        })
        if (this.state.suratMasuk.length > 0) {
          this.props.setAllSuratMasuk(response.data.content)
        }
      })
    await api()
      .get("api/getAllJenisSurat")
      .then((response) => {
        this.setState({
          jenisSurat: response.data,
        })
        if (this.state.jenisSurat.length > 0) {
          this.props.setJenisSurat(this.state.jenisSurat)
        }
      })
    await api()
      .get("api/getAllKodeUnit")
      .then((response) => {
        this.setState({
          unitKerja: response.data,
        });
        this.props.setUnitKerja(response.data);
      });
    await api()
      .get("api/getAllDerajatSurat")
      .then((response) => {
        this.props.setDerajatSurat(response.data);
      });
    await api()
      .get("api/getAllSifatNaskah")
      .then((response) => {
        this.props.setSifatSurat(response.data);
      });
    await api()
      .get("api/getAllPencatatanInfo")
      .then((response) => {
        this.props.setAllPencatatan(response.data.content)
      })
    this.handleLoading()
  }
  componentDidMount() {
    this.getDisposisi();
  }
  render() {
    return (
      //html
      //js
      <>
        <div className="w-full h-90% bg-gray-200 p-4	">
          <div className="bg-white shadow-md rounded p-6 nav nav-tabs">
            <div className="flex flex-row nav-item">
              <div>
                <img className="w-8" src="assets/img/icon/Surat.png" />
              </div>
              <div className="font-bold ml-2 text-2xl	">Agenda Disposisi</div>
            </div>
            {/* <AddFormSurat /> */}
            <div>{/* <AddFormDisposisi /> */}</div>
            <div>
              {/* <TabelDisposisi Disposisi={this.state.Disposisi}/> */}

              {this.props.AllDisposisi.allDisposisiInfo == null ? (
                <TabelDisposisi
                  SuratMasuk={this.state.suratMasuk}
                  Disposisi={this.state.Disposisi}
                  IdJenisSurat={this.state.jenisSurat}
                  IdUnitKerja={this.state.unitKerja}
                  Pencatatan={this.state.pencatatan}
                />
              ) : (
                <TabelDisposisi
                  Disposisi={this.props.AllDisposisi.allDisposisiInfo}
                  SuratMasuk={this.props.SuratMasuk.allSuratMasukInfo}
                  IdJenisSurat={this.state.jenisSurat}
                  IdUnitKerja={this.state.unitKerja}
                  Pencatatan={this.state.pencatatan}
                  // Pencatatan={this.state.Pencatatan.allPencatatanInfo}
                />
              )}
            </div>
          </div>
        </div>
        <ModalLoading
          loading={this.state.modalLoading}
          title={'Menggambil data sistem'}
        />
      </>
    );
  }
}
function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps, {
  setAllDisposisi,
  setAllSuratMasuk,
  setJenisSurat,
  setUnitKerja,
  setDerajatSurat,
  setSifatSurat,
  setAllPencatatan,
})(Disposisi);
