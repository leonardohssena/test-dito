const fs = require('fs')

export default (app, base) => {
  fs
    .readdirSync(`${__dirname}/modules`)
    .forEach(path => {
      try {
        const {
          module: {
            name,
            route
          }
        } = require(`./modules/${path}/routes`)
        app.use(`${base}/${name}/`, route)
      } catch (err) {
        console.log(err)
      }
    })
}
