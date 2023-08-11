module.exports = (app) => {
  const controller = require("../controllers/user.controller")

  const router = require("express").Router()

  router.post("/", controller.create)

  router.get("/", controller.findAll)

  // router.get("/:userID", controller.findUserCart)

  router.get("/:userID", controller.findByPk)

  router.put("/:userID", controller.update)

  router.delete("/", controller.deleteAll)

  router.delete("/:userID", controller.deleteOne)

  app.use("/api/users", router)
}
