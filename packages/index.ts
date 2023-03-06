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
