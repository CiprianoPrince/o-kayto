// module.exports = (...allowedRoles) => {
//     return (req, res, next) => {
//         if (!req?.role) return res.sendStatus(401);
//         const rolesArray = [...allowedRoles];
//         const result = rolesArray.includes(role);

const ROLELIST = require('../constant/ROLELIST');

//         if (!result) return res.sendStatus(401);
//         next();
//     };
// };

module.exports = (...allowedRoles) => {
    return (request, response, next) => {
        if (allowedRoles.includes(ROLELIST.Guest)) return next();
        const currentRole = request?.role;
        if (!currentRole) return response.sendStatus(401);

        if (!allowedRoles.includes(currentRole)) return response.sendStatus(401);
        next();
    };
};
