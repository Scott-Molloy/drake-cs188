const uuid = require('uuid');

let items = [
    {
        'item_id': '7E02651D-1A4A-43C9-8D83-79B5C3D0779C',
        'name': 'Drake Bulldogs Sweatshirt',
        'description': 'Get comfortable in these sweats and look marty mcfly while wearing them',
        'price': 19.99
    },
    {
        'item_id': '6A96D162-A090-4276-898C-E61DEBE05EBA',
        'name': 'Drake Bulldogs Sweatpants',
        'description': 'Get comfortable in these sweats and look marty mcfly while wearing them',
        'price': 19.99
    }
];

const selectItems = () => ({
    rows: items,
    error: new Error(),
    driver: 'postgres'
});

const selectItemByItemId = (itemId) =>
    items.find((item) => item['item_id'] === itemId);

module.exports = {
    selectItems,
    selectItemByItemId
};


