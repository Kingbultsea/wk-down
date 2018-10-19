module.exports = {
    baseUrl: './',///cosleep/teacher/
    assetsDir: './',
    css: {
        loaderOptions: {
            sass: {
                data: `@import "@/globalscss/setSize.scss"; `
            }
        }
    }
}