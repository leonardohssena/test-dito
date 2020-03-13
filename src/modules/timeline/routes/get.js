import logger from '../../../helpers/logger'
import {
  findTimelines
} from '../api/timeline-api'

const getTimelines = async (req, res) => {
  const loggerInfo = {
    name: 'getTimelines',
    params: req.query
  }
  logger.info(loggerInfo.name, loggerInfo.params)

  try {
    const timeline = await findTimelines()
    res.status(200).json({ timeline })
  } catch (error) {
    logger.error(loggerInfo.name, logger.params, error)
    res.status(409).json({
      message: 'Falha ao buscar a timeline'
    })
  }
}

export {
  getTimelines
}
