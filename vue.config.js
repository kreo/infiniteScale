const magicImporter = require("node-sass-magic-importer")

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
          importer: magicImporter()
        })
        .end()
    })
  }
}
