const Sequelize = require('sequelize');

// Определяем и экспортируем объект db.
module.exports = new Sequelize('cooking', 'root', '', {
    dialect: 'mysql',
    host: 'localhost',
    define: {
        timestamps: false,
    },
});
