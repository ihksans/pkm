import React, { Component } from 'react'
import api from '../../service/api'
import { connect } from 'react-redux'
import { logIn, notLoggedIn } from '../../service/token'
import {
  unsetUser,
  setUser,
  addTokenByID,
  removeTokenByID,
  setPath,
} from '../../actions'
import ModalLoading from '../ModalLoading'
class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalLoading: false,
      username: null,
      password: null,
      errorMsg: false,
      errorUsername: false,
      errorPassword: false,
      isUsername: false,
      isPassword: false,
    }
    this.handleLoading = this.handleLoading.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleUsername = this.handleUsername.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
    this.handleErrorMsg = this.handleErrorMsg.bind(this)
    this.handleUsername = this.handleUsername.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
    this.handleNullPassword = this.handleNullPassword.bind(this)
    this.handleNullUsername = this.handleNullUsername.bind(this)
    this.test = this.test.bind(this)
  }
  handleLoading() {
    this.setState({
      modalLoading: !this.state.modalLoading,
    })
  }
  setToken(token) {
    // console.log("setToken:"+ token);
    this.props.addTokenByID(token)
  }
  setUserData(userData) {
    this.props.setUser(userData)
    if (userData.ROLE == 1) {
      this.props.setPath('BerandaAdmin')
    } else {
      this.props.setPath('Beranda')
    }
  }
  handleSubmit(e) {
    e.preventDefault()
    this.handleUnsetError()
    if (this.state.username == null || this.state.username == '') {
      this.handleNullUsername()
    }
    if (this.state.password == null || this.state.password == '') {
      this.handleNullPassword()
    }
    this.handleLoading()
    let formInput = new FormData()
    formInput.append('username', this.state.username)
    formInput.append('password', this.state.password)

    api()
      .get('/sanctum/csrf-cookie')
      .then(() => {
        api()
          .post('api/login', formInput)
          .then((response) => {
            if (response.data.status == 'success') {
              logIn(response.data.content.access_token)
              this.setToken(response.data.content.access_token)
              api()
                .post('api/userInfo')
                .then((response) => {
                  if (response.data.error) {
                    this.handleLoading()
                    console.log(response.data.error)
                    console.log('error login')
                  } else {
                    let formDataId = new FormData()
                    formDataId.append('id', response.data.token.tokenable_id)
                    api()
                      .post('api/getPenggunaInfo', formDataId)
                      .then((response) => {
                        if (response.data.error) {
                          console.log('error id current user')
                        } else {
                          this.setUserData(response.data)
                          console.log('current user :' + response.data)
                          this.handleLoading()

                          window.location.assign('/')

                          // return <Redirect to="/" />
                        }
                      })
                  }
                })
            } else if (response.data.status == 'error') {
              if (response.data.errors == 'username') {
                this.handleLoading()

                this.handleErrorUsername()
                console.log(response.data)
                console.log('error username')
              } else if (response.data.errors == 'password') {
                this.handleLoading()
                console.log('error password')
                this.handleErrorPassword()
              }
            }
          })
          .catch((error) => {
            this.handleLoading()
            notLoggedIn()
            console.log('error:' + error.data)
            this.handleErrorMsg()
          })
      })
  }

  handleUsername(e) {
    let value = e.target.value
    this.setState({
      username: value,
    })
  }
  handlePassword(e) {
    let value = e.target.value
    this.setState({
      password: value,
    })
  }
  handleErrorMsg(e) {
    this.setState({
      errorMsg: true,
    })
  }
  handleErrorUsername(e) {
    this.setState({
      errorUsername: true,
    })
  }
  handleErrorPassword(e) {
    this.setState({
      errorPassword: true,
    })
  }
  handleUnsetError() {
    this.setState({
      errorPassword: false,
      errorUsername: false,
      isUsername: false,
      isPassword: false,
    })
  }
  handleNullPassword() {
    this.setState({
      isPassword: true,
    })
  }
  handleNullUsername() {
    this.setState({
      isUsername: true,
    })
  }
  test() {
    this.props.removeTokenByID()
    // console.log("test"+this.props.authToken.token)
  }
  render() {
    return (
      <>
        <form className="mt-8" action="#" method="POST">
          <div>
            <div className="rounded-md shadow-sm">
              <div>
                <div className="text-abu text-sm mb-2">Username</div>
                <input
                  name="username"
                  type="username"
                  required
                  onChange={this.handleUsername}
                  className="focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-2 mb-3"
                  aria-label="Username"
                  placeholder="Username"
                />
              </div>

              {this.state.isUsername ? (
                <>
                  <div className="text-xs mb-1 text-danger italic">
                    Username harus diisi
                  </div>
                </>
              ) : (
                <>
                  {this.state.errorUsername ? (
                    <>
                      <div className="text-xs mb-1 text-danger italic">
                        Username yang dimasukan tidak terdaftar
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </>
              )}
              <div>
                <div className="text-abu text-sm mb-2">Password</div>
                <input
                  aria-label="Password"
                  name="password"
                  type="password"
                  required
                  minLength="8"
                  maxLength="15"
                  onChange={this.handlePassword}
                  className={
                    this.state.errorPassword
                      ? 'mb-1 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-2 '
                      : 'mb-6 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-2 '
                  }
                  placeholder="Password"
                />
              </div>

              {this.state.errorPassword ? (
                <>
                  <div className="text-xs mb-1 text-danger italic ">
                    Password tidak cocok
                  </div>
                </>
              ) : (
                <></>
              )}

              <div className="flex h-9">
                <button
                  type="submit"
                  className="w-full rounded-md bg-primary hover:bg-orenHover focus:outline-none"
                  onClick={this.handleSubmit}
                >
                  <div className="text-sm mb-2 text-putih h-4 font-semibold">
                    Login
                  </div>
                </button>
              </div>
            </div>
          </div>
        </form>
        <ModalLoading
          loading={this.state.modalLoading}
          title={'Sinkronisasi Data'}
        />
      </>
    )
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {
  addTokenByID,
  removeTokenByID,
  setUser,
  setPath,
})(Login)
