FROM nginx:stable-alpine

WORKDIR /app

# Remove default nginx website

RUN rm -rf /usr/share/nginx/html/* && rm -rf /etc/nginx/nginx.conf

# Copy nginx config file
COPY ./nginx.conf /etc/nginx/nginx.conf

#COPY . .
RUN ls -alh
# Copy dist folder fro build stage to nginx public folder
COPY ./dist/restaurant-app /usr/share/nginx/html

# Start NgInx service
CMD ["nginx", "-g", "daemon off;"]
