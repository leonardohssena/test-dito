import axios from 'axios'
import logger from './logger'
import config from '../config'

/**
 * @name requestsApi
 *
 * Função de conexão a api externa
 *
 * @param method Metodo da conexão (GET/POST)
 * @param url URL de envio
 * @param token Token de acesso a api
 * @param params Parametros a serem incluidos na url
 * @param data Parametros a serem incluidos no body
 */
const requestsApi = async (method, url, token, params, data) => {
  const loggerInfo = {
    name: 'requestsApi',
    params: {
      url,
      token,
      method,
      params,
      data
    }
  }

  try {
    logger.debug(loggerInfo.name, loggerInfo.params)

    const configResquest = {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Auth-Token': token
      },
      baseURL: config.externalApi.baseURL,
      url,
      data,
      params
    }

    const responseApi = await axios.request(configResquest)
    return responseApi.data
  } catch (error) {
    throw error
  }
}

export {
  requestsApi
}
