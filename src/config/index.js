import server from './server'
import local from './local'

const configs = {
  local,
  development: server,
  production: server
}

export default configs[process.env.NODE_ENV]
