web: node src/server.js
"heroku-prebuild": "export NPM_CONFIG_PRODUCTION=false; export NODE_ENV=; NPM_CONFIG_PRODUCTION=false NODE_ENV=development npm install --only=dev --dev",
"heroku-postbuild": "export NPM_CONFIG_PRODUCTION=true; export NODE_ENV=production;