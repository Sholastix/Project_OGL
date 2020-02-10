module.exports = {
    up: (queryInterface) => queryInterface.bulkInsert('categories', [
        { name: 'Первые блюда' },
        { name: 'Вторые блюда' },
        { name: 'Десерты' },
        { name: 'Напитки' },
        { name: 'Выпечка' }], {}),

    down: (queryInterface) => queryInterface.bulkDelete('categories', null, {}),
};
