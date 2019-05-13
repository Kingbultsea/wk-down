module.exports = {
  baseUrl: './', // /cosleep/teacher/    ./ https://webres.psy-1.com/sgy/dist
  assetsDir: './',
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/globalscss/setSize.scss"; `
      }
    }
  }
}
