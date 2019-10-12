FROM node:11.15.0
ENV NODE_ENV production
WORKDIR /usr/src/app
RUN rm -fr /usr/src/app/node_modules
COPY package.json /usr/src/app/
RUN npm i cnpm yarn koa -g
RUN cnpm i  && cnpm install relative @vue/cli-service @vue/cli-plugin-eslint @vue/cli-plugin-babel @koa/cors vue-template-compiler @vue/cli
RUN cnpm i koa koa-static koa-views koa-compress postcss-selector-namespace postcss-normalize html-webpack-plugin webpack webpack-cli compression-webpack-plugin postcss-import sass-loader node-sass -D
COPY . /usr/src/app/
RUN cnpm run rebuild
EXPOSE 8080
CMD yarn run app