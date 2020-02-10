const Article = require('../models/Article');

// ПОЛУЧЕНИЕ полного списка статей по запросу.
const getAll = (req, res) => {
    Article.findAll().then((data) => {
        res.render('articles.hbs', {
            articles: data,
        });
    }).catch((err) => console.log(err));
};

// ПОЛУЧЕНИЕ по ID категории полного списка статей этой категории (проверка через POSTMAN).
const getAllByCatId = (req, res) => {
    Article.findAll({ where: { categoryId: req.params.id } })
        .then((result) => res.json(result));
};

// ПОЛУЧЕНИЕ конкретной статьи по ID (проверка через POSTMAN).
const getOne = (req, res) => {
    Article.findOne({ where: { id: req.params.id } })
        .then((result) => res.json(result));
};

// ДОБАВЛЕНИЕ в список новых статей.
const getCreate = (req, res) => {
    res.render('articleCreate.hbs');
};

const create = (req, res) => {
    Article.create({ name: req.body.name, content: req.body.content, categoryId: req.body.categoryId }).then(() => {
        res.redirect('/articles');
    }).catch((err) => console.log(err));
};

// РЕДАКТИРОВАНИЕ статей по ID.
const getUpdate = (req, res) => {
    Article.findAll({ where: { id: req.params.id } }).then((data) => {
        res.render('articleEdit.hbs', {
            article: data[0],
        });
    }).catch((err) => console.log(err));
};

const update = (req, res) => {
    Article.update({ name: req.body.name, content: req.body.content }, { where: { id: req.body.id } }).then(() => {
        res.redirect('/articles');
    }).catch((err) => console.log(err));
};

// УДАЛЕНИЕ статей по ID.
const remove = (req, res) => {
    Article.destroy({ where: { id: req.params.id } }).then(() => {
        res.redirect('/articles');
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
