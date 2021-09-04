import React, { Component } from 'react'
//ini buat ngekoneksi redux
import { connect } from 'react-redux'
import AddFormDisposisiKeluar from './index'
import {} from '../../actions'
import api from '../../service/api'
import ModalLoading from '../ModalLoading'
class ClassReducers extends Component {
  //deklarasi variabel
    constructor(props) {
    super()
    this.state = {
      tujuanDisposisi:[],
      modal: false,
      idDisposisi: false,
      disposisi: null,
      detailDisposisi: null,
      loading: false,
      url: null,
    }
    this.handleModal = this.handleModal.bind(this)
    this.getDisposisi = this.getDisposisi.bind(this)
    this.handleLoading = this.handleLoading.bind(this)
}
async handleModal() {
    await this.getDisposisi()
    await this.setState({
    modal: !this.state.modal,
    })
    if (this.state.modal == false) {
        await this.setState({
            modal: !this.state.modal,
        })
    }
    console.log('modal: ' + this.state.modal)
}
handleLoading() {
    this.setState({
        loading: !this.state.loading,
    })
}
async getDisposisi() {
    this.handleLoading()
    await api()
      .get('api/getDisposisiByID/' + this.props.SuratDetail.ID_PENCATATAN)
      .then((response) => {
        if (response.data.content != null) {
          this.setState({
            disposisi: response.data.content,
            SuratDetail: this.props.SuratDetail,
          })
          api()
          .get('api/getTujuanDisposisi/'+ response.data.content.ID_DISPOSISI)
          .then((response)=>{
            this.setState({
              tujuanDisposisi: response.data.content,
            })
            console.log('tujuan disposisi:' + this.state.tujuanDisposisi)
            console.log('tujuan disposisi 2:' + response.data.content)
          })
          //didie
        } else {
          this.setState({
            disposisi: null,
          })
        }
      })
      console.log('disposisi by id: '+ this.state.idDisposisi)
    if (this.state.disposisi != null) {
      let formData = new FormData()
      formData.append(
        'namafile',
        this.props.SuratDetail.NOMOR_SURAT.split('/').join('_') + '_disposisi',
      )
      await api()
        .post('/api/getSurat', formData)
        .then((response) =>
        
          this.setState({
            
            url: response.data.url,
            
          }),
        )
    }
    this.handleLoading()
}

render() {
    return (
    <>
        <button
            className="flex flex-row bg-primary font-bold items-center ml-2 mt-1 rounded p-2 shadow-sm w-75% hover:bg-orenHover focus:outline-none"
            type="button"
            onClick={this.handleModal}
        >
        <div className="ml-1">
            <img className="h-4 align-middle" src="assets/img/icon/Surat.png" />
        </div>
        <div className="font-bold text-black ml-1 mr-2">Lihat Disposisi</div>
        </button>

        {this.state.modal ? (
        <>
            <AddFormDisposisiKeluar
                showModal={true}
                namaFile={this.props.NamaFileSurat}
                SuratDetail={this.props.SuratDetail}
                namaLampiran={this.props.NamaFileLampiran}
                jenisSurat={this.props.jenisSurat}
                IdUnitKerja={this.props.IdUnitKerja}
                disposisi={this.state.disposisi}
                url={this.state.url}
                pengingatS={this.props.pengingatS}
                countDays={this.props.countDays}
                DisposisiDetail={this.props.DisposisiDetail}
                tujuanPencatatan={this.props.tujuanPencatatan}
                tujuanDisposisi={this.state.tujuanDisposisi}
                idDisposisi={this.state.idDisposisi}
            />
        </>
        ) : null}
        {this.state.loading ? (
            <ModalLoading loading={this.state.loading} title={'Memeriksa data'} />
        ) : null}
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
