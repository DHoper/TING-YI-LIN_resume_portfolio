<script setup>
import Home from './pages/Home.vue';
import ProductList from './pages/ProductList.vue';
import TheFooter from './components/Layout/TheFooter.vue';
import TheHeader from './components/Layout/TheHeader.vue';
</script>

<template>
  <TheHeader />
  <!-- <router-view v-slot="slotProps">
              <transition name="route" mode="out-in">
                <component :is="slotProps.Component"></component>
              </transition>
            </router-view> -->
  <div id="main"><router-view /></div>
  <TheFooter />
</template>


<script>
export default {
  components: {
    TheHeader,
    TheFooter,
    Home,
    ProductList,
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

a:-webkit-any-link {
  text-decoration: none;
  color: inherit;
}

html {
  max-width: 100vw;
}

body {
  &::-webkit-scrollbar {
    display: none;
  }

  font-family: 'Manrope',
  'Microsoft JhengHei',
  sans-serif;

  img {
    pointer-events: none;
    user-select: none;
  }

  #main {
    max-width: 100%;
    overflow: scroll;
    &::-webkit-scrollbar {
    display: none;
  }
  }
}

.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
