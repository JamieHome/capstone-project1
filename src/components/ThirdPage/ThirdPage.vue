<template>
<div class="block SecondPage m-t-20">
  <el-container>
    <el-aside width="150px">
      <div style="height:60px;line-height:80px;font-size:20px;">年级</div>
      <ul>
      <a href="#"><li>2015级</li></a>
      <a href="#"><li>2016级</li></a>
      <a href="#"><li>2017级</li></a>
      <a href="#"><li>2018级</li></a>
      </ul>
    </el-aside>
    <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-button-group>
        <el-button  icon="el-icon-plus" @click="dialogFormVisible = true" size="mini">新增</el-button>
        <!-- <el-button  icon="el-icon-edit">编辑</el-button>
        <el-button  icon="el-icon-delete">删除</el-button> -->
      </el-button-group>
    </el-header>
    <el-main>
      <el-table :data="tableData1" border>
        <el-table-column prop="grade" label="活动年级" width="120">
        </el-table-column>
        <el-table-column prop="major" label="专业" width="150">
        </el-table-column>
        <el-table-column prop="ActivityPublisher" label="活动发布人" width="120">
        </el-table-column>
        <el-table-column prop="ActivitystartDate" label="活动开始时间" width="120">
        </el-table-column>
        <el-table-column prop="ActivityendDate" label="活动结束时间" width="120">
        </el-table-column>
        <el-table-column prop="ActivityContent" label="活动内容" width="220">
        </el-table-column>
        <el-table-column prop="ActivityAddress" label="活动地址">
        </el-table-column>
      </el-table>
      <!-- <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination> -->
    </el-main>
    </el-container>
  </el-container>
  <!-- 新增 -->
  <el-dialog title="新增" :visible.sync="dialogFormVisible">
    <el-form ref="form" :model="form" label-width="80px">

      <el-form-item label="年级">
        <el-select v-model="form.region" placeholder="请选择年级">
          <el-option label="2015级" value="2015"></el-option>
          <el-option label="2016级" value="2016"></el-option>
          <el-option label="2017级" value="2017"></el-option>
          <el-option label="2018级" value="2018"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="专业">
        <input type="text" class="myinput">
      </el-form-item>
      <el-form-item label="活动内容">
        <input type="text" class="myinput">
      </el-form-item>

      <el-form-item label="活动地址">
        <input type="text" class="myinput">
      </el-form-item>
      <el-form-item label="活动时间">
        <div class="block">
          <el-date-picker
            v-model="activityTime"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </div>
      </el-form-item>
      </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormCancle">取 消</el-button>
      <el-button type="primary" @click="dialogFormConfirm">确 定</el-button>
    </div>
  </el-dialog>
</div>
</template>
<script>
import PlaceTable1 from "@/components/PlaceTable1/PlaceTable1.vue";
import popover from "@/components/popover/popover.vue";
export default {
  name:"ThirdPage",
  // components:{PlaceTable1},
  data() {
    const item = {
        grade:'2015级',
        ActivityPublisher:'王大明',
        ActivitystartDate: '2016-05-02',
        ActivityendDate: '2016-05-02',
        ActivityContent:'在东B301开团日会',
        ActivityAddress:'中海国际11号骉骉老火锅',
        major:'信息管理与信息系统'
      };
      return {
        tableData1: Array(80).fill(item),
        dialogFormVisible:false,
        form:{
          name:'',
          region:'',
        },
        formLabelWidth:'120px',
        activityTime:'',
      }
  },
  methods:{
    dialogFormCancle(){
      this.dialogFormVisible = false;
    },
    dialogFormConfirm(){
      this.dialogFormVisible = false;
    },
    handleChange(value) {
        // console.log(value);
      }
  }
}
</script>
<style scoped lang="less">
@import "./ThirdPage.less";
</style>
