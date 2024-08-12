/*
 * Response Format will format the response with status code, message and data
 */



/**
 * @param {req} req
 * @param {res} res
 */
const success = async (req, res) => {
    res.body = res.body || {};
    res.body.statusCode = res.body.statusCode || 200;
    res.status(res.body.statusCode);
    res.json(res.body);
};

/**
 * @param {req} req
 * @param {res} res
 * @param {errors} errors
 */
const badRequest = (req, res, errors) => {
    res.body = res.body || {};
    res.body = getErrorArray(errors);
    res.body.statusCode = 400;
    res.status(400);
    res.json(res.body);
};


/**
 * @param {req} req
 * @param {res} res
 * @param {errors} errors
 */
const unAuthorized = (req, res, errors) => {
    res.body = res.body || {};
    res.body = getError(errors);
    res.body.statusCode = 401;
    res.status(401);
    res.json(res.body);
};

/**
 * @param {req} req
 * @param {res} res
 * @param {errors} errors
 */
const notFound = (req, res, errors) => {
    res.body = res.body || {};
    res.body = getError(errors);
    res.body.statusCode = 404;
    res.status(404);
    res.json(res.body);
};


/**
 * @param {req} req
 * @param {res} res
 * @param {errors} errors
 */
const internalError = (req, res, errors) => {
    res.body.statusCode = 500;
    res.status(500);
    if (errors) {
        res.body = errors;
    } else if (errors.stack) {
        const { message, stack } = errors;
        res.body = {
            message,
            stack,
        };
    } else {
        res.body = { message: 'Internal Server Error' };
    }
    res.json(res.body);
};

/**
 * @param {req} req
 * @param {res} res
 * @param {errors} errors
 */
const forbidden = (req, res, errors) => {
    res.body = res.body || {};
    res.body = getError(errors);
    res.body.statusCode = 403;
    res.status(403);
    res.json(res.body);
};


module.exports = {
    success,
    internalError,
    badRequest,
    unAuthorized,
    notFound,
    forbidden,
};
