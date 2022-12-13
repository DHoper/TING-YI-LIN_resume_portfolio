<script setup>
import ResourceItem from './ResourceItem.vue';
</script>

<template>
    <ul>
        <ResourceItem v-for="res in resources" :key="res.id" v-bind="res"></ResourceItem>
    </ul>
</template>

<script>
export default {
    components: {
        ResourceItem,
    },
   inject: ['resources'],
}
</script>

<style scoped>
ul {
    list-style: none;
    margin: 0;
    padding: 0;
    margin: auto;
    max-width: 40rem;
}
</style>