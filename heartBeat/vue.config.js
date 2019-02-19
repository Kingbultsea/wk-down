module.exports = {
  baseUrl: 'https://webres.psy-1.com/sgy/dist', // /cosleep/teacher/    ./ https://webres.psy-1.com/sgy/dist
  assetsDir: './',
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/globalscss/setSize.scss"; `
      }
    }
  },
  devServer: {
    port: '8085'
  }
}
