module.exports = {
    publicPath: '',

    // devServer: { https: true },
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                    @import "@/styles/app/_variables";
            `
            }
        }
    },

    pluginOptions: {
      i18n: {
        locale: 'en',
        fallbackLocale: 'en',
        localeDir: 'locales',
        enableInSFC: false
      }
    }
}
