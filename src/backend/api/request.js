import polka from "polka";
import {
    getRequestsByFilter
} from "../repository/request";

export const getAllRequestsHandlerBuilder = (dbClient) => (req, res) => {
    const limit = parseInt(req.query.limit, 10);
    const offset = parseInt(req.query.offset, 10)
    const pagination = {};

    if (!isNaN(limit) && limit >= 0) {
        pagination.limit = limit;
    }
    if (!isNaN(offset) && offset >= 0) {
        pagination.offset = offset;
    }

    return res.json(getRequestsByFilter(dbClient, undefined, pagination));
}

export default (db) => {
    return polka()
        .get('', getAllRequestsHandlerBuilder(db));
}