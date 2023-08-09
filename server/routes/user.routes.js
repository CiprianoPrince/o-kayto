module.exports = (app) => {
  const users = require("../controllers/user.controller")
  const { auth } = require("../middleware")

  const router = require("express").Router()

  router.post("/", auth, users.create)

  router.get("/", users.findAll)

  router.get("/:id", users.findByPk)

  router.put("/:id", users.update)

  router.delete("/", users.deleteAll)

  router.delete("/:id", users.deleteOne)

  app.use("/api/users", router)
}
