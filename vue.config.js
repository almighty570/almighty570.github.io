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
    }
}