<template>
    <button :style="{ backgroundColor, color }" @click="handleClick">
        <template v-if="link">
            <router-link :to="link">{{ text }}</router-link>
        </template>
        <template v-else>
            <a>{{ text }}</a>
        </template>
    </button>
</template>
  
<script>
export default {
    name: "CustomButton",
    props: {
        link: {
            type: Object,
            // required: true,
        },
        text: {
            type: String,
            default: "查看商品",
        },
        backgroundColor: {
            type: String,
            default: "#D87D4A",
        },
        color: {
            type: String,
            default: "#FFFFFF",
        },
    },
    methods: {
        handleClick() {
            this.$emit("click");  //向父組件傳遞click事件
        },
    },
};
</script>

<style lang="scss" scoped>
button {
    width: 10.5rem;
    height: 3rem;
    letter-spacing: .3rem;
    padding-left: .3rem;
    font-size: 0.95rem;
    font-weight: 700;
    transition: all .5s ease-in;
    border: none;

    &:hover {
        cursor: pointer;
        opacity: 0.9;
        border: #FFFFFF solid 1px;
        filter: brightness(1.1);
    }

    &:active {
        transform: scale(0.95);
        transition: all 0.2s linear;
    }

    a {
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
        ;
    }
}
</style>