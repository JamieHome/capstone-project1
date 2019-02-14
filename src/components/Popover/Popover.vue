<template>
<el-dialog title="新增" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="场地编码" :label-width="formLabelWidth">
      <el-input v-model="form.palceCode" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="场地类型" :label-width="formLabelWidth">
      <el-input v-model="form.palceCode" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="场地类型" :label-width="formLabelWidth">
      <el-select v-model="form.palceType" placeholder="请选择场地类型">
        <el-option label="篮球" value="01"></el-option>
        <el-option label="足球" value="02"></el-option>
        <el-option label="乒乓球" value="03"></el-option>
        <el-option label="羽毛球" value="04"></el-option>
        <el-option label="网球" value="05"></el-option>
      </el-select>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>
</el-dialog>
</template>
<script>
  export default {
    name:'popover',
    data() {
      return {
        dialogFormVisible:false,
        form:{
          name:'',
          region:'',
        },
        formLabelWidth:'120px',

      }
    }
  }
</script>
