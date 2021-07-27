const polka = require('polka');
const requestRoutes = require('./api/request');
const connectDB = require('./repository');

const dbClient = connectDB(process.env.SQLITE_DB_FILE);

polka()
    .use(requestRoutes(dbClient))
    .listen(54768, err => {
        if (err) throw err;
        console.log(`> Running on localhost:3000`);
    });