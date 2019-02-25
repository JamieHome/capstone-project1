<template>
<div class="block SecondPage m-t-20">
  <el-container>
    <el-aside width="150px">
      <div>
        <span style="width:150px;display:block;font-size:18px;height:60px;line-height:80px;">场地分类</span>
        <ul>
          <a href="#basketballPlace"><li>篮球</li></a>
          <a href="#footballPlace"><li>足球</li></a>
          <a href="#badmintonPlace"><li>羽毛球</li></a>
          <a href="#playTablePlace"><li>兵乓球</li></a>
          <a href="#tennisballPlace"><li>网球</li></a>
        </ul>
      </div>
    </el-aside>
    <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-button-group>
        <el-button  @click="MyPlan" size="small">我的预定</el-button>
      </el-button-group>
    </el-header>
    <el-main>
      <!-- 篮球 -->
      <div id="basketballPlace">
        <span style = "text-align:left;width:100%;display:block;font-size:20px;color:#666"> 篮球</span>
        <el-table id="basketballPlace" :data="basketballPlace" border >
        <el-table-column prop="placeCode" label="场地编码" >
        </el-table-column>
        <el-table-column prop="placeAddress" label="场地地址">
        </el-table-column>
        <el-table-column prop="placeType" label="场地类型">
          <template slot-scope="scope">
            <div>{{scope.row.placeType | transform }}</div>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="300">
          <template slot-scope="scope">
            <!-- <el-button @click.native.prevent="onTimePlan(scope.$index, tableData1)" type="text" size="small">
             立即预定
            </el-button> -->
            <el-button @click="onTimePlan(scope.row)" type="text" size="small">
             立即预定
            </el-button>
            <el-button @click="onTimePlanDetail(scope.row)" type="text" size="small">
             预定详情
            </el-button>
          </template>
        </el-table-column>
        </el-table>
      </div>
      <!-- 足球 -->
      <div id="footballPlace">
        <span style = "text-align:left;width:100%;display:block;font-size:20px;color:#666;padding-top:10px;">足球</span>
        <el-table :data="footballPlace" border>
        <el-table-column prop="placeCode" label="场地编码" >
        </el-table-column>
        <el-table-column prop="placeAddress" label="场地地址">
        </el-table-column>
        <el-table-column prop="placeType" label="场地类型">
          <template slot-scope="scope">
            <div>{{scope.row.placeType | transform }}</div>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="300">
          <template slot-scope="scope">
            <el-button @click="onTimePlan(scope.row)" type="text" size="small">
             立即预定
            </el-button>
            <el-button @click="onTimePlanDetail(scope.row)" type="text" size="small">
             预定详情
            </el-button>
          </template>
        </el-table-column>
        </el-table>
      </div>
      <!-- 羽毛球 -->
      <div id="badmintonPlace">
        <span style = "text-align:left;width:100%;display:block;font-size:20px;color:#666;padding-top:10px;">羽毛球</span>
        <el-table :data="badmintonPlace" border>
        <el-table-column prop="placeCode" label="场地编码">
        </el-table-column>
        <el-table-column prop="placeAddress" label="场地地址">
        </el-table-column>
        <el-table-column prop="placeType" label="场地类型">
          <template slot-scope="scope">
            <div>{{scope.row.placeType | transform }}</div>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="300">
          <template slot-scope="scope">
            <el-button @click="onTimePlan(scope.row)" type="text" size="small">
             立即预定
            </el-button>
            <el-button @click="onTimePlanDetail(scope.row)" type="text" size="small">
             预定详情
            </el-button>
          </template>
        </el-table-column>
        </el-table>
      </div>
      <!-- 乒乓 -->
      <div id="playTablePlace">
        <span style = "text-align:left;width:100%;display:block;font-size:20px;color:#666;padding-top:10px;">乒乓球</span>
        <el-table :data="playTablePlace" border>
        <el-table-column prop="placeCode" label="场地编码">
        </el-table-column>
        <el-table-column prop="placeAddress" label="场地地址">
        </el-table-column>
        <el-table-column prop="placeType" label="场地类型">
          <template slot-scope="scope">
            <div>{{scope.row.placeType | transform }}</div>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="300">
          <template slot-scope="scope">
            <el-button @click="onTimePlan(scope.row)" type="text" size="small">
             立即预定
            </el-button>
            <el-button @click="onTimePlanDetail(scope.row)" type="text" size="small">
             预定详情
            </el-button>
          </template>
        </el-table-column>
        </el-table>
      </div>
      <!-- 网球 -->
      <div id="tennisballPlace">
        <span style = "text-align:left;width:100%;display:block;font-size:20px;color:#666;padding-top:10px;">网球</span>
        <el-table :data="tennisballPlace" border>
        <el-table-column prop="placeCode" label="场地编码">
        </el-table-column>
        <el-table-column prop="placeAddress" label="场地地址">
        </el-table-column>
        <el-table-column prop="placeType" label="场地类型">
          <template slot-scope="scope">
            <div>{{scope.row.placeType | transform }}</div>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="300">
          <template slot-scope="scope">
            <el-button @click="onTimePlan(scope.row)" type="text" size="small">
             立即预定
            </el-button>
            <el-button @click="onTimePlanDetail(scope.row)" type="text" size="small">
             预定详情
            </el-button>
          </template>
        </el-table-column>
        </el-table>
      </div>
      <!-- <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination> -->
    </el-main>
    </el-container>
  </el-container>
  <!-- 我的预定 -->
  <el-dialog title="我的预定" :visible.sync="dialogMyPlan">
    <el-table :data="MyPlanTable" border>
      <el-table-column prop="placeCode" label="场地编码" >
      </el-table-column>
      <el-table-column prop="placeAddress" label="场地地址">
      </el-table-column>
      <el-table-column prop="placeType" label="场地类型">
        <template slot-scope="scope">
          <div>{{scope.row.placeType | transform }}</div>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="300">
        <template slot-scope="scope">
          <el-button @click="cancelPlan(scope.row)" type="text" size="small">
           取消预定
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-dialog>
    <!-- 立即预定 -->
  <el-dialog title="立即预定" :visible.sync="dialogOnTimePlan" >
    <!-- <el-table ref="singleTable" :data="OnTimePlan" highlight-current-row @current-change="handleCurrentChange" style="width: 100%"> -->
        <div class="block">
          <span class="demonstration">场地预定的开始时间-结束时间</span>
          <el-date-picker v-model="timeValue" type="datetimerange" start-placeholder="开始日期" end-placeholder="结束日期" :default-time="['12:00:00']">
          </el-date-picker>
        </div>
    <span slot="footer" class="dialog-footer">
      <el-button  @click="dialogOnTimePlanConfirm()">立即预定</el-button>
    </span>
  </el-dialog>
  <!-- 预定详情 -->
  <el-dialog title="预定详情" :visible.sync="dialogDetail" width="70%">
    <el-table :data="DetailTable" border>
      <el-table-column prop="studentNumber" label="学号">
      </el-table-column>
      <el-table-column prop="realname" label="姓名">
      </el-table-column>
      <el-table-column prop="placeCode" label="场地编码" >
      </el-table-column>
      <el-table-column prop="placeAddress" label="场地地址">
      </el-table-column>
      <el-table-column prop="placeType" label="场地类型">
        <template slot-scope="scope">
          <div>{{scope.row.placeType | transform }}</div>
        </template>
      </el-table-column>
      <el-table-column prop="startDateTime" label="预定开始时间">
        <template slot-scope="scope">
          <div>{{scope.row.startDateTime | formatDateTime }}</div>
        </template>
      </el-table-column>
      <el-table-column prop="endDateTime" label="预定结束时间">
        <template slot-scope="scope">
          <div>{{scope.row.endDateTime | formatDateTime }}</div>
        </template>
      </el-table-column>
      <el-table-column prop="telphone" label="手机号码">
      </el-table-column>
    </el-table>
  </el-dialog>
</div>
</template>
<script>
import request from "../../utils/request.js";
// import PlaceTable1 from "@/components/PlaceTable1/PlaceTable1.vue";
// import popover from "@/components/popover/popover.vue";
export default {
  name:"SecondPage",
  // components:{PlaceTable1,popover},
   mounted(){
    this.$router.push({ name: "tow" });
    request({
      method:"get",
      params:{},
      url:"/node-web/place/findAll"
    }).then(res => {
      // console.log(res);
      var basket = new Array();
      var foot = new Array();
      //类型为篮球的
      function fingPlaceType1(res) {
        return res.placeType == 1;
      }
      //类型为足球的
      function fingPlaceType2(res) {
        return res.placeType == 2;
      }
      basket = res.filter(fingPlaceType1);
      foot = res.filter(fingPlaceType2);
      this.basketballPlace = basket;
      this.footballPlace = foot;
      this.badmintonPlace =basket ;
      this.playTablePlace =basket;
      this.tennisballPlace = basket;
    })
  },
  data() {
    return {
      basketballPlace:[],
      footballPlace:[],
      badmintonPlace:[],
      playTablePlace:[],
      tennisballPlace:[],
      MyPlanTable:[],
      OnTimePlanTable:[],
      currentSelected:[],
      currentDetail:[],
      DetailTable:[],
      dialogMyPlan:false,
      dialogOnTimePlan:false,
      dialogDetail:false,
      timeValue:'',
      form:{
        name:'',
        region:'',
      },
      formLabelWidth:'120px',
    }
  },
  methods:{
    MyPlan(){
      // console.log(123);
      this.dialogMyPlan = true;
      request({
        method:"get",
        params:{},
        url:"/node-web/place/mySubscribe"
      }).then(res => {
        console.log(res);
        this.MyPlanTable = res;
      })
    },
    handleChange(value) {
      console.log(value);
    },
    handleDetail(index, row) {

    },
    handleDelete(index, row) {
      console.log(index, row);
      console.log(this)
    },
    //立即预定
    onTimePlan(row){
      // console.log(s);
      this.currentSelected =row;
      this.dialogOnTimePlan = true;
    },
    //预约详情
    onTimePlanDetail(rowDetail){
      this.currentDetail = rowDetail;
      // console.log(this.currentDetail);
        request({
          method:"get",
          params:{placeCode:this.currentDetail.placeCode},
          url:"/node-web/place/detail"
        }).then(res => {
          // console.log(res);
          this.dialogDetail = true;
          this.DetailTable = res;
        })
    },
    // 确定立即预约
    dialogOnTimePlanConfirm(){
      function dataToMs(date){
          var result = new Date(date).getTime();
          return result;
      }
      for(var i = 0;i<this.timeValue.length;i++){
        //转换成毫秒
        var startTime = dataToMs(this.timeValue[0]);
        var endTime = dataToMs(this.timeValue[1]);
      }
      request({
        method:"post",
        data:JSON.stringify({placeCode:this.currentSelected.placeCode,placeAddress:this.currentSelected.placeAddress,placeType:this.currentSelected.placeType,startDateTime:startTime,endDateTime:endTime}),
        url:"/node-web/place/create"
      }).then(res => {
        // console.log(res);
         this.$notify({
          message: '场地预定成功！',
          type: 'success'
        });
       this.dialogOnTimePlan = false;
      })
    },
    //取消预约
    cancelPlan(cancelCurrent){
      request({
        method:"get",
        params:{placeDetailId:cancelCurrent.id},
        url:"/node-web/place/cancel"
      }).then(res => {
        this.$notify({
          message: '取消预定成功！',
          type: 'success'
        });
        this.dialogMyPlan = false;
      })
    }
  },
  filters:{
    transform(value){
      if(value == "1"){
         return "篮球"
      }
      else if(value == "2"){
        return "足球"
      }
      else if(value == "3"){
        return "羽毛球"
      }else if(value == "4"){
        return "乒乓球"
      }else if(value == "5"){
        return "网球"
      }
    }
  }

}
</script>
<style scoped lang="less">
@import "./SecondPage.less";
</style>
