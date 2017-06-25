import axios from 'axios'

export default {
  send (context, method, url, options = null) {
    axios[method](url).then(response => {
      context.response.data = response.data[0]
      context.response.headers = response.headers
      context.response.status = response.status
      context.response.statusText = response.statusText
    }).catch(e => {
      if (e.response) {
        context.response.data = e.response.data
        context.response.headers = e.response.headers
        context.response.status = e.response.status
        context.response.statusText = e.response.statusText
      }
    })
  }
}
