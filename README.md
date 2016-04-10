# Boilerplate for Bootstrap & Angular (w/ jQuery, FontAwesome)

### Getting started

  - Launch: `http-server`
  - Modify: `components/_home.html`
  - To add new pages:
    - Create a new component in `components`
    - Create a new state in app.js

### Setup

  - Install http-server (npm install http-server -g). Prevents a problem in Chrome with Angular's ng-include unable to request local files.  

### Production

  - Move Angular (and optionally Bootstrap) to a CDN. This enables caching, reduced server load.. .among other benefits.
