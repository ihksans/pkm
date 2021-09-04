import React, { Component } from 'react'
//ini buat ngekoneksi redux
import api from '../../service/api'
import { connect } from 'react-redux'
import {} from '../../actions'
import AddFormSuratKeluar from '../AddFormSuratKeluar'
//Ini buat dependecies/library nya
//import + "nama variabel" + from + "nama librarynya";

class GenerateNoSurat extends Component {
  //deklarasi variabel
  constructor(props) {
    super()
    this.state = {
      showAddModal: false,
      jenisSurat: '',
      kodeHal: '',
      sifatSurat: '',
      idKodeHal: '',
      idSifatSurat: '',
      noUrut: null,
      finalNoUrut: null,
      tahunSurat: null,
      kodePt: null,
      isShowModal: false,
      typeNomor: null,
      faseGenerate2: false,
      generate: false,
      nomorSurat: null,
      idNomorSurat: null,
      errJenisSurat: false,
      errKodeHal: false,
      errSifatSurat: false,
      formNomor: new FormData(),
    }
    this.handleShowModal = this.handleShowModal.bind(this)
    this.handleJenisSurat = this.handleJenisSurat.bind(this)
    this.handleKodeHal = this.handleKodeHal.bind(this)
    this.handleSifatSurat = this.handleSifatSurat.bind(this)
    this.handleNoUrut = this.handleNoUrut.bind(this)

    this.validateForm = this.validateForm.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleGenerate = this.handleGenerate.bind(this)
  }
  //contoh method
  async handleSubmit() {
    var resultId = this.state.jenisSurat

    //proses
    await this.validateForm()
    if (
      this.state.errJenisSurat == false &&
      this.state.errSifatSurat == false &&
      this.state.errKodeHal == false
    ) {
      if (this.state.typeNomor == 1) {
        let formData = new FormData()
        // await api()
        //   .post('api/setNomorSurat', formData)
        //   .then((response) => {
        await api()
          .get('api/getLastNomorUrut')
          .then((response) => {
            let no = response.data.content.NOMOR_URUT + 1

            this.setState({
              nomorSurat:
                'Nomor ' + no + ' Tahun ' + response.data.content.TAHUN,
              showAddModal: true,
              isShowModal: false,
              //idNomorSurat: response.data.content.id,
              finalNoUrut: response.data.content.NOMOR_URUT + 1,
              formNomor: formData,
            })
          })
      } else if (this.state.typeNomor == 2 || this.state.typeNomor == 3) {
        this.setState({
          faseGenerate2: true,
        })
        if (this.state.typeNomor == 2) {
          if (
            this.state.sifatSurat != null &&
            this.state.sifatSurat != '' &&
            this.state.kodeHal != null &&
            this.state.kodeHal != ''
          ) {
            let formData = new FormData()

            formData.append('id_kode_unit', '1')
            formData.append('id_kode_hal', this.state.idKodeHal)
            formData.append('id_kode_pt', '1')
            formData.append('id_sifat_naskah', this.state.idSifatSurat)

            // await api()
            //   .post('api/setNomorSurat', formData)
            //   .then((response) => {
            await api()
              .get('api/getLastNomorUrut')
              .then((response) => {
                let no = response.data.content.NOMOR_URUT + 1
                this.setState({
                  nomorSurat:
                    this.state.sifatSurat +
                    '/' +
                    no +
                    '/' +
                    'PL1.R3/' +
                    this.state.kodeHal +
                    '/' +
                    response.data.content.TAHUN,
                  showAddModal: true,
                  isShowModal: false,
                  // idNomorSurat: response.data.content.id,
                  finalNoUrut: response.data.content.NOMOR_URUT + 1,
                  formNomor: formData,
                })
              })
          }
        } else {
          if (this.state.kodeHal != null && this.state.kodeHal != '') {
            let formData = new FormData()

            formData.append('id_kode_unit', '1')
            formData.append('id_kode_hal', this.state.idKodeHal)
            formData.append('id_kode_pt', '1')

            // await api()
            //   .post('api/setNomorSurat', formData)
            //   .then((response) => {
            await api()
              .get('api/getLastNomorUrut')
              .then((response) => {
                let no = response.data.content.NOMOR_URUT + 1
                this.setState({
                  nomorSurat:
                    no +
                    '/' +
                    'PL1.R3/' +
                    this.state.kodeHal +
                    '/' +
                    response.data.content.TAHUN,
                  showAddModal: true,
                  isShowModal: false,
                  // idNomorSurat: response.data.content.id,
                  finalNoUrut: response.data.content.NOMOR_URUT + 1,
                  formNomor: formData,
                })
              })
          }
        }
      }
    }
  }
  handleGenerate() {}
  handleJenisSurat(e) {
    let value = e.target.value
    this.props.AllJenisSurat.allJenisSurat.map((x, i) => {
      if (x.ID_JENIS_SURAT == value) {
        this.setState({
          typeNomor: x.TIPE_SURAT,
        })
      }
      if (value == 0 || value == null) {
        this.setState({
          typeNomor: null,
        })
      }
    })
    this.setState({
      jenisSurat: value,
    })
  }
  handleKodeHal(e) {
    let value = e.target.value
    this.props.RKodeHal.allKodeHal.map((x, i) => {
      if (x.ID_KODE_HAL == value) {
        this.setState({
          kodeHal: x.KODE_HAL,
        })
      }
      if (value == 0 || value == null) {
        this.setState({
          kodeHal: null,
        })
      }
    })
    this.setState({
      idKodeHal: value,
    })
  }
  handleSifatSurat(e) {
    let value = e.target.value
    this.props.RSifatSurat.allSifatSuratInfo.map((x, i) => {
      if (x.ID_SIFAT_NASKAH == value) {
        this.setState({
          sifatSurat: x.KODE_SIFAT_NASKAH,
        })
      }
      if (value == 0 || value == null) {
        this.setState({
          sifatSurat: null,
        })
      }
    })
    this.setState({
      idSifatSurat: value,
    })
  }
  handleNoUrut(input) {
    this.setState({
      noUrut: input,
    })
  }
  handleShowModal() {
    this.setState({
      isShowModal: !this.state.isShowModal,
      jenisSurat: '',
      kodeHal: '',
      sifatSurat: '',
      idKodeHal: '',
      idSifatSurat: '',
      noUrut: null,
      tahunSurat: null,
      kodePt: null,
      typeNomor: null,
      faseGenerate2: false,
      generate: false,
      nomorSurat: null,
      errJenisSurat: false,
      errKodeHal: false,
      errSifatSurat: false,
    })
  }
  isiVarA() {
    this.setState({
      a: 'aku',
    })
  }
  validateForm() {
    if (this.state.jenisSurat == null || this.state.jenisSurat == 0) {
      this.setState({
        errJenisSurat: true,
      })
    } else {
      this.setState({
        errJenisSurat: false,
      })
    }
    if (this.state.faseGenerate2 == true) {
      if (this.state.typeNomor == 2) {
        if (this.state.idKodeHal == null || this.state.idKodeHal == 0) {
          this.setState({
            errKodeHal: true,
          })
        } else {
          this.setState({
            errKodeHal: false,
          })
        }
        if (this.state.idSifatSurat == null || this.state.idSifatSurat == 0) {
          this.setState({
            errSifatSurat: true,
          })
        } else {
          this.setState({
            errSifatSurat: false,
          })
        }
      } else {
        if (this.state.idKodeHal == null || this.state.idKodeHal == 0) {
          this.setState({
            errKodeHal: true,
          })
        } else {
          this.setState({
            errKodeHal: false,
          })
        }
      }
    }
  }
  render() {
    return (
      //html
      //js
      <>
        <button
          className="flex flex-row bg-primary p-2 mt-4 hover:bg-orenHover focus:outline-none"
          type="button"
          onClick={this.handleShowModal}
        >
          <div className="ml-1">
            <img
              className="h-6 align-middle"
              src="assets/img/icon/Tambah.png"
            />
          </div>
          <div className="font-bold ml-1 mr-2">Tambah Data Surat</div>
        </button>
        <AddFormSuratKeluar
          showModal={this.state.showAddModal}
          nomorSurat={this.state.nomorSurat}
          //idNomorSurat={this.state.idNomorSurat}
          typeNomor={this.state.typeNomor}
          idJenisSurat={this.state.jenisSurat}
          noUrut={this.state.finalNoUrut}
          formNomor={this.state.formNomor}
        />
        {this.state.isShowModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto mx-auto max-w-6xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}

                  {/* <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t"> */}

                  {/*body*/}
                  <div className="relative p-6 flex-auto justify-center">
                    <div className="flex flex-row">
                      <div>
                        <img className="w-8" src="assets/img/icon/Surat.png" />
                      </div>
                      <div className="font-bold ml-2 text-md	">
                        Generate no surat
                      </div>
                    </div>
                    {this.state.faseGenerate2 == false ? (
                      <div className="flex flex-row grid grid-cols-2 p-2">
                        <div className="flex flex-row">
                          <div className="mt-2">Jenis Surat </div>
                          <div className="text-danger ml-2 mt-2"> *</div>
                        </div>
                        <div className="justify-end ">
                          <select
                            type="text"
                            name="jenisSurat"
                            required
                            id="jenisSurat"
                            className={
                              'focus:form-control   focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 focus:outline-none	 w-56 text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-2 mb-3'
                            }
                            value={this.state.jenisSurat}
                            onChange={this.handleJenisSurat}
                          >
                            <option value="0">Pilih Jenis Surat ...</option>
                            {this.props.AllJenisSurat.allJenisSurat.map(
                              (item, index) => {
                                return (
                                  <option
                                    key={item.ID_JENIS_SURAT}
                                    value={item.ID_JENIS_SURAT}
                                  >
                                    {item.JENIS_SURAT}
                                  </option>
                                )
                              },
                            )}
                          </select>
                          {this.state.errJenisSurat ? (
                            <div className="text-danger text-xs mb-3">
                              Jenis surat harus diisi
                            </div>
                          ) : (
                            <></>
                          )}
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="flex flex-row grid grid-cols-2 p-2">
                          <div className="flex flex-row">
                            <div className="mt-2">Kode Hal </div>
                            <div className="text-danger ml-2 mt-2"> *</div>
                          </div>
                          <div className="justify-end ">
                            <select
                              type="text"
                              name="kodeHal"
                              required
                              id="kodeHal"
                              className={
                                'focus:form-control   focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 focus:outline-none	 w-56 text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-2 mb-3'
                              }
                              value={this.state.idKodeHal}
                              onChange={this.handleKodeHal}
                            >
                              <option value="0">Pilih Kode Hal ...</option>
                              {this.props.RKodeHal.allKodeHal.map(
                                (item, index) => {
                                  return (
                                    <option
                                      key={item.ID_KODE_HAL}
                                      value={item.ID_KODE_HAL}
                                    >
                                      {item.KODE_HAL}-{item.HAL}
                                    </option>
                                  )
                                },
                              )}
                            </select>
                            {this.state.errKodeHal ? (
                              <div className="text-danger text-xs mb-3">
                                Kode Hal surat harus diisi
                              </div>
                            ) : (
                              <></>
                            )}
                          </div>
                        </div>
                        {this.state.typeNomor == 2 ? (
                          <div className="flex flex-row grid grid-cols-2 p-2">
                            <div className="flex flex-row">
                              <div className="mt-2">Sifat Surat </div>
                              <div className="text-danger ml-2 mt-2"> *</div>
                            </div>
                            <div className="justify-end ">
                              <select
                                type="text"
                                name="sifatSurat"
                                required
                                id="sifatSurat"
                                className={
                                  'focus:form-control   focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 focus:outline-none	 w-56 text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-2 mb-3'
                                }
                                value={this.state.idSifatSurat}
                                onChange={this.handleSifatSurat}
                              >
                                <option value="0">Pilih Sifat Surat ...</option>
                                {this.props.RSifatSurat.allSifatSuratInfo.map(
                                  (item, index) => {
                                    return (
                                      <option
                                        key={item.ID_SIFAT_NASKAH}
                                        value={item.ID_SIFAT_NASKAH}
                                      >
                                        {item.KODE_SIFAT_NASKAH}-
                                        {item.SIFAT_NASKAH}
                                      </option>
                                    )
                                  },
                                )}
                              </select>
                              {this.state.errSifatSurat ? (
                                <div className="text-danger text-xs mb-3">
                                  Sifat surat harus diisi
                                </div>
                              ) : (
                                <></>
                              )}
                            </div>
                          </div>
                        ) : null}
                      </>
                    )}
                  </div>

                  {/*footer*/}
                  <div className="flex items-center justify-center p-6 rounded-b grid grid-cols-2">
                    <div className="flex items-center justify-center content-center">
                      <button
                        className="rounded bg-abu text-red-500 background-transparent font-bold w-36 px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all"
                        type="button"
                        onClick={this.handleShowModal}
                      >
                        Tidak
                      </button>
                    </div>
                    <div className="flex items-center justify-center content-center">
                      {this.state.faseGenerate2 == false ? (
                        <button
                          type="submit"
                          className="rounded bg-danger text-putih background-transparent font-bold w-36 px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all hover:bg-red-700"
                          onClick={this.handleSubmit}
                        >
                          Selanjutnya
                        </button>
                      ) : (
                        <button
                          type="submit"
                          className="rounded bg-danger text-putih background-transparent font-bold w-36 px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all hover:bg-red-700"
                          onClick={this.handleSubmit}
                        >
                          Generate
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
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
})(GenerateNoSurat)
