FROM mcr.microsoft.com/playwright:v1.53.0

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN npm exec -- playwright install --with-deps chromium

COPY . .

CMD ["npx","functions-framework","--target=helloHttp","--port=8080"]
