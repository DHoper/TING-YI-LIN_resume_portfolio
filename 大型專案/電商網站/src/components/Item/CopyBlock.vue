<template>
    <div id="copyBlock">
        <div class="textBlock">
            <h3>Bringing you the </h3>
            <h3><span>best</span> audio gear</h3>
            <p>
                Audiophile 位於紐約市中心，是出售高端耳罩式耳機、耳塞式耳機、音箱以及音頻配件的頂級商店。我們有一個精緻的大型陳列室和豪華演示室供您瀏覽和體驗我們的各種產品。光臨我們的商店、結識一些出色的人，他們使
                Audiophile 成為購買便攜式音頻設備的最佳場所。
            </p>
        </div>
        <img src="/assets/shared/desktop/image-best-gear.jpg">
    </div>
</template>
<script setup></script>
<style lang="scss" scoped>
#copyBlock {
    margin: auto;
    width: 75rem;
    display: flex;
    margin-top: 10rem;
    padding-top: 1px;

    & div,
    img {
        border-radius: .5rem;
    }

    .textBlock {
        color: #000000;
        width: 50%;
        padding: 7.5rem 6.5rem 0 6.5rem;

        h3 {
            text-transform: uppercase;
            font-weight: 700;
            font-size: 2.7rem;
            line-height: 3rem;
            letter-spacing: .09rem;

            span {
                color: #D87D4A;
            }
        }

        p {
            margin-top: 3.5rem;
            font-weight: 500;
            font-size: 1rem;
            line-height: 1.85rem;
            letter-spacing: .09rem;
            color: #666565;
        }
    }

    &>img {
        width: 50%;
        pointer-events: none;
        user-select: none;
        margin-left: 2rem;
    }
}
</style>