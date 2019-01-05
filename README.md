# hi.com
Hi.com Frontend

## 1. run docker
  - **docker-compose build**
  - **docker-compose up -d**


## 2. run local server
  - **npm install**
  - **npm run dev**

## 3. open in browser
  - http://localhost:4000/

## 4. eslint
  - **npm run lint**
    - use eslint to check your code in src folder
  - **npm run lint-fix**
    - auto fix some eslint errors

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

## **7. Very Important**
**If you modified package.json file or config files about webpack, you need to rerun docker as step 1.**