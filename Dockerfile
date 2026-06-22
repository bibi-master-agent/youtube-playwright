FROM mcr.microsoft.com/playwright:v1.53.0

WORKDIR /app

COPY package*.json ./

RUN npm install

ENV PLAYWRIGHT_BROWSERS_PATH=/ms-playwright

RUN npm exec -- playwright install --with-deps chromium

RUN chmod -R 777 /ms-playwright

COPY . .

EXPOSE 8080

CMD ["npm", "start"]
