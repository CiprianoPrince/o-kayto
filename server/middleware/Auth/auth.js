const jwt = require("jsonwebtoken")
module.exports = (request, response, next) => {
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN, {
    expiresIn: "24h",
  })
  const verifyToken = jwt.verify(
    accessToken,
    process.env.ACCESS_TOKEN,
    (err, data) => {
      const errorMessage = err
      const userData = data
      console.log(errorMessage)
      console.log(userData)
    }
  )
  console.log(accessToken)
  console.log(verifyToken)
}
