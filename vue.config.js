module.exports = {
    configureWebpack: {
        devtool: 'source-map'
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
