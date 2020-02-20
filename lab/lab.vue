
<template>
  <div class="box">
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view class="rv-block"></router-view>
    <nav>
      <ul>
        <li>
          <router-link to="/component1">组件1</router-link>
        </li>
        <li>
          <router-link to="/component2">组件2</router-link>
        </li>
      </ul>
    </nav>
    
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang='less' scoped>
//局部样式
@paddingv :20px;
.box {
  text-align: center;
  ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  ul > li {
    list-style: none;
    background-color: aquamarine;
    border-radius: 10px;
    margin: 10px;
    padding: 10px 10%;
    white-space: nowrap;
   
  }
  a {
    text-decoration: none;
    
  }
  .rv-block {
    background-color: #eaff56;
    margin: 20px;
    padding: 10px;

  }
}
</style>