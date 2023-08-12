const { body } = require("express-validator")

exports.validateFirstName = [
  body("firstName")
    .notEmpty()
    .withMessage("First name is required")
    .isAlpha()
    .withMessage("First name must contain only letters")
    .isLength({ min: 3 })
    .withMessage("First name must be at least 3 characters long"),
]

exports.validatelastName = [
  body("lastName")
    .notEmpty()
    .withMessage("Last name is required")
    .isAlpha()
    .withMessage("Last name must contain only letters")
    .isLength({ min: 3 })
    .withMessage("Last name must be at least 3 characters long"),
]

exports.validateEmail = [
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email format"),
]

exports.validateAddress = [
  body("address.barangay").isEmpty().withMessage("Barangay is required"),
  body("address.city").isEmpty().withMessage("City is required"),
  body("address.region").isEmpty().withMessage("Region is required"),
  body("address.zip")
    .isLength({ min: 4, max: 4 })
    .withMessage("Zip code should be 4 digits")
    .isNumeric()
    .withMessage("Zip code should be numeric"),
]

exports.validatePhone = [
  body("phone")
    .notEmpty()
    .withMessage("Phone is required")
    .matches(
      "/^(+)?(63)?(-| )?(()?0?(-| )?(()?(d{3})())?(-| )?(d{3})(-| )?(d{4})$/"
    )
    .withMessage("Invalid phone number format"),
]
