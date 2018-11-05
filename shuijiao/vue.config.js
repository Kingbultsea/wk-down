module.exports = {
    baseUrl: 'https://webres.psy-1.com/sgy/dist',///cosleep/teacher/    ./
    assetsDir: './',
    css: {
        loaderOptions: {
            sass: {
                data: `@import "@/globalscss/setSize.scss"; `
            }
        }
    }
}
