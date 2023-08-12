module.exports = (app) => {
  const controller = require("../controllers/user.controller")

  const router = require("express").Router()

  router.get("/", controller.findAll)

  router.get("/:userID", controller.findByPk)

  router.post("/", controller.createOne)

  router.put("/:userID", controller.updateOne)

  router.delete("/:userID", controller.deleteOne)

  app.use("/api/users", router)
}
