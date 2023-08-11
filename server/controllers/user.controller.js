const db = require("../models")
const User = db.User
const Cart = db.Cart
const CartDetail = db.CartDetail

exports.create = (request, response) => {
  const hasAllValue = Object.values(request.body).every(Boolean)

  if (!hasAllValue) {
    response.status(400).send({
      message: `User data cannot be empty.`,
      success: false,
      errorCode: "ERR9001",
    })
    return response.send(request.body)
  }

  User.create(request.body)
    .then((data) => {
      response.status(201).send({
        message: `New User created successfully`,
        success: true,
        data,
      })
    })
    .catch((error) => {
      response.status(500).send({
        message: `Saving of user data failed. Error: ${error},`,
        success: false,
        errorCode: "ERR9001",
      })
    })
}

exports.findAll = (request, response) => {
  User.findAll({ where: "" })
    .then((data) => {
      response.status(200).send({
        message: `Tutorial${
          data.length > 1 ? "s" : ""
        } has been retrieved successfully`,
        success: true,
        data,
      })
    })
    .catch((error) => {
      response.status(500).send({
        message: `Retreiving of Tutorial data failed. Error: ${error},`,
        success: false,
        errorCode: "ERR9001",
      })
    })
}

exports.findUserCart = (request, response) => {
  const userID = request.params.userID
  User.findAll({
    where: { userID },
    include: [
      {
        model: Cart,
        required: false,
        include: [CartDetail],
      },
    ],
  })
    .then((data) => {
      response.status(200).send({
        message: `Tutorial${
          data.length > 1 ? "s" : ""
        } has been retrieved successfully`,
        success: true,
        data,
      })
    })
    .catch((error) => {
      response.status(500).send({
        message: `Retreiving of Tutorial data failed. Error: ${error},`,
        success: false,
        errorCode: "ERR9001",
      })
    })
}

exports.findByPk = async (request, response) => {
  const userID = request.params.userID

  const user = await User.findByPk(userID)
  const carts = await user.getCarts()
  response.send(carts[0].getCartDetails())
  // .then((data) => {
  //   if (!data) {
  //     return response.status(400).send({
  //       message: `Tutorial data does not exist. userID: ${userID} `,
  //       success: false,
  //     })
  //   }
  //   return response.status(200).send({
  //     message: `Tutorial has been retrieved successfully`,
  //     success: true,
  //     data,
  //   })
  // })
  // .catch((error) => {
  //   return response.status(500).send({
  //     message: `Retreiving of User data failed. ${error},`,
  //     success: false,
  //     errorCode: "ERR9001",
  //   })
  // })
}

exports.update = (request, response) => {
  const hasBothValue = request.body.title && request.body.description
  if (!hasBothValue) {
    response.status(400).send({
      message: `Title or Description cannot be empty.`,
      success: false,
      errorCode: "ERR9001",
    })
    return
  }
  const id = request.params.id
  const { title, description, published } = request.body
  const newUserData = { title, description, published }

  User.update(newUserData, { where: { id: id } })
    .then((data) => {
      const affectedNumRow = data[0]
      if (!affectedNumRow) {
        response.status(400).send({
          message: `Tutorial data does not exist. id: ${id} `,
          success: false,
          affectedRow: affectedNumRow,
        })
        return
      }
      response.status(200).send({
        message: `Tutorial updated successfully`,
        success: true,
        affectedRow: affectedNumRow,
      })
    })
    .catch((error) => {
      response.status(500).send({
        message: `Saving of Tutorial data failed. Error: ${error},`,
        success: false,
        errorCode: "ERR9001",
      })
    })
}

exports.deleteAll = (request, response) => {
  User.destroy({ where: {} })
    .then(async (data) => {
      const deletedRow = await data
      if (!deletedRow) {
        response.status(400).send({
          message: `Tutorial does not have data`,
          success: false,
          deletedRow: deletedRow,
        })
        return
      }
      response.status(200).send({
        message: `Tutorial deleted successfully`,
        success: true,
        deletedRow: deletedRow,
      })
    })
    .catch((error) => {
      response.status(500).send({
        message: `Deleting of Tutorial data failed. Error: ${error},`,
        success: false,
        errorCode: "ERR9001",
      })
    })
}

exports.deleteOne = (request, response) => {
  const id = request.params.id
  User.destroy({ where: { id: id } })
    .then(async (data) => {
      const deletedRow = await data
      if (!deletedRow) {
        response.status(400).send({
          message: `Tutorial data does not exist. id: ${id} `,
          success: false,
          deletedRow: deletedRow,
        })
        return
      }
      response.status(200).send({
        message: `Tutorial deleted successfully`,
        success: true,
        deletedRow: deletedRow,
      })
    })
    .catch((error) => {
      response.status(500).send({
        message: `Deleting of Tutorial data failed. Error: ${error},`,
        success: false,
        errorCode: "ERR9001",
      })
    })
}
