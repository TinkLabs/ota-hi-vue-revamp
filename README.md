# hi.com
## You can use the local or docker environment to run this project, each one is OK.

## 1. use local environment
- **npm install**
- **npm run dev**
- http://localhost:9000/

## 2. use docker environment
If you want to use local environment you can skip this step, it's not required.
 - **docker-compose build**
 - **docker-compose up -d**
 - http://localhost:4000/

## **3. Attention please if you are using docker environment**
- **Means you are visiting: http://localhost:4000/**
- **If you modified package.json file or config files about webpack, you need to rerun docker as step 2.**
- **Otherwise it won't work.**
- **examples**
  - install some npm packages
  - add some loaders in webpack
  - modified some other configs in webpack

## 4. eslint
  - **npm run lint**
    - use eslint to check your code in src folder
  - **npm run lint-fix**
    - auto fix some simple eslint errors

## 5. install VS Code Extentions
  - **Vetur**
  - **ESLint**
  - **Prettier - Code formatter**

## 6. add VS Code User Settings
```
  {
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        {
          "language": "vue",
          "autoFix": true
        }
    ],
    "eslint.autoFixOnSave": true,
    "vetur.format.defaultFormatter.html": "js-beautify-html",
  }
```
## 7. format vue file
  - shift + option + f
