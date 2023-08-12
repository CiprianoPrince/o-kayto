const db = require("../models")
const UserModel = db.User

exports.findAll = async (request, response) => {
  try {
    const users = await UserModel.findAll()
    response.status(200).send({
      message: `Retrieved users${
        users.length <= 1 ? "" : "s"
      } data successfully`,
      success: true,
      data: users,
    })
  } catch (error) {
    response.status(500).send({
      message: `Retreiving of users data failed. Error: ${error},`,
      success: false,
      errorCode: "ERR9001",
    })
  }
}

exports.findByPk = async (request, response) => {
  const userID = request.params.userID

  try {
    const dbUserData = await UserModel.findByPk(userID)
    response.status(200).send({
      message: `Retrieved user data successfully`,
      success: true,
      data: dbUserData,
    })
  } catch (error) {
    response.status(500).send({
      message: `Retreiving of user data failed. Error: ${error},`,
      success: false,
      errorCode: "ERR9001",
    })
  }
}

exports.createOne = async (request, response) => {
  try {
    const rawUserData = request.body
    const dbUserData = await UserModel.create(rawUserData)
    response.status(200).send({
      message: `Registered user successfully`,
      success: true,
      data: dbUserData,
    })
  } catch (error) {
    response.status(500).send({
      message: `Failed to register user. Error: ${error},`,
      success: false,
      errorCode: "ERR9001",
    })
  }
}

exports.updateOne = (request, response) => {
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
