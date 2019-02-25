<template>
  <div class="HomePageMenu clearfix">
    <div class="menuLeft"></div>
    <div class="menuRight">
      <!-- <el-button type="text" @click = "quitLogin">退出登录</el-button> -->
      <el-dropdown @command="handleCommand" trigger="click">
      <span class="el-dropdown-link el-icon-setting" >
        下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="01">修改密码</el-dropdown-item>
        <el-dropdown-item command="02">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    </div>
    <div class="menuSection">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" router>
        <el-menu-item v-for="(item,i) in menuList" :index="item.index" :key="i">{{item.name}}</el-menu-item>
      </el-menu>
    </div>
  </div>
</template>
<script>
import request from "../../utils/request.js";
export default {
  name: "HomePageMenu",
  data() {
    return {
      activeIndex: "one",
      menuList: [
        { index: "one", name: "首页",show:true },
        { index: "tow", name: "信息模块",show:true },
        { index: "three", name: "班级活动模块",show:true },
        { index: "four", name: "公告模块",show:true },
        { index: "five", name:"用户管理",show:sessionStorage.getItem("role") == "1"},
        { index: "six",name:"发布公告",show:sessionStorage.getItem("role") == "1"},
      ]
    }
  },
  methods: {
    handleCommand(command){
      console.log(command)
      if(command == "02"){
        request({
        method:"get",
        params:{},
        url:"/node-web/user/logout"
      }).then(res => {
        this.$notify({
          message: '退出登录成功！',
          type: 'success'
        });
        console.log(res);
        this.$router.push({ name: "Login" })
      })
      }

    },
    login() {
      this.$router.push({ name: "Login" })
    },
  },
  mounted(){
    var hash = window.location.hash.replace(/^#\//,"");
    if (hash) this.activeIndex = hash;
    this.menuList = this.menuList.filter(v=>v.show);
  }
}
</script>
<style lang="less" scoped>
@import "./HomePageMenu.less";
</style>

