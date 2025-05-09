# Use the official Nginx image
FROM nginx:alpine

# Remove the default Nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy your index.html to the Nginx html directory
COPY notifications.html /usr/share/nginx/html/index.html

# Document that the container listens on port 80
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]