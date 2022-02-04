// for production used this script 
"scripts": {
    "build": "babel index.js --out-dir prd",
    "start": "npm run build && nodemon prd/index.js",
    "serve": "node prd/index.js"
  },

// for devlopment use this script
"scripts": {
    "start": "babel index.js -w --out-dir prd",
    "dev": "nodemon prd/index.js",
  },