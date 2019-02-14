<template>
  <!-- <div class="Login" @click="func">login</div> -->
  <div class="loginwap">
    <el-button @click="funcGet">funcGet</el-button>
    <el-button @click="funcPost">funcPost</el-button>
    <div class="loginimg">
      <div class="logindiv">
        <p class="logintitle">校园休闲娱乐生活平台</p>
        <div class="logininput">
          <p class="user">
          用户名
            <input id="username" type="text" placeholder="请输入用户名">
          </p>
          <p class="pass">
          密&nbsp;&nbsp;&nbsp;&nbsp;码
           <input id="password" type="password" placeholder="请输入密码">
          </p>
          <p class="check">
            <el-checkbox v-model="checked">记住密码</el-checkbox>
            <a href=""><span style="margin-left:130px;">忘记密码?</span></a>
          </p>
          <p class="login">登录</p>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
import request from "@/utils/request.js";
import axios from "axios";
export default {
  name:"Login",
  data(){
    return{
      checked: true
    }
  },
  methods:{
    funcGet(){
      request({
        method:"get",
        params:{a:1},
        url:"/node-web/user/logout"
      }).then(res => {
        console.log(res)
      })
    },
    funcPost(){
      request({
        method:"post",
        data:JSON.stringify({username:"jack",password:"a12345"}),
        url:"/node-web/user/login"
      }).then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import "./Login.less";
</style>
