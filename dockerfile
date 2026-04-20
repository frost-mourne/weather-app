FROM node:20-alpine

WORKDIR /app

# Копируем файлы зависимостей
COPY package*.json ./
RUN npm install

# Копируем остальной код
COPY . .

# Открываем порт, который использует Vite (по умолчанию 5174)
EXPOSE 5174

# Запускаем в режиме разработки
CMD ["npm", "run", "dev", "--", "--host"]