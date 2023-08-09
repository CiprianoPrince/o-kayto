const jwt = require("jsonwebtoken")
module.exports = (request, response, next) => {
  const user = {
    id: "59754847-9a8c-4038-b7d1-dd31369047d9",
    name: "John Doe",
    email: "JohnDoe@gmail.com",
  }

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
