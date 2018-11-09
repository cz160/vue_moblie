


<template>
  
  <div class="contentBox">
  <img src="http://wap.xiaobaishixi.com/static/img/rar/text_index_wap.png" alt="" class="img">
  <div class="buttonBox">

    <a class="go_test " >
      <img src="https://wap.xiaobaishixi.com/static/img/rar/test_indexC_startBtn.png" alt="">
    </a>

  </div>
</div>
</template>

<script>
export default {
  

}
</script>

<style lang="scss">
  .contentBox {
    position: relative;
    .buttonBox {
      position: absolute;
      bottom: 100px;
      height: 100px;
      width: 100%;
      z-index: 99;
      text-align: center;
      .go_test{
        display: inline-block;
        width: 80%;
        height: 100px;
        img{
          display: block;
          width: 100%;
        }
      }
    }
  }
</style>


