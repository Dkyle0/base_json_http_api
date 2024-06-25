FROM node:18

# Создаем рабочую директорию
WORKDIR /usr/src/app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы проекта в контейнер
COPY . .

# Устанавливаем порт, который будет использоваться приложением
EXPOSE 4221

# Определяем команду для запуска приложения
CMD ["node", "index.js"]