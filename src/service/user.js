import api from './api'

export const getCurrentUser = (props) => {
  let formData = new FormData()
  formData.append('id', props)
  api()
    .post('api/getPenggunaInfo', formData)
    .then((response) => {
      if (response.data.error) {
        console.log('error current user')
      } else {
        return response
      }
    })
}

export const getAllPenggunaInfo = () => {
  api()
    .get('api/allPenggunaInfo')
    .then((response) => {
      if (response.data.error) {
        console.log('error current user')
      } else {
        return response
      }
    })
}
