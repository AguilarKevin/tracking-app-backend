FROM node:18

RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm

WORKDIR /app
ENV HUSKY=0

COPY package.json .
COPY pnpm-lock.yaml .
COPY . ./source

RUN cd ./source && pnpm install
RUN cd ./source && pnpm build

RUN cp -r ./source/dist /app/dist
RUN rm -rf ./source

RUN pnpm install --prod

EXPOSE ${PORT}

CMD [ "pnpm" , "start" ]

