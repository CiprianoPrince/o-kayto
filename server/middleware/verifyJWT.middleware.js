// const jwt = require('jsonwebtoken');

// module.exports = (req, res, next) => {
//     const authHeader = req.headers.authorization || req.headers.Authorization;
//     if (!authHeader?.startsWith('Bearer ')) return res.sendStatus(401);
//     const token = authHeader.split(' ')[1];
//     console.log(token);
//     jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
//         if (err) return res.sendStatus(403); //invalid token
//         req.userID = decoded.userInfo.userID;
//         req.role = decoded.userInfo.role;
//         next();
//     });
// };

const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (request, response, next) => {
    const authHeader = request.headers.authorization || request.headers.Authorization;
    // Check if authHeader exists and starts with 'Bearer '
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return response.sendStatus(401); // Unauthorized
    }

    // Extract token from authHeader
    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.ACCESS_TOKEN, (err, decoded) => {
        if (err) {
            return response.sendStatus(403); // Forbidden due to invalid token
        }

        // Assign user information to the request object
        request.userID = decoded.userInfo.userID;
        request.role = decoded.userInfo.role;

        next(); // Proceed to the next middleware or route handler
    });
};
