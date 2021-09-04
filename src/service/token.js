import Cookies from 'js-cookie'
import cookie from 'cookie'

export const isLoggedIn = (reqCookies = null) => {
  // if we don't have request cookies, get the cookie from client
  if (!reqCookies) {
    return !!Cookies.get('cake')
  }

  // otherwise get cookie from server
  return !!cookie.parse(reqCookies).cake
}

export const logIn = (props) => {
  if (typeof window !== 'undefined') {
    Cookies.set('cake', props, { expires: 86400, sameSite: 'lax' })
  }
}

export const logOut = () => {
  if (typeof window !== 'undefined') {
    // remove logged in user's cookie and redirect to login page
    Cookies.remove('cake', { expires: 86400, sameSite: 'lax' })
    // return <Redirect to='/' />
  }
}
export const notLoggedIn = () => {
  // return <Redirect to='/' />
}

export const cekLog = () => {
  const status = Cookies.get('cake')
  if (status == null) {
    return false
  }
  return true
}
