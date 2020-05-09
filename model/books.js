const connection = require('../config/database');
const db = connection.getDb();
const books = db.collection('books');

module.exports = books;