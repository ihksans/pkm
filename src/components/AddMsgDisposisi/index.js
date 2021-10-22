import axios from 'axios'
import api from '../../service/api'
import React, { Component, useState } from 'react'
import { connect } from 'react-redux'
import ModalLoading from '../ModalLoading'

class AddMsgDisposisi extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dir: [],
      rnDate: new Date(),
      msgDisposisi: null,
      errorDeskripsi: false,
      showModal: false,
      modalLoading: false,
    }
    this.handleInputDeskripsi = this.handleInputDeskripsi.bind(this)
    this.handleErrorDeskripsi = this.handleErrorDeskripsi.bind(this)
    this.handleModal = this.handleModal.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.validateInputDeskripsi = this.validateInputDeskripsi.bind(this)
    this.handleLoading = this.handleLoading.bind(this)
  }
  handleModal() {
    this.setState({
      showModal: !this.state.showModal,
      modalLoading: false,
      msgDisposisi: null,
      errorDeskripsi: false,
    })
  }
  handleErrorDeskripsi(props) {
    this.setState({
      errorDeskripsi: props,
    })
  }
  handleInputDeskripsi(e) {
    let value = e.target.value

    this.setState({
      msgDisposisi: value,
    })
  }
  handleLoading() {
    this.setState({
      modalLoading: !this.state.modalLoading,
    })
  }
  async onSubmit(e) {
    e.preventDefault()
    await this.validateInputDeskripsi(this.state.msgDisposisi)
    if (this.state.errorDeskripsi == false) {
      this.handleLoading()
      this.setState({
        status: 1,
      })
      let formData = new FormData()
      formData.append('id', this.props.IdDispo)
      formData.append('komentar_disposisi', this.state.msgDisposisi)
      api()
        .post('api/addMsgDisposisi', formData)
        .then((response) => {
          this.setState({
            item: {
              msgDisposisi: '',
            },
          })
          this.handleLoading()
          this.handleModal()
          //window.location.reload('/#/SuratMasuk')
        })
        .catch((err) => {
          console.log(err)
          this.handleLoading()
        })
      console.log('valid form')
    } else {
      console.log('error form')
    }
  }
  validateInputDeskripsi(input) {
    if (input == null || input == '') {
      this.handleErrorDeskripsi(true)
    } else {
      this.handleErrorDeskripsi(false)
    }
  }
  render() {
    return (
      <>
        {this.state.showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 h-auto mx-auto max-w-6xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-auto h-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-center ">
                    <button
                      className="p-1 ml-auto  border-2 float-right  leading-none  outline-none focus:outline-none"
                      onClick={this.handleModal}
                    >
                      <img
                        className="justify-center items-center"
                        src="assets/img/icon/x.png"
                      />
                    </button>
                  </div>
                  <div className="flex flex-row items-start p-2 border-b ml-6 border-solid border-blueGray-200 rounded-t">
                    <div>
                      <img className="w-8" src="assets/img/icon/Surat.png" />
                    </div>
                    <div className="flex ">
                      <h3 className="text-xl font-semibold  ">
                        Tambah Komentar Surat
                      </h3>
                    </div>
                  </div>

                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <div className="my-4 text-blueGray-500 text-lg leading-relaxed">
                      {/* <FormData /> */}
                      <form
                        className="mt-8"
                        action="#"
                        method="POST"
                        onSubmit={this.onSubmit}
                      >
                        <div>
                          <div className="">
                            <div>
                              <div className="flex flex-row grid grid-cols-2">
                                <div
                                  htmlFor="nama"
                                  className="text-sm mb-2 font-bold flex flex-row "
                                >
                                  <div>Komentar </div>
                                  <div className="text-danger ml-2"> *</div>
                                </div>
                                <div className="justify-end ">
                                  <textarea
                                    type="text"
                                    name="deskripsiPengingat"
                                    required
                                    id="deskripsiPengingat"
                                    placeholder="Masukkan deskripsi pengingat"
                                    className={
                                      'focus:form-control   focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 focus:outline-none  w-56 text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-2 mb-3'
                                    }
                                    onChange={this.handleInputDeskripsi}
                                  />
                                  {this.state.errorDeskripsi ? (
                                    <div className="text-danger text-xs mb-3">
                                      Komentar harus diisi
                                    </div>
                                  ) : (
                                    <></>
                                  )}
                                </div>
                              </div>

                              <div className="flex flex-row grid grid-cols-2 mb-4 mt-4  p-2"></div>
                              <div className="flex flex-row grid grid-cols-2">
                                <div></div>
                                <button
                                  type="submit"
                                  className="w-2/3 p-1 border-2 rounded-md text-sm text-white font-bold bg-biru justify-center align-center hover:bg-biruduaHover focus:outline-none"
                                  onClick={this.onSubmit}
                                  value="Add Pengguna"
                                >
                                  Simpan Komentar
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : (
          <button
            className="flex flex-row bg-primary font-bold items-center ml-2 mt-1 rounded p-2 shadow-sm  hover:bg-orenHover focus:outline-none"
            type="button"
            onClick={this.handleModal}
          >
            <div className="ml-1">
              <img
                className="h-4 align-middle"
                src="assets/img/icon/Surat.png"
              />
            </div>
            <div className="font-bold text-black ml-1 mr-2">
              Tambah Komentar
            </div>
          </button>
        )}
        <ModalLoading
          loading={this.state.modalLoading}
          title={'Sedang diproses sistem'}
        />
      </>
    )
  }
}

function mapStateToProps(state) {
  return state
}
export default connect(mapStateToProps, {})(AddMsgDisposisi)
