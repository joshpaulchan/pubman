export default class Request {
    constructor({
        id,
        name,
        createdAt,
        updatedAt,
        endpoint,
        endpointType
    }) {
        this._id = id;
        this._name = name;
        this._createdAt = createdAt;
        this._updatedAt = updatedAt;
        this._endpoint = endpoint;
        this._endpointType = endpointType;
    }
}

Request.prototype.getId = () => {
    return this._id;
}

Request.prototype.setId = (id) => {
    this._id = id;
}

Request.prototype.getName = () => {
    return this._name;
}

Request.prototype.setName = (name) => {
    this._name = name;
}

Request.prototype.getCreatedAt = () => {
    return this._createdAt;
}

Request.prototype.setCreatedAt = (createdAt) => {
    this._createdAt = createdAt;
}

Request.prototype.getUpdatedAt = () => {
    return this._updatedAt;
}

Request.prototype.setUpdatedAt = (updatedAt) => {
    this._updatedAt = updatedAt;
}

Request.prototype.getEndpoint = () => {
    return this._endpoint;
}

Request.prototype.setEndpoint = (endpoint) => {
    this._endpoint = endpoint;
}

Request.prototype.getEndpointType = () => {
    return this.e_endpointType;
}

Request.prototype.setEndpointType = (endpointType) => {
    this.e_endpointType = endpointType;
}