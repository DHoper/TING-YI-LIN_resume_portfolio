<script setup>
import CategoryBlock from '../components/Item/CategoryBlock.vue';
import AsideText from '../components/Item/AsideText.vue';
import CopyBlock from '../components/Item/CopyBlock.vue';
</script>

<script>
export default {
    data() {
        return {
            paragraph1: "邀您體驗精采絕倫的卓越品質，享受震撼感官的卓越絕妙感受。",
            paragraph2: "升級至最頂級的音箱，每一個構造都絕頂精妙，帶給您最為卓越的撼人音質。"
        }
    },
    components: {
        CategoryBlock,
        AsideText,
        CopyBlock,
    }
}
</script>

<template>
    <div id="banner">
        <div class="backImg">
            <AsideText :showNew=true h1="XX99 Mark II" h2="Headphones" :paragraph="paragraph1"
                buttonBackgroundColor="#D87D4A" :buttonLink="{path: `/product/641351d1113d92424f8f9cdc`}"/>
        </div>
    </div>
    <CategoryBlock />
    <div id="productDisplay">
        <div class="block1">
            <img src="/assets/home/desktop/pattern-circles.svg">
            <div class="backImg1"></div>
            <AsideText h1="ZX9" h2="SPEAKER" :paragraph="paragraph2" buttonBackgroundColor="#000000"
                buttonColor="#FFFFFF" :buttonLink="{path: `/product/641351d1113d92424f8f9cea`}"/>
        </div>
        <div class="block2">
            <div class="text">
                <h1>ZX7 SPEAKER</h1>
                <base-button color="black" :link="{path:`/product/641351d1113d92424f8f9ced`}"/>
            </div>
        </div>
        <div class="block3">
            <img src="/assets/home/desktop/image-earphones-yx1.jpg">
            <div class="textBlock">
                <h1>YX1   EARPHONES</h1>
                <base-button color="black" :link="{path:`/product/641351d1113d92424f8f9cd3`}"/>
            </div>
        </div>
    </div>
    <CopyBlock />
</template>

<style lang="scss" scoped>
#banner {
    background-color: #141414fa;
    position: relative;
    width: 100%;
    min-width: 1440px;
    // margin: auto;
    // margin-top: -3.5%;
    --textH1: 4.5rem;
    --textP: 1rem;
    --textMargin: 17.5% 0 0 0;
    --textHeight: 100%;
    --textWidth: 70%;

    .backImg {
        width: 70%;
        width: 75rem;
        margin: auto;
        padding-top: 1px;
    padding-bottom: 10rem;
    background-image: url('/assets/home/desktop/image-hero.jpg');
    background-position: 7rem 0;
    background-repeat: no-repeat;
    background-size: contain;
    }
}

#productDisplay {
    position: relative;
    width: 70%;
    width: 75rem;
    margin: 0 auto 5% auto;

    & div,img {
        border-radius:.5rem;
    }

    .block1 {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #D87D4A;
        padding-left: 10%;
        // height: ;
        height: 35rem;
        overflow: hidden;
        --textH1: 3.8rem;
        --textP: 1rem;
        --textMargin: 5% 0 0 0;
        --textPadding: 0% 0 0 10%;
        --textWidth: 35%;
        --textLineHeight: 2.1rem;

        &>img {
            position: absolute;
            top: 0;
            left: 0;
        }

        .backImg1 {
            background-image: url('/assets/home/desktop/image-speaker-zx9.png');
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center .9rem;
            width: 410.23px;
            height: 80%;
            margin-top: auto;
            z-index: 1;
        }
    }

    .block2 {
        background-image: url('/assets/home/desktop/image-speaker-zx7.jpg');
        background-size: cover;
        width: 100%;
        height: 20rem;
        margin-top: 5%;
        padding-top: 1px;

        .text {
            margin: 7rem 0 0 9rem;

            h1 {
                font-weight: 700;
                font-size: 1.8rem;
                margin-bottom: 2.5rem;
                letter-spacing: .45rem;
            }
        }
    }

    .block3 {
        display: flex;
        justify-content: center;
        align-items: stretch;
        margin-top: 5%;

        &>img {
            width: 50%;
        }

        .textBlock {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 50%;
            background-color: #F1F1F1;
            margin-left: 2rem;
            padding-left: 10rem;

            h1 {
                font-weight: 700;
                font-size: 1.8rem;
                margin-bottom: 2.5rem;
                letter-spacing: .45rem;
            }
        }
    }
}
</style>
