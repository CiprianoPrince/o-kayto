module.exports = (app) => {
  const controller = require("../controllers/user.controller")
  const validator = require("../validators/user.validator")

  const router = require("express").Router()


// GET /orders - Retrieve all orders.
// GET /orders/{orderId} - Retrieve a specific order.
// POST /orders - Place a new order.
// PUT /orders/{orderId} - Update order details/status.
// DELETE /orders/{orderId} - Cancel an order.

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

  // POST /orders/{orderId}/payments - Make a payment for an order.
  app.use("/api/orders", router)
}
