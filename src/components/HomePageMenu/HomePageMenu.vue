<template>
  <div class="HomePageMenu clearfix">
    <div class="menuLeft">11</div>
    <div class="menuRight">
      <el-button @click="login" size="mini">登录</el-button>
    </div>
    <div class="menuSection">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" router>
        <el-menu-item v-for="(item,i) in menuList" :index="item.index" :key="i">{{item.name}}</el-menu-item>
      </el-menu>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomePageMenu",
  data() {
    return {
      activeIndex: "one",
      menuList: [
        { index: "one", name: "page1" },
        { index: "tow", name: "page2" },
        { index: "three", name: "page3" },
        { index: "four", name: "page4" },
      ]
    }
  },
  methods: {
    login() {
      this.$router.push({ name: "Login" })
    }
  }
}
</script>
<style lang="less" scoped>
@import "./HomePageMenu.less";
</style>

