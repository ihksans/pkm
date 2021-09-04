import React, { Component } from 'react'
import { Link, NavLink, Redirect } from 'react-router-dom'
import { IconContext } from 'react-icons'
import { connect } from 'react-redux'
import { setPath } from '../../actions'
//Ini buat dependecies/library nya
//import + "nama variabel" + from + "nama librarynya";

class Navbar extends Component {
  //deklarasi variabel
  constructor(props) {
    super()
    this.state = {
      pathActive: '',
    }
    this.onLink1 = this.onLink1.bind(this)
    this.onLink2 = this.onLink2.bind(this)
    this.onLink3 = this.onLink3.bind(this)
    this.onLink4 = this.onLink4.bind(this)
    this.onLink5 = this.onLink5.bind(this)
    this.onLink6 = this.onLink6.bind(this)
    this.onLink7 = this.onLink7.bind(this)
  }
  setPath(props) {
    this.props.setPath(props)
  }
  onLink1() {
    this.setPath('BerandaAdmin')
    console.log('path:' + this.state.pathActive)
  }
  onLink2() {
    this.setPath('Surat')

    console.log('path:' + this.state.pathActive)
  }
  onLink3() {
    this.setPath('User')

    console.log('path:' + this.state.pathActive)
  }
  onLink4() {
    this.setPath('Beranda')

    console.log('path:' + this.state.pathActive)
  }
  onLink5() {
    this.setPath('SuratMasuk')

    console.log('path:' + this.state.pathActive)
  }
  onLink6() {
    this.setPath('SuratKeluar')

    console.log('path:' + this.state.pathActive)
  }
  onLink7() {
    this.setPath('Disposisi')

    console.log('path:' + this.state.pathActive)
  }
  render() {
    return (
      //html
      //js
      <>
        <div
          className={
            this.props.bar
              ? 'flex flex-col w-17% h-screen bg-gradient-to-b from-black to-blue-500 '
              : 'flex flex-col w-0 h-screen'
          }
        >
          <IconContext.Provider value={{ color: '#fff' }}>
            <nav
              className={
                this.props.bar
                  ? 'left-0	duration-300'
                  : 'bg-white	 w-12	 flex justify-center	fixed top-0 -left-full  duration-700	'
              }
            >
              {this.props.User.currentUser.ROLE == 1 ? (
                <>
                  <ul className="w-full">
                    {this.props.Path.currentPath == 'BerandaAdmin' ? (
                      <li className="bg-brokenblack w-full h-full">
                        <button className="w-full h-17 text-birudua">
                          <div className="flex items-center py-2.5 px-3">
                            <div className="rounded-full bg-birudua h-11 w-11 flex items-center justify-center">
                              <img
                                className="flex justify-center"
                                src="assets/img/icon/beranda_icon.png"
                              />
                            </div>
                            <div className="text-birudua font-bold flex items-center ml-4">
                              Beranda
                            </div>
                          </div>
                        </button>
                      </li>
                    ) : (
                      <li className="w-full h-full">
                        <button className="group w-full h-full text-primary hover:bg-brokenblack hover:text-birudua focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                        onClick={this.onLink1}>
                          <Link to={'/'} replace>
                            <div className="flex items-center py-2.5 px-3">
                              <div className="rounded-full bg-primary h-11 w-11 flex items-center justify-center group-hover:bg-birudua focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                                <img
                                  className="flex justify-center"
                                  src="assets/img/icon/beranda_icon.png"
                                />
                              </div>
                              <div className="font-bold flex items-center ml-4">
                                Beranda
                              </div>
                            </div>
                          </Link>
                        </button>
                      </li>
                    )}

                    {this.props.Path.currentPath == 'Surat' ? (
                      <li className="bg-brokenblack w-full h-full">
                        <button className="w-full h-17 text-birudua">
                          <div className="flex items-center py-2.5 px-3">
                            <div className="rounded-full bg-birudua h-11 w-11 flex items-center justify-center">
                              <img
                                className="flex justify-center h-4"
                                src="assets/img/icon/surat_icon.png"
                              />
                            </div>
                            <div className="text-birudua font-bold flex items-center ml-4">
                              Kelola Surat
                            </div>
                          </div>
                        </button>
                      </li>
                    ) : (
                      <li className="w-full h-full">
                        <button className="group w-full h-full text-primary hover:bg-brokenblack hover:text-birudua focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                        onClick={this.onLink2}>
                          <Link to="/KelolaSurat" replace>
                            <div className="flex items-center py-2.5 px-3">
                              <div className="rounded-full bg-primary h-11 w-11 flex items-center justify-center group-hover:bg-birudua focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                                <img
                                  className="flex justify-center h-4"
                                  src="assets/img/icon/surat_icon.png"
                                />
                              </div>
                              <div className="font-bold flex items-center ml-4">
                                Kelola Surat
                              </div>
                            </div>
                          </Link>
                        </button>
                      </li>
                    )}

                    {this.props.Path.currentPath == 'User' ? (
                      <li className="bg-brokenblack w-full h-full">
                        <button className="w-full h-17 text-birudua">
                          <div className="flex items-center py-2.5 px-3">
                            <div className="rounded-full bg-birudua h-11 w-11 flex items-center justify-center">
                              <img
                                className="flex justify-center h-6"
                                src="assets/img/icon/user_icon_2.png"
                              />
                            </div>
                            <div className="text-birudua font-bold flex items-center ml-4">
                              Kelola Pengguna
                            </div>
                          </div>
                        </button>
                      </li>
                    ) : (
                      <li className="w-full h-full">
                        <button className="group w-full h-full text-primary hover:bg-brokenblack hover:text-birudua focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                        onClick={this.onLink3}>
                          <Link to="/KelolaPengguna" replace>
                            <div className="flex items-center py-2.5 px-3">
                              <div className="rounded-full bg-primary h-11 w-11 flex items-center justify-center group-hover:bg-birudua focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                                <img
                                  className="flex justify-center h-6"
                                  src="assets/img/icon/user_icon_2.png"
                                />
                              </div>
                              <div className="font-bold flex items-center ml-4">
                                Kelola Pengguna
                              </div>
                            </div>
                          </Link>
                        </button>
                      </li>
                    )}
                  </ul>
                </>
              ) : (
                <>
                  {' '}
                  <ul className="w-full">
                    {this.props.Path.currentPath == 'Beranda' ? (
                      <li className="bg-brokenblack w-full h-full">
                        <button className="w-full h-17 text-birudua">
                          <div className="flex items-center py-2.5 px-3">
                            <div className="rounded-full bg-birudua h-11 w-11 flex items-center justify-center">
                              <img
                                className="flex justify-center"
                                src="assets/img/icon/beranda_icon.png"
                              />
                            </div>
                            <div className="text-birudua font-bold flex items-center ml-4">
                              Beranda
                            </div>
                          </div>
                        </button>
                      </li>
                    ) : (
                      <li className="w-full h-full">
                        <button className="group w-full h-full text-primary hover:bg-brokenblack hover:text-birudua focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                        onClick={this.onLink4}>
                          <Link to={'/'} replace>
                            <div className="flex items-center py-2.5 px-3">
                              <div className="rounded-full bg-primary h-11 w-11 flex items-center justify-center group-hover:bg-birudua focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                                <img
                                  className="flex justify-center"
                                  src="assets/img/icon/beranda_icon.png"
                                />
                              </div>
                              <div className="font-bold flex items-center ml-4">
                                Beranda
                              </div>
                            </div>
                          </Link>
                        </button>
                      </li>
                    )}

                    {this.props.Path.currentPath == 'SuratMasuk' ? (
                      <li className="bg-brokenblack w-full h-full">
                      <button className="w-full h-17 text-birudua">
                        <div className="flex items-center py-2.5 px-3">
                          <div className="rounded-full bg-birudua h-11 w-11 flex items-center justify-center">
                            <img
                              className="flex justify-center h-4"
                              src="assets/img/icon/surat_icon.png"
                            />
                          </div>
                          <div className="text-birudua font-bold flex items-center ml-4">
                            Surat Masuk
                          </div>
                        </div>
                      </button>
                    </li>
                    ) : (
                      <li className="w-full h-full">
                        <button className="group w-full h-full text-primary hover:bg-brokenblack hover:text-birudua focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                        onClick={this.onLink5}>
                          <Link to="/SuratMasuk" replace>
                            <div className="flex items-center py-2.5 px-3">
                              <div className="rounded-full bg-primary h-11 w-11 flex items-center justify-center group-hover:bg-birudua focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                                <img
                                  className="flex justify-center h-4"
                                  src="assets/img/icon/surat_icon.png"
                                />
                              </div>
                              <div className="font-bold flex items-center ml-4">
                                Surat Masuk
                              </div>
                            </div>
                          </Link>
                        </button>
                      </li>
                    )}

                    {this.props.Path.currentPath == 'SuratKeluar' ? (
                      <li className="bg-brokenblack w-full h-full">
                        <button className="w-full h-17 text-birudua">
                          <div className="flex items-center py-2.5 px-3">
                            <div className="rounded-full bg-birudua h-11 w-11 flex items-center justify-center">
                              <img
                                className="flex justify-center h-4"
                                src="assets/img/icon/surat_icon.png"
                              />
                            </div>
                            <div className="text-birudua font-bold flex items-center ml-4">
                              Surat Keluar
                            </div>
                          </div>
                        </button>
                      </li>
                    ) : (
                      <li className="w-full h-full">
                        <button className="group w-full h-full text-primary hover:bg-brokenblack hover:text-birudua focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                        onClick={this.onLink6}>
                          <Link to="/SuratKeluar" replace>
                            <div className="flex items-center py-2.5 px-3">
                              <div className="rounded-full bg-primary h-11 w-11 flex items-center justify-center group-hover:bg-birudua focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                                <img
                                  className="flex justify-center h-4"
                                  src="assets/img/icon/surat_icon.png"
                                />
                              </div>
                              <div className="font-bold flex items-center ml-4">
                                Surat Keluar
                              </div>
                            </div>
                          </Link>
                        </button>
                      </li>
                    )}
                    {this.props.Path.currentPath == 'Disposisi' ? (
                      <li className="bg-brokenblack w-full h-full">
                        <button className="w-full h-17 text-birudua">
                          <div className="flex items-center py-2.5 px-3">
                            <div className="rounded-full bg-birudua h-11 w-11 flex items-center justify-center">
                              <img
                                className="flex justify-center h-4"
                                src="assets/img/icon/surat_icon.png"
                              />
                            </div>
                            <div className="text-birudua font-bold flex items-center ml-4">
                              Disposisi
                            </div>
                          </div>
                        </button>
                      </li>
                    ) : (
                      <li className="w-full h-full">
                        <button className="group w-full h-full text-primary hover:bg-brokenblack hover:text-birudua focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                        onClick={this.onLink7}>
                          <Link to="/Disposisi" replace>
                            <div className="flex items-center py-2.5 px-3">
                              <div className="rounded-full bg-primary h-11 w-11 flex items-center justify-center group-hover:bg-birudua focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                                <img
                                  className="flex justify-center h-4"
                                  src="assets/img/icon/surat_icon.png"
                                />
                              </div>
                              <div className="font-bold flex items-center ml-4">
                                Disposisi
                              </div>
                            </div>
                          </Link>
                        </button>
                      </li>
                    )}
                  </ul>
                </>
              )}
            </nav>
          </IconContext.Provider>
        </div>
      </>
    )
  }
}

function mapStateToProps(state) {
  return state
}
export default connect(mapStateToProps, { setPath })(Navbar)
