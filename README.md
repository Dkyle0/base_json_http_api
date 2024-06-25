# Базовый веб-сервис для передачи данных в формате JSON

Этот проект является примером веб-сервиса, созданного с использованием Node.js и Express, с HTTP API для передачи данных в формате JSON.

## Установка

1. Убедитесь, что у вас установлен [Node.js](https://nodejs.org/).

2. Склонируйте репозиторий или создайте новую папку для проекта:

    ```sh
    mkdir my-web-service
    cd my-web-service
    ```

3. Инициализируйте проект и установите необходимые пакеты:

    ```sh
    npm init -y
    npm install express
    ```

4. Склонируйте файл `index.js`.


## Запуск сервера

Запустите сервер с помощью Node.js:

```sh
node index.js
```

## Использование Docker

1. **Сборка Docker-образа:**

    В корне вашего проекта выполните команду:
    
    ```sh
    docker build -t web-service-name .
    ```

2. **Запуск Docker-контейнера:**

    После успешной сборки образа выполните команду для запуска контейнера:

    ```sh
    docker run -p 4221:4221 -d  web-service-name
    ```

Теперь сервер запущен и доступен по адресу `http://localhost:4221`.

## Использование API

### Получение данных

- **Метод**: GET
- **URL**: `/api/data`

**Пример запроса**:

```sh
curl http://localhost:4221/api/data