// const allowedOrigins = require('../config/allowedOrigins');

// module.exports = (req, res, next) => {
//     const origin = req.headers.origin;
//     if (allowedOrigins.includes(origin)) {
//         res.header('Access-Control-Allow-Credentials', true);
//     }
//     next();
// };

const allowedOrigins = require('../config/allowedOrigins');

module.exports = (request, response, next) => {
    const { origin } = request.headers;

    if (origin && allowedOrigins.includes(origin)) {
        response.header('Access-Control-Allow-Credentials', true);
    }
    next();
};
