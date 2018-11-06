<template>
  <div id="app">
    <main>
       <app-home></app-home>
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
