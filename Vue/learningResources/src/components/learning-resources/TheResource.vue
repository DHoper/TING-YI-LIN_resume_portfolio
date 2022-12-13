<script setup>
import StoredResource from './StoredResource.vue';
import AddResource from './AddResource.vue';
</script>

<template>
    <BaseCard>
        <BaseButton @click="setSelectedTab('StoredResource')" :mode="storedResourceButtonMode">資源庫</BaseButton>
        <BaseButton @click="setSelectedTab('AddResource')" :mode="addResourceButtonMode">添加新資源</BaseButton>
    </BaseCard>
    <keep-alive>
        <component :is="selectedTab"></component>
    </keep-alive>
</template>

<script>
export default {
    components: {
        StoredResource,
        AddResource,
    },
    data() {
        return {
            selectedTab: 'StoredResource',
            resources: [
                {
                    id: 'aaa11',
                    title: '官方文檔',
                    description: 'Vue的官方中文文檔',
                    url: 'https://cn.vuejs.org/',
                },
                {
                    id: 'bbb11',
                    title: '官方文檔',
                    description: 'Vue的官方中文文檔',
                    url: 'https://cn.vuejs.org/',
                },
            ],
        }
    },
    provide() {
        return {
            resources: this.resources,
            addResource: this.addResource,
            removeResource: this.removeResource,
        };
    },
    computed: { 
        storedResourceButtonMode() {
            return this.selectedTab === 'StoredResource'?null: 'flat';
        },
        addResourceButtonMode() {
            return this.selectedTab === 'AddResource'?null: 'flat';
        },
    },
    methods: {
        setSelectedTab(tab) {
            this.selectedTab = tab;
        },
        addResource(title, description, url) {
            const newResource = {
                id: Number(Math.random().toString() + Date.now()).toString(36),
                title,
                description,
                url,
            };
            this.resources.unshift(newResource);
            this.selectedTab = 'StoredResource';
        },
        removeResource(delId) {
            const delIndex = this.resources.findIndex(res => res.id === delId);
            this.resources.splice(delIndex, 1);
        },
    }
}
</script>
<!-- 
<style scoped>
.control {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style> -->