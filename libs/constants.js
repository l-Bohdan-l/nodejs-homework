const NAME_LIMIT = {
    min: 2,
    max: 20,
};

const HTTP_STATUS_CODE = {
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    CONFLICT: 409,
    INTERNAL_SERVER_ERROR: 500,
}


module.exports = {NAME_LIMIT, HTTP_STATUS_CODE}