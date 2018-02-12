import axios from 'axios'

const ApiWrapper = function(options) {
  const onSuccess = function(response) {
    if (DEBUG)
      console.debug('Request Successful!', response)
    return response.data
  }

  const onError = function(error) {
    console.error('Request Failed:', error.config)

    if (error.response) {
      // Request was made but server responded with something
      // other than 2xx
      if (DEBUG) {
        console.error('Status:',  error.response.status)
        console.error('Data:',    error.response.data)
        console.error('Headers:', error.response.headers)
      }
    } else {
      // Something else happened while setting up the request
      // triggered the error
      if (DEBUG)
        console.error('Error Message:', error.message)
    }

    return Promise.reject(error.response || error.message)
  }

  return axios(options)
          .then(onSuccess)
          .catch(onError)
}

export default ApiWrapper
