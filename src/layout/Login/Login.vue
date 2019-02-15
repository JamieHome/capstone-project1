<template>
  <!-- <div class="Login" @click="func">login</div> -->
  <div class="loginwap">
    <div class="loginimg">
      <div class="logindiv">
        <p class="logintitle">校园休闲娱乐生活平台</p>
        <div class="logininput">
          <p class="user">
          用户名
            <input id="username" type="text" placeholder="请输入用户名">
          </p>
          <p class="pass">
          密&nbsp;&nbsp;&nbsp;码
           <input id="password" type="password" placeholder="请输入密码">
          </p>
          <p class="check">
            <el-checkbox v-model="checked">记住密码</el-checkbox>
            <span style="margin-left:120px;" @click="register">现在注册?</span>
          </p>
          <p class="login" @click="login">登录</p>
        </div>
        <el-dialog title="注册" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
           <p class="user">
          用户名
            <input id="username" type="text" placeholder="请输入用户名">
          </p>
          <p class="pass">
          密&nbsp;&nbsp;&nbsp;码
           <input id="password" type="password" placeholder="请输入密码">
          </p>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogRegisterCancle">取 消</el-button>
            <el-button type="primary" @click="dialogRegisterConfirm">确 定</el-button>
          </span>
        </el-dialog>
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
      dialogVisible : false ,
    }
  },
  methods:{
    func(){
      request({
        method:"get",
        params:{a:1},
        data:JSON.stringify([{a:1}]),
        url:"http://localhost:9999/test"
      }).then(res => {
        console.log(res)
      })
    },
    login(){
      console.log(123);
    },
    dialogRegisterCancle(){
      this.dialogVisible = false;
    },
    dialogRegisterConfirm(){
      this.dialogVisible = false;
    },
    //点击X关闭弹窗
    handleClose(done) {
      this.$confirm('确认关闭？')
      .then(_ => {
        done();
      })
      .catch(_ => {
      });
    },
    //点击注册
    register(){
      this.dialogVisible = true;
    }

  }
}
</script>

<style lang="less" scoped>
@import "./Login.less";
</style>
