# UI组件库构建

以Monorepo的方式来构建自己的组件库。

## 1、Setup 构建

### 起步
```bash
# 使用vite构建项目, 这里选了vue + ts
yarn create vite
```

### 新建packages目录
在项目根目录下新建`packages`目录, 之后封装的组件都会在这个目录下。

### 新建组件, 并全局注册组件
>这里以自定义的按钮组件tButton为例

首先创建packages/Button这个目录, 在目录下创建index.vue和index.ts
```typescript
// packages/Button/index.ts
import tButton from './index.vue'
tButton.install = (app: any) => {
  // 需要注意的是这里传入了component.name, 在组件中需要导出name
  app.component(tButton.name, tButton)
}

export default tButton
```
```html
# packages/Button/index.vue
<template>
  <div>
    <button><slot></slot></button>
  </div>
</template>
<script>
export default {
  name: 'tButton'
}
</script>
<script setup lang="ts">
</script>

<style >
</style>
```

> 在packages/index.ts中使用这个自定义的组件
```typescript
import tButton from './Button/index'
const install = (app: any) => {
  app.use(tButton)
}

// 全部的组件合集
const TUI = {
  install,
}

export { tButton }
export default TUI

// 之后可以在项目中按需引入
/*
  如：
  import { tButton } from 'TUI'
*/

```

```typescript
// main.ts 全局注册
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// 引入自定义的组件库
import TUI from '../packages/index'
const app= createApp(App)
app.use(TUI)
app.mount('#app')
```

## 2、打包发布
在构建好自己的组件库之后, 可以发布到npm上。

### package.json中设置
> `private`字段需要设置为false,否则无法发布到npm上
>
>`main`字段是程序的主要入口点, 如果这个package包名为foo, 如果有用户安装并使用require("foo")引入,
>那么会返回主模块的exports对象
>
> `files`字段是一个文件模式数组，描述了当包作为依赖项安装时要包含的条目
> 下面的包名为snowpika-ui
```json
{
  "name": "snowpika-ui",
  "private": false
  "version": "0.0.1",
  "main": "./dist/snowpika-ui.umd.cjs",
  "type": "module",
  "exports": {
    ".": {
      "import": "./dist/snowpika-ui.js",
      "require": "./dist/snowpika-ui.umd.cjs"
    }
  },
  "files": [
    "dist/*"
  ],
}
```
### npm login
将包发送到npm前, 需要在vscode中登录npm账号
如果还没npm的账号, 需要提前在官网注册好
```bash
# 命令行npm登录账号, 按提示输入用户名、密码等信息
npm login
```
### npm publish
登录上之后就可以发布包了；
注意！！如果使用了淘宝的镜像, 需要切换回默认的npmjs镜像
```bash
# 设置回默认镜像
npm config set registry https://registry.npmjs.org/
```
如果publish失败，可能是因为包名与npm上已有的包名过于接近, 可以尝试修改包名。

之后发布成功, 就可以从npm上下载并安装属于自己的包了。




