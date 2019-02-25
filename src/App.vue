<template>
  <div>
    <router-view/>
  </div>
</template>

<script>
import HomePage from "./layout/HomePage/HomePage.vue";
export default {
  name: 'App',
}
</script>


<style lang="less" scoped>
#app{
  min-height: 100%;
}
</style>

