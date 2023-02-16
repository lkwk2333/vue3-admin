<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div class="header">
    <div>{{ route.name }}</div>

    <div class="img"></div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .img {
    height: 30px;
    width: 30px;
    border-radius: 15px;
    background-color: rgba($color: #000000, $alpha: 0.3);
  }
}
</style>
