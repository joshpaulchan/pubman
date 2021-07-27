const polka = require("polka");
const {
    getRequestsByFilter
} = require("../repository/request");

export const getAllRequestsHandler = (req, res) => {
    const limit = parseInt(req.query.limit, 10);
    const offset = parseInt(req.query.offset, 10)
    const pagination = {};

    if (!isNaN(limit) && limit >= 0) {
        pagination.limit = limit;
    }
    if (!isNaN(offset) && offset >= 0) {
        pagination.offset = offset;
    }

    res.json(getRequestsByFilter(null, pagination));
}

module.exports = () => {
    return polka()
        .get('', getAllRequestsHandler)
}