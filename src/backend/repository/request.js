import Request from "../entity/request";

import {
    connectDB
} from ".";

const DEFAULT_OFFSET = 0;
const DEFAULT_LIMIT = 50;

// `getRequestsByFilter( requestFilters: RequestFilter[], pagination: {limit, offset}) -> Promise<[Request]>
// gets requests by filters and pagination details
// `requestFilters` is an array of one or more filters that are AND with each other of different classes, but OR in the same class.
// i.e.
// (topic:4)&(queue:2||queue:3)&(name:green)
// should match requests from topic:4 AND (queue:2 or 3) AND name:green (which may very well be an empty set)
const GET_REQUESTS_BY_FILTER_QUERY = `
    SELECT r.* FROM requests r
    LIMIT $limit
    OFFSET $offset;
`;

export const getRequestsByFilter = (db, requestFilters, pagination) => {
    return new Promise((resolve, reject) => {
        if (db == null) {
            reject("db was null or undefined.")
        }

        // TODO: implement filters.
        if (requestFilters != null) {
            reject("Fitlers are not yet implemented.");
        }

        let limit = ((pagination == null) ? DEFAULT_LIMIT : pagination.limit) || DEFAULT_LIMIT;
        let offset = ((pagination == null) ? DEFAULT_OFFSET : pagination.offset) || DEFAULT_OFFSET;

        return db.all(GET_REQUESTS_BY_FILTER_QUERY, {
            $limit: limit,
            $offset: offset
        }, (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows.map(row => {
                    return new Request({
                        id: row.id,
                        name: row.name,
                        createdAt: row.createdAt,
                        updatedAt: row.updatedAt,
                        endpoint: row.endpoint,
                        endpointType: row.endpointType
                    })
                }))
            }
        });
    });
}

// `createRequest(request: Request) -> Request`
// given a request entity, persists it to the DB.
const createRequest = (db, request) => {
    if (db == null) {
        throw new Error("db was null or undefined.")
    }
    return db.all()
}

const getRequestById = (db, id) => {
    // TODO
}