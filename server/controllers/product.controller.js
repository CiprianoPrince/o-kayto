const db = require('../models');
const ProductModel = db.Product;
const ImageModel = db.Image;

const { ValidationError } = require('sequelize');

const { validationResult } = require('express-validator');

const { StatusCodes } = require('http-status-codes');

const sendResponse = require('../helpers/sendResponse');
const generateMessage = require('../helpers/generateMessage');
const getModelName = require('../helpers/getModelName');

const modelName = getModelName(__filename);

exports.findAll = async (request, response) => {
  try {
    const products = await ProductModel.findAll();
    if (!products.length) {
      return sendResponse(
        response,
        StatusCodes.NO_CONTENT,
        generateMessage.findAll.missing(modelName)
      );
    }

    sendResponse(
      response,
      StatusCodes.OK,
      generateMessage.findAll.success(modelName, products.length),
      products
    );
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
      'ERR9001'
    );
  }
};

exports.findByPk = async (request, response) => {
  try {
    const productID = request.params.productID;
    const dbProductData = await ProductModel.findByPk(productID);
    if (!dbProductData) {
      return sendResponse(
        response,
        StatusCodes.BAD_REQUEST,
        generateMessage.findByPk.missingID(modelName, productID)
      );
    }
    sendResponse(
      response,
      StatusCodes.OK,
      generateMessage.findByPk.success(modelName),
      dbProductData
    );
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
      'ERR9001'
    );
  }
};

exports.createOne = async (request, response) => {
  const errors = validationResult(request);

  if (!errors.isEmpty()) {
    return sendResponse(
      response,
      StatusCodes.BAD_REQUEST,
      generateMessage.all.emptyData(),
      null,
      errors.array()
    );
  }

  try {
    const rawProductData = request.body;

    // await ImageModel.create({
    //   productID: product.productID,
    //   imagePath: req.file.filename, // Get the filename from the uploaded file
    //   altText: `Image for ${name}`, // This is just an example. You can set it to whatever you want.
    // });

    const dbProductData = await ProductModel.create(rawProductData);
    sendResponse(
      response,
      StatusCodes.OK,
      generateMessage.createOne.success(modelName),
      dbProductData
    );
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
      'ERR9001'
    );
  }
};

exports.updateOne = async (request, response) => {
  const errors = validationResult(request);

  if (!errors.isEmpty()) {
    return sendResponse(
      response,
      StatusCodes.BAD_REQUEST,
      generateMessage.all.emptyData(),
      null,
      errors.array()
    );
  }

  try {
    const productID = request.params.productID;
    const rawProductData = request.body;

    const [affectedRows] = await ProductModel.update(rawProductData, {
      where: { productID },
    });

    // await ImageModel.create({
    //   productID: product.productID,
    //   imagePath: req.file.filename, // Get the filename from the uploaded file
    //   altText: `Image for ${name}`, // This is just an example. You can set it to whatever you want.
    // });

    if (!affectedRows) {
      return sendResponse(
        response,
        StatusCodes.BAD_REQUEST,
        generateMessage.updateOne.missingID(modelName)
      );
    }

    sendResponse(response, StatusCodes.OK, generateMessage.updateOne.success(modelName), {
      affectedRows,
    });
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
      'ERR9001'
    );
  }
};

exports.deleteOne = async (request, response) => {
  try {
    const productID = request.params.productID;

    const deletedRows = await ProductModel.destroy({ where: { productID } });
    if (!deletedRows) {
      return sendResponse(
        response,
        StatusCodes.BAD_REQUEST,
        generateMessage.deleteOne.missingID(modelName)
      );
    }
    sendResponse(response, StatusCodes.OK, generateMessage.deleteOne.success(modelName), {
      deletedRows,
    });
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
      'ERR9001'
    );
  }
};
