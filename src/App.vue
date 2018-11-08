<template>
  <div id="app">
    <main>
       <router-view></router-view>
    </main>
  </div>
</template>
<script>
//引入home页根组件
import AppHome from '@pages/home/AppHome'
import AppJob from '@pages/job/AppJob'
export default {
    name:'app',
    components:{
      AppHome,
      AppJob
    }
}
</script>

<style lang="scss">
    body{
        background-color: #f5f5f5;
    }
</style>
