<template>
    <li>
        <BaseCard class="column">
            <div>
                <header>
                    <h3>{{ title }}</h3>
                </header>
                <p>{{ description }}</p>
                <nav>
                    <a :href="url">查看網站</a>
                </nav>
            </div>
            <BaseButton mode="delete" @click="removeResource(id)">刪除資源</BaseButton>
        </BaseCard>
    </li>
</template>

<script>
import BaseButton from '../UI/BaseButton.vue';

export default {
    props: ["id", "title", "description", "url"],
    inject: ['removeResource'],
    components: { BaseButton }
}
</script>

<style scoped>
li {
    margin: auto;
    max-width: 40rem;
}

h3 {
    font-size: 1.25rem;
    margin: 0.5rem 0;
}

p {
    margin: 0.5rem 0;
}

a {
    text-decoration: none;
    color: #ce5c00;
}

a:hover,
a:active {
    color: #c89300;
}
</style>