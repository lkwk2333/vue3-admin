<script setup lang="ts">
import { useRouter } from 'vue-router'
import { Menu as IconMenu } from '@element-plus/icons-vue'
const router = useRouter()
const routes = router.getRoutes()
const renderRoutes = routes.slice(0, routes.length - 1)
const handleSelect = (key: string) => {
  console.log(key)
  router.push({ path: key })
}
</script>

<template>
  <div class="logo">xx-admin</div>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#545c64"
    class="el-menu-vertical-demo"
    :default-active="renderRoutes[0].path"
    text-color="#fff"
    @select="handleSelect"
  >
    <el-menu-item
      v-for="item in renderRoutes"
      :index="item.path"
      :key="item.name"
    >
      <el-icon><icon-menu /></el-icon>
      <span>{{ item.name }}</span>
    </el-menu-item>
  </el-menu>
</template>

<style lang="scss" scoped>
.logo {
  width: 100%;
  height: 60px;
  text-align: center;
  line-height: 60px;
  color: #fff;
}
.el-menu {
  flex: 1;
  overflow: auto;
  border-right-width: 0;
}
</style>
