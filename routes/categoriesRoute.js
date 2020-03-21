const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const categories = require('../controllers/categories');

const urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = (app) => {
    app.use(bodyParser.json());
    app.use(methodOverride('_method'));

    // ПОЛУЧЕНИЕ полного списка категорий по запросу.
    app.get('/categories/', categories.getAll);

    // ДОБАВЛЕНИЕ в список новых категорий.
    app.get('/categories/categoryCreate', categories.getCreate);
    app.post('/categories/categoryCreate', urlencodedParser, categories.create);

    // РЕДАКТИРОВАНИЕ категорий по ID.
    app.get('/categories/categoryEdit/:id', categories.getUpdate);
    app.put('/categories/categoryEdit', urlencodedParser, categories.update);

    // УДАЛЕНИЕ категорий по ID.
    app.delete('/categories/delete/:id', categories.remove);
};
