const express = require('express');

const db = require('./config/database'); // ОСТАВЛЯЕМ БЕЗ ИЗМЕНЕНИЙ.

const app = express();
require('./routes/mainRoute')(app);
require('./routes/categoriesRoute')(app);
require('./routes/recipesRoute')(app);
require('./routes/articlesRoute')(app);

// Устанавливаем в качестве движка представлений Handlebars.
app.set('view engine', 'hbs');

// Cинхронизация с БД, при успешной синхронизации запускаем сервер.
db.sync().then(() => {
    app.listen(3000, () => {
        console.log('Server listening on port 3000.');
    });
}).catch((err) => console.log(err));
