import tButton from './Button/index'
import tInput from './Input/index'

const install = (app: any) => {
  app.use(tButton)
  app.use(tInput)
}

// 全部的组件合集
const TUI = {
  install,
}

// 按需导出
export { tButton, tInput }
export default TUI

// 之后可以在项目中按需引入
/*
  如：
  import { tButton } from 'TUI'
*/
