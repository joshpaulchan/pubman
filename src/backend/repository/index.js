const sqlite3 = require('sqlite3').verbose();

export const connectDB = (host, port) => {
    return new sqlite3.Database(':memory:');
}