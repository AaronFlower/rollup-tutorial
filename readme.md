## 配置文件 `rollup.config.js`

```js
export default {
  input: './src/scripts/main.js',

  output: {
    file: './build/js/main.min.js',
    format: 'iife',
    sourcemap: 'inline'
  }
}
```

## 源码 `main.js`

```javascript
import {sayHelloTo} from './modules/say'
import sumArray from './modules/sum'

const hiEason = sayHelloTo('Eason')
const sumFab = sumArray([1, 1, 2, 3, 5, 8, 13])

let content = document.getElementById('content')

content.innerHTML = `
  <ul>
	<li>sayHelloTo('Eason') : ${hiEason}</li>
	<li>sumArray([1, 1, 2, 3, 5, 8, 13]): ${sumFab}</li>
  </ul>
`
console.log(hiEason, sumFab)
```

main 文件引入的两个文件 

### `say.js`

```js
/**
 * Says hello.
 * @param  {String} name a name
 * @return {String}      a greeting for `name`
 */
export function sayHelloTo( name ) {
  const toSay = `Hello, ${name}!`;

  return toSay;
}

/**
 * Says goodbye.
 * @param  {String} name a name
 * @return {String}      a farewell for `name`
 */
export function sayGoodbyeTo( name ) {
  const toSay = `Later, ${name}!`;

  return toSay;
}
```

### `sum.js`

```js
function sumArray(arr) {
	return arr.reduce((a, c) => a + c, 0)
}
export default sumArray
```

## Rollup 编译

执行命令 `rollup -c rollup.config.js`,

### 编译文件 `main.min.js`

```javascript
(function () {
'use strict';

/**
 * Says hello.
 * @param  {String} name a name
 * @return {String}      a greeting for `name`
 */
function sayHelloTo( name ) {
  const toSay = `Hello, ${name}!`;

  return toSay;
}

/**
 * Says goodbye.
 * @param  {String} name a name
 * @return {String}      a farewell for `name`
 */

function sumArray(arr) {
	return arr.reduce((a, c) => a + c, 0)
}

const hiEason = sayHelloTo('Eason');
const sumFab = sumArray([1, 1, 2, 3, 5, 8, 13]);

let content = document.getElementById('content');

content.innerHTML = `
  <ul>
	<li>sayHelloTo('Eason') : ${hiEason}</li>
	<li>sumArray([1, 1, 2, 3, 5, 8, 13]): ${sumFab}</li>
  </ul>
`;

console.log(hiEason, sumFab);

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64, ...

```

可以看出做了 `tree-shaking` 所以不会把多余的 `sayGoodbyeTo`打包进来。

## 使用 ES6
`latest, es2015, env` 有点乱，需要有时间来整理下。
```

# Install Rollup’s Babel plugin.
npm install --save-dev babel-core
npm install --save-dev rollup-plugin-babel

# Install the Babel preset for transpiling ES2015.
# npm install --save-dev babel-preset-es2015
# 不用 ES2015, 我们用最新的。
npm install --save-dev babel-preset-latest
# Install Babel’s external helpers for module support.
npm install --save-dev babel-plugin-external-helpers

```

## ADD ESlint

### 安装插件

```
npm install --save-dev rollup-plugin-eslint
```

### 创建 `.eslintrc.josn`

```bash
~/learning/git_repos/rollup-tutorial on  master! ⌚ 11:35:11
$ node_modules/.bin/eslint --init    
? How would you like to configure ESLint? Answer questions about your style
? Are you using ECMAScript 6 features? Yes
? Are you using ES6 modules? Yes
? Where will your code run? Browser
? Do you use CommonJS? No
? Do you use JSX? No
? What style of indentation do you use? Spaces
? What quotes do you use for strings? Single
? What line endings do you use? Unix
? Do you require semicolons? No
? What format do you want your config file to be in? JSON
Successfully created .eslintrc.json file in /Users/easonzhan/learning/git_repos/rollup-tutorial
```
### 添加 eslint 插件
```diff
--- a/rollup.config.js
+++ b/rollup.config.js
@@ -1,5 +1,6 @@
 // Rollup plugins
 import babel from 'rollup-plugin-babel'
+import eslint from 'rollup-plugin-eslint'

 export default {
   input: './src/scripts/main.js',
@@ -11,6 +12,9 @@ export default {
   },

   plugins: [
+    eslint({
+        exclude: 'styles/**'
+    }),
     babel({
       exclude: 'node_modules/**'
     })
```

