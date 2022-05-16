import mysql from "mysql2/promise";
import express from 'express';
const app = express();

const { HOSTNAME_DB, NAME_DB, USERNAME_DB, PASSWORD_DB } = process.env;

const pool = mysql.createPool({
    host: "localhost",
    database: "eshop",
    user: "root",
    password: "",
    waitForConnections: true,
    connectionLimit: 10000,
    queueLimit: 0,
});

pool.getConnection().then(res => {    
    console.log(`Bien connecté à la BDD --> ${res.config.database}!`);
})


export default pool;