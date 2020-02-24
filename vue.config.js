const path = require("path");

module.exports = {
  configureWebpack: {
    devtool: 'source-map'
  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [
        path.resolve(__dirname, "./src/styles/main.scss")
      ]
    }
  },
  css: {
    requireModuleExtension: false,
    loaderOptions: {
      sass: {
        //prependData: `@import "~@/core/.sass"`
      },
    }
  }
}
