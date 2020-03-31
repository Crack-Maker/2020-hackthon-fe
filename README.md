# 2020-hackthon

2020-hackthon-frontend, by zhangze & wangppengyun  
  
2020 南昌大学黑客马拉松 第二组项目 前端仓库

## 开发

分为 dev 分支和 master 分支，主要开发在 dev 分支，发布测试版本再 merge 到 master 分支

## 命名规范  

组件文件名采用帕斯卡（Pascal）命名法，首字母全大写
name参数采用驼峰式命名法，首字母小写其余大写 （name参数相当于一个全局 ID；方便调试；可以不写；具体见[Vue官方文档](https://cn.vuejs.org/v2/api/#name)）

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
