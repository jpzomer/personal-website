FROM nginx:1.27-alpine

COPY index.html /usr/share/nginx/html/index.html
COPY styles.css /usr/share/nginx/html/styles.css
COPY app.js /usr/share/nginx/html/app.js
COPY site-data.js /usr/share/nginx/html/site-data.js
COPY assets /usr/share/nginx/html/assets
COPY publications /usr/share/nginx/html/publications
COPY about /usr/share/nginx/html/about
COPY projects /usr/share/nginx/html/projects

EXPOSE 80
