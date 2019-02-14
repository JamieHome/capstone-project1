<template>
  <div class="HomePageMenu clearfix">
    <div class="menuLeft"></div>
    <div class="menuRight">
      <el-button @click="login" size="small" class="login">登录</el-button>
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
        { index: "one", name: "首页 " },
        { index: "tow", name: "信息模块" },
        { index: "three", name: "班级活动模块" },
        { index: "four", name: "公告模块" },
        { index: "five", name:"基础资料"}
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

