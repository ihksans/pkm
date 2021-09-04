import axios from 'axios'
import api from '../../service/api'
import React, { Component, useState } from 'react'
import { connect } from 'react-redux'
import Kalender from '../AddFormSurat/Kalender'
import ModalKonfirmDeleteDispo from '../ModalKonfirmDeleteDispo'
import EditFormDisposisi from '../EditFormDisposisi'
import PdfReader from '../PdfReader'
import ModalLoading from '../ModalLoading'
class DetailDisposisi extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dir: [],
      url: null,
      loading: false,

      // pengguna: this.props.AllUser.allUserInfo,
      // disposisi: this.props.AllDisposisi.allDisposisiInfo,
    }
    this.handleDelete = this.handleDelete.bind(this)
    this.handleModal = this.handleModal.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.handleLoading = this.handleLoading.bind(this)
    this.getFileDisposisi = this.getFileDisposisi.bind(this)
  }
  handleLoading() {
    this.setState({
      loading: !this.state.loading,
    })
  }
  async getFileDisposisi() {
    this.handleLoading()
    let formData = new FormData()
    formData.append(
      'namafile',
      this.props.DisposisiDetail.NOMOR_SURAT.split('/').join('_') + '_disposisi',
    )
    await api()
      .post('/api/getSurat', formData)
      .then((response) =>
        this.setState({
          url: response.data.url,
        }),
      )
    this.handleLoading()
  }
  async handleModal() {
    if (this.state.url == null) {
      await this.getFileDisposisi()
    }
    await this.setState({
      showModal: !this.state.showModal,
    })
    // console.log('detail disposisi: ' + this.props.DisposisiDetail)
    // console.log('surate detail: '+ this.props.SuratDetail)
    // console.log('detail disposisi: '+ this.props.DisposisiDetail) 
    // console.log('tujuan surat: '+ this.props.TujuanSurat)
    // console.log('ID pencatatan: '+ this.props.IdPencatatan)
    // console.log('Jenis surat: '+ this.props.IdJenisSurat)
    // console.log('id kode unit kerja: '+ this.props.IdUnitKerja)
    // console.log('kode unit kerja: '+ this.props.UnitKerja)
    // console.log('nomor surat masuk: '+ this.props.NomorSurat)
    // console.log('id surat masuk: '+ this.props.SuratMasuk)
    // console.log('pencatatan: '+ this.props.Pencatatan)
    console.log('surat detail '+this.props.SuratDetail)
    console.log('detail disposisi '+this.props.DisposisiDetail)
    console.log('tujuan surat '+this.props.TujuanSurat)
    console.log('IdPencatatan '+this.props.IdPencatatan)
    console.log('IdJenisSurat '+this.props.IdJenisSurat)
    console.log('SuratMasuk '+this.props.SuratMasuk)
    console.log('IdUnitKerja '+this.props.IdUnitKerja)
    console.log('UnitKerja '+this.props.UnitKerja)
    console.log('NomorSurat '+this.props.NomorSurat)
    console.log('Pencatatan '+this.props.Pencatatan)

    console.log('namaFile '+this.props.namaFile)
    console.log('namaLampiran '+this.props.namaLampiran)
    console.log('jenisSurat '+this.props.jenisSurat)
    console.log('disposisi '+this.props.disposisi)
    console.log('pengingatS '+this.props.pengingatS)
    console.log('countDays '+this.props.countDays)
  }
  handleDelete() {
    window.location.reload('/#/Disposisi')
  }
  async onSubmit(e) {
    e.preventDefault()
  }
  render() {
    return (
      <>
        <button
          className="flex flex-row bg-primary font-bold items-center ml-2 mt-1  rounded p-2 shadow-sm w-75% hover:bg-orenHover focus:outline-none"
          type="button"
          onClick={this.handleModal}
        >
          <div className="font-bold text-putih ml-1 mr-2">Lihat Detail</div>
        </button>
        {this.state.showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto h-90% my-6 mx-auto max-w-6xl">
                {/* content */}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-abu outline-none focus:outline-none">
                  {/* Header */}
                  <div className="flex flex-row grid grid-cols-2 mr-8">
                    <div className="flex flex-row grid grid-cols-3 bg-white pb-10 pt-4 pl-4 pr-4">
                      <div className="flex flex-row items-start p-2 ml-6 rounded-t col-span-3">
                        <div>
                          <img
                            className="w-8"
                            src="assets/img/icon/Surat.png"
                          />
                        </div>
                        <div className="flex">
                          <h3 className="text-xl font-semibold">
                            Detail Disposisi 123das
                          </h3>
                        </div>
                      </div>
                      <div className="flex flex-row col-span-3 mb-4 mb-10">
                        <EditFormDisposisi 
                        SuratDetail={this.props.SuratDetail}
                        DisposisiDetail={this.props.DisposisiDetail}
                        // DisposisiDetail={this.props.Disposisi}
                        TujuanSurat={this.props.TujuanSurat}
                        IdPencatatan={this.props.IdPencatatan}
                        IdJenisSurat={this.props.IdJenisSurat}
                        SuratMasuk={this.props.SuratMasuk}
                        IdUnitKerja={this.props.IdUnitKerja}
                        UnitKerja={this.props.UnitKerja}
                        NomorSurat={this.props.NomorSurat}
                        Pencatatan={this.props.Pencatatan}
                                                
                        namaFile={this.props.NamaFileSurat}
                        // SuratDetail={this.props.SuratDetail}
                        namaLampiran={this.props.NamaFileLampiran}
                        jenisSurat={this.props.jenisSurat}
                        // IdUnitKerja={this.props.IdUnitKerja}
                        disposisi={this.state.disposisi}
                        pengingatS={this.props.pengingatS}
                        countDays={this.props.countDays}
                        // DisposisiDetail={this.props.DisposisiDetail}
                        />

                        <ModalKonfirmDeleteDispo
                          IdDispo={this.props.DisposisiDetail.ID_DISPOSISI}
                          // handleDisposisi={() => this.handleDelete()}
                        />
                      </div>

                      <div className="font-bold">No. Agenda Disposisi</div>
                      <div className="col-span-2 ml-4">
                        {this.props.DisposisiDetail.NOMOR_AGENDA}
                      </div>

                      <div className="font-bold ">Tanggal Disposisi</div>
                      <div className="col-span-2 ml-4">
                        {this.props.DisposisiDetail.TANGGAL_DISPOSISI}
                      </div>
                      <div className="font-bold">Tujuan </div>
                      <div className="col-span-2 ml-4">
                        {this.props.DisposisiDetail.TUJUAN_SURAT}
                      </div>

                      <div className="font-bold">Informasi / Isi Disposisi</div>
                      <div className="col-span-2 ml-4 mb-2">
                        {this.props.DisposisiDetail.INFORMASI}
                      </div>
                      <div className="font-bold ">Keterangan</div>
                      <div className="col-span-2 ml-4">
                        {this.props.DisposisiDetail.PROSES_SELANJUTNYA}
                      </div>
                      <div></div>

                      <div className="font-bold col-span-3 mb-2 mt-4">
                        Informasi Surat yang Didisposisikan
                      </div>

                      <div className="font-bold">Nomor Agenda Surat</div>
                      <div className="col-span-2 ml-4">
                        {this.props.DisposisiDetail.NOMOR_AGENDA}
                      </div>

                      <div className="font-bold">Dari</div>
                      <div className="font-bold ml-4">Nama</div>
                      <div className="">
                        : {this.props.DisposisiDetail.NAMA_PENGIRIM}
                      </div>
                      <div></div>
                      <div className="font-bold ml-4">Unit</div>
                      <div className="">
                        <ul>
                          {this.props.IdUnitKerja.map((item, index) => {
                            return (
                              <li key={index}>
                                {this.props.DisposisiDetail
                                  .ID_KODE_UNIT_KERJA ==
                                item.ID_KODE_UNIT_KERJA ? (
                                  <div className="">
                                    <p>
                                      : {item.KODE_UNIT_KERJA} -{' '}
                                      {item.NAMA_UNIT_KERJA}
                                    </p>
                                  </div>
                                ) : (
                                  <></>
                                )}
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                      <div></div>
                      <div className="font-bold ml-4">Penandatangan</div>
                      <div className="">
                        : {this.props.DisposisiDetail.PENANDATANGAN}
                      </div>

                      <div className="font-bold">Tujuan</div>
                      <div className="col-span-2 ml-4">
                        {this.props.DisposisiDetail.TUJUAN_SURAT}
                      </div>

                      <div className="font-bold">Nomor Surat</div>
                      <div className="col-span-2 ml-4">
                        {this.props.DisposisiDetail.NOMOR_SURAT}
                      </div>

                      <div className="font-bold">Perihal / Ringkasan Surat</div>
                      <div className="col-span-2 ml-4 mb-4">
                        {this.props.DisposisiDetail.PERIHAL}
                      </div>
                    </div>
                    <div>
                      <div className=" flex justify-end   ">
                        <button onClick={this.handleModal}>
                          <img src="assets/img/icon/x.png" />
                        </button>
                      </div>
                      <div className="flex justify-center p-2 ">
                        <div className="w-auto">
                          {this.props.DisposisiDetail.NOMOR_SURAT == null ? (
                            <> File kosong</>
                          ) : (
                            <>
                              <PdfReader
                                urlFile={this.state.url}
                                namaFile={
                                  this.props.DisposisiDetail.NOMOR_SURAT.split('/').join('_') +
                                  '_disposisi'
                                }
                              />
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
        {this.state.loading ? (
          <ModalLoading loading={this.state.loading} title={'Memeriksa data'} />
        ) : null}
      </>
    )
  }
}

// function mapStateToProps(state){
//     return state
// }

// export default connect(mapStateToProps.apply,{})(DetailDisposisi)
export default DetailDisposisi
