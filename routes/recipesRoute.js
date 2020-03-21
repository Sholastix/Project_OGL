const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const recipes = require('../controllers/recipes');

const urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = (app) => {
    app.use(bodyParser.json());
    app.use(methodOverride('_method'));

    // ПОЛУЧЕНИЕ полного списка рецептов по запросу.
    app.get('/recipes/', recipes.getAll);

    // ПОЛУЧЕНИЕ по ID категории полного списка рецептов этой категории (проверка через POSTMAN).
    app.get('/categories/recipes/:id', recipes.getAllByCatId);

    // ПОЛУЧЕНИЕ конкретного рецепта по ID (проверка через POSTMAN).
    app.get('/recipes/find/:id', recipes.getOne);

    // ДОБАВЛЕНИЕ в список новых рецептов.
    app.get('/recipes/recipeCreate', recipes.getCreate);
    app.post('/recipes/recipeCreate', urlencodedParser, recipes.create);

    // РЕДАКТИРОВАНИЕ рецептов по ID.
    app.get('/recipes/recipeEdit/:id', recipes.getUpdate);
    app.put('/recipes/recipeEdit', urlencodedParser, recipes.update);

    // УДАЛЕНИЕ рецептов по ID.
    app.delete('/recipes/delete/:id', recipes.remove);
};
