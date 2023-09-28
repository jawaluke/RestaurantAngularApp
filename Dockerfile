FROM nginx:stable-alpine
FROM alpine
WORKDIR /app

# Remove default nginx website

RUN rm -rf /usr/share/nginx/html/* && rm -rf /etc/nginx/nginx.conf

# Copy nginx config file
COPY ./nginx.conf /etc/nginx/nginx.conf

COPY . .
RUN echo "hello world"

RUN ls -alh
RUN echo $(ls -alh)
# Copy dist folder fro build stage to nginx public folder
#COPY /dist /usr/share/nginx/html

RUN ls -alh


# Start NgInx service
#CMD ["nginx", "-g", "daemon off;"]
