import tInput from './index.vue'
tInput.install = (app: any) => {
  // 需要注意的是这里传入了component.name, 在组件中需要导出name
  app.component(tInput.name, tInput)
}

export default tInput