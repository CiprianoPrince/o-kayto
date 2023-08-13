require("dotenv").config()
const express = require("express")
const helmet = require("helmet")
const rateLimit = require("express-rate-limit")
// const winston = require("winston")
const errorLogger = require("./logger")
const expressWinston = require("express-winston")

const app = express()

// Request logger (can log all incoming requests)
// app.use(
//   expressWinston.logger({
//     transports: [new winston.transports.Console()],
//     format: winston.format.combine(
//       winston.format.colorize(),
//       winston.format.json()
//     ),
//     meta: true, // optional: log meta data about request (defaults to true)
//     msg: "HTTP {{req.method}} {{req.url}}", // Customize the default logging message
//     expressFormat: true, // Use the default Express/morgan request formatting
//     colorize: true, // Color the text
//     ignoreRoute: (req, res) => false, // optional: allows to skip some log messages based on the request and/or response
//   })
// )
app.use(
  expressWinston.errorLogger({
    winstonInstance: errorLogger,
  })
)

// Error logger (logs all errors)
// app.use(
//   expressWinston.errorLogger({
//     transports: [
//       new winston.transports.Console({
//         json: true,
//         colorize: true,
//       }),
//     ],
//   })
// )

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
})

app.use("/api/", apiLimiter)
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const db = require("./models")
db.sequelize.sync().then().catch()

require("./routes/user.routes")(app)

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
