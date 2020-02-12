const Sequelize = require('sequelize');

const db = require('../config/database');
const Article = require('../models/Article');
const Recipe = require('../models/Recipe');

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
