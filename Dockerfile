#################################

FROM node:18-alpine 
WORKDIR /
COPY ["package.json", "package-lock.json*", "./"]
RUN npm i
COPY ./ ./

# COPY . .
EXPOSE 3000
RUN npm install -g serve
CMD ["serve", "-s", "build"]
# RUN npm run build

# COPY nginx/configs/conf.d /etc/nginx/conf.d
# RUN rm -rf /usr/share/nginx/html/*
# COPY /build /usr/share/nginx/html


# FROM nginx:stable-perl
# COPY nginx/configs/conf.d /etc/nginx/conf.d
# RUN rm -rf /usr/share/nginx/html/*
# COPY --from=build /build /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]
