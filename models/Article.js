const Sequelize = require('sequelize');

const db = require('../config/database');

// Создаём модель Recipe для БД.
const Article = db.define('article', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },

    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    content: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

module.exports = Article;
