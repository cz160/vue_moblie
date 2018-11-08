
<template>
    <div class="ccc">
        <div class="introduce">
            <p>实习动画师</p>
            <span class="left">原理动画</span>
            <span class="right">30-60/天</span>
        </div>
        
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
.ccc{
    position: absolute;
    width: 100%;
    top: 82px;
    bottom: 0;
    overflow: auto;
    background-color: #FFF;
}
.introduce{
    position: relative;
    padding: .4rem .453333rem;
    height: 1.44rem;
    border-bottom: 1px solid #eaeaea;
    background: #fff;
    p{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: .4rem;
        color: #666;
    }
    .left{
        position: absolute;
        bottom: .24rem;
        left:.453333rem;
        color: #999;
        display: block;
        font-size: .373333rem;
    }
    .right{
        position: absolute;
        bottom: .24rem;
        right: .453333rem;
        display: block;
        font-size: .373333rem;
        color: #ff2b00;
    }
}
</style>
