const rds = require('ali-rds')

module.exports = rds({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '123456',
    database: 'vx'
})
