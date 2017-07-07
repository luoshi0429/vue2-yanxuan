const host = 'http://localhost:3300'

const checkStatus = (res) => {
  if (res.status >= 200 && res.status < 300) {
    return res
  }
  const err = new Error(res.statusText)
  err.res = res
  return err
}

const parseJSON = (res) => {
  return res.json()
}

const request = (url, options = {}) => {
  return window.fetch(host + url, options)
          .then(checkStatus)
          .then(parseJSON)
}

export default request
