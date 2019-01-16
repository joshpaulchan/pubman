import polka from 'polka';
import {
    requestRoutes
} from './api';
import {
    connectDB
} from './repository';

const dbClient = connectDB(process.env.SQLITE_DB_FILE);

polka()
    .use(requestRoutes(dbClient))
    .listen(3000, err => {
        if (err) throw err;
        console.log(`> Running on localhost:3000`);
    });