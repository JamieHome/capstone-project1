<template>
<div class="block SixPage m-t-20">
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-button icon="el-icon-plus" @click="NewAnnouncement">新增公告</el-button>
      <el-button icon="el-icon-document" @click="PublishAnnouncement" >我发布的公告</el-button>
    </el-header>
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
  <!-- 我发布的公告 -->
  <el-dialog title="我发布的公告" :visible.sync="dialogPublishAnnouncement" width="60%">
    <div class="form-information">
        <el-table ref="singleTable" :data="PublishList" highlight-current-row @current-change="handleCurrentChange" style="width: 100%">
          <el-table-column type="index" width="70">
          </el-table-column>
          <el-table-column property="noticeTitle" label="公告标题">
          </el-table-column>
          <el-table-column property="noticeContent" label="发布时间" width="120px">
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="100px">
            <template slot-scope="scope">
              <el-button @click="editAnnouncement(scope.row)" type="text" size="small">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
  </el-dialog>
  <!-- 新增公告 -->
  <el-dialog title="新增公告" :visible.sync="dialogNewAnnouncement" >
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="公告标题">
        <el-input v-model="form.AnnouncementTitle"></el-input>
      </el-form-item>
      <el-form-item label="公告内容">
        <!-- <el-input type="textarea" v-model="form.AnnouncementContent"></el-input> -->
        <textarea v-model="form.AnnouncementContent" style="height:200px;width:calc(100% - 30px);border:1px solid #dcdfe6;border-radius:4px;padding:0 15px;color:#606266;font-size:inherit;line-height:30px;"></textarea>
      </el-form-item>
      <el-form-item style="text-align:right">
        <el-button type="primary" @click="Publish">立即发布</el-button>
        <el-button @click="cancelPublish">取消发布</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
  <!-- 编辑公告  -->
  <el-dialog title="编辑公告" :visible.sync="dialogEditAnnouncement">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="公告标题">
        <el-input v-model="form.AnnouncementTitle"></el-input>
      </el-form-item>
      <el-form-item label="公告内容">
        <!-- <el-input type="textarea" v-model="form.AnnouncementContent"></el-input> -->
        <textarea v-model="form.AnnouncementContent" style="height:200px;width:calc(100% - 30px);border:1px solid #dcdfe6;border-radius:4px;padding:0 15px;color:#606266;font-size:inherit;line-height:30px;"></textarea>
      </el-form-item>
      <el-form-item style="text-align:right">
        <el-button type="primary" @click="editPublish">立即发布</el-button>
        <el-button @click="cancelEditPublish">取消发布</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
  <!-- 查看公告  -->
  <el-dialog title="查看公告" :visible.sync="dialogseeAnnouncement" width="80%" height="60%">
    <div class="seeAnnouncementTitle">{{noticeTitle}}</div>
    <div class="seeAnnouncementContent">{{noticeContent}}</div>
  </el-dialog>
  </div>
</template>
<script>
import request from "../../utils/request.js";
  export default {
    name:"SixPage",
    mounted(){
      request({
        method:"get",
        params:{},
        url:"/node-web/notice/list"
      }).then(res => {
        // console.log(res);
        this.noticeList =  res;
      })
    },
    data() {
      return {
        noticeList:[],
        PublishList:[],
        noticeTitle:"",
        noticeContent:"",
        dialogPublishAnnouncement:false,
        dialogNewAnnouncement:false,
        dialogEditAnnouncement:false,
        dialogseeAnnouncement:false,
        PublishAnnouncementTable:[],
        NewAnnouncementTable:[],
        form: {
          AnnouncementTitle: '',
          AnnouncementContent: '',
        }

      }
    },
    methods: {
      handleCurrentChange(val) {
        this.currentRow = val;
      },
      NewAnnouncement(){
        this.dialogNewAnnouncement=true;
      },
      PublishAnnouncement(){
        this.dialogPublishAnnouncement=true;
          request({
            method:"get",
            params:{},
            url:"/node-web/notice/myPublish"
          }).then(res => {
            console.log(res);
            this.PublishList = res;
          })
      },
      Publish(){
        // console.log(this.form.AnnouncementContent)
        request({
          method:"post",
          data:JSON.stringify({noticeTitle:this.form.AnnouncementTitle,noticeContent:this.form.AnnouncementContent}),
          url:"/node-web/notice/create"
        }).then(res => {
          console.log(res)
          this.dialogNewAnnouncement=false;
        })
      },
      cancelPublish(){
        this.dialogNewAnnouncement=false;
      },
      editAnnouncement(currentRow){
        this.form.AnnouncementTitle = currentRow.noticeTitle;
        this.form.AnnouncementContent = currentRow.noticeContent;
        this.dialogEditAnnouncement=true;
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
      },
      editPublish(currentRow){
        request({
          method:"post",
          data:JSON.stringify({noticeTitle:this.form.AnnouncementTitle,noticeContent:this.form.AnnouncementContent}),
          url:"/node-web/notice/revise"
        }).then(res => {
          console.log(res)
          this.dialogEditAnnouncement=false;
        })
      },
      cancelEditPublish(){
        this.dialogEditAnnouncement=false;
      }
    }
  }
</script>
<style scoped lang="less">
@import "./SixPage.less";
</style>
