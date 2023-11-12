<template>
  <div v-html="myhtml"></div>
</template>
<script setup>
import { marked } from 'marked'
// import samstr from '@/md/sam.md?raw'

const props = defineProps(['mdstr'])

const myhtml = marked(props.mdstr)

// 定义props之后可以获取了,那么不定义能不能获取呢?
console.log('mdstr',props.mdstr)
console.log('myhtml',myhtml)




</script>


<style>

</style>