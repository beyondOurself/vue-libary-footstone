<style lang='less'>
//全局样式
</style>
<style lang='less' scoped>
//局部样式
</style>
<template>
  <div class="box">
    <h1>测试路由</h1>
    <nav>
      <router-link to="/component1">组件1</router-link>
      <router-link to="/component2">组件2</router-link>
    </nav>

    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
