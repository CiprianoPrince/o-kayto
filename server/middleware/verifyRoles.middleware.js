// module.exports = (...allowedRoles) => {
//     return (req, res, next) => {
//         if (!req?.role) return res.sendStatus(401);
//         const rolesArray = [...allowedRoles];
//         const result = rolesArray.includes(role);

//         if (!result) return res.sendStatus(401);
//         next();
//     };
// };

module.exports = (...allowedRoles) => {
    return (req, res, next) => {
        const userRole = req?.role;
        if (!userRole) return res.sendStatus(401);

        if (!allowedRoles.includes(userRole)) return res.sendStatus(401);
        next();
    };
};
