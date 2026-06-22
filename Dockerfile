FROM mcr.microsoft.com/playwright:v1.53.0

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN nxp playwright install --with-deps chromiun

COPY . .

CMD ["npx","functions-framework","--target=helloHttp","--port=8080"]
