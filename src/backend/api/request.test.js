import {
    getRequestsByFilter
} from "../repository/request";
import {
    getAllRequestsHandlerBuilder
} from "./request";

jest.mock("../repository/request");

describe('/requests', () => {

    let dbClient;
    let getAllRequestsHandler;
    let request;
    let response;
    beforeEach(() => {
        getAllRequestsHandler = getAllRequestsHandlerBuilder(dbClient);
        request = {
            params: {},
            query: {}
        };
        response = {
            json: (resp) => console.log
        };
    });

    it('should succeed with defaults', () => {
        getAllRequestsHandler(request, response);

        expect(getRequestsByFilter).toBeCalled();
    });

    it('should fail with non-numeric limit', () => {
        request.query.limit = 'xyz';
        getAllRequestsHandler(request, response)

        expect(getRequestsByFilter).toBeCalledWith(dbClient, undefined, {});
    });

    it('should fail with non-numeric offset', () => {
        const offset = 'xyz';
        request.query.offset = offset;
        getAllRequestsHandler(request, response)

        expect(getRequestsByFilter).toBeCalledWith(dbClient, undefined, {});
    });

    it('should fail with negative offset', () => {
        const offset = -3;
        request.query.offset = offset;
        getAllRequestsHandler(request, response)

        expect(getRequestsByFilter).toBeCalledWith(dbClient, undefined, {});
    });

    it('should fail with negative limit', () => {
        const limit = -3;
        request.query.limit = limit;
        getAllRequestsHandler(request, response)

        expect(getRequestsByFilter).toBeCalledWith(dbClient, undefined, {});
    });

    it('should succeed with numeric limit', () => {
        const limit = 20;
        request.query.limit = limit;
        getAllRequestsHandler(request, response)

        expect(getRequestsByFilter).toBeCalledWith(dbClient, undefined, {
            limit
        });
    });

    it('should succeed for with numeric offset', () => {
        const offset = 20;
        request.query.offset = offset;
        getAllRequestsHandler(request, response)

        expect(getRequestsByFilter).toBeCalledWith(dbClient, undefined, {
            offset
        });
    });
})