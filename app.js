const express = require('express');

require('./config/createDB').createDB();
const db = require('./config/database');
// Все руты собраны в один файл для удобства импорта.
const routes = require('./routes/index');

const app = express();

routes.articlesRoute(app);
routes.categoriesRoute(app);
routes.mainRoute(app);
routes.recipesRoute(app);

// Устанавливаем в качестве движка представлений Handlebars.
app.set('view engine', 'hbs');

// Cинхронизация с БД, при успешной синхронизации - запуск сервера.
const PORT = 3000;

db.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}.`);
    });
})
.catch((err) => console.log(err));
