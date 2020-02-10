const Recipe = require('../models/Recipe');

// ПОЛУЧЕНИЕ полного списка рецептов по запросу.
const getAll = (req, res) => {
    Recipe.findAll().then((data) => {
        res.render('recipes.hbs', {
            recipes: data,
        });
    }).catch((err) => console.log(err));
};

// ПОЛУЧЕНИЕ по ID категории полного списка рецептов этой категории (проверка через POSTMAN).
const getAllByCatId = (req, res) => {
    Recipe.findAll({ where: { categoryId: req.params.id } })
        .then((result) => res.json(result));
};

// ПОЛУЧЕНИЕ конкретного рецепта по ID (проверка через POSTMAN).
const getOne = (req, res) => {
    Recipe.findOne({ where: { id: req.params.id } })
        .then((result) => res.json(result));
};

// ДОБАВЛЕНИЕ в список новых рецептов.
const getCreate = (req, res) => {
    res.render('recipeCreate.hbs');
};

const create = (req, res) => {
    Recipe.create({ name: req.body.name, content: req.body.content, categoryId: req.body.categoryId }).then(() => {
        res.redirect('/recipes');
    }).catch((err) => console.log(err));
};

// РЕДАКТИРОВАНИЕ рецептов по ID.
const getUpdate = (req, res) => {
    Recipe.findAll({ where: { id: req.params.id } }).then((data) => {
        res.render('recipeEdit.hbs', {
            recipe: data[0],
        });
    }).catch((err) => console.log(err));
};

const update = (req, res) => {
    Recipe.update({ name: req.body.name, content: req.body.content }, { where: { id: req.body.id } }).then(() => {
        res.redirect('/recipes');
    }).catch((err) => console.log(err));
};

// УДАЛЕНИЕ рецептов по ID.
const remove = (req, res) => {
    Recipe.destroy({ where: { id: req.params.id } }).then(() => {
        res.redirect('/recipes');
    }).catch((err) => console.log(err));
};

module.exports = {
    getAll,
    getAllByCatId,
    getOne,
    getCreate,
    create,
    getUpdate,
    update,
    remove,
};
