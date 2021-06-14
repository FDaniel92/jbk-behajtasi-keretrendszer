import url from '../url.json'

export default function ({ $axios, redirect }) {
  $axios.setBaseURL(url[process.env.NODE_ENV].backend)
  $axios.defaults.withCredentials = false
}