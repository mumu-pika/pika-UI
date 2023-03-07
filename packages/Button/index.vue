<template>
  <div :class="tClass">
    <button><slot></slot></button>
  </div>
  <div>
    <span>{{ props.type }}</span>
  </div>
</template>
<script lang="ts">
export default {
  name: 'tButton',
}
</script>
<script setup lang="ts">
import { computed } from 'vue'
type Props = {
  type?: string
}
const props = defineProps<Props>()

// 动态根据父组件传来的类型来处理
const tClass = computed(() => {
  return ['t-button', props.type == '' ? '' : `t-button-${props.type}`]
})
</script>

<style lang="scss" scoped>
$button-color: #ff8aaf;
button {
  // 取消掉button的默认样式
  outline: none;
  border: 0;
  background: none;
}
.t-button {
  button {
    padding: 10px;
    border-radius: 4px;
    border: 2px solid $button-color;
    cursor: pointer;
  }
  button:hover {
    border-color: #646cff;
  }
}
.t-button-success {
  background-color: darkseagreen;
}
.t-button-warning {
  background-color: goldenrod;
}
</style>
