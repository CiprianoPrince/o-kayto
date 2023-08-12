const db = require("../models")
const UserModel = db.User

const { ValidationError } = require("sequelize")

const { validationResult } = require("express-validator")

const { StatusCodes } = require("http-status-codes")

const sendResponse = require("../helpers/sendResponse")
const generateMessage = require("../helpers/generateMessage")
const getModelName = require("../helpers/getModelName")

const modelName = getModelName(__filename)

exports.findAllUser = async (request, response) => {
  try {
    const users = await UserModel.findAll()
    if (!users.length) {
      return sendResponse(
        response,
        StatusCodes.NO_CONTENT,
        generateMessage.findAll.missing(modelName)
      )
    }

    sendResponse(
      response,
      StatusCodes.OK,
      generateMessage.findAll.success(modelName, users.length),
      users
    )
  } catch (error) {
    if (error instanceof ValidationError) {
      // handle validation error
    }

    sendResponse(
      response,
      StatusCodes.INTERNAL_SERVER_ERROR,
      generateMessage.findAll.failure(modelName),
      null,
      error,
      "ERR9001"
    )
  }
}

exports.findUserByPk = async (request, response) => {
  try {
    const userID = request.params.userID
    const dbUserData = await UserModel.findByPk(userID)
    if (!dbUserData) {
      return sendResponse(
        response,
        StatusCodes.BAD_REQUEST,
        generateMessage.findByPk.missingID(modelName, userID)
      )
    }
    sendResponse(
      response,
      StatusCodes.OK,
      generateMessage.findByPk.success(modelName),
      dbUserData
    )
  } catch (error) {
    if (error instanceof ValidationError) {
      // handle validation error
    }
    sendResponse(
      response,
      StatusCodes.INTERNAL_SERVER_ERROR,
      generateMessage.findByPk.failure(modelName),
      null,
      error,
      "ERR9001"
    )
  }
}

exports.createUser = async (request, response) => {
  const errors = validationResult(request)

  if (!errors.isEmpty()) {
    return sendResponse(
      response,
      StatusCodes.BAD_REQUEST,
      generateMessage.all.emptyData(),
      null,
      errors.array()
    )
  }

  try {
    const rawUserData = request.body
    const dbUserData = await UserModel.create(rawUserData)
    sendResponse(
      response,
      StatusCodes.OK,
      generateMessage.createOne.success(modelName),
      dbUserData
    )
  } catch (error) {
    if (error instanceof ValidationError) {
      // handle validation error
    }
    sendResponse(
      response,
      StatusCodes.INTERNAL_SERVER_ERROR,
      generateMessage.createOne.failure(modelName),
      null,
      error,
      "ERR9001"
    )
  }
}

exports.updateUser = async (request, response) => {
  const errors = validationResult(request)

  if (!errors.isEmpty()) {
    return sendResponse(
      response,
      StatusCodes.BAD_REQUEST,
      generateMessage.all.emptyData(),
      null,
      errors.array()
    )
  }

  try {
    const userID = request.params.userID
    const rawUserData = request.body

    const [affectedRows] = await UserModel.update(rawUserData, {
      where: { userID },
    })

    if (!affectedRows) {
      return sendResponse(
        response,
        StatusCodes.BAD_REQUEST,
        generateMessage.updateOne.missingID(modelName)
      )
    }

    sendResponse(
      response,
      StatusCodes.OK,
      generateMessage.updateOne.success(modelName),
      {
        affectedRows,
      }
    )
  } catch (error) {
    if (error instanceof ValidationError) {
      // handle validation error
    }
    sendResponse(
      response,
      StatusCodes.INTERNAL_SERVER_ERROR,
      generateMessage.updateOne.failure(modelName),
      null,
      error,
      "ERR9001"
    )
  }
}

exports.updateUserComplete = async (request, response) => {
  const errors = validationResult(request)

  if (!errors.isEmpty()) {
    return sendResponse(
      response,
      StatusCodes.BAD_REQUEST,
      generateMessage.all.emptyData(),
      null,
      errors.array()
    )
  }

  try {
    const userID = request.params.userID
    const rawUserData = request.body

    const [affectedRows] = await UserModel.update(rawUserData, {
      where: { userID },
    })

    if (!affectedRows) {
      return sendResponse(
        response,
        StatusCodes.BAD_REQUEST,
        generateMessage.updateOne.missingID(modelName)
      )
    }

    sendResponse(
      response,
      StatusCodes.OK,
      generateMessage.updateOne.success(modelName),
      {
        affectedRows,
      }
    )
  } catch (error) {
    if (error instanceof ValidationError) {
      // handle validation error
    }
    sendResponse(
      response,
      StatusCodes.INTERNAL_SERVER_ERROR,
      generateMessage.updateOne.failure(modelName),
      null,
      error,
      "ERR9001"
    )
  }
}

exports.deleteUser = async (request, response) => {
  try {
    const userID = request.params.userID

    const deletedRows = await UserModel.destroy({ where: { userID } })
    if (!deletedRows) {
      return sendResponse(
        response,
        StatusCodes.BAD_REQUEST,
        `User does not exist. userID: ${userID}`
      )
    }
    sendResponse(response, StatusCodes.OK, `Deleted user data successfully.`, {
      deletedRows,
    })
  } catch (error) {
    if (error instanceof ValidationError) {
      // handle validation error
    }
    sendResponse(
      response,
      StatusCodes.INTERNAL_SERVER_ERROR,
      `Failed to delete user.`,
      null,
      error,
      "ERR9001"
    )
  }
}

exports.findCart = async (request, response) => {
  try {
    const users = await UserModel.findAll()
    if (!users.length) {
      return sendResponse(
        response,
        StatusCodes.NO_CONTENT,
        generateMessage.findAll.missing(modelName)
      )
    }

    sendResponse(
      response,
      StatusCodes.OK,
      generateMessage.findAll.success(modelName, users.length),
      users
    )
  } catch (error) {
    if (error instanceof ValidationError) {
      // handle validation error
    }

    sendResponse(
      response,
      StatusCodes.INTERNAL_SERVER_ERROR,
      generateMessage.findAll.failure(modelName),
      null,
      error,
      "ERR9001"
    )
  }
}

exports.createCartItem = async (request, response) => {
  try {
    const users = await UserModel.findAll()
    if (!users.length) {
      return sendResponse(
        response,
        StatusCodes.NO_CONTENT,
        generateMessage.findAll.missing(modelName)
      )
    }

    sendResponse(
      response,
      StatusCodes.OK,
      generateMessage.findAll.success(modelName, users.length),
      users
    )
  } catch (error) {
    if (error instanceof ValidationError) {
      // handle validation error
    }

    sendResponse(
      response,
      StatusCodes.INTERNAL_SERVER_ERROR,
      generateMessage.findAll.failure(modelName),
      null,
      error,
      "ERR9001"
    )
  }
}

exports.updateCartItem = async (request, response) => {
  try {
    const users = await UserModel.findAll()
    if (!users.length) {
      return sendResponse(
        response,
        StatusCodes.NO_CONTENT,
        generateMessage.findAll.missing(modelName)
      )
    }

    sendResponse(
      response,
      StatusCodes.OK,
      generateMessage.findAll.success(modelName, users.length),
      users
    )
  } catch (error) {
    if (error instanceof ValidationError) {
      // handle validation error
    }

    sendResponse(
      response,
      StatusCodes.INTERNAL_SERVER_ERROR,
      generateMessage.findAll.failure(modelName),
      null,
      error,
      "ERR9001"
    )
  }
}

exports.deleteCartItem = async (request, response) => {
  try {
    const users = await UserModel.findAll()
    if (!users.length) {
      return sendResponse(
        response,
        StatusCodes.NO_CONTENT,
        generateMessage.findAll.missing(modelName)
      )
    }

    sendResponse(
      response,
      StatusCodes.OK,
      generateMessage.findAll.success(modelName, users.length),
      users
    )
  } catch (error) {
    if (error instanceof ValidationError) {
      // handle validation error
    }

    sendResponse(
      response,
      StatusCodes.INTERNAL_SERVER_ERROR,
      generateMessage.findAll.failure(modelName),
      null,
      error,
      "ERR9001"
    )
  }
}
