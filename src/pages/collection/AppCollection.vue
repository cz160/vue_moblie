
<template>
    <div class="collection">
        <div class="collection-con">
            <div class="collection-left"  
            v-for="item in types" :key="item.id"
            @click="type=item.type"
              :class="{choosing:item.type === type}"
            >
                <p>{{item.name}}</p>
            </div>
            <!-- <div class="collection-right">
                <p>公司收藏</p>
            </div> -->
        </div>
        <app-collection-list></app-collection-list>
    </div>
</template>

<script>
import AppCollectionList from '@c/layout/collection/AppCollectionList'
export default {
    components:{
        AppCollectionList
    },
    data(){
        return {
            types:[
                {id:1,name:'职位收藏',type:'position'},
                {id:2,name:'公司收藏',type:'company'}
            ]
           
        }
    }
}
</script>

<style lang="scss">
.collection{
    .collection-con{
        display: flex;
        flex-direction: row;
        height: 1.306667rem;
        line-height: 1.306667rem;
        text-align: center;
        color: #999;
        font-size:.4rem;
        background:#eaeaea;
        background-color: rgba(194, 189, 189, 0.7);
        .collection-left,.collection-right{
            width: 50%;
        }
       &.choosing {
                color: #fe6e00;
           
        }
    }
}
</style>
