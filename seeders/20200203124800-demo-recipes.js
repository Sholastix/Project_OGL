module.exports = {
    up: (queryInterface) => queryInterface.bulkInsert('recipes', [
        { name: 'Куриный суп с вермишелью', content: 'Рецепт куриного супа с вермишелью', categoryId: '1' },
        { name: 'Окрошка на сыворотке', content: 'Рецепт окрошки на сыворотке', categoryId: '1' },
        { name: 'Солянка сборная', content: 'Рецепт солянки сборной', categoryId: '1' },
        { name: 'Жареная картошка с шампиньонами', content: 'Рецепт жареной картошки с шампиньонами', categoryId: '2' },
        { name: 'Сациви из курицы', content: 'Рецепт сациви из курицы', categoryId: '2' },
        { name: 'Скумбрия в горчичном соусе', content: 'Рецепт скумбрии в горчичном соусе', categoryId: '2' },
        { name: 'Рахат-лукум', content: 'Рецепт рахат-лукума', categoryId: '3' },
        { name: 'Сливовый зефир', content: 'Рецепт сливового зефира', categoryId: '3' },
        { name: 'Творог с изюмом', content: 'Рецепт творога с изюмом', categoryId: '3' },
        { name: 'Клюквенный ликёр', content: 'Рецепт клюквенного ликёра', categoryId: '4' },
        { name: 'Мохито безалкогольный', content: 'Рецепт безалкогольного мохито', categoryId: '4' },
        { name: 'Яблочный чай', content: 'Рецепт яблочного чая', categoryId: '4' },
        { name: 'Булочки с изюмом', content: 'Рецепт булочек с изюмом', categoryId: '5' },
        { name: 'Дрожжевой пирог с вареньем', content: 'Рецепт дрожжевого пирога с вареньем', categoryId: '5' },
        { name: 'Шарлотка с клубникой', content: 'Рецепт шарлотки с клубникой', categoryId: '5' }], {}),

    down: (queryInterface) => queryInterface.bulkDelete('recipes', null, {}),
};
