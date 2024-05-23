<script setup lang="ts">
import { definePageMeta } from '#imports'
definePageMeta({ auth: false })
</script>

<template>
  <div>
    <nuxt-link to="/">
      -> index
    </nuxt-link>
    <br>
    <nuxt-link to="/login">
      -> login
    </nuxt-link>
    <br>
    <nuxt-link to="/home">
      -> home
    </nuxt-link>
    <br>
    <div>select one of the above actions to get started.</div>
  </div>
</template>
