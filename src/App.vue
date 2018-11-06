<template>
  <div id="app">
    <main>
       <router-view></router-view>
    </main>
    <app-foot></app-foot>
  </div>
</template>
<script>

//引入home页根组件
import AppHome from '@pages/home/AppHome'
import AppFoot from '@c/base/AppFoot'
export default {
    name:'app',
    components:{
      AppHome,
      AppFoot
    }
}
</script>

<style lang="scss">
    body{
        background-color: #f5f5f5;
    }
</style>
