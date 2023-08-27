module.exports = (app) => {
    const controller = require('../../controllers/user.controller');
    const validator = require('../../validators/user.validator');

    const router = require('express').Router();

    router.get('/', controller.findAllUser);

    router.get('/:userID', controller.findUserByPk);

    router.post(
        '/',
        validator.validateFirstName,
        validator.validatelastName,
        validator.validateEmail,
        controller.createUser
    );

    router.put(
        '/:userID',
        validator.validateFirstName,
        validator.validatelastName,
        validator.validateEmail,
        controller.updateUser
    );

    router.put(
        'complete/:userID',
        validator.validateFirstName,
        validator.validatelastName,
        validator.validateEmail,
        validator.validateAddress,
        validator.validatePhone,
        controller.updateUserComplete
    );

    router.delete('/:userID', controller.deleteUser);

    // routes for user's cart
    //  Retrieve a user's cart.
    router.get('/:userID/cart', controller.findCart);

    // Add items to a cart.
    router.post('/:userID/cart', controller.createCartItem);

    // Update quantity or other cart details.
    router.put('/:userID/cart/:cartDetailID', controller.updateCartItem);

    // Remove an item from a cart.
    router.delete('/:userID/cart/:cartDetailID', controller.deleteCartItem);

    // routes for user's wishlist
    //  Retrieve a user's wishlist.
    router.get('/:userID/wishlist', controller.findWishlist);

    // Add items to a wishlist.
    router.post('/:userID/wishlist', controller.createWishlistItem);

    // Remove an item from a wishlist.
    router.delete('/:userID/wishlist/:wishlistDetailID', controller.deleteWishlistItem);

    // Retrieve user's payment methods.
    router.get('/:userID/payment-methods', controller.findPaymentMethod);

    // Add a new payment method.
    router.post('/:userID/payment-methods', controller.findPaymentMethod);

    // Update a payment method.
    router.post('/:userID/payment-methods/:paymentMethodId', controller.findPaymentMethod);

    // Delete a payment method.
    router.post('/:userID/payment-methods/:paymentMethodId', controller.findPaymentMethod);
    // POST /orders/{orderId}/payments - Make a payment for an order.

    app.use('/api/users', router);
};
