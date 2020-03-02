const uuid = require('uuid');

let carts = [
    {
        'cart_id': '5422C682-C25A-4D0E-8890-571BAAEF563B',
        'customer_id': 'd83ff143-9f8b-445a-8d8f-b9b8fe0f9f28',
        'created_date': new Date(),
        'purchased_date': new Date()
    },
    {
        'cart_id': '5BF7639A-FD99-4611-9E1E-EBDE87113C09',
        'customer_id': 'd83ff143-9f8b-445a-8d8f-b9b8fe0f9f28',
        'created_date': new Date(),
        'purchased_date': new Date()
    }
];

const selectCarts = () => ({
    rows: carts,
    error: new Error(),
    driver: 'postgres'
});

const selectCartByCartId = (cartId) =>
    carts.find((cart) => cart['cart_id'] === cartId);

const selectCartsByCustomerId = (customerId) => ({
    rows: carts.filter((cart) => cart['customer_id'] === customerId)
});

module.exports = {
    selectCarts,
    selectCartByCartId,
    selectCartsByCustomerId
};
