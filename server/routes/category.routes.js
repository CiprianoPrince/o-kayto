module.exports = (app) => {
  const controller = require("../controllers/category.controller")
  const validator = require("../validators/category.validator")

  const router = require("express").Router()

  router.get("/", controller.findAll)

  router.get("/:categoryID", controller.findByPk)

  router.post("/", controller.createOne)

  router.put("/:categoryID", controller.updateOne)

  router.delete("/:categoryID", controller.deleteOne)

  app.use("/api/categories", router)
}
