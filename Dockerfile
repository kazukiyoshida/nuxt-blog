# WIP: Multi Stage Build
FROM node:10.16.0-alpine
WORKDIR /nuxtblog
ENV HOST 0.0.0.0
RUN apk update && \
    apk add git && \
    apk add --no-cache curl && \
    curl -o- -L https://yarnpkg.com/install.sh | sh
COPY . .
RUN yarn install && \
    yarn run build
EXPOSE 3000
ENTRYPOINT ["yarn", "start"]
