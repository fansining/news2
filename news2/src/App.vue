<template>
  
  <div id="app">
  <!--  <loading ></loading> -->
    
    <NavView></NavView>
   <!--  <loading v-show="loadingShowIt"></loading>
    
    <NavView v-show="navShowIt"></NavView> -->
   <!--  <ZanGeMao></ZanGeMao> -->
    <keep-alive>
      <router-view ></router-view>
    </keep-alive>
    
   <!--  <HomeView></HomeView> -->
    <FootView></FootView>

  </div>
</template>

<script >

  import NavView from './components/Nav.vue'
  // import HomeView from './components/Home.vue'
  import FootView from './components/Foot.vue'

  import {mapGetters,mapActions} from 'vuex'

  export default{
      computed:mapGetters([
          'navShowIt',
          'loadingShowIt'
        ]),
    // data:{
    //   showIt:true
    // },
    components:{
      NavView,
      // HomeView,
      FootView
      }
    // },
    // watch:{

    //   $route(to,from){
    //    // console.log(to,from);
    //     if(to.path=='/home'||to.path=='/focus'||to.path=='/column'){
    //       this.$store.dispatch('showNav');
    //     }
    //     else{
    //       this.$store.dispatch('hideNav');
    //     }
    //   }
    // }
    
  }

</script>
<style type="text/css"> 
  @import './assets/css/index.css'


</style>    