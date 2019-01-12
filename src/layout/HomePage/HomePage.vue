<template>
  <div class="homePage">
    <div ref="homePageHeader" class="homePageHeader">
      <HomePageMenu></HomePageMenu>
    </div>
    <div :style="{minHeight:homePageContainerHeight + 'px'}" class="homePageContainer">
      <router-view/>
    </div>
    <div ref="homePageFooter" class="homePageFooter">
      <HomePageFooter></HomePageFooter>
    </div>


  </div>
</template>
<script>
import HomePageMenu from "@/components/HomePageMenu/HomePageMenu.vue";
import HomePageFooter from "@/components/HomePageFooter/HomePageFooter.vue";
export default {
  name:"HomePage",
  components:{HomePageMenu,HomePageFooter},
  data(){
    return {
      homePageContainerHeight:300
    }
  },
  mounted(){
    debugger

    var headerHeight = this.$refs.homePageHeader.offsetHeight;
    var footerHeight = this.$refs.homePageFooter.offsetHeight;
    var bodyHeight = document.body.offsetHeight;
    this.homePageContainerHeight = bodyHeight - headerHeight - footerHeight;



  }
}
</script>
<style scoped lang="less">
@import "./HomePage.less";
</style>

