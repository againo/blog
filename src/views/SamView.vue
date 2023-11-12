<template>

  <show-markdown :mdstr="samStr"></show-markdown>
  my name is sam
  <img alt="照片" src="" />
  后端工程师，精通java程序语言，微服务架构，
  主要工作为参与大型程序开发，
  <nav>
    <a href="">首页</a>
    <a href="">关于</a>
    <a href="">联系</a>
  </nav>



</template>
<script setup>
import { ref } from 'vue'
import samStr from '@/md/sam.md?raw'
import ShowMarkdown from "@/components/ShowMarkdown.vue";
const a = 'ds'
const b = 'ab'
// 拼接两个字符串


</script>
<style>

</style>