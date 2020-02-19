<template>
  <dir>
    <h1>这是组件2</h1>
    <div class="box"></div>
  </dir>
</template>

<script>
export default {
  data() {
    return {
      tst: "组件2运行..."
    };
  },
  mounted() {
    console.log(this.tst);
  }
};
</script>
<style lang="less" scoped>
@width: 100px;
@color: red;
.box {
  height: 100px;
  width: @width;
  background-color: @color;
}
</style>