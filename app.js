const express = require('express');
require('./config/createDB').createDB();
const db = require('./config/database');

const app = express();
require('./routes/mainRoute')(app);
require('./routes/categoriesRoute')(app);
require('./routes/recipesRoute')(app);
require('./routes/articlesRoute')(app);

// Устанавливаем в качестве движка представлений Handlebars.
app.set('view engine', 'hbs');

// Cинхронизация с БД, при успешной синхронизации запускаем сервер.
const PORT = 3000;

db.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}.`);
    });
})
.catch((err) => console.log(err));
