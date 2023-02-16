<script setup lang="ts">
import myHeader from '@/components/header/index.vue'
import myAside from '@/components/aside/index.vue'
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside>
        <my-aside></my-aside>
      </el-aside>
      <el-container>
        <el-header>
          <my-header></my-header>
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.common-layout {
  height: 100%;
  .el-container {
    height: 100%;
    .el-aside {
      width: 300px;
      height: 100%;
      background-color: #545c64;
      display: flex;
      flex-direction: column;
    }
    .el-header {
      background-color: #409eff;
    }
  }
}
</style>
