FROM node:18

ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL}

RUN mkdir -p /app
RUN mkdir -p /app/frontend

WORKDIR /app/frontend

COPY package*.json ./

RUN echo "NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL}" > .env

RUN yarn

COPY . .

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]

