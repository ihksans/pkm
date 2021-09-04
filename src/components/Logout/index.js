//component logout
import React, { Component, useState } from 'react'
import {
  removeTokenByID,
  unsetUser,
  unsetPath,
  unsetAllSuratMasuk,
  unsetJenisSurat,
  unsetAllUser,
  unsetUnitKerja,
} from '../../actions'
import { logoutAuth } from '../../service/auth'
import { connect } from 'react-redux'
import ModalLoading from '../ModalLoading'
class Logout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalLoading: false,
    }
    this.removeToken = this.removeToken.bind(this)
    this.unsetCurrentUser = this.unsetCurrentUser.bind(this)
    this.handleLoading = this.handleLoading.bind(this)
  }
  handleLoading() {
    this.setState({
      modalLoading: !this.state.modalLoading,
    })
  }
  signOut() {
    logoutAuth()
    this.removeToken()
    this.unsetCurrentUser()
  }
  removeToken() {
    this.handleLoading()
    this.props.removeTokenByID()
    this.props.unsetUser()
    this.props.unsetPath()
    this.props.unsetAllSuratMasuk()
    this.props.unsetJenisSurat()
    this.props.unsetAllUser()
    this.props.unsetUnitKerja()
    this.handleLoading()
    logoutAuth()
  }
  unsetCurrentUser() {
    console.log('unset user')
    this.props.unsetUser()
  }
  render() {
    // console.log("last token:"+ this.props.authToken.token);

    return (
      <>
        {/* <div className="mt-6">
          <button
            type="submit"
            onClick={this.removeToken}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <svg
                className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400 transition ease-in-out duration-150"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            Logout
          </button>
        </div> */}
        <div className="absolute spacing-0">
          <div
            onClick={this.removeToken}
            className="group relative w-full flex justify-center py-2 px-4 text-xs leading-5 font-medium rounded shadow-md text-black bg-white hover:bg-primary hover:text-putih focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
            // className="h-5 w-5 bg-black ml-3 -rotate-45 transform origin-top-left"
          >
            {/* <button
              type="submit"
              onClick={this.removeToken}
              className="group relative w-full flex justify-center py-2 px-4 border  text-xs leading-5  font-medium rounded-md text-white bg-white border-black	 hover:bg-primary focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
            >
              Logout
            </button> */}
            Logout
          </div>
        </div>
        <ModalLoading
          loading={this.state.modalLoading}
          title={'Membersihkan Data'}
        />
      </>
    )
  }
}

function mapStateToProps(state) {
  return state
}
export default connect(mapStateToProps, {
  removeTokenByID,
  unsetUser,
  unsetPath,
  unsetAllSuratMasuk,
  unsetJenisSurat,
  unsetAllUser,
  unsetUnitKerja,
})(Logout)
