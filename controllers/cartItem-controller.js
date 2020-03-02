const {
    getAllCartItems,
    getCartItemByCartItemId
} = require('../services/cartItem-service');

const getCartItemsRoute = (server) => {
    server.route({
        path: '/cartItems',
        method: 'GET',
        handler: (request, h) => {
            return getAllCartItems();
        }
    });
};

const getCartItemByCartItemIdRoute = (server) => {
    server.route({
        path: '/cartItems/{cartItemId}',
        method: 'GET',
        handler: (request, h) => {
            const cartItem = getCartItemByCartItemId(request.params.cartItemId);

            if (!cartItem) {
                return h.response().code(404);
            }
            
            return cartItem;
        }
    });
};

const initCartItemControllers = (server) => {
    getCartItemsRoute(server);
    getCartItemByCartItemIdRoute(server);
};

module.exports = {
    initCartItemControllers
};