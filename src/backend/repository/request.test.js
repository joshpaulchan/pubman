import {
    schema
} from "../entity/sqlite/request";
import {
    getRequestsByFilter
} from "./request";

const sqlite3 = require('sqlite3').verbose();

describe('getRequestsByFilter', () => {

    let db;
    beforeEach(() => {
        db = new sqlite3.Database(':memory:');
        return new Promise((resolve, reject) => {
            db.exec(
                schema() +
                `
                insert into requests (id, name, createdAt, updatedAt, endpoint, endpointTypeId) values (1, 'enim blandit mi in porttitor pede', '1519796858', '1519100446', '40e9c334-2557-4c17-b685-13ae7c3703c2', 0);
                insert into requests (id, name, createdAt, updatedAt, endpoint, endpointTypeId) values (2, 'nisi venenatis tristique fusce congue diam id ornare', '1544517405', '1521542187', '55228571-7792-425a-ae71-1fe17eb1eb59', 1);
                insert into requests (id, name, createdAt, updatedAt, endpoint, endpointTypeId) values (3, 'cum sociis natoque', '1540801450', '1528764360', 'de90effc-fdca-4b66-9d8b-5c02cb96e7b4', 0);
                insert into requests (id, name, createdAt, updatedAt, endpoint, endpointTypeId) values (4, 'duis bibendum felis sed', '1520930129', '1527118679', '875ec15e-7e11-4e89-927b-f326f55d8411', 1);
                insert into requests (id, name, createdAt, updatedAt, endpoint, endpointTypeId) values (5, 'mauris sit amet eros', '1517255108', '1522921513', '0d766c85-4fc4-462b-b696-9e166205d984', 1);
            `, resolve);
        });
    });

    afterEach(() => {
        if (db != null) {
            db.close();
            db = null;
        }
    });

    it('should fail for null/disconnected DB', async () => {
        expect.assertions(1);
        await expect(getRequestsByFilter(null)).rejects.toMatch(/db/);
    });

    it('should return the specified limit', async () => {
        expect.assertions(1);
        const requests = await getRequestsByFilter(db, null, {
            limit: 3
        })
        expect(requests.length).toBe(3);
    });

    it('should return the min(specified limit, source length)', async () => {
        expect.assertions(1);
        const requests = await getRequestsByFilter(db, null, {
            limit: 10
        })
        expect(requests.length).toBe(5);
    });

    it('should return the min(specified limit, source length - offset)', async () => {
        expect.assertions(1);
        const requests = await getRequestsByFilter(db, null, {
            offset: 4,
            limit: 3
        })
        expect(requests.length).toBe(1);
    });

})