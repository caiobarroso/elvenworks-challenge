const Pool = require('pg').Pool

const pool = new Pool({
    user:"postgres",
    password:"99062058",
    host:"localhost",
    port: 5432,
    database: "elvenworks"
})

module.exports = pool