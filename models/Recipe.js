const Sequelize = require('sequelize');

const db = require('../config/database');

// Создаём модель Recipe для БД.
const Recipe = db.define('recipe', {
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

module.exports = Recipe;
