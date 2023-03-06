import tButton from './index.vue'
tButton.install = (app: any) => {
  // 需要注意的是这里传入了component.name, 在组件中需要导出name
  app.component(tButton.name, tButton)
}

export default tButton
