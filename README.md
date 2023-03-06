# UI组件库构建

以Monorepo的方式来构建自己的组件库。

## Setup 构建

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

## 打包发布
在构建好自己的组件库之后, 可以发布到npm上。

### package.json中设置
```json
{
  "private": false // private需要设置为false,否则无法发布到npm上
}
```


