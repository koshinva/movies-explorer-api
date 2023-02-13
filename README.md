# API Проекта Movies :movie_camera:

---

## Описание проекта

Backend часть дипломного проекта, в котором реализован api, с которым взаимодействует frontend часть веб-приложения. Выполнена возможность регистрации и авторизации пользователя с занесением в базу данных, выхода из системы, получение и редактирование данных пользователя, получение избранных фильмов, удаление по id и добавление в избранные. Аутентификация выполнена с помощью токена, который находится в cookie файле. Эндпоинты, не доступные не зарегистрированному пользователю, защищены middleware `auth`.

---

## Используемые технологии и инструменты

### Основные :hammer:
:heavy_plus_sign: **Express** :heavy_plus_sign: **MongoDB** :heavy_plus_sign: **Jsonwebtoken** :heavy_plus_sign: **Bcrypt** :heavy_plus_sign: **Celebrate** :heavy_plus_sign: **Validator**
### Для безопасности :passport_control:
:heavy_plus_sign: **CORS** :heavy_plus_sign: **Helmet** :heavy_plus_sign: **Express-rate-limit**
### Для разработки :computer:
:heavy_plus_sign: **ESLint** :heavy_plus_sign: **Prettier** :heavy_plus_sign: **EditorConfig** :heavy_plus_sign: **Postman**

---

## Функциональность

Асинхронные запросы к серверу по архитектуре REST API:

- **POST** `/signup` - регистрация пользователя
- **POST** `/signin` - логин пользователя
- **GET** `/signout` - выход пользователя
- **GET** `/users/me` - получить информацию о пользователе
- **PATCH** `/users/me` - редактирование профиля
- **GET** `/movies` - получить избранные фильмы
- **POST** `/movies` - добавить фильм в избранное
- **DELETE** `/movies/:_id` - удаление фильма по id

---

## Установка

1. Клонировать репозиторий
`git clone https://github.com/koshinva/movies-explorer-api.git`
2. Установить зависимости
`npm install`
3. Запустить локально на своей машине с помощью **nodemon**
`npm run dev`
4. В режиме разработки backend часть доступна по адресу `http://localhost:3000/` 

---

## Ссылки

:arrow_right: **Backend** часть также размещена на виртуальной машине *Yandex Cloud*, доступна по **[ссылке](https://api.movies.koshinva.nomoredomains.club 'https://api.movies.koshinva.nomoredomains.club')**


Репозиторий проекта на **GitHub**
[![Github logo](./image_readme/logo_github_icon_143196.png)](https://github.com/koshinva/movies-explorer-api 'https://github.com/koshinva/movies-explorer-api')

Репозиторий фронтенд части на **GitHub**
[![Github logo](./image_readme/logo_github_icon_143196.png)](https://github.com/koshinva/movies-explorer-frontend 'https://github.com/koshinva/movies-explorer-frontend')



*Задать вопрос по проекту*
[![Telegram logo](./image_readme/logo_telegram_airplane_air_plane_paper_airplane_icon_143170.png)](https://t.me/imp_0593 'https://t.me/imp_0593')
