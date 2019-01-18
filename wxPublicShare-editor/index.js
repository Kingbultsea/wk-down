// require('./js/Serve')
const sendTouser = require('./js/sendTouser.js')

let token = '17_CIOLRR8w6nLRMIIXNge_CIqHwTKBQYk58LkiOQ0Ac6uiYlJewWSW2KFoIGZA3x8vw6LVHjJkVlxDGnQcATNVaCFlnKzFELajF3g6rA0UibFbY6WGPmU6MVkxN9GsY0Csok_df5V7mpUQuIngGLKiAFDZED'
let mediaId = 'stVqAsX6vJYtouXADFP4kC5GElJgnk-wBGiMLQ847sPOkamQl2WD971UTDUThJMw'

sendTouser.saveMediaResource(mediaId, token, 'asd', 'mp3')
