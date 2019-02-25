<template>
<div class="form-information m-t-20">
  <el-container>
    <el-main>
      <el-table ref="singleTable" :data="userList" highlight-current-row @current-change="handleCurrentChange" style="width: 100%">
        <el-table-column type="index" width="50">
        </el-table-column>
        <el-table-column property="username" label="用户名" width="120">
        </el-table-column>
        <el-table-column property="role" label="角色" width="120">
        </el-table-column>
        <el-table-column property="realname" label="姓名" width="120">
        </el-table-column>
        <el-table-column property="studentNumber" label="学号">
        </el-table-column>
        <el-table-column property="createdAt" label="创建时间">
          <template slot-scope="scope">
            <div>{{scope.row.createdAt | formatDateTime }}</div>
          </template>
        </el-table-column>
        <el-table-column property="updatedAt" label="修改时间">
          <template slot-scope="scope">
            <div>{{scope.row.updatedAt | formatDateTime }}</div>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="300">
            <template slot-scope="scope">
              <el-button @click="resetPassword(scope.row)" type="text" size="small">
               重置密码
              </el-button>
            </template>
          </el-table-column>
      </el-table>
    </el-main>
  </el-container>

</div>
</template>
<script>
import request from "../../utils/request.js";
  export default {
    name:"FivePage",
    mounted(){
      request({
        method:"get",
        params:{},
        url:"/node-web/user/list"
      }).then(res => {
        console.log(res);
        this.userList =  res;
      })
    },
    data() {
      return {
        userList:[],
      }
    },
    methods: {
      handleCurrentChange(val) {
        this.currentRow = val;
      },
      resetPassword(currentRow){
        console.log(currentRow.id);
        request({
          method:"get",
          params:{id:currentRow.id},
          url:"/node-web/user/resetPassword"
        }).then(res => {
          this.$notify({
            message: '用户密码重置成功！',
            type: 'success'
          });
          console.log(res);
        })
      }
    }
  }
</script>
<style scoped lang="less">
@import "./FivePage.less";
</style>
