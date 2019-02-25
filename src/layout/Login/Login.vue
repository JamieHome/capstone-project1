<template>
  <!-- <div class="Login" @click="func">login</div> -->
  <div class="loginwap">
    <div style="width:600px;height:150px;line-height:290px;padding:0px 20px;"><img src="./logo.png" alt="logo加载失败"></div>
    <div class="loginimg">
      <div class="right">
      <div class="logindiv">
        <p class="logintitle">校园休闲娱乐生活平台</p>
        <div class="logininput">
          <p class="user">
          用户名
            <input v-model="username" id="username" type="text" placeholder="请输入用户名">
          </p>
          <p class="pass">
          密&nbsp;&nbsp;&nbsp;码
           <input v-model="password" id="password" type="password" placeholder="请输入密码">
          </p>
          <p class="check">
            <el-checkbox v-model="checked" @click="remember">记住密码</el-checkbox>
            <span style="margin-left:120px;cursor:pointer;" @click="register">现在注册?</span>
          </p>
          <p class="login" @click="login">登录</p>
        </div>
        <!-- 注册 -->
        <el-dialog title="注册" :visible.sync="dialogRegisterVisible" width="30%" :before-close="handleClose" >
          <div class="register">
            <p class="user">
            用户名
              <input v-model="RegisterUsername" id="RegisterUsername" type="text" placeholder="请输入用户名">
            </p>
            <p class="pass">
            密&nbsp;&nbsp;&nbsp;码
             <input v-model="RegisterPassword" id="RegisterPassword" type="password" placeholder="请输入密码">
            </p>
            <p class="pass">
            学&nbsp;&nbsp;&nbsp;号
             <input v-model="RegisterstuId" id="RegisterstuId" type="number" placeholder="请输入学号">
            </p>
            <p class="pass">
            姓&nbsp;&nbsp;&nbsp;名
             <input v-model="RegisterstuName" id="RegisterstuName" type="text" placeholder="请输入姓名">
            </p>
            <p class="pass" style="margin-left:-20px;">
            联系电话
             <input v-model="RegisterTel" id="RegisterTel" type="tel" placeholder="请输入联系电话 ">
            </p>
          </div>
          <span slot="footer" class="dialog-footer">
            <!-- <el-button @click="dialogRegisterCancle">取消注册</el-button> -->
            <el-button type="primary" @click="dialogRegisterConfirm">立即注册</el-button>
          </span>
        </el-dialog>
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
      checked: true,
      dialogRegisterVisible : false,
      RegisterUsername:"",
      RegisterPassword:"",
      RegisterstuId:"",
      RegisterstuName:"",
      RegisterTel:"",
      username:"",
      password:""

    }
  },
  methods:{
    remember(){
      if(checked == true){
        console.log(this.username);
      }
    },
    register(){
      this.dialogRegisterVisible = true
    },
    handleClose(){
      this.dialogRegisterVisible = false
    },
    dialogRegisterCancle(){
      this.dialogRegisterVisible = false
    },
    dialogRegisterConfirm(){
      this.dialogRegisterVisible = false;

      // this.RegisterUsername.

      request({
        method:"post",
        data:JSON.stringify({username:this.RegisterUsername,password:this.RegisterPassword,studentNumber:this.RegisterstuId,realname:this.RegisterstuName,telphone:this.RegisterTel}),
        url:"/node-web/user/create"
      }).then(res => {
        this.$notify({
          message: '注册成功,请前往登陆.',
          type: 'success'
        });
        console.log(res);
        console.log(this.RegisterUsername);
      })
    },
    login(){
      request({
        method:"post",
        data:JSON.stringify({username:this.username,password:this.password}),
        url:"/node-web/user/login"
      }).then(data => {
        sessionStorage.setItem("role",data.role);
        this.$notify({
          message: '登录成功！',
          type: 'success'
        });
        this.$router.push("/");
      })
    },

    // funcGet(){
    //   request({
    //     method:"get",
    //     params:{a:1},
    //     url:"/node-web/user/logout"
    //   }).then(res => {
    //     console.log(res)
    //   })
    // },
    // funcPost(){
    //   request({
    //     method:"post",
    //     data:JSON.stringify({username:"jack",password:"a12345"}),
    //     url:"/node-web/user/login"
    //   }).then(res => {
    //     console.log(res)
    //   })
    // }
  }
}
</script>

<style lang="less" scoped>
@import "./Login.less";
</style>
