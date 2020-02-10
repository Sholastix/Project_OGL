// Рендер домашней страницы.
const getMain = ('/main', (req, res) => {
    res.render('main.hbs');
});

module.exports = {
    getMain,
};
