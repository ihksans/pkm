import api from './api'
import { logIn, logOut, notLoggedIn } from './token'
export const loginAuth = (props) => {
  api()
    .get('/sanctum/csrf-cookie')
    .then(() => {
      api()
        .post('api/login', props)
        .then((response) => {
          if (response.data.error) {
            console.log(response.data.error)
            notLoggedIn()
          } else {
            logIn(response.data.content.access_token)
            window.location.assign('/')
          }
        })
    })
}

export const logoutAuth = () => {
  api()
    .post('api/logout')
    .then((response) => {
      if (response.data.error) {
        console.log(response.data.error)
        console.log('error login')
      } else {
        logOut()
        window.location.assign('/#/Login')
      }
    })
}

export const cekAuth = () => {
  let status
  api()
    .post('api/cekToken')
    .then(() => {
      console.log('sudah login')
      status = true
    })
    .catch((err) => {
      console.log('belum login')
      status = false
    })

  // const status = Cookies.get('cake');
  // if(status == null){
  //     return false
  // }
  console.log('status: ' + status)
  return status
}
export const userInfo = () => {
  let status = false
  api()
    .post('api/userInfo')
    .then(() => {
      status = true
    })
    .catch((err) => {
      status = false
    })
  console.log('status:' + status)
  return status
}
