

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
    }
}
</script>

<style lang="scss">
 
</style>
