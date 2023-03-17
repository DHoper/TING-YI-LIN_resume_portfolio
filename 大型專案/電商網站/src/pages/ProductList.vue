<script setup>
import CategoryBlock from '../components/Item/CategoryBlock.vue';
import AsideText from '../components/Item/AsideText.vue';
import CopyBlock from '../components/Item/CopyBlock.vue';
</script>

<template>
    <div class="bannerH1">{{ category }}</div>
    <ul>
        <li v-for="(product, index) in products" :key="index" :class="`productList${index}`">
            <div class="imgBlock" :style="{ 'background-image': 'url(' + product.image + ')' }"></div>
            <div class="textBlock">
                <AsideText :h1="product.name[0]" :h2="product.name[1]"
                    :paragraph="product.introduction + '\n' + product.introduction" buttonBackgroundColor="#D87D4A"
                    buttonColor="#FFFFFF" :buttonLink="{ path: `/product/${product._id}` }" />
            </div>
        </li>
    </ul>
    <CategoryBlock />
    <CopyBlock />
</template>

<script>
import { getProducts } from '../router.js';

export default {
    data() {
        return {
            products: [],
            screenWidth: window.innerWidth,
        };
    },
    methods: {
        async getData() {
            const response = await getProducts(this.category);
            this.products = response.reverse();
            this.products.forEach(element => {
                if (element.name.length > 15) {
                    const nameArray = element.name.split(" ");
                    if (nameArray.length == 3 && nameArray[0].length + nameArray[1].length > 10) {
                        const h1 = nameArray.slice(0, 1).join(" ");
                        const h2 = nameArray.slice(1).join(" ");
                        element.name = [h1, h2];
                    }
                    else {
                        const h1 = nameArray.slice(0, 2).join(" ");
                        const h2 = nameArray.slice(2).join(" ");
                        element.name = [h1, h2];
                    }
                } else {
                    element.name = [element.name];
                }
            });
        },
    },
    props: {
        category: {
            type: String,
            required: true,
        },
    },
    components: {
        CategoryBlock,
        AsideText,
        CopyBlock,
    },
    async created() {
        await new Promise(resolve => {
            window.addEventListener('load', resolve);
        });
        window.addEventListener('resize', () => {
            this.screenWidth = window.innerWidth;
        });
    },
    watch: {
        '$route': {
            handler() {  //handler: 當 $route 發生變化時被調用
                this.getData();
            },
            immediate: true  //可選的，設置為true時當組件被創建，handler 方法會被立即調用一次。
        }
    },
}
</script>
<style lang="scss" scoped>
.bannerH1 {
    width: 100%;
    padding: 4rem 0;
    font-size: 2.5rem;
    background-color: #141414fa;
    color: #ffffff;
    text-transform: uppercase;
    text-align: center;
    // margin-bottom: 0rem;
}

ul {
    width: 75rem;
    margin: auto;

    [class^="productList"] {

        height: 35rem;
        display: flex;
        margin-top: 11rem;

        .imgBlock {
            // background-image: url();
            background-size: contain;
            background-repeat: no-repeat;
            flex-shrink: 0;
            width: 33.75rem;
            border-radius: 6px;
        }

        .textBlock {
            width: 50%;
            // height: 100%;
            flex-grow: 1;

            .asideText {
                color: #000000;
                width: 100%;
                --textH1: 2.5rem;
                --textP: 1rem;
                --textLineHeight: 2rem;
                --textHeight: 100%;
                --textWidth: 70%;
                --textMargin: 15% 0 0 0;
                --textPMargin: 7.5% 0;
            }
        }
    }

    [class^="productList"]:nth-child(odd) {
        flex-direction: row;

        .textBlock {
            .asideText {
                --textPadding: 0 .5rem 0 4.5rem;
            }
        }
    }

    [class^="productList"]:nth-child(even) {
        flex-direction: row-reverse;

        .textBlock {
            .asideText {
                --textPadding: 0 4.5rem 0 .5rem;
            }
        }
    }
}
</style>

  