const db = require("../models")
const CategoryModel = db.Category

const { ValidationError } = require("sequelize")

const { validationResult } = require("express-validator")

const { StatusCodes } = require("http-status-codes")

const sendResponse = require("../helpers/sendResponse")
const generateMessage = require("../helpers/generateMessage")
const getModelName = require("../helpers/getModelName")

const modelName = getModelName(__filename)

exports.findAll = async (request, response) => {
  try {
    const categories = await CategoryModel.findAll()
    if (!categories.length) {
      return sendResponse(
        response,
        StatusCodes.NO_CONTENT,
        generateMessage.findAll.missing(modelName)
      )
    }

    sendResponse(
      response,
      StatusCodes.OK,
      generateMessage.findAll.success(modelName, categories.length),
      categories
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

exports.findByPk = async (request, response) => {
  try {
    const categoryID = request.params.categoryID
    const dbCategoryData = await CategoryModel.findByPk(categoryID)
    if (!dbCategoryData) {
      return sendResponse(
        response,
        StatusCodes.BAD_REQUEST,
        generateMessage.findByPk.missingID(modelName, categoryID)
      )
    }
    sendResponse(
      response,
      StatusCodes.OK,
      generateMessage.findByPk.success(modelName),
      dbCategoryData
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

exports.createOne = async (request, response) => {
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
    const rawCategoryData = request.body
    const dbCategoryData = await CategoryModel.create(rawCategoryData)
    sendResponse(
      response,
      StatusCodes.OK,
      generateMessage.createOne.success(modelName),
      dbCategoryData
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

exports.updateOne = async (request, response) => {
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
    const categoryID = request.params.categoryID
    const rawCategoryData = request.body

    const [affectedRows] = await CategoryModel.update(rawCategoryData, {
      where: { categoryID },
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

exports.deleteOne = async (request, response) => {
  try {
    const categoryID = request.params.categoryID

    const deletedRows = await CategoryModel.destroy({ where: { categoryID } })
    if (!deletedRows) {
      return sendResponse(
        response,
        StatusCodes.BAD_REQUEST,
        generateMessage.deleteOne.missingID(modelName)
      )
    }
    sendResponse(
      response,
      StatusCodes.OK,
      generateMessage.deleteOne.success(modelName),
      {
        deletedRows,
      }
    )
  } catch (error) {
    if (error instanceof ValidationError) {
      // handle validation error
    }
    sendResponse(
      response,
      StatusCodes.INTERNAL_SERVER_ERROR,
      generateMessage.deleteOne.failure(modelName),
      null,
      error,
      "ERR9001"
    )
  }
}
