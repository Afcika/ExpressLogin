// db.js
const mysql = require('mysql2');
require('dotenv').config(); 
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST || 'localhost',
    user: process.env.DATABASE_USER || 'root',
    password: process.env.DATABASE_PASSWORD || '11111',
    database: process.env.DATABASE || 'DanelaSQL'
});
console.log(process.env.DATABASE_HOST)
db.connect((err) => {
    
    if (err) {
        console.log(process.env.DATABASE_HOST);
    
        console.error('Error connecting to the database:', err);
        process.exit(1); 
    } else {
        console.log('Database connected successfully.');
    }
});

module.exports = db;
