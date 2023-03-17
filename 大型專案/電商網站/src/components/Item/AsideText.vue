<template>
    <div class="asideText" :style="{ color }">
        <div v-if="showNew">
            <span>新產品</span>
        </div>
        <h1>{{ h1 }}</h1>
        <h1>{{ h2 }}</h1>
        <p>{{ paragraph }}</p>
        <base-button :color="buttonColor" :backgroundColor="buttonBackgroundColor" :link="buttonLink" />
    </div>
</template>
  
<script>
export default {
    name: 'text-block',
    props: {
        showNew: {
            type: Boolean,
            default: false
        },
        h1: {
            type: String,
            required: true
        },
        h2: {
            type: String,
        },
        paragraph: {
            type: String,
            required: true
        },
        buttonColor: {
            type: String,
        },
        color: {
            type: String,
        },
        buttonBackgroundColor: {
            type: String,
        },
        buttonLink: {
            type: Object,
        }
    }
}
</script>
<style lang="scss" scoped>
.asideText {
    display: flex;
    flex-direction: column;
    width: var(--textWidth, unset);
    height: var(--textHeight, unset);
    color: #FFFFFF;
    z-index: 1;
    margin: var(--textMargin);
    padding: var(--textPadding);

    span {
        display: block;
        font-size: 1.4rem;
        letter-spacing: 1rem;
        color: #ffffffc9;
        margin-bottom: 2%;
    }

    h1 {
        font-size: var(--textH1);
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: .5rem;
        margin-bottom: .5rem;
    }

    p {
        font-size: var(--textP, 1rem);
        margin: var(--textPMargin, 5% 0);
        letter-spacing: .2rem;
        line-height: var(--textLineHeight);
        opacity: .6;

    }
}
</style>