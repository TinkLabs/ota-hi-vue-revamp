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

## 8. Create a vue route
Because we separate the app to desktop version and mobile version.  
So you should declare your route below "/src/desktop/router" or "/src/mobile/router".  
such as  
&emsp;&emsp;/src/desktop/router/example.js  
```$xslt
export default [
  {
    path: '/desktopExample',
    component: resolve => require(['../example.vue'], resolve),
    name: 'example'
  },
]

```
&emsp;&emsp;/src/mobile/router/example.js  
```$xslt
export default [
  {
    path: '/mobileExample',
    component: resolve => require(['../example.vue'], resolve),
    name: 'example'
  },
]

```
And then import it to the "/src/routes.js", contact to appropriate Array. 
```$xslt
import Vue from 'vue'
import Router from 'vue-router'
import desktopExamplePage from './desktop/router/example'
import mobileExamplePage from './mobile/router/example'

Vue.use(Router)

export default function createRouter(isMobile) {
  let routes = []
  if (!isMobile) {
    routes = routes.concat(desktopExamplePage)
  } else {
    routes = routes.concat(mobileExamplePage)
  }
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes,
  })
}
``` 

## 9. Use the i18n
The vue-i18n mounted a $t function in the component.  
so, you can use this.$t(string) in the methods, computed, data, etc...  
or use {{$t(string)}} in the template.  
- First, you should created a new json file in the language folder below the "/locales" to save you sentence,
And add sentence, phase which is in the page into the json file that you was created with Key-Value type.  
&emsp;&emsp;/locales/en/example.json
```$xslt
{
  "hi":"Hi"
}
```  
&emsp;&emsp;/locales/zh/example.json
```$xslt
{
  "hi":"你好"
}
```
- Then import the json file to the appropriate languages javascript file.  
&emsp;&emsp;/locales/en.js
```$xslt
import example from './en/example.json'

export default {
  ...example,
}
```
&emsp;&emsp;&emsp;&emsp;/locales/zh.js
```$xslt
import example from './zh/example.json'

export default {
  ...example,
}
```
- Finally, use in VUE file like  
```$xslt
<template>
  {{$t('hi')}}
</template>
```

## 10. Form Validate
The component of validate rules is "/src/common/component/formValidate.js".  
You can insert a rule such as
```$xslt
objectVue.prototype.$v = {
	...
	example: [
          {
            required: true,
            message: $t('Please Input Your First Name'),
            trigger: 'blur',
          },
        ],
	...
}
``` 
And use in VUE file like  
  - **template**
```$xslt
<template>
  <el-form :rules="validateRules"
           ref="exampleForm">
    <el-row>
      <el-col :lg="12">
        <el-form-item prop="example">
          <el-input v-model="exampleName"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>
```
  - **script**
```
<script>
export default {
  data() {
    const { example } = this.$v
    return {
      exampleName: '',
      validateRules: {
        example,
      },
  },
  methods: {
    submitForm() {
      this.$refs.exampleForm.validate((valid) => {
        if (valid) {
          console.log('validate pass!!')
        } else {
          console.log('error submit!!')
        }
        return false
      })
    },
  },
}
</script>
```