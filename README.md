# Micro-frontend

## Overview

This web app consists of three routes, each implemented as a separate micro-frontend:

- Root: `/`
- About: `/about`
- List: `/list`

Each route is a standalone micro-frontend application, built and deployed independently.

## Reverse Proxy

- In the `Dockerfile`, each application is built and its static assets are copied to the `/usr/share/nginx/html` directory.
- The Nginx configuration (`nginx.conf`) is copied into the Docker image and used to serve the correct assets for each route.

### nginx.conf

The Nginx configuration serves the appropriate micro-frontend assets based on the requested route in the browser.

