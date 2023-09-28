From nginx:stable-alpine
WORKDIR /app

# Remove default nginx website

RUN rm -rf /usr/share/nginx/html/* && rm -rf /etc/nginx/nginx.conf

# Copy nginx config file
COPY ./nginx.conf /etc/nginx/nginx.conf

RUN ls
# Copy dist folder fro build stage to nginx public folder
COPY /dist /usr/share/nginx/html

# Start NgInx service
CMD ["nginx", "-g", "daemon off;"]
