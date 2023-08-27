require('dotenv').config();
const db = require('../models');
const UserModel = db.User;
const RefreshTokenModel = db.RefreshToken;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const ROLELIST = require('../constant/ROLELIST');
// exports.handleLogin = async (req, res) => {
//     const cookies = req.cookies;
//     console.log(`cookie available at login: ${JSON.stringify(cookies)}`);
//     const { email, password } = req.body;

//     if (!email || !password)
//         return res.status(400).json({ message: 'Username and password are required.' });

//     const foundUser = await UserModel.findOne({ where: { email: email } });
//     if (!foundUser) return res.sendStatus(401); //Unauthorized

//     // evaluate password
//     const match = await bcrypt.compare(password, foundUser.password);

//     if (match) {
//         const role = await foundUser.getProfile().role;
//         const foundUserRole = ROLES[role];

//         // const roles = Object.values(foundUser.getProfile().role).filter(Boolean);

//         // create JWTs
//         const accessToken = jwt.sign(
//             {
//                 userInfo: {
//                     email: foundUser.email,
//                     role: foundUserRole,
//                 },
//             },
//             process.env.ACCESS_TOKEN,
//             { expiresIn: '10s' }
//         );

//         const refreshToken = jwt.sign({ email: foundUser.email }, process.env.REFRESH_TOKEN, {
//             expiresIn: '1d',
//         });

//         // Changed to let keyword
//         // let newRefreshTokenArray = !cookies?.jwt
//         //     ? foundUser.refreshToken
//         //     : foundUser.refreshToken.filter((rt) => rt !== cookies.jwt);
//         foundUser.createRefreshToken({ token: refreshToken });

//         if (cookies?.jwt) {
//             /*
//             Scenario added here:
//                 1) User logs in but never uses RT and does not logout
//                 2) RT is stolen
//                 3) If 1 & 2, reuse detection is needed to clear all RTs when user logs in
//             */

//             const refreshToken = cookies.jwt;
//             const foundToken = await RefreshTokenModel.findOne({ where: { token: refreshToken } });

//             // Detected refresh token reuse!
//             if (!foundToken) {
//                 console.log(foundToken);
//                 console.log('attempted refresh token reuse at login!');
//                 // clear out ALL previous refresh tokens
//                 RefreshTokenModel.destroy({ where: { userID: foundUser.userID } });
//             }

//             res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
//         }

//         // Creates Secure Cookie with refresh token
//         res.cookie('jwt', refreshToken, {
//             httpOnly: true,
//             secure: true,
//             sameSite: 'None',
//             maxAge: 24 * 60 * 60 * 1000,
//         });

//         // Send authorization roles and access token to user
//         res.send({ accessToken });
//     } else {
//         res.sendStatus(401);
//     }
// };

exports.handleLogin = async (req, res) => {
    const { email, password } = req.body;

    // Check for email and password in request body
    if (!email || !password) {
        return res.status(400).json({ message: 'Username and password are required.' });
    }

    // Find user by email
    const foundUser = await UserModel.findOne({ where: { email } });
    if (!foundUser) return res.sendStatus(401); //Unauthorized

    // Check password
    const match = await bcrypt.compare(password, foundUser.password);
    if (!match) return res.sendStatus(401); // Unauthorized

    // Get user role
    const foundUserRole = await foundUser.getProfile().role;
    const role = ROLELIST[foundUserRole];

    // Create JWTs
    const accessToken = jwt.sign(
        {
            userInfo: {
                userID: foundUser.userID,
                role: role,
            },
        },
        process.env.ACCESS_TOKEN,
        { expiresIn: '15' }
    );

    const refreshToken = jwt.sign(
        { userID: foundUser.userID, role: role },
        process.env.REFRESH_TOKEN,
        {
            expiresIn: '1d',
        }
    );

    // Save new refresh token for the user
    foundUser.createRefreshToken({ token: refreshToken });

    // Check for possible token reuse and handle accordingly
    if (req.cookies?.jwt) {
        const existingToken = req.cookies.jwt;
        const foundToken = await RefreshTokenModel.findOne({ where: { token: existingToken } });

        // Detected refresh token reuse!
        if (!foundToken) {
            console.log('Attempted refresh token reuse at login!');
            // clear out ALL previous refresh tokens
            RefreshTokenModel.destroy({ where: { userID: foundUser.userID } });
        }

        res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
    }

    console.log('here is the cookie:', refreshToken)
    // Set cookie for refresh token
    res.cookie('jwt', refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: 'None',
        maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    // Send access token to user
    res.send({ accessToken });
};
