import axios from 'axios'
import api from '../../service/api'
import React, { Component, useState } from 'react'
import { connect } from 'react-redux'
import ModalLoading from '../ModalLoading'
// import createuser from "./index";
class FormUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dir: [],
      modalLoading: false,
      nama: '',
      username: '',
      role: '',
      password: '',
      jabatan: '',
      nip: '',
      confirmPass: '',
      showModal: false,
      errorNama: false,
      errorUsername: false,
      errorRole: false,
      errorPassword: false,
      errorConfirmPass: false,
      errorAvailableUsername: false,
      errorJabatan: false,
      errorNip: false,
    }
    this.handleLoading = this.handleLoading.bind(this)
    this.handleInputNama = this.handleInputNama.bind(this)
    this.handleInputUsername = this.handleInputUsername.bind(this)
    this.handleInputRole = this.handleInputRole.bind(this)
    this.handleInputPassword = this.handleInputPassword.bind(this)
    this.handleInputConfirmPass = this.handleInputConfirmPass.bind(this)
    this.handleInputJabatan = this.handleInputJabatan.bind(this)
    this.handleInputNIP = this.handleInputNIP.bind(this)

    this.handleErrorNama = this.handleErrorNama.bind(this)
    this.handleErrorUsername = this.handleErrorUsername.bind(this)
    this.handleErrorRole = this.handleErrorRole.bind(this)
    this.handleErrorPassword = this.handleErrorPassword.bind(this)
    this.handleErrorConfirmPassword = this.handleErrorConfirmPassword.bind(this)
    this.handleErrorAvailableUsername = this.handleErrorAvailableUsername.bind(
      this,
    )
    this.handleErrorJabatan = this.handleErrorJabatan.bind(this)
    this.handleErrorNIP = this.handleErrorNIP.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.handleModal = this.handleModal.bind(this)
    this.validateInputNama = this.validateInputNama.bind(this)
    this.validateInputUsername = this.validateInputUsername.bind(this)
    this.validateInputRole = this.validateInputRole.bind(this)
    this.validateInputPassword = this.validateInputPassword.bind(this)
    this.validateInputConfirmPass = this.validateInputConfirmPass.bind(this)
    this.validateAvailableUsername = this.validateAvailableUsername.bind(this)
    this.validateJabatan = this.validateJabatan.bind(this)
    this.validateNIP = this.validateNIP.bind(this)
  }
  //handle input changes and update item state
  handleErrorAvailableUsername(props) {
    this.setState({ errorAvailableUsername: props })
  }
  handleErrorNama(props) {
    this.setState({
      errorNama: props,
    })
  }
  handleErrorUsername(props) {
    this.setState({
      errorUsername: props,
    })
  }
  handleErrorPassword(props) {
    this.setState({
      errorPassword: props,
    })
  }
  handleErrorConfirmPassword(props) {
    this.setState({
      errorConfirmPass: props,
    })
  }
  handleErrorRole(props) {
    this.setState({
      errorRole: props,
    })
  }
  handleErrorJabatan(props) {
    this.setState({
      errorJabatan: props,
    })
  }
  handleErrorNIP(props) {
    this.setState({
      errorNip: props,
    })
  }
  handleModal() {
    this.setState({
      showModal: !this.state.showModal,
      nama: '',
      username: '',
      role: '',
      password: '',
      jabatan: '',
      nip: '',
      confirmPass: '',
      errorNama: false,
      errorUsername: false,
      errorRole: false,
      errorPassword: false,
      errorConfirmPass: false,
      errorAvailableUsername: false,
      errorJabatan: false,
      errorNip: false,
      modalLoading: false,
    })
  }
  handleInputNama(e) {
    let value = e.target.value

    this.setState({
      nama: value,
    })
  }
  handleInputUsername(e) {
    let value = e.target.value
    this.setState({ username: value })
  }
  handleInputRole(e) {
    let value = e.target.value
    this.setState({ role: value })
  }
  handleInputPassword(e) {
    let value = e.target.value
    this.setState({ password: value })
  }
  handleInputConfirmPass(e) {
    let value = e.target.value
    this.setState({ confirmPass: value })
  }
  handleInputJabatan(e) {
    let value = e.target.value
    this.setState({ jabatan: value })
  }
  handleInputNIP(e) {
    let value = e.target.value
    this.setState({ nip: value })
  }
  handleLoading() {
    this.setState({
      modalLoading: !this.state.modalLoading,
    })
  }
  async onSubmit(e) {
    e.preventDefault()
    await this.validateInputUsername(this.state.username)
    await this.validateInputNama(this.state.nama)
    await this.validateInputRole(this.state.role)
    await this.validateInputPassword(this.state.password)
    await this.validateInputConfirmPass(this.state.confirmPass)
    await this.validateAvailableUsername(this.state.username)
    await this.validateNIP(this.state.nip)
    await this.validateJabatan(this.state.jabatan)
    // console.log('length' + this.state.username.length)
    // console.log('con pass:' + this.state.confirmPass)
    console.log('available us :' + this.state.errorAvailableUsername)
    if (
      this.state.errorNama == false &&
      this.state.errorUsername == false &&
      this.state.errorPassword == false &&
      this.state.errorConfirmPass == false &&
      this.state.errorRole == false &&
      this.state.errorAvailableUsername == false &&
      this.state.errorJabatan == false &&
      this.state.errorNip == false
    ) {
      this.handleLoading()

      api()
        .post('api/createUser', {
          NAMA: this.state.nama,
          USERNAME: this.state.username,
          ROLE: this.state.role,
          PASSWORD: this.state.password,
          JABATAN: this.state.jabatan,
          NIP: this.state.nip,
        })
        .then((response) => {
          this.setState({
            item: {
              nama: '',
              username: '',
              role: '',
              password: '',
              nip: '',
              jabatan: '',
            },
          })
          this.handleLoading()
          this.handleModal()
          window.location.reload('/#/KelolaPengguna')
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
  validateJabatan(input) {
    const re = /^[a-zA-Z0-9 ]*$/
    let result = input.match(re)
    if (result) {
      if (input.length <= 0 || input.length >= 20) {
        this.handleErrorJabatan(true)
      } else {
        this.handleErrorJabatan(false)
      }
    } else {
      this.handleErrorJabatan(true)
    }
  }
  validateNIP(input) {
    const re = /^[0-9 ]*$/
    let result = input.match(re)
    if (result) {
      if (input.length <= 0 || input.length >= 20) {
        this.handleErrorNIP(true)
      } else {
        this.handleErrorNIP(false)
      }
    } else {
      this.handleErrorNIP(true)
    }
  }
  validateInputNama(input) {
    const re = /^[a-zA-Z ]*$/
    let result = input.match(re)
    if (result) {
      if (input.length <= 0 || input.length >= 20) {
        this.handleErrorNama(true)
      } else {
        this.handleErrorNama(false)
      }
    } else {
      this.handleErrorNama(true)
    }
  }
  validateInputUsername(input) {
    const re = /^[a-zA-Z0-9]*$/
    let result = input.match(re)
    if (result) {
      if (input.length <= 0 || input.length >= 20) {
        this.handleErrorUsername(true)
      } else {
        this.handleErrorUsername(false)
        this.validateAvailableUsername()
      }
    } else {
      this.handleErrorUsername(true)
    }
  }
  validateInputRole(input) {
    if (
      this.state.role == null ||
      this.state.role == 0 ||
      this.state.role == ''
    ) {
      this.handleErrorRole(true)
    } else {
      this.handleErrorRole(false)
    }
  }
  validateInputPassword(input) {
    const re = /(?=(.*[0-9]))((?=.*[A-Za-z0-9]))^.{8,16}$/

    let result = input.match(re)
    if (result) {
      if (input.length < 8 || input.length >= 16) {
        this.handleErrorPassword(true)
      } else {
        this.handleErrorPassword(false)
      }
    } else {
      this.handleErrorPassword(true)
    }
  }
  validateInputConfirmPass(input) {
    if (this.state.confirmPass != this.state.password) {
      this.handleErrorConfirmPassword(true)
    } else {
      this.handleErrorConfirmPassword(false)
    }
  }
  validateAvailableUsername() {
    let result = false
    const data = this.props.AllUser.allUserInfo
    let a = 0
    for (a = 0; a < data.length; a++) {
      console.log('data' + data[a])
      console.log('a' + a)
      if (data[a].USERNAME == this.state.username) {
        console.log('username invailable')
        console.log(
          'item equals:' + data[a].USERNAME + '&' + this.state.username,
        )
        console.log('result validate:' + this.state.errorAvailableUsername)
        console.log('leng' + data.length)
        this.handleErrorAvailableUsername(true)
        a = data.length
      } else {
        this.handleErrorAvailableUsername(false)
      }
    }
  }
  render() {
    return (
      <>
        <button
          className="flex flex-row bg-primary rounded p-2 mt-4 hover:bg-orenHover focus:outline-none"
          type="button"
          onClick={this.handleModal}
        >
          <div className="ml-1">
            <img
              className="h-6 align-middle"
              src="assets/img/icon/Tambah.png"
            />
          </div>
          <div className="font-bold ml-1 mr-2">Buat / Tambah</div>
        </button>

        {this.state.showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto h-95% mx-auto max-w-6xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-center ">
                    <button
                      className="p-1 ml-auto leading-none  outline-none focus:outline-none"
                      onClick={this.handleModal}
                    >
                      <img
                        className="justify-center items-center"
                        src="assets/img/icon/x.png"
                      />
                    </button>
                  </div>
                  <div className=" items-start justify-center rounded-t">
                    <div className=" flex justify-center">
                      <img
                        className="justify-self-center w-20"
                        src="assets/img/icon/User-Circle.png"
                      />
                    </div>
                    <div className="flex justify-center">
                      <h3 className="text-xl font-semibold mt-3">
                        Tambah Pengguna
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
                          <div className="w-full rounded-md shadow-sm">
                            <div className="flex flex-row grid grid-cols-3">
                              <div
                                htmlFor="username"
                                className="text-sm mb-2 font-bold flex flex-row "
                              >
                                <div className="mt-2">Username</div>
                                <div className="text-danger ml-2 mt-1.5">
                                  {' '}
                                  *
                                </div>
                              </div>
                              <div className="col-span-2 justify-end">
                                <input
                                  type="text"
                                  name="username"
                                  required
                                  id="username"
                                  placeholder="Masukan Username"
                                  className={
                                    this.state.errorUsername
                                      ? 'focus:form-control   focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 focus:outline-none w-80	  text-sm text-black placeholder-red-500 border border-red-200 rounded-md py-2 pl-2 '
                                      : 'focus:form-control   focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 focus:outline-none w-80	  text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-2 mb-3'
                                  }
                                  value={this.state.username}
                                  onChange={this.handleInputUsername}
                                />

                                {this.state.errorUsername &&
                                (this.state.username == '' ||
                                  this.state.username == null) ? (
                                  <>
                                    <div className="text-danger text-xs mb-3">
                                      Username harus diisi
                                    </div>
                                  </>
                                ) : (
                                  <>
                                    {this.state.errorUsername ? (
                                      <>
                                        <div className="text-danger text-xs mb-3">
                                          Hanya terdiri dari huruf abjad dan
                                          angka saja
                                        </div>
                                      </>
                                    ) : (
                                      <></>
                                    )}
                                  </>
                                )}

                                {this.state.errorAvailableUsername ? (
                                  <>
                                    <div className="text-danger text-xs mb-3">
                                      Username yang anda masukan sudah
                                      digunakan, silahkan gunakan yang lain
                                    </div>
                                  </>
                                ) : (
                                  <></>
                                )}
                              </div>
                            </div>
                            <div className="flex flex-row grid grid-cols-3">
                              <div
                                htmlFor="nama"
                                className="text-sm mb-2 font-bold flex flex-row "
                              >
                                <div className="mt-2">Nama Pengguna </div>
                                <div className="text-danger ml-2 mt-1.5">*</div>
                              </div>
                              <div className="col-span-2 justify-end">
                                <input
                                  type="text"
                                  name="nama"
                                  required
                                  id="nama"
                                  placeholder="Masukan Nama Pengguna"
                                  className={
                                    this.state.errorNama
                                      ? 'focus:form-control   focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 focus:outline-none w-80	  text-sm text-black placeholder-red-500 border border-red-200 rounded-md py-2 pl-2 '
                                      : 'focus:form-control   focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 focus:outline-none w-80	  text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-2 mb-3'
                                  }
                                  value={this.state.nama}
                                  onChange={this.handleInputNama}
                                />

                                {this.state.errorNama &&
                                (this.state.nama == '' ||
                                  this.state.nama == null) ? (
                                  <>
                                    <div className="text-danger text-xs mb-3">
                                      Nama harus diisi
                                    </div>
                                  </>
                                ) : (
                                  <>
                                    {' '}
                                    {this.state.errorNama ? (
                                      <>
                                        <div className="text-danger text-xs mb-3">
                                          Hanya terdiri dari huruf abjad saja
                                        </div>
                                      </>
                                    ) : (
                                      <></>
                                    )}
                                  </>
                                )}
                              </div>
                            </div>
                            <div className="flex flex-row grid grid-cols-3">
                              <div
                                htmlFor="nama"
                                className="text-sm mb-2 font-bold flex flex-row "
                              >
                                <div className="mt-2">Jabatan </div>
                                <div className="text-danger ml-2 mt-1.5">*</div>
                              </div>
                              <div className="col-span-2 justify-end">
                                <input
                                  type="text"
                                  name="jabatan"
                                  required
                                  id="jabatan"
                                  placeholder="Masukan jabatan Pengguna"
                                  className={
                                    this.state.errorJabatan
                                      ? 'focus:form-control   focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 focus:outline-none w-80	  text-sm text-black placeholder-red-500 border border-red-200 rounded-md py-2 pl-2 '
                                      : 'focus:form-control   focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 focus:outline-none w-80	  text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-2 mb-3'
                                  }
                                  value={this.state.jabatan}
                                  onChange={this.handleInputJabatan}
                                />

                                {this.state.errorJabatan &&
                                (this.state.jabatan == '' ||
                                  this.state.jabatan == null) ? (
                                  <>
                                    <div className="text-danger text-xs mb-3">
                                      Jabatan harus diisi
                                    </div>
                                  </>
                                ) : (
                                  <>
                                    {' '}
                                    {this.state.errorJabatan ? (
                                      <>
                                        <div className="text-danger text-xs mb-3">
                                          Hanya terdiri dari huruf dan angka
                                        </div>
                                      </>
                                    ) : (
                                      <></>
                                    )}
                                  </>
                                )}
                              </div>
                            </div>
                            <div className="flex flex-row grid grid-cols-3">
                              <div
                                htmlFor="nama"
                                className="text-sm mb-2 font-bold flex flex-row "
                              >
                                <div className="mt-2">NIP </div>
                                <div className="text-danger ml-2 mt-1.5">*</div>
                              </div>
                              <div className="col-span-2 justify-end">
                                <input
                                  type="text"
                                  name="nip"
                                  required
                                  id="nip"
                                  placeholder="Masukan nip Pengguna"
                                  className={
                                    this.state.errorJabatan
                                      ? 'focus:form-control   focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 focus:outline-none w-80	  text-sm text-black placeholder-red-500 border border-red-200 rounded-md py-2 pl-2 '
                                      : 'focus:form-control   focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 focus:outline-none w-80	  text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-2 mb-3'
                                  }
                                  value={this.state.nip}
                                  onChange={this.handleInputNIP}
                                />

                                {this.state.errorNip &&
                                (this.state.nip == '' ||
                                  this.state.nip == null) ? (
                                  <>
                                    <div className="text-danger text-xs mb-3">
                                      NIP harus diisi
                                    </div>
                                  </>
                                ) : (
                                  <>
                                    {' '}
                                    {this.state.errorNip ? (
                                      <>
                                        <div className="text-danger text-xs mb-3">
                                          Hanya terdiri dari angka
                                        </div>
                                      </>
                                    ) : (
                                      <></>
                                    )}
                                  </>
                                )}
                              </div>
                            </div>

                            <div className="flex flex-row grid grid-cols-3">
                              <div
                                htmlFor="role"
                                className="text-sm mb-2 font-bold flex flex-row "
                              >
                                <div className="mt-2">Role</div>
                                <div className="text-danger ml-2 mt-1.5">
                                  {' '}
                                  *
                                </div>
                              </div>
                              <div className="col-span-2 justify-end ">
                                <select
                                  type="text"
                                  name="role"
                                  required
                                  id="role"
                                  placeholder="Masukan Role"
                                  className={
                                    this.state.errorRole
                                      ? 'focus:form-control   focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 focus:outline-none w-80	  text-sm text-black placeholder-red-500 border border-red-200 rounded-md py-2 pl-2 '
                                      : 'focus:form-control   focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 focus:outline-none w-80	  text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-2 mb-3'
                                  }
                                  value={this.state.role}
                                  onChange={this.handleInputRole}
                                >
                                  <option value="0">
                                    Pengguna sebagai ...
                                  </option>
                                  <option value="1">Administrator</option>
                                  <option value="2">Pengguna</option>
                                </select>
                                {this.state.errorRole ? (
                                  <>
                                    <div className="text-danger text-xs mb-3">
                                      Anda harus memilih satu
                                    </div>
                                  </>
                                ) : (
                                  <></>
                                )}
                              </div>
                            </div>

                            <div className="flex flex-row grid grid-cols-3">
                              <div
                                htmlFor="password"
                                className="text-sm mb-2 font-bold flex flex-row "
                              >
                                <div className="mt-2">Password</div>
                                <div className="text-danger ml-2 mt-1.5">
                                  {' '}
                                  *
                                </div>
                              </div>
                              <div className="col-span-2 justify-end ">
                                <input
                                  type="password"
                                  name="password"
                                  required
                                  id="password"
                                  placeholder="Masukan Password"
                                  className={
                                    this.state.errorNama
                                      ? 'focus:form-control   focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 focus:outline-none w-80	  text-sm text-black placeholder-red-500 border border-red-200 rounded-md py-2 pl-2 '
                                      : 'focus:form-control   focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 focus:outline-none w-80	  text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-2 mb-3'
                                  }
                                  value={this.state.password}
                                  onChange={this.handleInputPassword}
                                />

                                {this.state.errorPassword &&
                                (this.state.password == '' ||
                                  this.state.password == null) ? (
                                  <>
                                    <div className="text-danger text-xs mb-3">
                                      Password harus diisi
                                    </div>
                                  </>
                                ) : (
                                  <>
                                    {' '}
                                    {this.state.errorPassword ? (
                                      <>
                                        <div className="text-danger text-xs mb-3">
                                          Minimal harus terdiri dari 8 karakter
                                          gabungan huruf dan angka
                                        </div>
                                      </>
                                    ) : (
                                      <></>
                                    )}
                                  </>
                                )}
                              </div>
                            </div>
                            <div className="flex flex-row grid grid-cols-3">
                              <div
                                htmlFor="password"
                                className="text-sm mb-2 font-bold flex flex-row "
                              >
                                <div className="mt-2">Confirm Password </div>
                                <div className="text-danger ml-2 mt-1.5">
                                  {' '}
                                  *
                                </div>
                              </div>{' '}
                              <div className="col-span-2 justify-end ">
                                <input
                                  type="password"
                                  name="confirm password"
                                  required
                                  id="confirm password"
                                  placeholder="Masukan Password"
                                  className={
                                    this.state.errorConfirmPass
                                      ? 'focus:form-control   focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 focus:outline-none w-80	  text-sm text-black placeholder-red-500 border border-red-200 rounded-md py-2 pl-2 '
                                      : 'focus:form-control   focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 focus:outline-none w-80	  text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-2 mb-3'
                                  }
                                  value={this.state.confirmPass}
                                  onChange={this.handleInputConfirmPass}
                                />{' '}
                                {this.state.errorConfirmPass &&
                                (this.state.confirmPass == '' ||
                                  this.state.confirmPass == null) ? (
                                  <>
                                    <div className="text-danger text-xs mb-3">
                                      Confirm password harus diisi
                                    </div>
                                  </>
                                ) : (
                                  <>
                                    {this.state.errorConfirmPass ? (
                                      <>
                                        <div className="text-danger text-xs mb-3">
                                          password tidak cocok
                                        </div>
                                      </>
                                    ) : (
                                      <></>
                                    )}
                                  </>
                                )}
                              </div>
                            </div>
                            <div className="flex flex-row grid grid-cols-3 mb-4 mt-4">
                              <div></div>
                              <div className="col-span-2 text-xs text-abu ">
                                Keterangan (*): data wajib diisi.
                              </div>
                            </div>
                            <div className="flex flex-row grid grid-cols-3">
                              <div></div>
                              <button
                                type="submit"
                                className=" w-1/2 p-1 border-2 rounded-md  bg-biru justify-center align-center hover:bg-biruduaHover focus:outline-none"
                                onClick={this.onSubmit}
                                value="Add Pengguna"
                              >
                                <div className="col-span-2 text-md mb-1 text-white h-6 font-bold">
                                  Tambah
                                </div>
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  {/*footer*/}
                  {/* <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={this.handleModal}
                    >
                      Close
                    </button>
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={this.handleModal}
                    >
                      Save Changes
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
        <ModalLoading
          loading={this.state.modalLoading}
          title={'Sistem sedang memproses'}
        />
      </>
    )
  }
}

function mapStateToProps(state) {
  return state
}
export default connect(mapStateToProps, {})(FormUser)
