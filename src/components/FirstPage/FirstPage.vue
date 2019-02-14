<template>
  <div class="block FirstPage m-t-20">
    <informationdialog></informationdialog>
    <el-carousel height="550px">
      <el-carousel-item v-for="item in imgList" :key="item.id">
        <img ref="imgHeight" :src="item.idView" style="width:1321px;height:550px;"/>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
import informationdialog from "@/components/informationdialog/informationdialog.vue";
export default {
  name: "FirstPage",
  data() {
    return {
      imgList: [{
        id:0,idView:'http://pic.baike.soso.com/p/20131114/20131114112914-1737379762.jpg'
      },
      {
        id:1,idView:'http://pic.baike.soso.com/p/20131114/20131114113211-2133607937.jpg'
      },
      {
        id:2,idView:'http://picuser.city8.com/news/image/20140718/201461215645878.jpg'
      },
      {id:3,idView:'http://yiqi-oss.oss-cn-hangzhou.aliyuncs.com/aliyun/Ueditor/Manage/20180704-314453195b3c32da48bf4.png'
      }],
      dialogFormVisible:true,
    }
  }
}
</script>
<style lang="less" scoped>
@import "./FirstPage.less";
</style>
