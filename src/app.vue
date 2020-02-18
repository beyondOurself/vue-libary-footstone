<template>
  <div id="app">
    hello world
    <div class="box"></div>
  </div>
</template>
<script>
export default {
  name: "app",
  methods: {
      test(){
          console.log("愚蠢的地球人啊!")
      }
  },
  mounted() {
      this.test()
  },
};
</script>
<style lang="less" >
//全局的样式
   body{
       background-color: green;
   }
</style>
<style lang="less" scoped >
//本地的样式
   .box{
       height: 100px;
       width: 100px;
       background-color: red;
   }
</style>
