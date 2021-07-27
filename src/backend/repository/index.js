const sqlite3 = require('sqlite3').verbose();

module.exports = (host, port) => {
    return new sqlite3.Database(':memory:');
}