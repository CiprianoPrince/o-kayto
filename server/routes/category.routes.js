module.exports = (app) => {
  const controller = require("../controllers/category.controller")
  const validator = require("../validators/category.validator")

  const router = require("express").Router()

  // Retrieve all category.
  router.get("/", controller.findAll)

  //  Retrieve details of a specific category.
  router.get("/:categoryID", controller.findByPk)

  // Add a new category.
  router.post("/", controller.createOne)

  //  Update a category's details.
  router.put("/:categoryID", controller.updateOne)

  //  Delete a category.
  router.delete("/:categoryID", controller.deleteOne)

  app.use("/api/categories", router)
}
