const magicImporter = require("node-sass-magic-importer")
const jsonImporter = require("node-sass-json-importer")

module.exports = {
  configureWebpack: {
    devtool: 'source-map'
  },
  chainWebpack: config => {
    const oneOfsMap = config.module.rule('scss').oneOfs.store
    oneOfsMap.forEach(item => {
      item
        .use('sass-loader')
        .loader('sass-loader', {
          importer: [
            jsonImporter(),
            magicImporter()
          ]
        })
        .end()
    })
  }
}
