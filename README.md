# Тестовое задание Roisstat

Сборка на основе https://github.com/Danila95/pug-stylus-webpack-template

## Как пользоваться

Для запуска проекта необходим [Node.js](https://nodejs.org) или [Yarn](https://yarnpkg.com)

## Commands

- `npm run dev` for development.
- `npm run build`, build static files in `prod` directory.
- `npm run watch`, start webpack-dev-server.

## Запуск на сервере
Для запуска проекта нужно переместить содержимое дирректории prod на сервер с поддержкой php. handler.php должен находиться в корне.

## При возникновении конфликтов
  npm-check-updates - это утилита, которая автоматически настраивает package.json, которая подтягивает последнии версии всех зависимостей
 - https://www.npmjs.org/package/npm-check-updates
 
 `npm install -g npm-check-updates`
 
 `npm-check-updates -u`
 
 `npm outdated`

### На всякий случай, содержимое prod не добавляю в gitignore