import sqlite3 from "sqlite3";
import path from "path";

const databasePath = path.resolve(__dirname, '../../data/dua_main.sqlite');
const db = new sqlite3.Database(databasePath, sqlite3.OPEN_READONLY, (err: Error | null) => {
    if (err) console.log('Error connecting to the database', err.message);
    else console.log('Connected to dua_main database');
})

export default db;