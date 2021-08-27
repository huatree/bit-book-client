function mock(app, url, data) {
  app.get(url, (request, response) => {
    response.json(data)
  })
}
const mockBookHomeData = require('./src/mock/bookHome')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  devServer: {
    before(app) {
      mock(app, '/book/home', mockBookHomeData)
    }
  }
}
