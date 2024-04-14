<template>
  <div>
    1231231
    <button @click="toDetail">toDetail</button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter() // 可以直接使用，不需要导入
const toDetail=()=>{
  router.push('/home/detail/9527')
}
</script>


