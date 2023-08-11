module.exports = (app) => {
  const controller = require("../controllers/cart.controller")

  const router = require("express").Router()

  router.post("/", controller.create)

  router.get("/", controller.findAll)

  router.get("/:id", controller.findByPk)

  router.put("/:id", controller.update)

  router.delete("/", controller.deleteAll)

  router.delete("/:id", controller.deleteOne)

  app.use("/api/carts", router)
}
