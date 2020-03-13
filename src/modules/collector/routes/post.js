import logger from '../../../helpers/logger'
import { saveCollector } from '../api/collector-api'

const postCollector = async (req, res) => {
  const loggerInfo = {
    name: 'postBook',
    params: req.body
  }
  logger.info(loggerInfo.name, loggerInfo.params)

  try {
    const { timestamp, ...data } = req.body

    await saveCollector({ ...data, timestamp: new Date(timestamp) })

    res.status(200).json({ message: 'Coletor cadastrado com sucesso' })
  } catch (error) {
    logger.error(loggerInfo.name, logger.params, error)
    res.status(409).json({ message: 'Falha ao inserir o coletor' })
  }
}

export {
  postCollector
}
