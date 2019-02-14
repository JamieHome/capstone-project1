<template>
<div class="block SecondPage m-t-20">
  <el-container>
    <el-aside width="150px">
      <ul>
      <li>班级活动列表</li>
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
        <el-table-column prop="grade" label="年级" width="120">
        </el-table-column>
        <el-table-column prop="ActivityPublisher" label="活动发布人" width="120">
        </el-table-column>
        <el-table-column prop="ActivitystartDate" label="活动开始时间" width="140">
        </el-table-column>
        <el-table-column prop="ActivityendDate" label="活动结束时间" width="140">
        </el-table-column>
        <el-table-column prop="ActivityType" label="活动类型">
        </el-table-column>
        <el-table-column prop="ActivityAddress" label="活动地址">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="120">
          <template slot-scope="scope">
            <el-button @click.native.prevent="deleteRow(scope.$index, tableData4)" type="text" size="small">
             详情
            </el-button>
            <el-button @click.native.prevent="deleteRow(scope.$index, tableData4)" type="text" size="small">
             作废
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination> -->
    </el-main>
    </el-container>
  </el-container>
  <!-- 新增 -->
  <el-dialog title="新增" :visible.sync="dialogFormVisible">
    <el-form :model="form">
      <div class="block">
        <el-form-item label="姓名">
        <el-input v-model="form.stuName"></el-input>
      </el-form-item>
        <el-cascader
          :options="options"
          v-model="selectedOptions"
          @change="handleChange">
        </el-cascader>
      </div>
      <div class="block m-t-10">
        <el-date-picker
          v-model="value4"
          type="datetimerange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
      </div>
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
        ActivityType:'聚餐',
        ActivityAddress:'中海国际',
      };
      return {
        tableData1: Array(80).fill(item),
        dialogFormVisible:false,
        form:{
          name:'',
          region:'',
        },
        formLabelWidth:'120px',
        options: [{
          value: '01',
          label: '篮球',
          children: [{
            value: '011',
            label: '红区球场',
            children: [{
              value: '0111',
              label: '1号球场'
            }, {
              value: '0112',
              label: '2号球场'
            }, {
              value: '0113',
              label: '3号球场'
            }, {
              value: '0114',
              label: '4号球场'
            }]
          }, {
            value: '012',
            label: '蓝区1号球场',
            children: [{
              value: '0121',
              label: '1号球场'
            }, {
              value: '0122',
              label: '2号球场'
            }, {
              value: '0123',
              label: '3号球场'
            }, {
              value: '0124',
              label: '4号球场'
            }, {
              value: '0125',
              label: '5号球场'
            }, {
              value: '0126',
              label: '6号球场'
            }, {
              value: '0127',
              label: '7号球场'
            }]
          },
          {
            value: '013',
            label: '蓝区2号球场',
            children: [{
              value: '0131',
              label: '1号球场'
            }, {
              value: '0132',
              label: '2号球场'
            }, {
              value: '0133',
              label: '3号球场'
            }, {
              value: '0134',
              label: '4号球场'
            }, {
              value: '0135',
              label: '5号球场'
            }, {
              value: '0136',
              label: '6号球场'
            }, {
              value: '0137',
              label: '7号球场'
            }]
          }]
        }, {
          value: '02',
          label: '足球',
          children: [{
            value: '021',
            label: '蓝区体育场',
          }]
        },{
          value: '03',
          label: '乒乓球',
          children: [{
            value: '031',
            label: '红区球场',
            children: [{
              value: '0311',
              label: '1号球场'
            }, {
              value: '0312',
              label: '2号球场'
            }, {
              value: '0313',
              label: '3号球场'
            }, {
              value: '0314',
              label: '4号球场'
            }, {
              value: '0315',
              label: '5号球场'
            }, {
              value: '0316',
              label: '6号球场'
            }, {
              value: '0317',
              label: '7号球场'
            }, {
              value: '018',
              label: '8号球场'
            }]
          }, {
            value: '032',
            label: '蓝区1号球场',
            children: [{
              value: '0321',
              label: '1号球场'
            }, {
              value: '0322',
              label: '2号球场'
            }, {
              value: '0323',
              label: '3号球场'
            }, {
              value: '0324',
              label: '4号球场'
            }, {
              value: '0325',
              label: '5号球场'
            }, {
              value: '0326',
              label: '6号球场'
            }, {
              value: '0327',
              label: '7号球场'
            }]
          },]
        }],
        selectedOptions: [],
        selectedOptions2: [],
         pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value4: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
        value5: ''
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
        console.log(value);
      }
  }
}
</script>
<style scoped lang="less">
@import "./ThirdPage.less";
</style>
