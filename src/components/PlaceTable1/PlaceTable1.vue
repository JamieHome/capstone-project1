<template>


  </template>
  <script>
export default {
  name:"PlaceTable1",
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
        tableData1: Array(20).fill(item)
      }
  }
}
</script>
<style scoped lang="less">
@import "./PlaceTable1.less";
</style>
