const appInfo = {}
const env = {}
const ip = '127.0.0.1'
const port = '9999'
appName = 'phoenix'

env.baseUrl = `http://${ip}:${port}`
function getUrlParams (url = env.baseUrl) {
  console.log('url', url)
}
