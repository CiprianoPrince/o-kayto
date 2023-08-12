const db = require("../models")
const UserModel = db.User

const { validationResult } = require("express-validator")

exports.findAll = async (request, response) => {
  try {
    const users = await UserModel.findAll()
    return response.status(200).send({
      message: `Retrieved users${
        users.length <= 1 ? "" : "s"
      } data successfully`,
      success: true,
      data: users,
    })
  } catch (error) {
    return response.status(500).send({
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
    return response.status(200).send({
      message: `Retrieved user data successfully`,
      success: true,
      data: dbUserData,
    })
  } catch (error) {
    return response.status(500).send({
      message: `Retreiving of user data failed. Error: ${error},`,
      success: false,
      errorCode: "ERR9001",
    })
  }
}

exports.createOne = async (request, response) => {
  const errors = validationResult(request)

  if (!errors.isEmpty()) {
    return response.status(400).send({
      message: `Fields should not be empty/Incorrect format.`,
      success: false,
      errors: errors.array(),
    })
  }

  try {
    const rawUserData = request.body
    const dbUserData = await UserModel.create(rawUserData)
    return response.status(200).send({
      message: `Registered user successfully.`,
      success: true,
      data: dbUserData,
    })
  } catch (error) {
    return response.status(500).send({
      message: `Failed to register user. Error: ${error},`,
      success: false,
      errorCode: "ERR9001",
    })
  }
}

exports.updateOne = async (request, response) => {
  const errors = validationResult(request)

  if (!errors.isEmpty()) {
    return response.status(400).send({
      message: `Fields should not be empty/Incorrect format.`,
      success: false,
      errors: errors.array(),
    })
  }

  try {
    const userID = request.params.userID
    const rawUserData = await request.body

    const [isUpdated] = await UserModel.update(rawUserData, {
      where: { userID },
    })

    if (!isUpdated) {
      return response.status(400).send({
        message: `User does not exist. userID: ${userID}`,
        success: false,
        affectedRow: isUpdated,
      })
    }

    return response.status(200).send({
      message: `User details updated successfully`,
      success: true,
      affectedRow: isUpdated,
    })
  } catch (error) {
    response.status(500).send({
      message: `Failed to register user.. Error: ${error},`,
      success: false,
      errorCode: "ERR9001",
    })
  }
}

exports.deleteOne = async (request, response) => {
  try {
    const userID = request.params.userID

    const isDeleted = await UserModel.destroy({ where: { userID } })
    console.log(isDeleted)
    if (!isDeleted) {
      return response.status(400).send({
        message: `User does not exist. id: ${id} `,
        success: false,
        deletedRow: isDeleted,
      })
    }
    response.status(200).send({
      message: `User deleted successfully`,
      success: true,
      deletedRow: deletedRow,
    })
  } catch (error) {
    response.status(500).send({
      message: `Failed to delete user. Error: ${error},`,
      success: false,
      errorCode: "ERR9001",
    })
  }
}
