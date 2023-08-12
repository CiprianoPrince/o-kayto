module.exports = (app) => {
  const controller = require("../controllers/user.controller")
  const validator = require("../validators/user.validator")

  const router = require("express").Router()

  // GET /products - Retrieve all products.
  // GET /products/{productId} - Retrieve details of a specific product.
  // POST /products - Add a new product.
  // PUT /products/{productId} - Update a product's details.
  // DELETE /products/{productId} - Delete a product.

  router.get("/", controller.findAll)

  router.get("/:userID", controller.findByPk)

  router.post(
    "/",
    validator.validateFirstName,
    validator.validatelastName,
    validator.validateEmail,
    controller.createOne
  )

  router.put(
    "/:userID",
    validator.validateFirstName,
    validator.validatelastName,
    validator.validateEmail,
    controller.updateOne
  )

  router.put(
    "complete/:userID",
    validator.validateFirstName,
    validator.validatelastName,
    validator.validateEmail,
    validator.validateAddress,
    validator.validatePhone,
    controller.updateOne
  )

  router.delete("/:userID", controller.deleteOne)

  app.use("/api/users", router)
}
