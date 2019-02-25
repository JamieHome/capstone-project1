<template>
  <div class=" m-t-20">
    <el-container>
      <el-main>
        <div class="form-information">
          <el-table ref="singleTable" :data="noticeList" highlight-current-row @current-change="handleCurrentChange" @row-click="seeAnnouncement" style="width: 100%">
            <el-table-column type="index" width="70">
            </el-table-column>
            <el-table-column property="noticeTitle" label="公告标题">
            </el-table-column>
            <el-table-column property="updatedAt" label="发布时间" width="160px">
              <template slot-scope="scope">
            <div>{{scope.row.updatedAt | formatDateTime }}</div>
          </template>
            </el-table-column>
          </el-table>
        </div>
      </el-main>
    </el-container>
    <el-dialog title="查看公告" :visible.sync="dialogseeAnnouncement" width="80%" height="60%">
      <div class="seeAnnouncementTitle">{{noticeTitle}}</div>
      <div class="seeAnnouncementContent">{{noticeContent}}</div>
    </el-dialog>
  </div>
</template>
<script>
import request from "../../utils/request.js";
export default {
   name:"FourPage",
  mounted(){
    request({
      method:"get",
      params:{},
      url:"/node-web/notice/list"
    }).then(res => {
      console.log(res);
      this.noticeList =  res;
    })
  },
  data() {
    return {
      noticeList:[],
      noticeTitle:"",
      noticeContent:"",
      dialogseeAnnouncement:false,
    }
  },
  methods:{
    handleCurrentChange(val) {
        this.currentRow = val;
    },
    seeAnnouncement(currentRow){
       request({
         method:"get",
         params:{noticeCode:this.currentRow.noticeCode},
         url:"/node-web/notice/detail"
       }).then(res => {
         // console.log(res.noticeTitle);
         this.noticeTitle =  this.currentRow.noticeTitle;
         this.noticeContent = this.currentRow.noticeContent;
         this.dialogseeAnnouncement=true;
       })
    }
  }

}
</script>
<style scoped lang="less">
@import "./FourPage.less";
</style>
