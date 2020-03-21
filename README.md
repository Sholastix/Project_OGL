# Project_OGL

Функционал CRUD. Реализованы межтабличные связи, каскадное обновление и удаление информации.

    Front:      HTML + Handlebars
    Back:       Node.js + Express.js
    Database:   MySQL + Sequelize
__________________________________________________________________

1.  Запустить MySQL (версия 8.x).

2.  Если Ваши имя пользователя и пароль к серверу отличны от значений по умолчанию, то внесите изменения в код:

        2.1. config -> config.json (строки 3, 4),
        2.2. config -> database.js (строка 4: вместо 'root' - имя пользователя, в пустых кавычках '' - пароль),
        2.3. config -> createDB.js (строки 10, 11).

3.  В терминале редактора кода или командной строке (предварительно перейдя в каталог с проектом) прописать:
   
        3.1. npm install - установка модулей, необходимых для функционирования программы;
        3.2. npm start - запуск основного кода.

4.  ОПЦИОНАЛЬНО: после создания БД и таблиц в ней (пункт 3.2) можете дополнительно запустить миграции
    (перед этим не забудьте остановить сервер, если он работает):

        npx sequelize-cli db:seed:all - заполнение таблиц заготовками (хранятся в папке seeders).

5.  Адрес домашней страницы: 

        http://localhost:3000/main

ВНИМАНИЕ!!! Нижеуказанные дополнительные опции НЕ ПОДКЛЮЧЕНЫ К ФРОНТУ, проверку осуществлять через POSTMAN:
    
    http://localhost:3000/articles/find/:id         - ПОЛУЧЕНИЕ конкретной статьи по ID.
    http://localhost:3000/recipes/find/:id          - ПОЛУЧЕНИЕ конкретного рецепта по ID.
    http://localhost:3000/categories/articles/:id   - ПОЛУЧЕНИЕ по ID категории полного списка статей из этой категории. 
    http://localhost:3000/categories/recipes/:id    - ПОЛУЧЕНИЕ по ID категории полного списка рецептов из этой категории. 