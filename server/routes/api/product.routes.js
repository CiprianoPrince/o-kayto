module.exports = (app) => {
    const controller = require('../../controllers/product.controller');
    const validator = require('../../validators/product.validator');
    const upload = require('../../middleware/Multer/multer');

    const router = require('express').Router();

    // Retrieve all products.
    router.get('/', controller.findAll);

    //  Retrieve details of a specific product.
    router.get('/:productID', controller.findByPk);

    // Add a new product.
    router.post('/', upload.single('image'), controller.createOne);

    //  Update a product's details.
    router.put('/:productID', upload.single('image'), controller.updateOne);

    //  Delete a product.
    router.delete('/:productID', controller.deleteOne);

    app.use('/api/products', router);
};
