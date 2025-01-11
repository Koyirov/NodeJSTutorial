import mysql from "mysql2";


export const db = mysql.createConnection({
    host: "localhost",
    user: "testuser",
    password: "123456",
    database: "nodejscourse",
})

module.exports  = db.promise();