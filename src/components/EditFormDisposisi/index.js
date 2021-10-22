import axios from 'axios'
import api from '../../service/api'
import React, { Component, useState } from 'react'
import { connect } from 'react-redux'
import Kalender from '../AddFormSurat/Kalender'
import ModalLoading from '../ModalLoading'
// import DetailDisposisi from '../DetailDisposisi'

class EditFormDisposisi extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dir: [],
      showModal: this.props.showModal,
      modalLoading: false,
      firstDate: new Date(),
      lampiranDisposisi: null,
      idDiposisi: this.props.disposisi.ID_DISPOSISI,
      informasiDisposisi: this.props.disposisi.INFORMASI,
      keteranganDisposisi: this.props.disposisi.PROSES_SELANJUTNYA,
      pengguna: this.props.disposisi.ID_PENGGUNA,
      nomorAgenda: this.props.disposisi.NOMOR_AGENDA,
      tanggalDisposisi: this.props.disposisi.TANGGAL_DISPOSISI,
      // tujuanSurat: this.props.TUJUAN_SURAT,
      informasi: this.props.disposisi.INFORMASI,
      prosesSelanjutnya: this.props.disposisi.PROSES_SELANJUTNYA,
      namaFileDisposisi: this.props.disposisi.NAMA_FILE_DISPOSISI,
      errInformasiDisposisi: false,
      errKeteranganDisposisi: false,
      errSurat: '',
    }
    this.handleModal = this.handleModal.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.handleLoading = this.handleLoading.bind(this)

    this.onFileChange = this.onFileChange.bind(this)

    this.handleInformasiDisposisi = this.handleInformasiDisposisi.bind(this)
    this.handleKeteranganDisposisi = this.handleKeteranganDisposisi.bind(this)
    this.handleInputChangeCustom = this.handleInputChangeCustom.bind(this)
    this.handleTglDisposisi = this.handleTglDisposisi.bind(this)
    this.handleNamaFileDisposisi = this.handleNamaFileDisposisi.bind(this)

    this.handleErrInformasiDisposisi = this.handleErrInformasiDisposisi.bind(
      this,
    )
    this.handleErrKeteranganDisposisi = this.handleErrKeteranganDisposisi.bind(
      this,
    )
    this.handleErrSurat = this.handleErrSurat.bind(this)

    this.validateInformasiDisposisi = this.validateInformasiDisposisi.bind(this)
    this.validateKeteranganDIsposisi = this.validateKeteranganDIsposisi.bind(
      this,
    )
    this.validateSurat = this.validateSurat.bind(this)
  }

  validateInformasiDisposisi(input) {
    if (input == null || input == '') {
      this.handleErrInformasiDisposisi(true)
    } else {
      this.handleErrInformasiDisposisi(false)
    }
  }
  validateKeteranganDIsposisi(input) {
    if (input == null || input == '') {
      this.handleErrKeteranganDisposisi(true)
    } else {
      this.handleErrKeteranganDisposisi(false)
    }
  }
  validateSurat(input) {
    const extension = '.pdf'
    let result2 = this.state.lampiranDisposisi.name.match(extension)
    if (result2) {
      if (this.state.lampiranDisposisi.size > '10485760') {
        this.handleErrSurat('Ukuran file disposisi melebihi 10 Mb')
      } else {
        this.handleErrSurat('')
        let namasurat = this.state.nomorSurat.split('/').join('_')
        console.log('nama file disposisi: ' + namasurat)
        this.setState({
          namaFileDisposisi: namasurat,
        })
      }
    } else {
      this.handleErrSurat('file Disposisi file harus pdf')
    }
  }

  handleTglDisposisi(exDate, value) {
    this.setState({
      tanggalDisposisi: exDate,
    })
    this.setState({
      firstDate: value,
    })
  }
  handleErrInformasiDisposisi(props) {
    this.setState({
      errInformasiDisposisi: props,
    })
  }
  handleErrKeteranganDisposisi(props) {
    this.setState({
      errKeteranganDisposisi: props,
    })
  }
  handleErrSurat(props) {
    this.setState({
      errSurat: props,
    })
  }

  handleInformasiDisposisi(e) {
    let value = e.target.value
    let str = ''
    str = value.replace(/\s\s+/g, '')
    this.setState({
      informasiDisposisi: str,
    })
  }
  handleNamaFileDisposisi(e) {
    let value = e.target.value
    this.setState({
      namaFileDisposisi: value,
    })
  }
  handleKeteranganDisposisi(e) {
    let value = e.target.value
    let str = ''
    str = value.replace(/\s\s+/g, '')
    this.setState({
      keteranganDisposisi: str,
    })
  }
  handleLoading() {
    this.setState({
      modalLoading: !this.state.modalLoading,
    })
  }
  handleInputChangeCustom(e, index) {
    const { name, value } = e.target
    let str = ''
    str = name.replace(/\s\s+/g, '')
    const list = [...this.state.inputListSelect]
    list[index][str] = value
    this.handleInputListSelect(list)
  }
  async handleModal() {
    this.setState({
      showModal: !this.state.showModal,
      modalLoading: false,

      idDiposisi: this.props.disposisi.ID_DISPOSISI,
      informasiDisposisi: this.props.disposisi.INFORMASI,
      keteranganDisposisi: this.props.disposisi.PROSES_SELANJUTNYA,
      tanggalDisposisi: this.props.disposisi.TANGGAL_DISPOSISI,
      namaFileDisposisi: this.props.disposisi.NAMA_FILE_DISPOSISI,
      errInformasiDisposisi: false,
      errKeteranganDisposisi: false,

      errSurat: '',
      lampiranDisposisi: null,
    })
    console.log('ini edit disposisis')
    // console.log('detail surat: '+ this.props.SuratDetail)
    // console.log('detail disposisi: '+ this.props.disposisi)

    // console.log('detail disposisi: '+ this.props.disposisi)
    // console.log('tujuan surat: '+ this.props.TujuanSurat)
    // console.log('ID pencatatan: '+ this.props.IdPencatatan)
    // console.log('Jenis surat: '+ this.props.IdJenisSurat)
    // // console.log('id kode unit kerja: '+ this.props.IdUnitKerja)
    // console.log('kode unit kerja: '+ this.props.UnitKerja)
    // console.log('nomor surat masuk: '+ this.props.NomorSurat)
    // console.log('id surat masuk: '+ this.props.SuratMasuk)
    // console.log('id surat masuk: '+ this.props.SuratMasuk.ID_DISPOSISI)
    // console.log('id surat masuk: '+ this.props.SuratMasuk.INFORMASI)
    // console.log('id surat masuk: '+ this.props.SuratMasuk.PROSES_SELANJUTNYA)
    // console.log('pencatatan: '+ this.props.Pencatatan)
    // console.log('id disposisi: '+ this.props.disposisi.ID_DISPOSISI)

    console.log('surat detail......')
    console.log('tanggal disposisi' + this.props.disposisi.TANGGAL_DISPOSISI)
    console.log('first date: ' + this.state.firstDate)
    // console.log('tanggal detail '+this.props.disposisi.TANGGAL_DISPOSISI)
    // console.log('detail disposisi '+this.props.disposisi)
    // console.log('detail disposisi jenis surat: '+ this.props.Disposisi.JENIS_SURAT)
  }

  onFileChange(event) {
    this.setState({ lampiranDisposisi: event.target.file[0] })
  }
  async onSubmit(e) {
    e.preventDefault()
    // await this.validateInformasiDisposisi(this.state.informasiDisposisi)
    // await this.validateKeteranganDIsposisi(this.state.keteranganDisposisi)
    // if(
    //   this.state.errInformasiDisposisi == false &&
    //   this.state.errInformasiDisposisi == false
    // ){
    //   this.handleLoading()
    //   await api()
    //   .post('api/updateDisposisi',{
    //     informasiDisposisi: this.state.informasiDisposisi,
    //     keteranganDisposisi: this.state.keteranganDisposisi,
    //   })
    //   .then((Response)=>{
    //     this.setState({
    //       item:{
    //         informasiDisposisi: '',
    //         keteranganDisposisi:'',
    //       }
    //     })
    //     this.handleLoading()
    //     this.handleModal()
    //     window.location.reload('/#/Disposisi')
    //   })
    //   .catch((err)=>{
    //     console.log(err)
    //     this.handleLoading()
    //   })
    if (
      this.state.nomorAgenda != this.props.disposisi.NOMOR_AGENDA ||
      this.state.informasiDisposisi != this.props.disposisi.INFORMASI ||
      this.state.keteranganDisposisi !=
        this.props.disposisi.PROSES_SELANJUTNYA ||
      this.state.tanggalDisposisi != this.props.disposisi.TANGGAL_DISPOSISI ||
      this.state.namaFileDisposisi !=
        this.props.disposisi.NAMA_FILE_DISPOSISI ||
      this.state.lampiranDisposisi != null
    ) {
      await this.validateInformasiDisposisi(this.state.informasiDisposisi)
      await this.validateKeteranganDIsposisi(this.state.keteranganDisposisi)
      if (this.state.lampiranDisposisi != null) {
        await this.validateSurat(this.state.lampiranDisposisi)
      }

      if (
        this.state.errInformasiDisposisi == false &&
        this.state.errInformasiDisposisi == false
        // this.state.errSurat == false
      ) {
        this.handleLoading()
        // let fd = new FormData()
        let formData = new FormData()
        formData.append('id', this.props.disposisi.ID_DISPOSISI)
        formData.append('nomor_agenda', this.state.nomorAgenda)
        formData.append('informasi', this.state.informasiDisposisi)
        formData.append('proses_selanjutnya', this.state.keteranganDisposisi)
        formData.append('tanggal_disposisi', this.state.tanggalDisposisi)
        if (this.state.namaFileDisposisi != null) {
          formData.append(
            'nama_file_disposisi',
            this.state.namaFileDisposisi + '_disposisi',
          )
        }
        await api()
          .post('api/editDisposisi', formData)
          .then((response) => {
            // this.setState({
            //   item:{
            //     informasiDisposisi: '',
            //     keteranganDisposisi: '',
            //   },
            // })
            this.handleLoading()
            this.handleModal()
            window.location.reload('/#/Disposisi')
          })
          .catch((err) => {
            console.log(err)
            this.handleLoading()
          })
        if (this.state.lampiranDisposisi != null && this.state.errSurat == '') {
          let fd2 = new FormData()
          fd2.append('myFile', this.state.lampiranDisposisi)
          fd2.append('namefile', this.state.namaFileDisposisi)
          await api()
            .post('api/addSurat', fd2)
            .then((response) => {
              // if(this.state.lampiran == null){
              this.handleLoading()
              this.handleModal()
              window.location.reload('/#/Disposisi')
              // }
            })
        }
      }

      console.log('valid form')
    } else {
      console.log('error form')
      this.handleModal()
    }
  }
  render() {
    return (
      <>
        <button
          className="flex flex-row bg-primary font-bold items-center ml-2 mt-1  rounded p-1 h-auto shadow-sm w-auto "
          type="button"
          onClick={
            this.props.User.currentUser.ROLE == 3 ? null : this.handleModal
          }
        >
          <div className="ml-1">
            <img
              className="h-auto align-middle"
              src="assets/img/icon/Pencil.png"
            />
          </div>
          <div className="font-bold text-putih ml-1 mr-2">Edit Data </div>
        </button>
        {this.state.showModal ? (
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto h-auto my-6 mx-auto max-w-6xl">
              {/* content */}
              <div className="border-2 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/* header */}
                <div className="flex flex-row items-start p-2 border-b ml-6 border-solid border-blueGray-200 rounded-t col-span-3">
                  <div>
                    <img className="w-8" src="assets/img/icon/Surat.png" />
                  </div>
                  <div className="flex">
                    <h3 className="text-xl font-semibold">Edit Disposisi</h3>
                  </div>
                </div>
                <div className="flex flex-row grid grid-cols-2 mr-8">
                  <div className="flex flex-row grid grid-cols-3 bg-white p-4">
                    <div className="font-bold col-span-3">Detail Surat</div>
                    <div className="font-bold">No Agenda </div>
                    <div className=" col-span-2">
                      {this.props.SuratDetail.NOMOR_URUT}
                    </div>
                    <div className="font-bold">Pemohon</div>
                    <div className=" col-span-2">
                      {this.props.SuratDetail.NAMA_PEMOHON}
                    </div>
                    {/* <div className="font-bold">Nama</div>
                    <div className="">: 
                      {this.props.SuratDetail.NAMA_PENGIRIM}{' '}
                    </div>
                    <div></div>
                    <div className="font-bold">Unit</div>
                    <div className="">
                      <div className="">
                        <p>
                          : {this.props.SuratDetail.UNIT_PENGIRIM} -{' '}
                          {this.props.SuratDetail.UNIT_PENGIRIM}
                        </p>
                      </div>
                    </div>
                    <div></div>
                    <div className="font-bold">Penandatangan</div>
                    <div className="">: 
                      {this.props.SuratDetail.PENANDATANGAN}
                    </div> */}
                    <div className="font-bold">Tujuan</div>
                    <div className=" col-span-2">
                      {this.props.tujuanDisposisi.map((item, i) => {
                        return (
                          <div
                            key={i}
                            className={i == 0 ? ' col-span-2' : ' col-span-3'}
                          >
                            <div
                              className={
                                i == 0 ? '' : 'flex flex-row grid grid-cols-2'
                              }
                            >
                              <div></div>
                              <div className={i == 0 ? '' : ' col-span-2'}>
                                - {item.KODE_UNIT_KERJA} :{' '}
                                {item.NAMA_UNIT_KERJA}
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                    <div className="font-bold">Nomor Surat </div>
                    <div className=" col-span-2">
                      {this.props.SuratDetail.NOMOR_SURAT}
                    </div>
                    <div className="font-bold">Tanggal Surat </div>
                    <div className=" col-span-2">{this.props.tglSurat}</div>
                    <div className="font-bold">Tanggal Kirim </div>
                    <div className=" col-span-2">
                      {this.props.SuratDetail.TGL_KIRIM}
                    </div>
                    <div className="font-bold">Perihal / Ringkasan Surat </div>
                    <div className=" col-span-2">
                      {this.props.SuratDetail.PERIHAL}
                    </div>
                    {/* <div className="font-bold">Kode Hal </div>
                    <div className=" col-span-2">
                    {this.props.SuratDetail.JENIS_SURAT}
                    </div> */}
                    <div className="font-bold">Jenis Surat </div>
                    <div className=" col-span-2">
                      {this.props.SuratDetail.JENIS_SURAT}
                    </div>
                    <div className="font-bold">Sifat Surat </div>
                    <div className=" col-span-2">
                      {this.props.SuratDetail.SIFAT_NASKAH}
                    </div>
                    <div className="font-bold">Derajat Surat</div>
                    <div className=" col-span-2">
                      {this.props.SuratDetail.DERAJAT_SURAT}
                    </div>
                    <div className="font-bold">Kode Arsip</div>
                    <div className="font-bold">Kom</div>
                    <div className="">
                      :{this.props.SuratDetail.KODE_ARSIP_KOM}
                    </div>
                    <div></div>
                    <div className="font-bold">Hlm</div>
                    <div className="">
                      :{this.props.SuratDetail.KODE_ARSIP_HLM}
                    </div>
                    <div></div>
                    <div className="font-bold">Manual</div>
                    <div className="">
                      :{this.props.SuratDetail.KODE_ARSIP_MANUAL}
                    </div>
                    <div className="font-bold">Keterangan</div>
                    <div className=" col-span-2">
                      {this.props.disposisi.PROSES_SELANJUTNYA}
                    </div>
                    <div className="font-bold">Status Pengingat</div>
                    <div className=" col-span-2">
                      <div className=" flex flex-row">
                        <button
                          type="submit"
                          className="bg-biru   self-center ml-2 mt-1  rounded-full p-1 shadow-sm w-40%"
                        >
                          Aktif
                        </button>
                        <button
                          type="submit"
                          className="bg-primary font-bold  self-center ml-2 mt-1  rounded p-1 shadow-sm w-auto"
                        >
                          <img
                            className="h-auto align-middle"
                            src="assets/img/icon/Pencil.png"
                          />
                        </button>
                      </div>
                      <div className="text-sm">
                        Harus ditindaklanjuti dalam waktu 5 hari
                      </div>
                    </div>
                    <div className="font-bold">Status Tindak Lanjut</div>
                    <div className="font-bold rounded p-2 col-span-2 bg-danger w-75% text-putih">
                      Belum ditindak lanjuti
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-end">
                      <button onClick={this.handleModal}>
                        <img src="assets/img/icon/x.png" />
                      </button>
                    </div>
                    <div className="flex flex-row items-start p-2 ml-6 border-solid border-blueGray-200 rounded-t col-span-3">
                      <div>
                        <img className="w-8"></img>
                      </div>
                      <div className="flex">
                        <h3 className="text-xl font-semibold"></h3>
                      </div>
                    </div>
                    <div className="flex flex-row grid grid-cols-2 bg-white p-4">
                      <div className="font-bold col-span-2">Data Disposisi</div>
                      <form
                        className="mt-8"
                        action="#"
                        method="post"
                        // onSubmit{this.onSubmit}
                      >
                        <div className="flex flex-row grid grid-cols-2">
                          <div
                            htmlFor="nama"
                            className="text-sm mb-2 font-bold flex flex-row "
                          >
                            <div>Nomor Disposisi </div>
                            <div className="text-danger ml-2"> </div>
                          </div>
                          <div className="justify-end ">
                            <div className="">
                              {this.props.disposisi.NOMOR_AGENDA}
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row grid grid-cols-2">
                          <div
                            htmlFor="nama"
                            className="text-sm mb-2 font-bold flex flex-row "
                          >
                            <div>Tanggal Disposisi </div>
                            {console.log(
                              'tanggal disposisi ' +
                                this.state.tanggalDisposisi,
                            )}
                            <div className="text-danger ml-2"> </div>
                          </div>
                          <div className="justify-end ">
                            <div
                              type="text"
                              name="tanggalDisposisi"
                              required
                              id="tanggalDisposisi"
                              value={this.state.tanggalDisposisi}
                              className={
                                'focus:form-control   focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 focus:outline-none w-56 text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-2 mb-3'
                              }
                            >
                              <Kalender
                                onChange={(exDate, value) =>
                                  this.handleTglDisposisi(exDate, value)
                                }
                              />
                            </div>
                            {/* {this.state.errTglDisposisi ? (
                              <div className="text-danger text-xs mb-3">
                                Tanggal diterima harus diisi
                              </div>
                            ) : (
                              <></>
                            )} */}
                          </div>
                        </div>
                        <div className="flex flex-row grid grid-cols-2">
                          <div
                            htmlFor="nama"
                            className="text-sm mb-2 font-bold flex flex-row "
                          >
                            <div className="font-bold">Tujuan </div>
                          </div>
                          <div className="justify-end ">
                            <div className="">
                              {/* {this.props.SuratDetail.TUJUAN_SURAT} */}
                              {this.props.inputListSelect.map((x, i) => {
                                return (
                                  <div>
                                    {x.idUnit != null ||
                                    x.idUnit != undefined ? (
                                      <>
                                        <select
                                          name="idUnit"
                                          placeholder="Masukan nama unit"
                                          value={x.idUnit}
                                          onChange={(e) =>
                                            this.handleInputChangeCustom(e, i)
                                          }
                                          required
                                          id="tujuanSurat"
                                          className={
                                            'focus:form-control   focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 focus:outline-none  w-56 text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-2 '
                                          }
                                        >
                                          <option value="0">
                                            Pilih tujuan ...
                                          </option>
                                          {this.props.RUnitKerja.allUnitKerjaInfo.map(
                                            (item) => {
                                              return (
                                                <option
                                                  key={item.ID_KODE_UNIT_KERJA}
                                                  value={
                                                    item.ID_KODE_UNIT_KERJA
                                                  }
                                                >
                                                  {item.KODE_UNIT_KERJA}-
                                                  {item.NAMA_UNIT_KERJA}
                                                </option>
                                              )
                                            },
                                          )}
                                        </select>
                                        {x.err == true ? (
                                          <div className="text-danger text-xs mb-3">
                                            Tujuan surat harus diisi
                                          </div>
                                        ) : null}
                                      </>
                                    ) : (
                                      <>
                                        <input
                                          name="namaUnit"
                                          placeholder="Masukan nama unit"
                                          value={x.namaUnit}
                                          onChange={(e) =>
                                            this.handleInputChangeCustom(e, i)
                                          }
                                          required
                                          id="tujuanSurat"
                                          className={
                                            'focus:form-control   focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 focus:outline-none  w-56 text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-2 mb-3'
                                          }
                                        />
                                        <input
                                          className="ml10"
                                          name="kodeUnit"
                                          placeholder="Masukan kode unit"
                                          value={x.kodeUnit}
                                          required
                                          id="tujuanSurat"
                                          className={
                                            'focus:form-control  mb-1 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 focus:outline-none  w-56 text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-2 '
                                          }
                                          onChange={(e) =>
                                            this.handleInputChangeCustom(e, i)
                                          }
                                        />
                                        {x.err == true ? (
                                          <div className="text-danger text-xs mb-3">
                                            Kode unit, Nama unit harus diisi dan
                                            hanya huruf angka
                                          </div>
                                        ) : null}
                                      </>
                                    )}
                                  </div>
                                )
                              })}
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-row grid grid-cols-2">
                          <div
                            htmlFor="nama"
                            className="text-sm mb-2 font-bold flex flex-row "
                          >
                            <div>Informasi / Isi Disposisi </div>
                            <div className="text-danger ml-2"> </div>
                          </div>
                          <div className="justify-end ">
                            <textarea
                              type="text"
                              name="informasiDisposisi"
                              required
                              id="informasiDisposisi"
                              value={this.state.informasiDisposisi}
                              className={
                                'focus:form-control   focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 focus:outline-none  w-56 text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-2 mb-3'
                              }
                              onChange={this.handleInformasiDisposisi}
                            />
                            {this.state.errInformasiDisposisi ? (
                              <div className="text-danger text-xs mb-3">
                                Informasi terkait disposisi harus diisi
                              </div>
                            ) : (
                              <></>
                            )}
                          </div>
                        </div>
                        <div className="flex flex-row grid grid-cols-2">
                          <div
                            htmlFor="nama"
                            className="text-sm mb-2 font-bold flex flex-row "
                          >
                            <div>Keterangan / Proses Selanjutnya </div>
                            <div className="text-danger ml-2"> </div>
                          </div>
                          <div className="justify-end ">
                            <textarea
                              type="text"
                              name="keteranganDisposisi"
                              required
                              id="keteranganDisposisi"
                              value={this.state.keteranganDisposisi}
                              className={
                                'focus:form-control   focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 focus:outline-none w-56	  text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-2 mb-3'
                              }
                              onChange={this.handleKeteranganDisposisi}
                            />
                            {/* {this.state.errKeteranganDisposisi ? (
                              <div className="text-danger text-xs mb-3">
                                Keterangan terkait disposisi harus
                                diisi
                              </div>
                            ) : (
                              <></>
                            )} */}
                          </div>
                        </div>
                        <div className="flex flex-row grid grid-cols-2">
                          <div
                            htmlFor="nama"
                            className="text-sm mb-2 font-bold flex flex-row "
                          >
                            <div>File Disposisi </div>
                            <div className="text-danger ml-2"> </div>
                          </div>
                          <div className="justify-end ">
                            <input
                              type="file"
                              name="lampiranDisposisi"
                              required
                              id="lampiranDisposisi"
                              className={
                                'focus:form-control   focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 focus:outline-none w-56	  text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-2 mb-3'
                              }
                              onChange={this.onFileChange}
                            >
                              {/* {this.state.lastAgenda} */}
                            </input>
                          </div>
                        </div>
                        <div className="flex flex-row grid grid-cols-2 mb-4 mt-4  p-2">
                          <div></div>
                          <div className=" text-xs text-abu ">
                            Keterangan (*): data wajib diisi.
                          </div>
                        </div>
                        <div className="flex flex-row grid grid-cols-2 items-center">
                          <div></div>
                          <button
                            type="submit"
                            className="  p-1 border-2 rounded-md  bg-biru justify-center items-center"
                            onClick={this.onSubmit}
                            value="Add Disposisi"
                          >
                            Simpan
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
        <ModalLoading
          loading={this.state.modalLoading}
          title={'Sedang diproses sistem'}
        />
      </>
    )
  }
}
function mapStateProps(state) {
  return state
}
export default connect(mapStateProps, {})(EditFormDisposisi)
