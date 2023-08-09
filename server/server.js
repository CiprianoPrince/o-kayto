require('dotenv').config()
const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded())

const db = require('./models')
db.sequelize.sync().then().catch()

require('./routes/user.routes')(app);

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
console.log(`listening on port ${PORT}`)
});