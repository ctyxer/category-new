# Настройка проекта

Установка зависимостей

    npm install

Создать файл .env в корневом каталоге и добавить конфигурацию БД

    DATABASE_URL="mysql://root:secret@localhost:3306/project"

Выполнить миграцию БД из конфигурации ORM Prisma

    npx prisma migrate dev

Заполнение БД данными по умолчанию

    npm run prisma

Создание стилей tailwind

    npm run tailwind

Запуск веб-сервера

    npm run dev