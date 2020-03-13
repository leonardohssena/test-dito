import consign from './consign'

const base = '/api/v1'

export default app => {
  consign(app, base)
  app.use(({
    originalUrl
  }, res, next) => {
    res.status(500).json({
      status: 500,
      msg: `Invalid Route.`,
      route: originalUrl
    })
    next()
  })
}
