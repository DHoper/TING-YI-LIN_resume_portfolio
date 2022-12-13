<script setup>
import TheHeader from './components/layout/TheHeader.vue';
import TheResource from './components/learning-resources/TheResource.vue';
</script>


<template>
  <TheHeader title="學習資源紀錄"></TheHeader>
  <TheResource></TheResource>
</template>

<script>
export default {
  components: {
    TheHeader,
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
  text-align: center;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
