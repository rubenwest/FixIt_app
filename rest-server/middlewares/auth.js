// const jwt = require("jsonwebtoken");

// const verifyToken = (req, res, next) => {
//     const token = req.get("token");
//     jwt.verify(token, process.env.SEED, (error, decodedToken) => {
//         if (error !== null) {
//             return res.status(401).json({
//                 ok: false,
//                 error: {
//                     message: "Invalid Token"
//                 }
//             })
//         }
//     });
//     next();
// };

// module.exports = {
//     verifyToken
// }