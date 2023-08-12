module.exports = (app) => {
  const controller = require("../controllers/user.controller")
  const validator = require("../validators/user.validator")

  const router = require("express").Router()

  // GET /reviews - Retrieve all reviews.
  // GET /reviews/{reviewId} - Retrieve a specific review.
  // POST /reviews - Add a new review.
  // PUT /reviews/{reviewId} - Update a review.
  // DELETE /reviews/{reviewId} - Delete a review.

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
