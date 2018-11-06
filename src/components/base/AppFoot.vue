<template>
    <div>
        <div class="foot">
            <a href="#" class="active home">首页</a>
            <a href="#" class="job">职位</a>
            <a href="#" class="xbs">小白说</a>
            <a href="#" class="mine">我的</a>
        </div>
    </div>
   
</template>
<script>
export default {
    
};
</script>
<style lang="scss">
.foot {
  position: fixed;
  width: 100%;
  bottom: 0;
  height: 1.306667rem;
  background-color: #fff;
  box-shadow: 0 0 0.426667rem 0 rgba(103, 103, 103, 0.13);
  display: flex;
  a {
    width: 25%;
    height: 1.306667rem;
    font-size: 0.266667rem;
    color: #a1a1a1;
    font-weight: 300;
    text-align: center;
    line-height: 1.306667rem;
  }
  .active {
    color: #333;
  }
}
</style>


