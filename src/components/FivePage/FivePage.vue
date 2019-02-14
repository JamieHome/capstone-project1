<template>
<div class="form-information">
<el-form ref="form" :model="form" label-width="80px" size="mini">
  <el-form-item label="学号">
    <el-input v-model="form.stuId" class="input-w-200"></el-input>
  </el-form-item>
  <el-form-item label="姓名">
    <el-input v-model="form.stuName" class="input-w-200"></el-input>
  </el-form-item>
  <el-form-item label="宿舍地址">
    <el-input v-model="form.dormAddress" class="input-w-200"></el-input>
  </el-form-item>
  <el-form-item label="最喜欢的运动项目">
    <el-select v-model="form.region" placeholder="请选择最喜欢的运动项目" class="input-w-200">
      <el-option label="篮球" value="shanghai" ></el-option>
      <el-option label="足球" value="beijing" ></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="即时配送">
    <el-switch v-model="form.delivery"></el-switch>
  </el-form-item>
  <el-form-item label="活动性质">
    <el-checkbox-group v-model="form.type">
      <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
      <el-checkbox label="地推活动" name="type"></el-checkbox>
      <el-checkbox label="线下主题活动" name="type"></el-checkbox>
      <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>
  <el-form-item label="特殊资源">
    <el-radio-group v-model="form.resource">
      <el-radio label="线上品牌商赞助"></el-radio>
      <el-radio label="线下场地免费"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="活动形式">
    <el-input type="textarea" v-model="form.desc"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">立即创建</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
</div>
</template>
<script>
  export default {
    name:"FivePage",
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>
</script>
<style scoped lang="less">
@import "./FivePage.less";
</style>
