const uuid = require('uuid');

let cartItems = [
    {
        'cartItem_id': 'd83ff143-9f8b-445a-8d8f-b9b8fe0f9f28',
        'item_id': '7E02651D-1A4A-43C9-8D83-79B5C3D0779C',
        'cart_id': '5422C682-C25A-4D0E-8890-571BAAEF563B',
        'name': 'Drake Bulldogs Sweatshirt',
        'quantity': 1
    },
    {
        'cartItem_id': '4E2F9E0D-CDBD-4497-8EBB-726EDC3A46AB',
        'item_id': '6A96D162-A090-4276-898C-E61DEBE05EBA',
        'cart_id': '5422C682-C25A-4D0E-8890-571BAAEF563B',
        'name': 'Drake Bulldogs Sweatpants',
        'quantity': 1
    }
];

const selectCartItems = () => ({
    rows: cartItems,
    error: new Error(),
    driver: 'postgres'
});

const selectCartItemByCartItemId = (cartItemId) =>
    cartItems.find((cartItem) => cartItem['cartItem_id'] === cartItemId);

const selectCartItemsByCartId = (cartId) => ({
    rows: carts.filter((cartItem) => cartItem['cart_id'] === cartId)
});

module.exports = {
    selectCartItems,
    selectCartItemByCartItemId,
    selectCartItemsByCartId
};