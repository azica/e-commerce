# Users List App

## Описание

Приложение для отображения интернет-магазина с возможностью поиска, фильтрации и
других функций. Данные о получаются с mock-API сервиса
[DummyJsonApi](https://dummyjson.com). Приложение разработано на
[React](https://reactjs.org) с использованием
[TypeScript](https://www.typescriptlang.org). Для управления глобальным
состоянием и запросов используется библиотека
[Redux RTQ Query](https://redux.js.org/) и для стилизации
[Styled components](https://styled-components.com/) - препроцессор CSS.

## Установка и запуск

### Требования

- [Node.js](https://nodejs.org) версии 14.x или выше
- npm или [Yarn](https://yarnpkg.com)

### Шаги для установки и запуска

```bash
# Клонировать репозиторий
git clone https://github.com/azica/e-commerce.git
cd users

# Установить зависимости
npm install
# или
yarn install

# Создать файл .env в корне проекта и добавить URL API
echo "VITE_API_URL=https://dummyjson.com" > .env

# Запустить приложение
npm run dev
# или
yarn dev

#### Структура проекта
src/
├── services/      # Модули для работы с API
├── components/    # React компоненты
├── hooks/         # Пользовательские хуки
├── pages/         # Страницы приложения
├── assets/        # Ресурсы, такие как иконки, изображения, шрифты
├── shared/        # Утилиты и вспомогательные функции
└── styles/        # Стилизация приложения
```

#### Контакты

Если у вас возникли вопросы или предложения, пожалуйста, свяжитесь со мной:
Email: azicakcl@gmail.com GitHub: azica
