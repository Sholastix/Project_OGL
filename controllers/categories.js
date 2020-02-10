const Category = require('../models/Category');

// ПОЛУЧЕНИЕ полного списка категорий по запросу.
const getAll = (req, res) => {
    Category.findAll().then((data) => {
        res.render('categories.hbs', {
            categories: data,
        });
    }).catch((err) => console.log(err));
};

// ДОБАВЛЕНИЕ в список новых категорий.
const getCreate = (req, res) => {
    res.render('categoryCreate.hbs');
};

const create = (req, res) => {
    Category.create({ name: req.body.name }).then(() => {
        res.redirect('/categories');
    }).catch((err) => console.log(err));
};

// РЕДАКТИРОВАНИЕ категорий по ID.
const getUpdate = (req, res) => {
    Category.findAll({ where: { id: req.params.id } }).then((data) => {
        res.render('categoryEdit.hbs', {
            category: data[0],
        });
    }).catch((err) => console.log(err));
};

const update = (req, res) => {
    Category.update({ name: req.body.name }, { where: { id: req.body.id } }).then(() => {
        res.redirect('/categories');
    }).catch((err) => console.log(err));
};

// УДАЛЕНИЕ категорий по ID.
const remove = (req, res) => {
    Category.destroy({ where: { id: req.params.id } }).then(() => {
        res.redirect('/categories');
    }).catch((err) => console.log(err));
};

module.exports = {
    getAll,
    // getAllArticlesById,
    // getAllRecipesById,
    getCreate,
    create,
    getUpdate,
    update,
    remove,
};
