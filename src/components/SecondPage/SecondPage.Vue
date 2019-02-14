<template>
<div class="block SecondPage m-t-20">
  <el-container>
    <el-aside width="150px">
      <ul>
      <li>场地预定</li>
      </ul>
    </el-aside>
    <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-button-group>
        <el-button  icon="el-icon-plus" @click="dialogFormVisible = true" size="small">新增</el-button>
        <!-- <el-button  icon="el-icon-edit">编辑</el-button>
        <el-button  icon="el-icon-delete">删除</el-button> -->
      </el-button-group>
    </el-header>
    <el-main>
      <el-table :data="tableData1" border>
        <el-table-column prop="stuId" label="学号" width="120">
        </el-table-column>
        <el-table-column prop="stuName" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="placeCode" label="场地编码" width="120">
        </el-table-column>
        <el-table-column prop="startDate" label="开始日期" width="140">
        </el-table-column>
        <el-table-column prop="endDate" label="结束日期" width="140">
        </el-table-column>
        <el-table-column prop="placeType" label="场地类型">
        </el-table-column>
        <el-table-column prop="address" label="场地地址">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="120">
          <template slot-scope="scope">
            <el-button @click.native.prevent="handleDetail(scope.$index, tableData1)" type="text" size="small">
             详情
            </el-button>
            <el-button @click.native.prevent="handleDelete(scope.$index, tableData1)" type="text" size="small">
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
  <!-- 详情 -->
  <el-popover placement="right" width="400" >
  <el-table :data="gridData">
    <el-table-column width="150" property="date" label="日期"></el-table-column>
    <el-table-column width="100" property="name" label="姓名"></el-table-column>
    <el-table-column width="300" property="address" label="地址"></el-table-column>
  </el-table>
  <el-button >click 激活</el-button>
</el-popover>
</div>
</template>
<script>
import PlaceTable1 from "@/components/PlaceTable1/PlaceTable1.vue";
import popover from "@/components/popover/popover.vue";
export default {
  name:"SecondPage",
  components:{PlaceTable1,popover},
  data() {
    const item = {
        stuId:'1540930105',
        stuName:'王小明',
        startDate: '2016-05-02',
        endDate: '2016-05-02',
        placeType:'篮球',
        placeCode:'01',
        address: '蓝区1号篮球场',
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
    },
    handleDetail(index, row) {

    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
}
</script>
<style scoped lang="less">
@import "./SecondPage.less";
</style>
