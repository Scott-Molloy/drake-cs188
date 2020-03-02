const Hapi = require('@hapi/hapi');

const {initCustomerControllers} = require('./controllers/customer-controller');
const {initCartControllers} = require('./controllers/cart-controller');
const {initCartItemControllers} = require('./controllers/cartItem-controller');
const {initItemControllers} = require('./controllers/item-controller');

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    initCustomerControllers(server);
    initCartControllers(server);
    initCartItemControllers(server);
    initItemControllers(server);

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
