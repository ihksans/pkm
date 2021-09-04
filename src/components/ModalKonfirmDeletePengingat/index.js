import api from '../../service/api'
import React, { Component, useState } from 'react'
import { connect } from 'react-redux'
import ModalLoading from '../ModalLoading'

class ModalConfirmDeletePengingat extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dir: [],
      idPengingat: this.props.idPengingat,
      showModal: false,
      modalLoading: false,
    }
    this.handleModal = this.handleModal.bind(this)
    this.onDelete = this.onDelete.bind(this)
    this.handleLoading = this.handleLoading.bind(this)
  }
  handleModal() {
    this.setState({
      showModal: !this.state.showModal,
      modalLoading: false,
      idPengingat: this.props.idPengingat,
    })
  }

  handleLoading() {
    this.setState({
      modalLoading: !this.state.modalLoading,
    })
  }

  async onDelete() {
    await api()
      .delete('/api/deletePengingat/' + this.state.idPengingat)
      .then((response) => {
        console.log('respon:' + response)
        this.handleLoading()
        window.location.reload('/#/SuratMasuk')
      })
      .catch((error) => {
        console.log(error)
        this.handleLoading()
      })
  }

  render() {
    return (
      <>
        <button
          type="submit"
          className=" w-2/3 p-1 border-2 rounded-md text-sm text-white font-bold bg-oren justify-center align-center hover:bg-orenHover focus:outline-none"
          onClick={this.handleModal}
          value="Nonactived Reminder"
        >
          Hapus Pengingat
        </button>
        {this.state.showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-2/5 mx-auto max-w-6xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}

                  {/* <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t"> */}
                  <div className=" items-start justify-center rounded-t">
                    <div className=" flex justify-center">
                      <img
                        className="justify-self-center w-20 mt-6"
                        src="assets/img/icon/Warning.png"
                      />
                    </div>
                    <div className="flex justify-center">
                      <h3 className="text-xl font-semibold mt-3">Konfirmasi</h3>
                    </div>
                    {/* </div> */}
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={this.handleModal}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto justify-center">
                    <p className="my-4 text-blueGray-500 text-md leading-relaxed text-center">
                      Anda ingin menghapus Pengingat dari Surat ini?
                    </p>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-center p-6 rounded-b grid grid-cols-2">
                    <div className="flex items-center justify-center content-center">
                      <button
                        className="rounded bg-abu text-red-500 background-transparent font-bold w-36 px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all focus:outline-none"
                        type="button"
                        onClick={this.handleModal}
                      >
                        Tidak
                      </button>
                    </div>
                    <div className="flex items-center justify-center content-center">
                      <button
                        type="submit"
                        className="rounded bg-danger text-putih background-transparent font-bold w-36 px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all hover:bg-red-700 focus:outline-none"
                        onClick={this.onDelete}
                      >
                        Ya
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
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
export default connect(mapStateToProps, {})(ModalConfirmDeletePengingat)
