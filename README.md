# HarmonyModule Webpack Plugin

## Why

With `webpack(v2)`, it can handle `ES6` module itself, as well as other module specifications. Also `babeljs` is a popular tool to handle `ES6` modules.

When you mix them together, something happens: it will break. Because `babeljs` use `esModule` property to see if the module is a `ES6` module, but `webpack` doesn't use that property, nor it will emit the `esModule` property for `ES6` module.

A [issue](https://github.com/webpack/webpack/issues/3168) has been raised in `webpack` repo and an [example repo](https://github.com/k15a/webpack2-babel-bug/) has been created.

This plugin is to solve this situation. 

## How

1. `npm i -D harmonymodule-webapck-plugin` or `yarn add --dev harmonymodule-webpack-plugin`
2. use this plugin in your `webpack.config.babel.js`. 

This repo has included an `example` folder to show how to use it as well.