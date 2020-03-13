import logger from '../../../helpers/logger'
import {
  findCollectorSearch
} from '../api/collector-api'

const getCollectorSearch = async (req, res) => {
  const loggerInfo = {
    name: 'getCollectorSearch',
    params: req.query
  }
  logger.info(loggerInfo.name, loggerInfo.params)

  try {
    const { event } = req.query
    if (!event || event.length < 2) {
      return res.status(409).json({
        message: 'Filtro evento requerido'
      })
    }
    const timeline = await findCollectorSearch({ event })
    res.status(200).json({ timeline })
  } catch (error) {
    logger.error(loggerInfo.name, logger.params, error)
    res.status(409).json({
      message: 'Falha ao buscar a timeline'
    })
  }
}

export {
  getCollectorSearch
}
