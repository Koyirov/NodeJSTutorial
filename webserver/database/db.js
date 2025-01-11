import mysql from "mysql2";


export const db = mysql.createConnection({
    host: "localhost",
    user: "testuser",
    password: "123456",
    port: 3306,
    database: "nodejscource",
})

module.exports  = db.promise();