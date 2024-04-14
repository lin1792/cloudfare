<template>
  <div>
    详情{{ route.params }}
    <button @click="router.back()">返回</button>
  </div>
</template>

<script setup lang="ts">
import { useRoute,useRouter } from 'vue-router'
const route = useRoute() // 可以直接使用，不需要导入
const router = useRouter() // 可以直接使用，不需要导入
console.log(route.params) // route.params 中就是我们传递过来的内容 { id : '9527 '}
</script>


