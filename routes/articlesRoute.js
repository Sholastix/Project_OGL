const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const articles = require('../controllers/articles');

const urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = (app) => {
    app.use(bodyParser.json());
    app.use(methodOverride('_method'));

    // ПОЛУЧЕНИЕ полного списка статей по запросу.
    app.get('/articles', articles.getAll);

    // ПОЛУЧЕНИЕ по ID категории полного списка статей этой категории (проверка через POSTMAN).
    app.get('/categories/articles/:id', articles.getAllByCatId);

    // ПОЛУЧЕНИЕ конкретной статьи по ID (проверка через POSTMAN).
    app.get('/articles/find/:id', articles.getOne);

    // ДОБАВЛЕНИЕ в список новых статей.
    app.get('/articles/articleCreate', articles.getCreate);
    app.post('/articles/articleCreate', urlencodedParser, articles.create);

    // РЕДАКТИРОВАНИЕ статей по ID.
    app.get('/articles/articleEdit/:id', articles.getUpdate);
    app.put('/articles/articleEdit', urlencodedParser, articles.update);

    // УДАЛЕНИЕ статей по ID.
    app.delete('/articles/delete/:id', articles.remove);
};
