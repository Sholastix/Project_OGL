module.exports = {
    up: (queryInterface) => queryInterface.bulkInsert('articles', [
        { name: 'Немного о первых блюдах', content: 'Текст статьи о первых блюдах.', categoryId: '1' },
        { name: 'Первые блюда №2', content: 'Текст статьи о первых блюдах №2.', categoryId: '1' },
        { name: 'Значимость вторых блюд', content: 'Текст статьи о вторых блюдах.', categoryId: '2' },
        { name: 'Вторые блюда №2', content: 'Текст статьи о вторых блюдах №2.', categoryId: '2' },
        { name: 'Знакомимся с десертами', content: 'Текст статьи о десертах.', categoryId: '3' },
        { name: 'Десерты №2', content: 'Текст статьи о десертах №2.', categoryId: '3' },
        { name: 'О напитках', content: 'Текст статьи о напитках.', categoryId: '4' },
        { name: 'Напитки №2', content: 'Текст статьи о напитках №2.', categoryId: '4' },
        { name: 'Секреты выпечки', content: 'Текст статьи о выпечке.', categoryId: '5' },
        { name: 'Выпечка №2', content: 'Текст статьи о выпечке №2.', categoryId: '5' }], {}),

    down: (queryInterface) => queryInterface.bulkDelete('articles', null, {}),
};
