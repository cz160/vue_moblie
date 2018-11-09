

<template>
    <section>
        <app-collection-item :type="type"></app-collection-item>
    </section>
</template>

<script>
import AppCollectionItem from './AppCollectionItem'
export default {
    props:['type'],
    components:{
        AppCollectionItem
    },
    watch:{
        type:{
            immediate:true,
            handler(){
                this.change()
            }
           
        }
    },
    methods:{
        change(){

        }
    }
}
</script>

<style lang="scss">
 
</style>
