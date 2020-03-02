const {
    selectCartItems,
    selectCartItemByCartItemId,
    selectCartItemsByCartId
} = require('../repositories/cartItem-repository');

const mapToModel = (cartItem) => ({
    cartItemId: cartItem['cartItem_id'],
    cartId: cartItem['cart_id'],
    itemId: cartItem['item_id'],
    name: cartItem['name'],
    quantity: cartItem['quantity']
    
});

const getAllCartItems = () => {
    const {rows} = selectCartItems();

    return rows.map(mapToModel);
};

const getCartItemByCartItemId = (cartItemId) => {
    const cartItem = selectCartItemByCartItemId(cartItemId);

    return mapToModel(cartItem);
};

const getCartItemsByCartId = (cartId) => {
    const {rows} = selectCartItemsBycartId(cartId);

    return rows.map(mapToModel);
};

module.exports = {
    getAllCartItems,
    getCartItemByCartItemId,
    getCartItemsByCartId
};