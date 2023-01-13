const Pool = require('pg').Pool;

const pool = new Pool({
    user:'postgres',
    host:'localhost',
    database:'project',
    password:'LEapfrog@33',
    port:'5432'
})

module.exports = pool;