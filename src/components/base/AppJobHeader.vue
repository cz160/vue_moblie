<template>
  <div>
    <div class="header">
      <div class="header-nav">
        <ul>
          <li class="selected">类型</li>
          <li>地点</li>
          <li>日薪</li>
          <li>学历</li>
          <li>......</li>
        </ul>
        <ul>
          <li>每周实习天数</li>
          <li>实习月数</li>
          <li>......</li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "app-job-header"
  }
</script>

<style lang="scss">
  .afterTriangle{
    &::after{
      content: '';
      width: 0; height: 0;
      border: .106667rem solid transparent;
      border-top-color: #999;
      position: absolute;
      bottom: 3px;
      right: 3px;

    }
  }
  .header{
    width: 100%;
    min-height: 1.333333rem;
    color: #666;
    font-size: 0.4rem;
    .header-nav{
      width: 100%;
      height: 1.32rem;
      overflow: hidden;
      border-bottom: 1px solid #f0f0f0;
      ul{
        width: 100%;
        height: 1.32rem;
        display: flex;
        li{
          width: 5.333333rem;
          text-align: center;
          line-height: 1.32rem;
          border-right: 1px solid #ccc;
          position: relative;
          @extend .afterTriangle
        }
        li.selected{
          color: #333;
        }
        li:last-child{
          width: 1rem;
          border-right: none;
          flex-shrink: 0;
        }
      }
    }
  }
</style>