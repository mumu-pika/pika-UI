<template>
  <div>
    <input type="text" :value="modelValue" @input="handleSubmit" />
  </div>
</template>

<script setup lang="ts">
type Props = {
  modelValue: string | number
}
const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
})

const handleSubmit = (e: any) => {
  emit('update:modelValue', e.target.value)
}

// 发送事件
const emit = defineEmits(['update:modelValue'])
</script>

<script lang="ts">
export default {
  name: 'tInput',
}
</script>

<style lang="sass" scoped></style>
