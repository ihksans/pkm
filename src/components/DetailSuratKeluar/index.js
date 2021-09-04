import axios from 'axios'
import api from '../../service/api'
import React, { Component, useState } from 'react'
import { connect } from 'react-redux'
import PdfReader from '../PdfReader'
import ModalKonfirmDeleteSK from '../ModalKonfirmDeleteSK.js'
import EditFormSuratKeluar from '../EditFormSuratKeluar'
import ModalLoading from '../ModalLoading'

import UpdateReminder from '../FormUpdateReminder'
import UpdateTindakLanjut from '../FormUpdateReminder/updateTL'
import AddReminder from '../FormAddReminder'
import moment from 'moment'

import Modal from '../AddFormDisposisiKeluar/modal.js'
class DetailSuratKeluar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dir: [],
      tujuanPencatatan: [],
      pengingat: null,
      count: null,
      numPages: '',
      pageNumber: '',
      url: null,
      urlLampiran: null,
      getP: false,
      showModal: false,
      showPengingatModal: false,
      hiddenTLModal: false,
      pengguna: this.props.AllUser.allUserInfo,
      tglSurat: this.props.SuratDetail.TGL_SURAT,
      tglKirim: this.props.SuratDetail.TGL_KIRIM,
      modalLodaing: false,
      loading: false,
      sifatNaskah: null,
      kodeHal: null,
      kodePt: null,
      kodeUnit: null,
    }
    this.handleLoading = this.handleLoading.bind(this)

    this.onSubmit = this.onSubmit.bind(this)
    this.handleModal = this.handleModal.bind(this)
    this.handlePengingatModal = this.handlePengingatModal.bind(this)
    this.handleTujuanPencatatan = this.handleTujuanPencatatan.bind(this)
    this.handleTindakLanjutModal = this.handleTindakLanjutModal.bind(this)
    this.getFileSuratMasuk = this.getFileSuratMasuk.bind(this)
    this.getPengingatSurat = this.getPengingatSurat.bind(this)

    this.reserveTgl = this.reserveTgl.bind(this)
  }
  //handle input changes and update item state
  async handleTujuanPencatatan() {
    await api()
      .get(
        'api/getDetailTujuanPencatatan/' + this.props.SuratDetail.ID_PENCATATAN,
      )
      .then((response) => {
        this.setState({
          tujuanPencatatan: response.data.content,
        })
      })
    await api()
      .get('api/getSifatNaskah/' + this.props.SuratDetail.ID_SIFAT_NASKAH)
      .then((response) => {
        this.setState({
          sifatNaskah:
            response.data.KODE_SIFAT_NASKAH +
            ' - ' +
            response.data.SIFAT_NASKAH,
        })
      })
    await api()
      .get('api/getKodeHal/' + this.props.SuratDetail.ID_KODE_HAL)
      .then((response) => {
        this.setState({
          kodeHal: response.data.KODE_HAL + ' - ' + response.data.HAL,
        })
      })
  }
  handleLoading() {
    this.setState({
      loading: !this.state.loading,
    })
  }
  async handleModal() {
    if (this.state.tujuanPencatatan.length == 0) {
      this.handleTujuanPencatatan()
    }
    if (this.state.url == null || this.state.urlLampiran == null) {
      this.handleLoading()
      await this.getFileSuratMasuk()
      this.handleLoading()
    }
    await this.setState({
      showModal: !this.state.showModal,
      getP: !this.state.getP,
    })
    if (this.state.showModal == true) {
      this.reserveTgl()
      this.getPengingatSurat()
    }
  }
  async handlePengingatModal() {
    await this.setState({
      showPengingatModal: !this.state.showPengingatModal,
    })
  }
  async handleTindakLanjutModal() {
    await this.setState({
      hiddenTLModal: !this.state.hiddenTLModal,
    })
  }
  reserveTgl() {
    let a = this.state.tglSurat.split('-')
    let b = this.state.tglKirim.split('-')

    this.setState({
      tglSurat: a[2] + '-' + a[1] + '-' + a[0],
      tglKirim: b[2] + '-' + b[1] + '-' + b[0],
    })
  }
  async getPengingatSurat() {
    this.setState({
      pengingat: null,
    })
    if (this.state.getP == true) {
      this.props.Pengingat.allPengingatInfo.map((item) => {
        const temp = this.props.SuratDetail.ID_PENCATATAN
        const temp2 = item.ID_PENCATATAN
        if (temp == temp2) {
          this.setState({
            pengingat: item,
          })
          const rn = moment(new Date())
          this.setState({
            count:
              Math.abs(rn.diff(this.state.pengingat.WAKTU_PENGINGAT, 'days')) +
              1,
          })
        }
      })
    }
  }
  async onSubmit(e) {
    e.preventDefault()
  }
  async getFileSuratMasuk() {
    if (this.props.namaFile != null) {
      let formData = new FormData()
      formData.append('namafile', this.props.namaFile)

      await api()
        .post('/api/getSurat', formData)
        .then((response) =>
          this.setState({
            url: response.data.url,
          }),
        )
    }
    if (this.props.namaLampiran != null) {
      let formData = new FormData()
      formData.append('namafile', this.props.namaLampiran)

      await api()
        .post('/api/getSurat', formData)
        .then((response) =>
          this.setState({
            urlLampiran: response.data.url,
          }),
        )
    }
  }

  render() {
    return (
      <>
        <button
          type="submit"
          className="bg-primary font-bold  self-center ml-2 mt-1  rounded p-1 shadow-sm w-75% hover:bg-orenHover focus:outline-none"
          onClick={this.handleModal}
        >
          Lihat Detail
        </button>

        {this.state.showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto h-90% mx-auto max-w-6xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-abu outline-none focus:outline-none">
                  {/* header*/}

                  <div className="flex flex-row grid grid-cols-2">
                    <div className="flex flex-row grid grid-cols-3 bg-white p-4 rounded-l-lg">
                      <div className="flex flex-row items-start p-2 col-span-3">
                        <div>
                          <img
                            className="w-8"
                            src="assets/img/icon/Surat.png"
                          />
                        </div>
                        <div className="flex ">
                          <h3 className="text-xl font-semibold ">
                            Detail Surat Keluar
                          </h3>
                        </div>
                      </div>
                      <div className="flex flex-row col-span-3 mb-4">
                        <EditFormSuratKeluar
                          SuratDetail={this.props.SuratDetail}
                          tujuanPencatatan={this.state.tujuanPencatatan}
                        />
                        <Modal
                          namaFile={this.props.NamaFileSurat}
                          SuratDetail={this.props.SuratDetail}
                          namaLampiran={this.props.NamaFileLampiran}
                          jenisSurat={this.props.jenisSurat}
                          IdUnitKerja={this.props.IdUnitKerja}
                          pengingatS={this.state.pengingat}
                          countDays={this.state.count}
                          disposisi={this.props.Disposisi}
                          tujuanPencatatan={this.state.tujuanPencatatan}
                          tujuanDisposisi={this.state.tujuanDisposisi}
                        />

                        <ModalLoading loading={this.state.modalLodaing} />

                        <ModalKonfirmDeleteSK
                          NomorSurat={this.props.SuratDetail.NOMOR_SURAT}
                          IdSurat={this.props.SuratDetail.ID_PENCATATAN}
                          IdNomor={this.props.SuratDetail.ID_NOMOR_SURAT}
                        />
                      </div>
                      <div className="font-bold">Dicatat oleh </div>

                      <div className="col-span-2">
                        {this.props.SuratDetail.NAMA}
                      </div>
                      <div className="font-bold">No Agenda </div>
                      <div className=" col-span-2">
                        {this.props.SuratDetail.NOMOR_URUT}
                      </div>
                      <div className="font-bold">Pemohon </div>

                      <div className="col-span-2">
                        {this.props.SuratDetail.NAMA_PEMOHON}
                      </div>

                      <div className="font-bold">Penandatangan</div>
                      <div className=" col-span-2">
                        {this.props.SuratDetail.PENANDATANGAN}
                      </div>

                      <div className="font-bold">Tujuan</div>
                      {this.state.tujuanPencatatan.length == 0 ? (
                        <div className="col-span-2">-</div>
                      ) : (
                        this.state.tujuanPencatatan.map((item, i) => {
                          return (
                            <div
                              key={i}
                              className={i == 0 ? ' col-span-2' : ' col-span-3'}
                            >
                              <div
                                className={
                                  i == 0 ? '' : 'flex flex-row grid grid-cols-3'
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
                        })
                      )}

                      <div className="font-bold">Nomor Surat</div>
                      <div className=" col-span-2">
                        {this.props.SuratDetail.NOMOR_SURAT}
                      </div>
                      <div className="font-bold">Tanggal Surat</div>
                      <div className=" col-span-2">
                        {/* {this.props.SuratDetail.TGL_SURAT} */}
                        {this.state.tglSurat}
                      </div>
                      <div className="font-bold">Tanggal Kirim</div>
                      <div className=" col-span-2">{this.state.tglKirim}</div>
                      <div className="font-bold">Perihal / Ringkasan Surat</div>
                      <div className=" col-span-2">
                        <p className="text-left overflow-ellipsis overflow-hidden">
                          {this.props.SuratDetail.PERIHAL}
                        </p>
                      </div>
                      <div className="font-bold">Jenis Surat</div>
                      <div className=" col-span-2">
                        {this.props.SuratDetail.JENIS_SURAT}
                      </div>
                      {this.props.SuratDetail.TIPE_SURAT == 2 ? (
                        <div className="font-bold">Sifat Surat</div>
                      ) : null}
                      {this.props.SuratDetail.TIPE_SURAT == 2 ? (
                        <div className=" col-span-2">
                          {this.state.sifatNaskah}
                        </div>
                      ) : null}
                      {this.props.SuratDetail.TIPE_SURAT != 1 ? (
                        <div className="font-bold">Kode Hal</div>
                      ) : null}
                      {this.props.SuratDetail.TIPE_SURAT != 1 ? (
                        <div className=" col-span-2">{this.state.kodeHal} </div>
                      ) : null}
                      <div className="font-bold">Derajat Surat</div>
                      <div className="col-span-2">
                        <>{this.props.SuratDetail.DERAJAT_SURAT}</>
                      </div>
                      <div className="font-bold">Kode Arsip</div>
                      <div className="font-bold">Kom</div>
                      <div className="">
                        : {this.props.SuratDetail.KODE_ARSIP_KOM}
                      </div>
                      <div></div>
                      <div className="font-bold">Hlm</div>
                      <div className="">
                        : {this.props.SuratDetail.KODE_ARSIP_HLM}
                      </div>
                      <div></div>
                      <div className="font-bold">Manual</div>
                      <div className="">
                        : {this.props.SuratDetail.KODE_ARSIP_MANUAL}
                      </div>

                      <div className="font-bold">Status Pengingat</div>
                      <div className=" col-span-2">
                        <div className=" flex flex-row">
                          {this.state.pengingat == null ? (
                            <>
                              <button
                                type="submit"
                                className="bg-abu self-center mt-1 rounded-full p-1 shadow-sm w-40% cursor-default focus:outline-none"
                              >
                                Tidak Aktif
                              </button>
                            </>
                          ) : (
                            <>
                              {this.state.pengingat.STATUS == 1 ? (
                                <>
                                  <button
                                    type="submit"
                                    className="bg-biru self-center mt-1 rounded-full p-1 shadow-sm w-40% cursor-default focus:outline-none"
                                  >
                                    Aktif
                                  </button>
                                </>
                              ) : (
                                <>
                                  <button
                                    type="submit"
                                    className="bg-abu self-center mt-1 rounded-full p-1 shadow-sm w-40% cursor-default focus:outline-none"
                                  >
                                    Tidak Aktif
                                  </button>
                                </>
                              )}
                            </>
                          )}

                          <button
                            type="submit"
                            className="bg-primary font-bold  self-center ml-2 mt-1 rounded p-1 shadow-sm w-auto hover:bg-orenHover hover:shadow focus:outline-none"
                            onClick={this.handlePengingatModal}
                          >
                            <img
                              className="h-auto align-middle"
                              src="assets/img/icon/Pencil.png"
                            />
                          </button>
                        </div>
                        {this.state.pengingat != null ? (
                          <>
                            {this.state.pengingat.STATUS == 1 ? (
                              <>
                                <div className="text-sm">
                                  Harus ditindaklanjuti dalam waktu{' '}
                                  {this.state.count} hari
                                </div>
                              </>
                            ) : (
                              <>
                                <div className="text-sm"></div>
                              </>
                            )}
                          </>
                        ) : (
                          <>
                            <div className="text-sm"></div>
                          </>
                        )}
                      </div>
                      <div className="font-bold">Status Tindak Lanjut</div>

                      {this.state.pengingat == null ? (
                        <>
                          <button className="font-semibold self-center rounded-md p-1 col-span-2 bg-danger w-75% text-putih pointer-events-none">
                            Belum ditindaklanjuti
                          </button>
                        </>
                      ) : (
                        <>
                          {this.state.pengingat.STATUS == 0 ? (
                            <>
                              <button className="font-semibold self-center rounded-md p-1 col-span-2 bg-green-500 w-75% text-putih pointer-events-none">
                                Sudah ditindaklanjuti
                              </button>
                            </>
                          ) : (
                            <>
                              <button
                                type="button"
                                className="font-semibold self-center rounded-md p-1 col-span-2 bg-danger w-75% text-putih"
                                onClick={this.handleTindakLanjutModal}
                              >
                                Belum ditindaklanjuti
                              </button>
                            </>
                          )}
                        </>
                      )}
                    </div>
                    <div className="flex flex-row grid p-4 rounded-r-lg">
                      <div className="flex flex-row justify-end">
                        <button
                          className="hover:shadow-md focus:outline-none"
                          onClick={this.handleModal}
                        >
                          <img src="assets/img/icon/x.png" />
                        </button>
                      </div>
                      <div className="flex flex-row justify-center">
                        <div className="w-auto">
                          {this.props.namaFile == null ? (
                            <> File kosong</>
                          ) : (
                            <>
                              <PdfReader
                                urlFile={this.state.url}
                                namaFile={
                                  this.props.SuratDetail.NAMA_FILE_SURAT
                                }
                                namaLampiran={
                                  this.props.SuratDetail.NAMA_FILE_LAMPIRAN
                                }
                                urlLampiran={this.state.urlLampiran}
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
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
        {this.state.showPengingatModal ? (
          <>
            {this.state.pengingat == null ? (
              <>
                <AddReminder
                  SuratDetail={this.props.SuratDetail}
                  idPencatatan={this.props.SuratDetail.ID_PENCATATAN}
                  noAgenda={this.props.SuratDetail.NOMOR_AGENDA}
                  idDerajatSurat={this.props.SuratDetail.ID_DERAJAT_SURAT}
                />
              </>
            ) : (
              <>
                <UpdateReminder
                  idPengingat={this.state.pengingat.ID_PENGINGAT}
                  idPengguna={this.state.pengingat.ID_PENGGUNA}
                  idPencatatan={this.state.pengingat.ID_PENCATATAN}
                  waktuPengingat={this.state.pengingat.WAKTU_PENGINGAT}
                  deskripsiPengingat={this.state.pengingat.DESKRIPSI}
                  status={this.state.pengingat.STATUS}
                  noAgenda={this.props.SuratDetail.NOMOR_AGENDA}
                  idDerajatSurat={this.props.SuratDetail.ID_DERAJAT_SURAT}
                />
              </>
            )}
          </>
        ) : null}
        {this.state.hiddenTLModal ? (
          <>
            <UpdateTindakLanjut
              idPengingat={this.state.pengingat.ID_PENGINGAT}
              idPengguna={this.state.pengingat.ID_PENGGUNA}
              idPencatatan={this.state.pengingat.ID_PENCATATAN}
              waktuPengingat={this.state.pengingat.WAKTU_PENGINGAT}
              deskripsiPengingat={this.state.pengingat.DESKRIPSI}
              status={this.state.pengingat.STATUS}
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
export default connect(mapStateToProps, {})(DetailSuratKeluar)
