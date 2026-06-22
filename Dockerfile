FROM mcr.microsoft.com/playwright:v1.53.0

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npx","functions-framework","--target=youtubeAutomation","--port=8080"]
