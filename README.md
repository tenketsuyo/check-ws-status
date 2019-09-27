На основе [Create React App](https://github.com/facebook/create-react-app).

## Мини-утилита тестирования статуса сервиса томката

Запускать как обычно 
### npm i
### npm start

React + MUI / webpack + babel
Показывает список сервисов и привязанных к ним доступных БД.
Самое любопытное: в файле [CheckStatusPage.jsx](/src/pages/CheckStatusPage/CheckStatusPage.jsx) пример выполнения нескольких последовательных асинхронных запросов в цикле с помощью async/await. Делается следующее: из конфига достаются урлы сервисов, затем страница [CheckStatusPage.jsx](/src/pages/CheckStatusPage/CheckStatusPage.jsx) последовательно выполняет обращения к этим урлам поочередно и обновляет список на экране.