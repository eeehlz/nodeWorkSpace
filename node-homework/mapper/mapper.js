const mariaDB = require("mariadb/callback");
const sqlList = require("./sql/employees.js");

const connectionPool = mariaDB.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_DATABASE,
    connectionLimit: process.env.DB_LIMIT,

    permitSetMultiParamEntries: true,
    insertIdAsNumber: true,
    bigIntAsNumber: true,

    logger: {
        query: (msg) => console.log(msg),
        error: (err) => console.log(err),
    }
})

const query = (alias, values) => {
    return new Promise((resolve, reject) => {
        let excuteSql = sqlList[alias];

        connectionPool.query(excuteSql, values, (err, result) => {
            if(err) {
                reject({err});
            } else {
                resolve(result);
            }
        });
    }).catch(err => {
        console.log(err);
        return err;
    })
}

module.exports = {
    query,
}