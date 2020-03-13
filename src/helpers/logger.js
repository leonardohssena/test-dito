import simpleNodeLogger from 'simple-node-logger'
import config from '../config'

const level = config.LOGGER_LEVEL || 'info'

const log = simpleNodeLogger.createSimpleLogger({
  timestampFormat: 'DD/MM/YYYY HH:mm:ss.SSS'
})

log.setLevel(level)

const logException = simpleNodeLogger.createSimpleLogger({
  timestampFormat: 'DD/MM/YYYY HH:mm:ss.SSS',
  logFilePath: 'exception.log'
})

const info = (name, params) => {
  const time = new Date().toJSON()
  log.info(`Função: ${name}( ${buildParams(params)} ) accepted at ${time}`)
}

const debug = (name, params) => {
  const time = new Date().toJSON()
  log.debug(`Função: ${name}( ${buildParams(params)} ) accepted at ${time}`)
}

const error = (name, params, err) => {
  const time = new Date().toJSON()
  logException.error(`Função: ${name}( ${buildParams(params)} ). Exception: ${err}. accepted at ${time}`)
}

const buildParams = params => Object
  .keys(params)
  .reduce((acc, key) => `${acc}${[key]}: ${JSON.stringify(params[key])}, `, '')
  .slice(0, -2)

export default {
  log,
  logException,
  info,
  debug,
  error
}
