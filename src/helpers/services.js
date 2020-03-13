import logger from './logger'
import {
  requestsApi
} from './requests-api'

const getAllTimelinesApi = async (params = {}) => {
  try {
    const sales = await requestsApi('GET', '', '', params, undefined)
    return sales
  } catch (err) {
    logger.error('getAllTimelinesApi', { params }, err)
  }
}

export {
  getAllTimelinesApi
}
