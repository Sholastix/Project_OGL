const Sequelize = require('sequelize');

const db = require('../config/database');
const Article = require('./Article');
const Recipe = require('./Recipe');

// Создаём модель Categorie для БД.
const Category = db.define('category', {
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
});

// Устанавливаем связи с другими таблицами в БД.
Category.hasMany(Article, {
    onDelete: 'cascade',
    foreignKey: {
        allowNull: false,
    },
});

Category.hasMany(Recipe, {
    onDelete: 'cascade',
    foreignKey: {
        allowNull: false,
    },
});

module.exports = Category;
