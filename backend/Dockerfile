FROM node:18

RUN mkdir -p /app
RUN mkdir -p /app/backend

WORKDIR /app/backend

COPY package*.json ./
COPY prisma ./prisma/

RUN apt-get -qy update && apt-get -qy install openssl

RUN yarn

RUN npx prisma generate --schema ./prisma/schema.prisma

COPY . .

RUN yarn build

EXPOSE 3333

CMD ["/bin/bash","/app/backend/entrypoint.sh"]

