<template>
        <div class="search-box">
            <input id='search' v-model='searchWords' @keyup.enter="search"  placeholder='输入关键词'>
            <button @click="search"  type='submit'>搜索</button>
        </div>
</template>
<script>
export default {
    props:['show'],
    data(){
       return {
            searchWords: ''
       } 
    },
    methods: {
        search() {
          this.$emit('update:show', this.searchWords)
        }
    }
};
</script>
<style lang="scss">
    .search-box{
        width: 100%;
        height: .8rem;
        background: #fff;
        padding: .173333rem .4rem .186667rem .4rem;
        border-bottom: 1px solid #ccc;
        position: fixed;
        top: 0;
        z-index: 9;
        #search{
            width: 6.48rem;
            height: .8rem;
            padding: 0 .4rem;
            background: #eaeaea;
            border: none;
            outline: none;
            border-radius: .133333rem;
            font-size: .346667rem;
            line-height: .8rem;
            color: #333;
            &::placeholder{
                color: #bbb;
            }
        }
        button{
            width: 1.733333rem;
            height: .8rem;
            border-radius: .133333rem;
            background: #eaeaea;
            font-size: .346667rem;
            line-height: .8rem;
            outline: none;
            border: none;
            color: #999;
            margin-left: .266667rem;
        }
    }
</style>


