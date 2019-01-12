<template>
  <div class="Login" @click="func">login</div>
</template>
<script>
import request from "@/utils/request.js";
import axios from "axios";
export default {
  name:"Login",
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

    }
  }
}
</script>

<style lang="less" scoped>
@import "./Login.less";
</style>
